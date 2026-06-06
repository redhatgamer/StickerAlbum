import './style.css'
import { TEAMS, TOTAL_STICKERS, GROUPS } from './teams.js'
import { loadOwned, saveOwned, stickerKey } from './storage.js'
import { auth, db, googleProvider } from './firebase.js'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore'

let owned = loadOwned()
let filterMode = 'all'
let groupView = false
let currentUser = null
let unsubSync = null

// reverse map: code → group label
const TEAM_GROUP = {}
Object.entries(GROUPS).forEach(([g, codes]) => codes.forEach(c => { TEAM_GROUP[c] = g }))

// ── cloud sync ────────────────────────────────────────────────────────────────

function cloudRef(uid) {
  return doc(db, 'users', uid, 'data', 'stickers')
}

async function pushToCloud(data) {
  if (!currentUser) return
  try {
    await setDoc(cloudRef(currentUser.uid), { owned: data })
  } catch (e) {
    console.error('Cloud sync failed', e)
  }
}

function persistOwned() {
  saveOwned(owned)
  pushToCloud(owned)
}

function startSync(uid) {
  if (unsubSync) unsubSync()
  unsubSync = onSnapshot(cloudRef(uid), snap => {
    if (snap.exists()) {
      const data = snap.data().owned || {}
      owned = data
      saveOwned(data)
      updateStats()
      render()
    }
  }, err => console.error('Sync error', err))
}

function stopSync() {
  if (unsubSync) { unsubSync(); unsubSync = null }
}

// ── helpers ──────────────────────────────────────────────────────────────────

function teamOwned(team) {
  return team.stickers.filter(s => owned[stickerKey(team.code, s.n)]).length
}

function totalOwned() {
  return Object.keys(owned).filter(k => owned[k]).length
}

function teamMatchesFilter(team) {
  const have = teamOwned(team), total = team.stickers.length
  if (filterMode === 'complete') return have === total
  if (filterMode === 'incomplete') return have > 0 && have < total
  if (filterMode === 'none') return have === 0
  return true
}

// ── stats & progress ─────────────────────────────────────────────────────────

function updateStats() {
  const have = totalOwned()
  const pct = Math.round((have / TOTAL_STICKERS) * 100)
  document.getElementById('s-have').textContent = have
  document.getElementById('s-need').textContent = TOTAL_STICKERS - have
  document.getElementById('s-pct').textContent = pct + '%'
  document.getElementById('global-bar').style.width = pct + '%'
}

// ── team card ─────────────────────────────────────────────────────────────────

function buildTeamCard(team) {
  const have = teamOwned(team)
  const total = team.stickers.length
  const pct = Math.round((have / total) * 100)

  const card = document.createElement('div')
  card.className = 'team-card'

  const hdr = document.createElement('div')
  hdr.className = 'team-header'
  hdr.setAttribute('role', 'button')
  hdr.setAttribute('aria-label', `Open ${team.name} sticker album`)
  hdr.innerHTML = `
    <div class="team-flag">${team.flag}</div>
    <div class="team-info">
      <div class="team-name">${team.name}</div>
      <div class="team-code">${team.code} &middot; ${have}/${total}</div>
    </div>
    <div class="team-progress">
      <div class="mini-bar"><div class="mini-bar-fill" style="width:${pct}%"></div></div>
    </div>
    <i class="ti ti-layout-grid-add team-open-icon" aria-hidden="true"></i>
  `
  hdr.addEventListener('click', () => openStickerModal(team))
  card.appendChild(hdr)
  return card
}

// ── render ────────────────────────────────────────────────────────────────────

function render() {
  const search = document.getElementById('search').value.toLowerCase().trim()
  const container = document.getElementById('teams-container')
  container.innerHTML = ''

  const filtered = TEAMS
    .filter(t => t.name.toLowerCase().includes(search) || t.code.toLowerCase().includes(search))
    .filter(teamMatchesFilter)

  if (!filtered.length) {
    container.innerHTML = '<div class="empty-msg">No teams match your filter.</div>'
    updateStats()
    return
  }

  if (groupView) {
    const filteredCodes = new Set(filtered.map(t => t.code))
    const teamByCode = Object.fromEntries(filtered.map(t => [t.code, t]))

    Object.entries(GROUPS).forEach(([groupName, codes]) => {
      const groupTeams = codes.map(c => teamByCode[c]).filter(Boolean)
      if (!groupTeams.length) return

      const section = document.createElement('div')
      section.className = 'group-section'
      const gh = document.createElement('div')
      gh.className = 'group-header'
      gh.textContent = groupName === 'Special' ? '★ Special' : `Group ${groupName}`
      section.appendChild(gh)
      const list = document.createElement('div')
      list.className = 'teams-list'
      groupTeams.forEach(team => list.appendChild(buildTeamCard(team)))
      section.appendChild(list)
      container.appendChild(section)
    })
  } else {
    const list = document.createElement('div')
    list.className = 'teams-list'
    filtered.forEach(team => list.appendChild(buildTeamCard(team)))
    container.appendChild(list)
  }

  updateStats()
}

// ── sticker modal ─────────────────────────────────────────────────────────────

function openStickerModal(team) {
  const overlay = document.createElement('div')
  overlay.className = 'modal-overlay'
  const modal = document.createElement('div')
  modal.className = 'album-modal'

  function close() {
    overlay.remove()
    document.removeEventListener('keydown', handleKey)
  }
  function handleKey(e) { if (e.key === 'Escape') close() }

  function renderModalContent() {
    const have = teamOwned(team)
    const total = team.stickers.length
    const pct = Math.round((have / total) * 100)

    modal.innerHTML = `
      <div class="album-modal-header">
        <div class="album-modal-team-info">
          <span class="album-modal-flag">${team.flag}</span>
          <div>
            <div class="album-modal-name">${team.name}</div>
            <div class="album-modal-meta">${team.code} &nbsp;·&nbsp; ${have} / ${total} &nbsp;·&nbsp; ${pct}%</div>
          </div>
        </div>
        <button class="album-close-btn" aria-label="Close">&times;</button>
      </div>
      <div class="album-progress-wrap">
        <div class="album-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="album-sticker-grid"></div>
      <div class="album-modal-footer">
        <button class="album-action-btn album-clear-all">Clear all</button>
        <button class="album-action-btn album-mark-all">Mark all collected</button>
      </div>
    `

    const grid = modal.querySelector('.album-sticker-grid')
    team.stickers.forEach(s => {
      const k = stickerKey(team.code, s.n)
      const hasIt = !!owned[k]
      const el = document.createElement('div')
      el.className = 'album-sticker' + (hasIt ? ' have' : '') + (s.foil ? ' foil' : '')
      el.setAttribute('role', 'checkbox')
      el.setAttribute('aria-checked', String(hasIt))
      el.setAttribute('aria-label', `${team.code} ${s.n} ${s.t}`)
      el.innerHTML = `
        <div class="album-sticker-inner">
          ${s.foil ? '<div class="album-foil-badge">✦</div>' : ''}
          ${hasIt ? '<div class="album-check"><i class="ti ti-check"></i></div>' : ''}
          <div class="album-sticker-num">${team.code}<br>${s.n}</div>
          <div class="album-sticker-type">${s.t}</div>
        </div>
      `
      el.addEventListener('click', () => {
        if (owned[k]) delete owned[k]
        else owned[k] = true
        persistOwned()
        renderModalContent()
        updateStats()
        render()
      })
      grid.appendChild(el)
    })

    modal.querySelector('.album-close-btn').addEventListener('click', close)
    modal.querySelector('.album-mark-all').addEventListener('click', () => {
      team.stickers.forEach(s => { owned[stickerKey(team.code, s.n)] = true })
      persistOwned()
      renderModalContent()
      updateStats()
      render()
    })
    modal.querySelector('.album-clear-all').addEventListener('click', () => {
      team.stickers.forEach(s => { delete owned[stickerKey(team.code, s.n)] })
      persistOwned()
      renderModalContent()
      updateStats()
      render()
    })
  }

  renderModalContent()
  overlay.appendChild(modal)
  overlay.addEventListener('click', e => { if (e.target === overlay) close() })
  document.addEventListener('keydown', handleKey)
  document.body.appendChild(overlay)
}

// ── reset ─────────────────────────────────────────────────────────────────────

function showResetConfirm() {
  const overlay = document.createElement('div')
  overlay.className = 'confirm-overlay'
  overlay.innerHTML = `
    <div class="confirm-box">
      <h3>Reset all progress?</h3>
      <p>This will clear all your sticker data. This cannot be undone.</p>
      <div class="confirm-btns">
        <button class="btn-cancel">Cancel</button>
        <button class="btn-confirm">Reset</button>
      </div>
    </div>
  `
  overlay.querySelector('.btn-cancel').addEventListener('click', () => overlay.remove())
  overlay.querySelector('.btn-confirm').addEventListener('click', () => {
    owned = {}
    saveOwned(owned)
    overlay.remove()
    render()
  })
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
  document.body.appendChild(overlay)
}

// ── bootstrap ─────────────────────────────────────────────────────────────────

function bootstrap() {
  document.getElementById('app').innerHTML = `
    <header class="header">
      <div class="header-inner">
        <div class="header-top">
          <div>
            <div class="header-title">Panini World Cup 2026 Stickers</div>
            <div class="header-sub">Panini official · ${TOTAL_STICKERS} stickers · 48 teams</div>
          </div>
          <div class="header-actions">
            <button class="reset-btn" id="reset-btn" aria-label="Reset all progress">Reset</button>
            <div id="auth-section"></div>
          </div>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" id="global-bar" style="width:0%"></div>
        </div>
      </div>
    </header>

    <div class="app-body">
      <aside class="sidebar">
        <div class="stats-row">
          <div class="stat-card"><div class="stat-val" id="s-have">0</div><div class="stat-lbl">collected</div></div>
          <div class="stat-card"><div class="stat-val" id="s-need">${TOTAL_STICKERS}</div><div class="stat-lbl">missing</div></div>
          <div class="stat-card"><div class="stat-val" id="s-pct">0%</div><div class="stat-lbl">complete</div></div>
        </div>
        <div class="sidebar-section-label">Filter</div>
        <div class="search-wrap">
          <input type="search" id="search" placeholder="Search team or code…" autocomplete="off" />
        </div>
        <div class="filter-row">
          <div class="fchip active" data-f="all">All</div>
          <div class="fchip" data-f="incomplete">Incomplete</div>
          <div class="fchip" data-f="complete">Complete</div>
          <div class="fchip" data-f="none">Not started</div>
        </div>
        <div class="sidebar-divider"></div>
        <div class="sidebar-section-label">View</div>
        <div class="view-toggle-row">
          <button class="view-toggle-btn active" data-v="list"><i class="ti ti-list"></i> List</button>
          <button class="view-toggle-btn" data-v="group"><i class="ti ti-layout-grid"></i> By Group</button>
        </div>
      </aside>
      <div class="main-content">
        <div id="teams-container"></div>
      </div>
    </div>
  `

  document.getElementById('search').addEventListener('input', render)

  document.querySelectorAll('.fchip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.fchip').forEach(c => c.classList.remove('active'))
      chip.classList.add('active')
      filterMode = chip.dataset.f
      render()
    })
  })

  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      groupView = btn.dataset.v === 'group'
      render()
    })
  })

  document.getElementById('reset-btn').addEventListener('click', showResetConfirm)

  updateAuthUI()
  render()
}

bootstrap()

onAuthStateChanged(auth, async user => {
  currentUser = user
  if (user) {
    try {
      const snap = await getDoc(cloudRef(user.uid))
      if (snap.exists()) {
        owned = snap.data().owned || {}
        saveOwned(owned)
      } else if (Object.keys(owned).length > 0) {
        await pushToCloud(owned)
      }
    } catch (e) {
      console.error('Failed to load cloud data', e)
    }
    startSync(user.uid)
  } else {
    stopSync()
    owned = loadOwned()
  }
  updateAuthUI()
  updateStats()
  render()
})

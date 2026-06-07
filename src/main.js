import './style.css'
import { TEAMS, TOTAL_STICKERS, GROUPS } from './teams.js'
import { loadOwned, saveOwned, stickerKey, loadProStatus, saveProStatus } from './storage.js'
import { MATCHES, TEAM_NAMES, TEAM_ISO, flagImg } from './schedule.js'
import { auth, db, googleProvider, PRO_COLORS, PRO_PRICE } from './firebase.js'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore'

let owned = loadOwned()
let filterMode = 'all'
let groupView = true
let currentUser = null
let unsubSync = null
let currentView = 'stickers'  // 'stickers' or 'schedule'
let proStatus = loadProStatus()  // { purchased: bool, purchaseDate: date, uid: string }

// Debounce state for cloud sync
let cloudSyncPending = false
let cloudSyncTimeout = null
const CLOUD_SYNC_DELAY = 300  // ms - batch updates within 300ms

// reverse map: code → group label
const TEAM_GROUP = {}
Object.entries(GROUPS).forEach(([g, codes]) => codes.forEach(c => { TEAM_GROUP[c] = g }))

// ── cloud sync ────────────────────────────────────────────────────────────────

function cloudRef(uid) {
  return doc(db, 'users', uid, 'data', 'stickers')
}

function proRef(uid) {
  return doc(db, 'users', uid, 'data', 'pro')
}

async function pushToCloud(data) {
  if (!currentUser) return
  try {
    await setDoc(cloudRef(currentUser.uid), { owned: data })
  } catch (e) {
    console.error('Cloud sync failed', e)
  }
}

async function pushProStatusToCloud() {
  if (!currentUser) return
  try {
    await setDoc(proRef(currentUser.uid), { ...proStatus, uid: currentUser.uid })
  } catch (e) {
    console.error('Pro status sync failed', e)
  }
}

function persistOwned() {
  saveOwned(owned)
  // Debounce cloud sync - batch multiple updates
  if (cloudSyncTimeout) clearTimeout(cloudSyncTimeout)
  cloudSyncPending = true
  cloudSyncTimeout = setTimeout(() => {
    pushToCloud(owned)
    cloudSyncPending = false
  }, CLOUD_SYNC_DELAY)
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
  
  // Also sync pro status
  onSnapshot(proRef(uid), snap => {
    if (snap.exists()) {
      const data = snap.data()
      proStatus = { purchased: data.purchased, purchaseDate: data.purchaseDate }
      saveProStatus(proStatus)
      updateAuthUI()
    }
  }, err => console.error('Pro sync error', err))
}

function stopSync() {
  if (unsubSync) { unsubSync(); unsubSync = null }
}

// ── helpers ──────────────────────────────────────────────────────────────────

function teamOwned(team) {
  return team.stickers.filter(s => owned[stickerKey(team.code, s.n)] && owned[stickerKey(team.code, s.n)] > 0).length
}

function totalOwned() {
  // For non-pro: count unique stickers
  // For pro: count only the first copy of each sticker as collected
  if (proStatus.purchased) {
    return Object.keys(owned).filter(k => owned[k] > 0).length
  }
  return Object.keys(owned).filter(k => owned[k]).length
}

function totalDuplicates() {
  // For pro: count all copies beyond the first one
  if (!proStatus.purchased) return 0
  return Object.keys(owned).reduce((sum, k) => {
    const qty = owned[k] || 0
    return sum + Math.max(0, qty - 1)
  }, 0)
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
  const dupes = totalDuplicates()
  const pct = Math.round((have / TOTAL_STICKERS) * 100)
  document.getElementById('s-have').textContent = have
  document.getElementById('s-need').textContent = TOTAL_STICKERS - have
  document.getElementById('s-pct').textContent = pct + '%'
  const dupeEl = document.getElementById('s-dupes')
  if (dupeEl) dupeEl.textContent = dupes
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
    <div class="team-flag">${flagImg(team.code, 32)}</div>
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
  container.classList.remove('schedule-view')
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

// ── schedule ───────────────────────────────────────────────────────────────────

function renderSchedule() {
  const container = document.getElementById('teams-container')
  container.classList.add('schedule-view')
  container.innerHTML = ''

  const now = new Date()
  const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone

  const matchesByDate = {}
  MATCHES.forEach(m => {
    const d = new Date(m.date).toLocaleDateString('en-US')
    if (!matchesByDate[d]) matchesByDate[d] = []
    matchesByDate[d].push(m)
  })

  const sortedDates = Object.keys(matchesByDate).sort()

  sortedDates.forEach(dateStr => {
    const section = document.createElement('div')
    section.className = 'schedule-date-section'

    const dateHeader = document.createElement('div')
    dateHeader.className = 'schedule-date-header'
    dateHeader.textContent = new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
    section.appendChild(dateHeader)

    const matchList = document.createElement('div')
    matchList.className = 'schedule-match-list'

    matchesByDate[dateStr].forEach(m => {
      const utcDate = new Date(m.date)
      const localDate = new Date(utcDate.toLocaleString('en-US', { timeZone: userTz }))

      const match = document.createElement('div')
      match.className = 'schedule-match-card'

      const homeTeam = m.home.length === 2 ? TEAM_NAMES[m.home] || m.home : m.home
      const awayTeam = m.away.length === 2 ? TEAM_NAMES[m.away] || m.away : m.away
      const homeFlag = flagImg(m.home, 24)
      const awayFlag = flagImg(m.away, 24)

      const timeStr = localDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })

      match.innerHTML = `
        <div class="match-time">${timeStr}</div>
        <div class="match-teams">
          <div class="match-team">
            <span class="match-flag">${homeFlag}</span>
            <span class="match-name">${homeTeam}</span>
          </div>
          <div class="match-vs">vs</div>
          <div class="match-team">
            <span class="match-flag">${awayFlag}</span>
            <span class="match-name">${awayTeam}</span>
          </div>
        </div>
        <div class="match-stage">${m.stage}</div>
      `
      matchList.appendChild(match)
    })

    section.appendChild(matchList)
    container.appendChild(section)
  })
}

// ── sticker modal ─────────────────────────────────────────────────────────

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
          <span class="album-modal-flag">${flagImg(team.code, 48)}</span>
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
      const quantity = owned[k] || 0
      const hasIt = quantity > 0
      const el = document.createElement('div')
      el.className = 'album-sticker' + (hasIt ? ' have' : '') + (s.foil ? ' foil' : '')
      el.setAttribute('role', proStatus.purchased ? 'button' : 'checkbox')
      el.setAttribute('aria-checked', String(hasIt))
      el.setAttribute('aria-label', `${team.code} ${s.n} ${s.t}`)
      
      // Show parallel colors for pro users
      let parallelsHtml = ''
      if (proStatus.purchased) {
        parallelsHtml = '<div class="album-sticker-parallels">'
        PRO_COLORS.forEach(color => {
          const colorKey = stickerKey(team.code, s.n, color)
          const count = owned[colorKey] ? 1 : 0
          const colorBg = {
            blue: '#3b82f6',
            red: '#ef4444',
            purple: '#a855f7',
            green: '#22c55e',
            black: '#1f2937'
          }[color]
          parallelsHtml += `<div class="parallel-dot" data-color="${color}" style="background-color: ${colorBg}; opacity: ${count > 0 ? 1 : 0.2};" title="${color}"></div>`
        })
        parallelsHtml += '</div>'
      }
      
      // Show quantity badge for pro users
      let quantityBadge = ''
      if (proStatus.purchased && quantity > 0) {
        quantityBadge = `<div class="album-quantity-badge">${quantity}</div>`
      }
      
      el.innerHTML = `
        <div class="album-sticker-inner">
          ${s.foil ? '<div class="album-foil-badge">✦</div>' : ''}
          ${quantityBadge}
          ${hasIt ? '<div class="album-check"><i class="ti ti-check"></i></div>' : ''}
          ${s.img ? `<img src="${s.img}" alt="${s.t}" class="album-sticker-img" />` : `<div class="album-sticker-num">${team.code}<br>${s.n}</div>`}
          <div class="album-sticker-type">${s.t}</div>
          ${parallelsHtml}
        </div>
      `
      
      el.addEventListener('click', (e) => {
        // If pro and clicking on a parallel color dot
        if (proStatus.purchased && e.target.classList.contains('parallel-dot')) {
          const color = e.target.dataset.color
          const colorKey = stickerKey(team.code, s.n, color)
          // Open quantity picker for the color variant
          showQuantityPicker(team, s, colorKey, color)
        } else if (proStatus.purchased) {
          // Open quantity picker for pro users
          showQuantityPicker(team, s, k)
        } else {
          // Standard toggle for non-pro
          if (owned[k]) delete owned[k]
          else owned[k] = true
          persistOwned()
          renderModalContent()
          updateStats()
          render()
        }
      })
      grid.appendChild(el)
    })

    modal.querySelector('.album-close-btn').addEventListener('click', close)
    modal.querySelector('.album-mark-all').addEventListener('click', () => {
      team.stickers.forEach(s => { owned[stickerKey(team.code, s.n)] = 1 })
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

  function showQuantityPicker(team, sticker, key, color) {
    const currentQty = owned[key] || 0
    const quantityOverlay = document.createElement('div')
    quantityOverlay.className = 'modal-overlay'
    const colorLabel = color ? ` (${color.toUpperCase()})` : ''
    quantityOverlay.innerHTML = `
      <div class="quantity-picker-modal">
        <div class="quantity-picker-title">${team.code} #${sticker.n} - ${sticker.t}${colorLabel}</div>
        <div class="quantity-picker-content">
          <div class="quantity-display">
            <span class="quantity-label">Quantity:</span>
            <span class="quantity-value">${currentQty}</span>
          </div>
          <div class="quantity-controls">
            <button class="qty-btn qty-minus">−</button>
            <button class="qty-btn qty-plus">+</button>
          </div>
          <div class="quantity-presets">
            <button class="qty-preset" data-qty="1">1</button>
            <button class="qty-preset" data-qty="5">5</button>
            <button class="qty-preset" data-qty="10">10</button>
            <button class="qty-preset" data-qty="20">20</button>
            <button class="qty-preset" data-qty="50">50</button>
            <button class="qty-preset" data-qty="0">Clear</button>
          </div>
        </div>
        <div class="quantity-picker-footer">
          <button class="qty-action-btn qty-cancel">Cancel</button>
          <button class="qty-action-btn qty-confirm">Confirm</button>
        </div>
      </div>
    `
    
    let newQty = currentQty
    const qtyValue = quantityOverlay.querySelector('.quantity-value')
    const minusBtn = quantityOverlay.querySelector('.qty-minus')
    const plusBtn = quantityOverlay.querySelector('.qty-plus')
    
    const updateDisplay = (val) => {
      newQty = Math.max(0, Math.min(999, parseInt(val) || 0))
      qtyValue.textContent = newQty
    }
    
    // Plus button: increment by 1
    plusBtn.addEventListener('click', () => {
      updateDisplay(newQty + 1)
    })
    
    // Minus button: decrement by 1
    minusBtn.addEventListener('click', () => {
      updateDisplay(newQty - 1)
    })
    
    // Preset buttons: set exact value
    quantityOverlay.querySelectorAll('.qty-preset').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.qty)
        updateDisplay(val)
      })
    })
    
    quantityOverlay.querySelector('.qty-confirm').addEventListener('click', () => {
      if (newQty > 0) {
        owned[key] = newQty
      } else {
        delete owned[key]
      }
      persistOwned()
      quantityOverlay.remove()
      renderModalContent()
      updateStats()
      render()
    })
    
    quantityOverlay.querySelector('.qty-cancel').addEventListener('click', () => {
      quantityOverlay.remove()
    })
    
    quantityOverlay.addEventListener('click', e => {
      if (e.target === quantityOverlay) quantityOverlay.remove()
    })
    
    document.body.appendChild(quantityOverlay)
  }

  renderModalContent()
  overlay.appendChild(modal)
  overlay.addEventListener('click', e => { if (e.target === overlay) close() })
  document.addEventListener('keydown', handleKey)
  document.body.appendChild(overlay)
}

// ── auth UI ───────────────────────────────────────────────────────────────────

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function showProPurchaseConfirm() {
  const overlay = document.createElement('div')
  overlay.className = 'confirm-overlay'
  overlay.innerHTML = `
    <div class="confirm-box pro-purchase">
      <h3>Unlock Pro Features? 💎</h3>
      <p>Collect parallel variants in 5 colors:</p>
      <div class="pro-colors-preview">
        <div class="color-swatch" style="background: #3b82f6;" title="Blue"></div>
        <div class="color-swatch" style="background: #ef4444;" title="Red"></div>
        <div class="color-swatch" style="background: #a855f7;" title="Purple"></div>
        <div class="color-swatch" style="background: #22c55e;" title="Green"></div>
        <div class="color-swatch" style="background: #1f2937;" title="Black"></div>
      </div>
      <p style="margin-top: 16px; font-weight: bold;">One-time purchase: $${PRO_PRICE.toFixed(2)}</p>
      <div class="confirm-btns">
        <button class="btn-cancel">Cancel</button>
        <button class="btn-confirm">Purchase Pro</button>
      </div>
    </div>
  `
  overlay.querySelector('.btn-cancel').addEventListener('click', () => overlay.remove())
  overlay.querySelector('.btn-confirm').addEventListener('click', async () => {
    // In production, this would integrate with Stripe or another payment processor
    // For now, we'll simulate a successful purchase
    proStatus = {
      purchased: true,
      purchaseDate: new Date().toISOString()
    }
    saveProStatus(proStatus)
    await pushProStatusToCloud()
    overlay.remove()
    updateAuthUI()
    render()
  })
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
  document.body.appendChild(overlay)
}

function updateAuthUI() {
  const el = document.getElementById('auth-section')
  if (!el) return
  if (currentUser) {
    el.innerHTML = `
      <div class="user-pill">
        ${currentUser.photoURL
          ? `<img src="${escapeHtml(currentUser.photoURL)}" class="user-avatar" referrerpolicy="no-referrer" alt="">`
          : '<span class="user-avatar-placeholder"><i class="ti ti-user"></i></span>'}
        <span class="user-name">${escapeHtml((currentUser.displayName || 'User').split(' ')[0])}</span>
        ${proStatus.purchased ? '<span class="pro-badge">PRO</span>' : '<button class="pro-btn" id="pro-btn" title="Unlock pro features">Unlock Pro</button>'}
        <button class="sign-out-btn" id="sign-out-btn" title="Sign out"><i class="ti ti-logout"></i></button>
      </div>
    `
    if (!proStatus.purchased) {
      document.getElementById('pro-btn').addEventListener('click', showProPurchaseConfirm)
    }
    document.getElementById('sign-out-btn').addEventListener('click', () => signOut(auth))
  } else {
    el.innerHTML = `
      <button class="sign-in-btn" id="sign-in-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Sign in with Google
      </button>
    `
    document.getElementById('sign-in-btn').addEventListener('click', async () => {
      try {
        await signInWithPopup(auth, googleProvider)
      } catch (e) {
        if (e.code !== 'auth/popup-closed-by-user') console.error('Sign in error', e)
      }
    })
  }
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
    pushToCloud(owned)  // Also clear cloud data
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
        <div class="header-tabs">
          <button class="header-tab active" data-tab="stickers"><i class="ti ti-album"></i> Stickers</button>
          <button class="header-tab" data-tab="schedule"><i class="ti ti-calendar"></i> Schedule</button>
        </div>
        <div class="header-top">
          <div>
            <div class="header-title">Jogo</div>
            <div class="header-sub">${TOTAL_STICKERS} stickers · 48 teams</div>
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
          <div class="stat-card"><div class="stat-val" id="s-dupes">0</div><div class="stat-lbl">duplicates</div></div>
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
          <button class="view-toggle-btn" data-v="list"><i class="ti ti-list"></i> List</button>
          <button class="view-toggle-btn active" data-v="group"><i class="ti ti-layout-grid"></i> By Group</button>
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

  document.querySelectorAll('[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('[data-tab]').forEach(t => t.classList.remove('active'))
      tab.classList.add('active')
      currentView = tab.dataset.tab
      const sidebar = document.querySelector('.sidebar')
      if (currentView === 'schedule') {
        sidebar.classList.add('hidden')
        renderSchedule()
      } else {
        document.getElementById('search').value = ''
        sidebar.classList.remove('hidden')
        render()
      }
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
      // Load stickers
      const stickerSnap = await getDoc(cloudRef(user.uid))
      if (stickerSnap.exists()) {
        owned = stickerSnap.data().owned || {}
        saveOwned(owned)
      } else if (Object.keys(owned).length > 0) {
        await pushToCloud(owned)
      }
      
      // Load pro status
      const proSnap = await getDoc(proRef(user.uid))
      if (proSnap.exists()) {
        proStatus = { purchased: proSnap.data().purchased, purchaseDate: proSnap.data().purchaseDate }
        saveProStatus(proStatus)
      }
    } catch (e) {
      console.error('Failed to load cloud data', e)
    }
    startSync(user.uid)
  } else {
    stopSync()
    owned = {}
    saveOwned({})  // Clear localStorage on logout to prevent data leaking to next user
    proStatus = { purchased: false, purchaseDate: null }
  }
  updateAuthUI()
  updateStats()
  render()
})

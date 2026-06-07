const KEY = 'wc2026_stickers'
const PRO_KEY = 'wc2026_pro'

export function loadOwned() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveOwned(owned) {
  try {
    localStorage.setItem(KEY, JSON.stringify(owned))
  } catch {
    // storage full or unavailable
  }
}

export function stickerKey(code, n, color = null) {
  return color ? `${code}_${n}_${color}` : `${code}_${n}`
}

export function loadProStatus() {
  try {
    const raw = localStorage.getItem(PRO_KEY)
    return raw ? JSON.parse(raw) : { purchased: false, purchaseDate: null }
  } catch {
    return { purchased: false, purchaseDate: null }
  }
}

export function saveProStatus(status) {
  try {
    localStorage.setItem(PRO_KEY, JSON.stringify(status))
  } catch {
    // storage full or unavailable
  }
}

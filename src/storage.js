const KEY = 'wc2026_stickers'

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

export function stickerKey(code, n) {
  return `${code}_${n}`
}

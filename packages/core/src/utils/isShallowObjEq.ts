export function isShallowObjEq<T extends object>(v: T, o: T) {
  if (v === o) return true

  // Only objects can be shallowly (rather than strictly) equal
  if (
    typeof v !== 'object' ||
    typeof o !== 'object' ||
    v === null ||
    o === null
  ) {
    return false
  }

  for (const key in v) if (!(key in o) || v[key] !== o[key]) return false
  for (const key in o) if (!(key in v) || v[key] !== o[key]) return false

  return true
}

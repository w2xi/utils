export const toString = (val: any) => Object.prototype.toString.call(val)

export const hasOwnProperty = (val: any, key: string) => {
  if (val == null) {
    return false
  }
  return Object.prototype.hasOwnProperty.call(val, key)
}
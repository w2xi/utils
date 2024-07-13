/**
 * Extracts the values of a specified key from an array of objects.
 *
 * @param {Array<Record<string, any>>} val - The array of objects to extract values from.
 * @param {string} on - The key whose values need to be extracted.
 * @return {Array<any>} - An array of values corresponding to the specified key.
 */
export const column = <T extends Record<string, any>>(val: T[], on: keyof T): T[keyof T][] => {
  if (!Array.isArray(val)) {
    return []
  }
  return val.map(item => item[on])
}
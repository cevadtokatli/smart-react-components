/**
 * Clone the object.
 *
 * @param source
 */
export const clone = <T extends object>(obj: T): T => {
  const result: any = {}

  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (isObject(obj[i])) {
        result[i] = clone(obj[i] as object)
      } else {
        result[i] = obj[i]
      }
    }
  }

  return result as T
}

/**
 * Checks if item is a clonable object.
 *
 * @param item
 */
const isClonableObject = item => (
  typeof item === 'object'
  && item !== null
  && !(item instanceof RegExp)
)

/**
 * Check if item is an actual object.
 *
 * @param item
 */
export const isObject = item => (
  isClonableObject(item)
  && !Array.isArray(item)
)

/**
 * Merges two objects.
 *
 * @param source
 * @param target
 */
export const merge = <T extends object>(source: object, target: object): T => {
  const result = { ...source }

  for (const i in target) {
    if (target.hasOwnProperty(i)) {
      if (isObject(result[i]) && isObject(target[i])) {
        result[i] = merge(result[i], target[i])
      } else {
        result[i] = target[i]
      }
    }
  }

  return result as T
}

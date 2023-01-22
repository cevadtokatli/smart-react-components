import { Value } from '@smart-react-components/core/types'

/**
 * Takes a CSS number as JavaScript string or number.
 * Splits the given input in two as value and unit parts.
 * Provides a callback with value of the input.
 * Returns the returned value from the callback along with unit of the input.
 */
export const toCSSValue = (input: Value) => {
  let value: number
  let unit: string

  if (typeof input === 'number') {
    value = input
    unit = 'px'
  } else {
    value = Number(input.replace(/[A-z|%]+/, ''))
    unit = input.replace(/[\d|.]+/, '')
  }

  return callback => `${callback(value)}${unit}`
}

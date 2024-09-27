import Color from 'color'
import Theme from '../types/theme'

/**
 * Creates a color object by value.
 */
export const getColor = (value: string): Color<string> => {
  try {
    return Color(value)
  } catch (err) {
    return null
  }
}

/**
 * Gets font color by value.
 */
export const getFontColor = (value: string, theme: Theme): string => getColor(value).isDark() ? theme.$.color.dark.font : theme.$.color.light.font

/**
 * Mixes two colors.
 * If weight is a negative number, mixes value with white.
 * If weight is a positive number, mixes value with black.
 * Weight could be an three-length array. It applies different weight for red, green, and blue respectively.
 */
export const mix = (value: string, weight: number | number[]): string => {
  const weightList = typeof weight === 'number' ? [weight, weight, weight] : weight
  const rgb: string[] = []
  const secondary = getColor(value).hex().toString()

  for (let i = 0; i < 3; i++) {
    const primary = weightList[i] > 0 ? '#000000' : '#FFFFFF'
    weightList[i] = Math.abs(weightList[i])
    const startValue = i * 2 + 1
    const endValue = startValue + 2
    const valueByPrimary = parseInt(primary.substring(startValue, endValue), 16)
    const valueBySecondary = parseInt(secondary.substring(startValue, endValue), 16)
    let mixedValue = Math.floor(valueByPrimary * weightList[i] + valueBySecondary * (1 - weightList[i])).toString(16)
    if (mixedValue.length === 1) {
      mixedValue = `0${mixedValue}`
    }
    rgb.push(mixedValue)
  }

  return `#${rgb.join('')}`
}

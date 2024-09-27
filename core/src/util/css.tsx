import cssKeys from '../styled-props/css-keys'
import { Theme } from '../theme'
import { Breakpoint } from '../types/grid'
import { isObject } from './object'

const breakpoints = ['', 'Sm', 'Md', 'Lg', 'Xl']

const breakpointMap = {
  Sm: 'small',
  Md: 'medium',
  Lg: 'large',
  Xl: 'xlarge',
}

/**
 * Converts a SRC Styled prop to CSS property for it to get written in the Styled component CSS.
 * If value is CSS selector, it converts value's children to CSS properties and wraps them in the selector.
 *
 * If key has 'get' as prefix and its value is function, treats it as a getter function and fetches the CSS by calling the function for each given breakpoint.
 *
 * @param key - Styled prop name
 * @param props - Given Styled props
 * @param theme
 */
export const convertStyledPropToCSS = (key: string, props: any, theme: Theme): string => {
  const { cssInput, breakpoint } = extractBreakpointFromKey(key)
  let value = props[key]

  if (!cssInput) {
    if (key.startsWith('get') && typeof value === 'function') {
      let result = ''
      let propKey = key.replace(/^get/, '')
      propKey = propKey.substring(0, 1).toLowerCase() + propKey.substring(1)

      breakpoints.forEach(breakpointKey => {
        const prop = props[`${propKey}${breakpointKey}`]
        if (typeof prop !== 'undefined') {
          result += wrapCSSInMediaRule(value(prop, theme, breakpointKey, props), breakpointMap[breakpointKey], theme)
        }
      })

      return result
    }

    return null
  }

  let important = false

  if (Array.isArray(value)) {
    [value, important] = value
  }

  if (value === null) {
    return null
  }

  let css = ''

  if (isObject(value) && cssInput.startsWith('&')) {
    css = cssInput.replace('|', Object.keys(value).map(i => convertStyledPropToCSS(i, value, theme)).join(' '))
  } else if (!isObject(value) && !cssInput.startsWith('&')) {
    if (typeof value === 'number') {
      if (value !== 0) {
        value = `${value}px`
      }
    } else if (typeof value === 'string') {
      value.match(/((\$|!)[\S]+)|((\{|\[)[\S]+(\}|\]))/g)?.forEach(str => {
        if (
          str.startsWith('$')
          || (str.startsWith('{') && str.endsWith('}'))
        ) {
          const themeAttr = str.replace(/^\$(.*?)$/, '$1').replace(/\{(.*?)\}/, '$1')
          const themeAttrVal = themeAttr.split('.').reduce((a, b) => a?.[b], theme.$)
          if (typeof themeAttrVal !== 'undefined') {
            value = value.replace(str, themeAttrVal)
          }
        } else if (
          str.startsWith('!')
          || (str.startsWith('[') && str.endsWith(']'))
        ) {
          const paletteAttr = str.replace(/^!(.*?)$/, '$1').replace(/\[(.*?)\]/, '$1')
          let paletteAttrVal = paletteAttr.split('.').reduce((a, b) => (a as object)?.[b], theme.$.palette)
          if (typeof paletteAttrVal === 'object') {
            paletteAttrVal = paletteAttrVal.main
          }
          if (typeof paletteAttrVal !== 'undefined') {
            value = value.replace(str, paletteAttrVal)
          }
        }
      })
    } else {
      return null
    }

    if (important) {
      value = `${value} !important`
    }

    css = cssInput.split('|').map(i => `${i}:${value};`).join(' ')
  } else {
    return null
  }

  return wrapCSSInMediaRule(css, breakpoint, theme)
}

/**
 * Extracts breakpoint key out of the Styled prop name.
 *
 * @param key - Styled prop name
 * @returns - cssInput is CSS property or selector from cssKeys.
 */
const extractBreakpointFromKey = (key: string): { cssInput: string, breakpoint: Breakpoint } => {
  let cssInput = cssKeys[key]
  if (cssInput) {
    return {
      cssInput: cssKeys[key],
      breakpoint: null,
    }
  }

  cssInput = cssKeys[key.substring(0, key.length - 2)]
  const breakpoint = breakpointMap[key.substring(key.length - 2)]
  return {
    cssInput,
    breakpoint,
  }
}

/**
 * Wraps CSS in the media rule.
 *
 * @param css
 * @param breakpoint
 * @param theme
 */
const wrapCSSInMediaRule = (css: string, breakpoint: Breakpoint, theme: Theme) => {
  const width = theme.$.length.breakpoint[breakpoint]

  return typeof width !== 'undefined'
    ? `@media(min-width:${width}px) { ${css} }`
    : css
}

import Theme, { InputTheme } from '../types/theme'
import { isMobile } from '../util/dom'
import { clone, merge } from '../util/object'
import color from './color'
import cursor from './cursor'
import fontFamily from './font-family'
import fontSize from './font-size'
import fontWeight from './font-weight'
import i18n from './i18n'
import length from './length'
import media from './media'
import opacity from './opacity'
import createPaletteItem from './palette'
import radius from './radius'
import size from './size'
import transition from './transition'
import vars from './vars'
import zIndex from './z-index'

export { default as Theme } from '../types/theme'

const defaultTheme: Theme = {
  $: {
    color,
    cursor,
    fontFamily,
    fontSize,
    fontWeight,
    i18n,
    length,
    media,
    opacity,
    palette: {},
    radius,
    size,
    transition,
    vars,
    zIndex,
  },
}

const createTheme = (theme: InputTheme = {}, isDarkMode: boolean = false): Theme => {
  const result = merge<Theme>(defaultTheme, theme)

  result.$.vars.isDarkMode = isDarkMode
  result.$.vars.isMobile = isMobile

  result.$.color.dynamic = isDarkMode ? result.$.color.dark : result.$.color.light
  result.$.color['!dynamic'] = isDarkMode ? result.$.color.light : result.$.color.dark

  result.$.palette.primary = createPaletteItem(theme?.$?.palette?.primary ?? result.$.color.blue, result)
  result.$.palette.secondary = createPaletteItem(theme?.$?.palette?.secondary ?? result.$.color.gray700, result)
  result.$.palette.success = createPaletteItem(theme?.$?.palette?.success ?? {
    main: result.$.color.green,
    font: result.$.color.dark.font,
  }, result)
  result.$.palette.danger = createPaletteItem(theme?.$?.palette?.danger ?? result.$.color.red, result)
  result.$.palette.warning = createPaletteItem(theme?.$?.palette?.warning ?? result.$.color.yellow, result)
  result.$.palette.info = createPaletteItem(theme?.$?.palette?.info ?? result.$.color.cyan, result)
  result.$.palette.light = createPaletteItem(theme?.$?.palette?.light ?? {
    main: result.$.color.gray100,
    background: result.$.color.white,
    dark: '#F7FAFB',
    darker: '#F2F4F7',
    darkest: '#E9ECEF',
  }, result)
  result.$.palette.dark = createPaletteItem(theme?.$?.palette?.dark ?? {
    main: result.$.color.gray900,
    background: '#2B2D31',
  }, result)

  result.$.palette.dynamic = isDarkMode ? result.$.palette.dark : result.$.palette.light
  result.$.palette['!dynamic'] = isDarkMode ? result.$.palette.light : result.$.palette.dark

  return clone(result)
}

export default createTheme

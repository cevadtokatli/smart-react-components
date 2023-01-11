import Theme, { InputTheme } from '../types/theme'
import { merge } from '../util/object'
import color from './color'
import fontFamily from './font-family'
import fontSize from './font-size'
import fontWeight from './font-weight'
import i18n from './i18n'
import length from './length'
import opacity from './opacity'
import createPaletteItem from './palette'
import radius from './radius'
import size from './size'
import transition from './transition'
import zIndex from './z-index'

export { default as Theme } from '../types/theme'

const defaultTheme: Theme = {
  $: {
    color,
    fontFamily,
    fontSize,
    fontWeight,
    i18n,
    length,
    opacity,
    palette: {},
    radius,
    size,
    transition,
    zIndex,
  },
}

const createTheme = (theme: InputTheme = {}, isDarkMode: boolean = false): Theme => {
  const result = merge<Theme>(defaultTheme, theme)

  result.$.color.dynamic = isDarkMode ? result.$.color.dark : result.$.color.light
  result.$.color['!dynamic'] = isDarkMode ? result.$.color.light : result.$.color.dark

  result.$.palette.primary = createPaletteItem(theme?.$?.palette?.primary ?? result.$.color.blue, result)
  result.$.palette.secondary = createPaletteItem(theme?.$?.palette?.secondary ?? result.$.color.gray700, result)
  result.$.palette.success = createPaletteItem(theme?.$?.palette?.success ?? {
    main: result.$.color.green,
    font: result.$.color.light.font,
  }, result)
  result.$.palette.danger = createPaletteItem(theme?.$?.palette?.danger ?? result.$.color.red, result)
  result.$.palette.warning = createPaletteItem(theme?.$?.palette?.warning ?? result.$.color.yellow, result)
  result.$.palette.info = createPaletteItem(theme?.$?.palette?.info ?? result.$.color.cyan, result)
  result.$.palette.light = createPaletteItem(theme?.$?.palette?.light ?? {
    main: result.$.color.gray100,
    background: result.$.color.white,
  }, result)
  result.$.palette.dark = createPaletteItem(theme?.$?.palette?.dark ?? result.$.color.gray900, result)

  result.$.palette.dynamic = isDarkMode ? result.$.palette.dark : result.$.palette.light
  result.$.palette['!dynamic'] = isDarkMode ? result.$.palette.light : result.$.palette.dark

  return result
}

export default createTheme

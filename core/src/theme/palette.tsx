import { Partial } from '../types'
import Theme from '../types/theme'
import { InputPaletteItem, PaletteItem } from '../types/theme/palette'
import { getColor, getFontColor, mix } from '../util/color'

const createPaletteItem = (paletteItem: InputPaletteItem, theme: Theme): PaletteItem => {
  let result: Partial<PaletteItem> = {
    popover: {},
    progressBar: {},
  }

  if (typeof paletteItem === 'string') {
    result.main = paletteItem
  } else {
    result = {
      ...result,
      ...paletteItem,
    }

    if (!result.main) {
      console.error('Palette main color is missing...')
    }
  }

  const mainColor = getColor(result.main)

  result.background ||= result.main
  result.font ||= getFontColor(result.main, theme)
  result.shadow ||= mainColor.alpha(.5).rgb().toString()

  result.dark ||= mainColor.darken(.075).hex().toString()
  result.darker ||= mainColor.darken(.175).hex().toString()
  result.darkest ||= getColor(result.darker).darken(.075).hex().toString()

  result.light ||= mainColor.lighten(.075).hex().toString()
  result.lighter ||= mainColor.lighten(.175).hex().toString()
  result.lightest ||= getColor(result.lighter).lighten(.075).hex().toString()

  result.soft ||= mix(result.main, -.8)
  result.softFont ||= mix(result.main, .4)
  result.softDark ||= mix(result.main, -.72)
  result.softDarker ||= mix(result.main, -.65)
  result.softDarkest ||= mix(result.main, -.55)

  result.popover.background ||= theme.$.color.dynamic.background
  result.popover.border ||= theme.$.color.dynamic.accent
  result.popover.font ||= theme.$.color.dynamic.font
  result.popover.headerBackground ||= result.main
  result.popover.headerBorder ||= theme.$.vars.isDarkMode ? result.darker : result.lighter
  result.popover.headerFont ||= result.font
  result.popover.softHeaderBackground ||= result.soft
  result.popover.softHeaderBorder ||= result.softDarker
  result.popover.softHeaderFont ||= result.softFont

  result.progressBar.active ||= result.main
  result.progressBar.filledBackground ||= theme.$.color.dynamic.gray
  result.progressBar.font ||= result.font
  result.progressBar.nestedBackground ||= getColor(theme.$.color.light.background).alpha(.3).rgb().toString()

  const waveEffect = getColor(result.waveEffect ?? result.main)
  result.waveEffect = `radial-gradient(${waveEffect.alpha(.2).toString()} 0, ${waveEffect.alpha(.3).toString()} 40%, ${waveEffect.alpha(.4).toString()} 50%, ${waveEffect.alpha(.5).toString()} 60%, ${waveEffect.alpha(0).toString()} 70%)`

  return result as PaletteItem
}

export default createPaletteItem

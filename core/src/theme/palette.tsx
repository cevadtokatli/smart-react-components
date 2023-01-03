import Theme from '../types/theme'
import { InputPaletteItem, PaletteItem } from '../types/theme/palette'
import { getColor, getFontColor, mix } from '../util/color'

const createPaletteItem = (paletteItem: InputPaletteItem, theme: Theme): PaletteItem => {
  let result: Partial<PaletteItem> = {}

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

  return result as PaletteItem
}

export default createPaletteItem
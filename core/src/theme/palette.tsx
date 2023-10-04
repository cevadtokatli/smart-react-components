import { Partial } from '../types'
import Theme from '../types/theme'
import { InputPaletteItem, PaletteItem } from '../types/theme/palette'
import { getColor, getFontColor, mix } from '../util/color'

const createPaletteItem = (paletteItem: InputPaletteItem, theme: Theme): PaletteItem => {
  let result: Partial<PaletteItem> = {}

  if (typeof paletteItem === 'string') {
    result.main = paletteItem
  } else {
    result = {
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

  result.dark ||= mainColor.darken(.10).hex().toString()
  result.darker ||= getColor(result.dark).darken(.05).hex().toString()
  result.darkest ||= getColor(result.darker).darken(.05).hex().toString()

  result.light ||= mainColor.lighten(.10).hex().toString()
  result.lighter ||= getColor(result.light).lighten(.05).hex().toString()
  result.lightest ||= getColor(result.lighter).lighten(.05).hex().toString()

  result.dynamic = theme.$.vars.isDarkMode ? result.light : result.dark
  result.dynamicer = theme.$.vars.isDarkMode ? result.lighter : result.darker
  result.dynamicest = theme.$.vars.isDarkMode ? result.lightest : result.darkest

  if (theme.$.vars.isDarkMode) {
    result.soft ||= getColor(mix(result.main, .8)).lighten(.6).hex().toString()
    result.softFont ||= result.main
    result.softDynamic ||= getColor(result.soft).lighten(.25).hex().toString()
    result.softDynamicer ||= getColor(result.soft).lighten(.4).hex().toString()
    result.softDynamicest ||= getColor(result.soft).lighten(.5).hex().toString()
  } else {
    result.soft ||= mix(result.main, -.8)
    result.softFont ||= mix(result.main, .4)
    result.softDynamic ||= mix(result.main, -.72)
    result.softDynamicer ||= mix(result.main, -.65)
    result.softDynamicest ||= mix(result.main, -.55)
  }

  const waveEffect = getColor(result.waveEffect ?? result.main)
  result.waveEffect = `radial-gradient(${waveEffect.alpha(.2).toString()} 0, ${waveEffect.alpha(.3).toString()} 40%, ${waveEffect.alpha(.4).toString()} 50%, ${waveEffect.alpha(.5).toString()} 60%, ${waveEffect.alpha(0).toString()} 70%)`

  return result as PaletteItem
}

export default createPaletteItem

import { Nullable, PaletteProp } from '@smart-react-components/core/types'

/**
 * If waveEffectPalette is given returns it however if not, generates a default palette for the wave effect.
 *
 * If the background is transparent, considered the body element uses the general background color in the color attributes.
 * If palette is light and the dark mode is disabled, both the body background and the effect will be light color
 * so defaults the wave palette to dark.
 * The same goes for vice-versa. If the palette is dark and the dark mode is enabled, both the body background and the effect will be dark color
 * then defaults the wave palette to light.
 *
 * If the background is transparent except from the above condition or uses the soft colors, defaults to the palette value to emphasize the palette color during the effect.
 *
 * If none of the above conditions are met, defaults to light since most of the default palette main colors are harmonious with the light effect color.
 *
 * @params waveEffectPalette indicates the given prop value. If given, always uses it.
 * @params palette indicates the container element prop value.
 * @params isSoft indicates if the container elements uses the soft colors.
 * @params isTransparent indicates if the container element has a transparent background.
 * @params isDark indicates if the dark mode is enabled.
 */
export const getWaveEffectPalette = (waveEffectPalette: Nullable<PaletteProp>, palette: PaletteProp, isSoft: boolean, isTransparentBackground: boolean = false, isDark: boolean = false): PaletteProp => {
  if (waveEffectPalette) {
    return waveEffectPalette
  }

  if (isTransparentBackground && ['dynamic', '!dynamic', 'light', 'dark'].includes(palette)) {
    return isDark ? 'light' : 'dark'
  }

  switch (palette) {
    case 'dynamic':
      return '!dynamic'
    case '!dynamic':
      return 'dynamic'
    case 'light':
      return 'dark'
    case 'dark':
      return 'light'
    default:
      return (isSoft || isTransparentBackground) ? palette : 'light'
  }
}

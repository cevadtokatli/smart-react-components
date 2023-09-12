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
 */
export const getWaveEffectPalette = (props: any, isDark: boolean): PaletteProp => {
  if (props.waveEffectPalette) {
    return props.waveEffectPalette
  }

  if ((props.isOutline || props.isLink) && ['dynamic', '!dynamic', 'light', 'dark'].includes(props.palette)) {
    return isDark ? 'light' : 'dark'
  }

  switch (props.palette) {
    case 'dynamic':
      return '!dynamic'
    case '!dynamic':
      return 'dynamic'
    case 'light':
      return 'dark'
    case 'dark':
      return 'light'
    default:
      return (props.isSoft || props.isOutline || props.isLink) ? props.palette : 'light'
  }
}

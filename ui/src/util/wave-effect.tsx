import { PaletteProp } from '@smart-react-components/core/types'

/**
 * If waveEffectPalette is given, returns it however if not, generates a default palette for the wave effect.
 *
 * If the background is transparent, consideres the body element uses the general background color in the color attributes.
 * That's why the wave effect palette is the opposite of the general background color.
 *
 * If palette is light, defaults the wave palette to dark or vice-versa.
 *
 * If none of the above conditions are met, defaults to light since most of the default palette main colors are harmonious with the light effect color.
 */
export const getWaveEffectPalette = (props: any, isDark: boolean): PaletteProp => {
  if (props.waveEffectPalette) {
    return props.waveEffectPalette
  }

  if (props.isOutline || props.isLink) {
    return isDark ? 'light' : 'dark'
  }

  if (
    props.palette === 'light'
    || (props.palette === 'dynamic' && !isDark)
    || (props.palette === '!dynamic' && isDark)
  ) {
    return 'dark'
  }

  if (
    props.palette === 'dark'
    || (props.palette === 'dynamic' && isDark)
    || (props.palette === '!dynamic' && !isDark)
  ) {
    return 'light'
  }

  return 'light'
}

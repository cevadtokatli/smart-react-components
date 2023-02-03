import { Nullable, PaletteProp } from '@smart-react-components/core/types'

/**
 * If waveEffectPalette is given returns it however if not, generates a default palette for the wave effct.
 */
export const getWaveEffectPalette = (waveEffectPalette: Nullable<PaletteProp>, palette: PaletteProp, isSoft: boolean): PaletteProp => {
  if (waveEffectPalette) {
    return waveEffectPalette
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
      return !isSoft ? 'light' : palette
  }
}

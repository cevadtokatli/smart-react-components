import { getWaveEffectPalette } from './wave-effect'

describe('wave-effect', () => {
  it('should get wave effect palette', () => {
    expect(getWaveEffectPalette('secondary', 'primary', false)).toEqual('secondary')
    expect(getWaveEffectPalette(null, 'dynamic', false)).toEqual('!dynamic')
    expect(getWaveEffectPalette(null, '!dynamic', false)).toEqual('dynamic')
    expect(getWaveEffectPalette(null, 'light', false)).toEqual('dark')
    expect(getWaveEffectPalette(null, 'dark', false)).toEqual('light')
    expect(getWaveEffectPalette(null, 'primary', false)).toEqual('light')
    expect(getWaveEffectPalette(null, 'primary', true)).toEqual('primary')
  })
})

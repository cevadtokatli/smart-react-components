import { getWaveEffectPalette } from './wave-effect'

describe('wave-effect', () => {
  it('should get wave effect palette', () => {
    expect(getWaveEffectPalette({ waveEffectPalette: 'secondary' }, false)).toEqual('secondary')
    expect(getWaveEffectPalette({ palette: 'light' }, false)).toEqual('dark')
    expect(getWaveEffectPalette({ palette: 'dynamic' }, false)).toEqual('dark')
    expect(getWaveEffectPalette({ palette: '!dynamic' }, true)).toEqual('dark')
    expect(getWaveEffectPalette({ palette: 'dark' }, false)).toEqual('light')
    expect(getWaveEffectPalette({ palette: 'dynamic' }, true)).toEqual('light')
    expect(getWaveEffectPalette({ palette: '!dynamic' }, false)).toEqual('light')
  })
})

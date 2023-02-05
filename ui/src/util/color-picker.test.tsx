import { getColor } from '@smart-react-components/core/util/color'
import { ColorPickerFormat } from '../types/color-picker'
import { convertColor, isEqual, isLight } from './color-picker'

describe('color', () => {
  it('should convert color by format', () => {
    expect(convertColor(getColor('#0000FF'), ColorPickerFormat.HEX)).toEqual('#0000FF')
    expect(convertColor(getColor('#0000FF'), ColorPickerFormat.RGB)).toEqual('rgb(0, 0, 255)')
    expect(convertColor(getColor('#0000FF'), ColorPickerFormat.HSL)).toEqual('hsl(240, 100%, 50%)')
    expect(convertColor(getColor('rgba(0,0,255,.5)'), ColorPickerFormat.HEX)).toEqual('rgba(0, 0, 255, 0.5)')
    expect(convertColor(getColor('rgba(0,0,255,.5)'), ColorPickerFormat.RGB)).toEqual('rgba(0, 0, 255, 0.5)')
    expect(convertColor(getColor('rgba(0,0,255,.5)'), ColorPickerFormat.HSL)).toEqual('hsla(240, 100%, 50%, 0.5)')
    expect(convertColor(getColor(''), ColorPickerFormat.HEX)).toBeNull()
  })

  it('should check if colors are equal', () => {
    expect(isEqual(getColor('#FFF'), getColor('#FFF'))).toBeTruthy()
    expect(isEqual(getColor('#FFF'), getColor('#000'))).toBeFalsy()
    expect(isEqual(getColor('#FFF'), null)).toBeFalsy()
    expect(isEqual(null, getColor('#000'))).toBeFalsy()
    expect(isEqual(null, null)).toBeTruthy()
  })

  it('should check if color is light', () => {
    expect(isLight(getColor('#FFF'), true)).toBeTruthy()
    expect(isLight(getColor('#000'), true)).toBeFalsy()
    expect(isLight(getColor('rgba(0,0,0,.3)'), true)).toBeTruthy()
    expect(isLight(getColor('rgba(0,0,0,.3)'), false)).toBeFalsy()
  })
})

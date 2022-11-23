import createTheme from '../theme'
import { getColor, getFontColor, mix } from './color'

describe('color', () => {
  describe('getColor', () => {
    it('should get color', () => {
      expect(getColor('#000')).toEqual({ color: [0, 0, 0], model: 'rgb', valpha: 1 })
    })
  })

  describe('getFontColor', () => {
    const theme = createTheme()

    it('should get light font color', () => {
      expect(getFontColor('#fff', theme)).toEqual(theme.$.color.light.font)
    })

    it('should get dark font color', () => {
      expect(getFontColor('#000', theme)).toEqual(theme.$.color.dark.font)
    })
  })

  it('should mix color by weight', () => {
    const color = mix('#4a81d4', -.3)
    expect(color).toEqual('#80a6e0')
  })
})

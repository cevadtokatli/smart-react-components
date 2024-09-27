import { extractNumberUnit, toCSSValue } from './css'

describe('css', () => {
  it('should extract CSS number unit', () => {
    expect(extractNumberUnit('16px')).toEqual(16)
    expect(extractNumberUnit(16)).toEqual(16)
  })

  it('should modify the CSS value and return it back', () => {
    expect(toCSSValue('.125rem')(value => value / 2)).toEqual('0.0625rem')
  })
})

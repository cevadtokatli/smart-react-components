import { toCSSValue } from './css'

describe('css', () => {
  it('should modify the CSS value and return it back', () => {
    expect(toCSSValue('.125rem')(value => value / 2)).toEqual('0.0625rem')
  })
})

import { calculateRadioInnerCircleSize } from './form'

describe('form', () => {
  it('should calculate the inner circle size of the radio element', () => {
    expect(calculateRadioInnerCircleSize(12)).toEqual(2)
    expect(calculateRadioInnerCircleSize(16)).toEqual(4)
    expect(calculateRadioInnerCircleSize(20)).toEqual(4)
  })
})
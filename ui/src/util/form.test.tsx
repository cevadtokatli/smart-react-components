import { calculateFormLabelMarginX } from './form'

describe('form', () => {
  it('should calculate the margin X value of the form label.', () => {
    expect(calculateFormLabelMarginX(.5)).toEqual('0.46874')
  })
})

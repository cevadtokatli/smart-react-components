import { calculateFormLabelMarginX, getInputValue } from './form'

describe('form', () => {
  it('should calculate the margin X value of the form label', () => {
    expect(calculateFormLabelMarginX(.5)).toEqual('0.46874')
  })

  it('should get input value', () => {
    expect(getInputValue('value')).toEqual('value')
    expect(getInputValue(['value-1', 'value-2'])).toEqual('value-1,value-2')
    expect(getInputValue(null)).toEqual('')
    expect(getInputValue([])).toEqual('')
  })
})

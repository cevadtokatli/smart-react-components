import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import InputNumberContainer from './InputNumberContainer'

describe('<InputNumberContainer />', () => {
  let props

  beforeEach(() => {
    props = {
      hasBorder: true,
      isDisabled: false,
      isFocused: true,
      isOutline: true,
      isSoft: false,
      onChange: jest.fn(),
      palette: 'primary',
      shape: 'rectangle',
      value: 1,
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<InputNumberContainer {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should increase value by one', () => {
    const { container } = render(wrapTheme(<InputNumberContainer {...props} />))
    const node = container.querySelector('input + * > :first-child')!
    fireEvent.click(node)
    expect(props.onChange).toHaveBeenCalled()
    expect(props.onChange).lastCalledWith({ target: { value: '2' } })
  })

  it('should decrease value by one', () => {
    const { container } = render(wrapTheme(<InputNumberContainer {...props} />))
    const node = container.querySelector('input + * > :last-child')!
    fireEvent.click(node)
    expect(props.onChange).toHaveBeenCalled()
    expect(props.onChange).lastCalledWith({ target: { value: '0' } })
  })
})

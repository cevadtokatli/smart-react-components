import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Input from './'

describe('<Input />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Input label="Label" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setValue', () => {
    const setValue = jest.fn()
    const { container } = render(wrapTheme(<Input setValue={setValue} label="Label" />))
    fireEvent.change(container.querySelector('input')!, { target: { value: '.' } })
    expect(setValue).toHaveBeenCalled()
  })

  it('should not call setValue when disabled', () => {
    const setValue = jest.fn()
    const { container } = render(wrapTheme(<Input isDisabled setValue={setValue} label="Label" />))
    fireEvent.change(container.querySelector('input')!, { target: { value: '.' } })
    expect(setValue).not.toHaveBeenCalled()
  })

  it('should not call setValue when readonly', () => {
    const setValue = jest.fn()
    const { container } = render(wrapTheme(<Input isReadOnly setValue={setValue} label="Label" />))
    fireEvent.change(container.querySelector('input')!, { target: { value: '.' } })
    expect(setValue).not.toHaveBeenCalled()
  })
})

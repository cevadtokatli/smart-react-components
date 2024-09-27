import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import InputFile from './InputFile'

describe('<InputFile />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<InputFile label="Label" value={new File([], 'file.jpg')} setValue={jest.fn()} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setValue', () => {
    const setValue = jest.fn()
    const { container } = render(wrapTheme(<InputFile value={null} setValue={setValue} />))
    fireEvent.change(container.querySelector('input')!)
    expect(setValue).toHaveBeenCalled()
  })

  it('should not call setValue when disabled', () => {
    const setValue = jest.fn()
    const { container } = render(wrapTheme(<InputFile value={null} setValue={setValue} isDisabled />))
    fireEvent.change(container.querySelector('input')!)
    expect(setValue).not.toHaveBeenCalled()
  })
})

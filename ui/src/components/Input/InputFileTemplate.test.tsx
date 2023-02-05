import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import BadgeIconElement from '../Badge/BadgeIconElement'
import InputFileTemplate from './InputFileTemplate'

describe('<InputFileTemplate />', () => {
  let children
  let props

  beforeAll(() => {
    children = <input />
    props = {
      hasBorder: true,
      inputSize: 'medium',
      isOutline: true,
      palette: 'primary',
      placeholder: 'Placeholder',
      shape: 'rectangle',
      value: null,
    }
  })

  it('should render placeholder', () => {
    const { asFragment } = render(wrapTheme(<InputFileTemplate {...props}>{children}</InputFileTemplate>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render single value', () => {
    const value = new File([], 'file.jpg')
    const { asFragment } = render(wrapTheme(<InputFileTemplate {...props} value={value}>{children}</InputFileTemplate>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render multiple values', () => {
    const value = [new File([], 'foo.jpg'), new File([], 'bar.jpg')]
    const { asFragment } = render(wrapTheme(<InputFileTemplate {...props} value={value}>{children}</InputFileTemplate>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setValue', () => {
    const setValue = jest.fn() 
    const { container } = render(wrapTheme(<InputFileTemplate {...props} value={[new File([], 'file.jpg')]} setValue={setValue}>{children}</InputFileTemplate>))
    const node = container.querySelector(BadgeIconElement)!
    fireEvent.click(node)
    expect(setValue).toHaveBeenCalled()
  })

  it('should not call setValue when disabled', () => {
    const setValue = jest.fn() 
    const { container } = render(wrapTheme(<InputFileTemplate {...props} isDisabled value={[new File([], 'file.jpg')]} setValue={setValue}>{children}</InputFileTemplate>))
    const node = container.querySelector(BadgeIconElement)!
    fireEvent.click(node)
    expect(setValue).not.toHaveBeenCalled()
  })
})

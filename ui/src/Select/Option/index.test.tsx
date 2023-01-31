import { wrapTheme } from '@smart-react-components/core/test'
import { createEvent, fireEvent, render, waitFor } from '@testing-library/react' 
import React from 'react'
import Option from './'

describe('<Option />', () => {
  let children
  let props

  beforeAll(() => {
    children = 'Content'

    props = {
      active: 'active',
      hasHover: false,
      hasWaveEffect: false,
      isOutline: true,
      isSoft: false,
      palette: 'primary',
      value: 'value',
      waveEffectPalette: 'light',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Option {...props}>{children}</Option>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be active', () => {
    const { asFragment } = render(wrapTheme(<Option {...props} value="active">{children}</Option>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render waveEffect', () => {
    const { asFragment } = render(wrapTheme(<Option {...props} hasWaveEffect>{children}</Option>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setActive with value', () => {
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Option {...props} setActive={setActive}>{children}</Option>))
    const node = container.querySelector('div')!
    fireEvent.click(node)
    expect(setActive).toHaveBeenCalled()
    expect(setActive).lastCalledWith('value')
  })
 
  it('should call setActive with added value', () => {
    props.active = []
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Option {...props} setActive={setActive}>{children}</Option>))
    const node = container.querySelector('div')!
    fireEvent.click(node)
    expect(setActive).toHaveBeenCalled()
    expect(setActive).lastCalledWith(['value'])
  })

  it('should call setActive with removed value', () => {
    props.active = ['value']
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Option {...props} setActive={setActive}>{children}</Option>))
    const node = container.querySelector('div')!
    fireEvent.click(node)
    expect(setActive).toHaveBeenCalled()
    expect(setActive).lastCalledWith([])
  })

  it('should not call setActive when disabled', () => {
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Option {...props} setActive={setActive} isDisabled>{children}</Option>))
    const node = container.querySelector('div')!
    fireEvent.click(node)
    expect(setActive).not.toHaveBeenCalled()
  })
})

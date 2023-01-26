import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Radio from './'

describe('<Radio />', () => {
  let children
  let props

  beforeAll(() => {
    children = 'Label'
    props = {
      active: 'active',
      value: 'value',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Radio {...props} active="value">{children}</Radio>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setActive', () => {
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Radio {...props} setActive={setActive}>{children}</Radio>))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setActive).toHaveBeenCalled()
  })

  it('should not call setActive when disabled', () => {
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Radio {...props} isDisabled setActive={setActive}>{children}</Radio>))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setActive).not.toHaveBeenCalled()
  })

  it('should not render label', () => {
    const { container } = render(wrapTheme(<Radio {...props} />))
    expect(container.querySelector('span')).toBeFalsy()
  })

  it('should render custom component', () => {
    const { container } = render(wrapTheme(<Radio {...props} render={() => <svg />}>{children}</Radio>))
    expect(container.querySelector('svg')).toBeTruthy()
  })
})

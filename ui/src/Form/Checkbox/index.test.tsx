import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Checkbox from './'

describe('<Checkbox />', () => {
  let children
  let props

  beforeAll(() => {
    children = 'Label'
    props = {
      active: [],
      value: 'value',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Checkbox {...props} active={['value']} setActive={jest.fn()}>{children}</Checkbox>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setActive', () => {
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Checkbox {...props} setActive={setActive}>{children}</Checkbox>))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setActive).toHaveBeenCalled()
  })

  it('should not call setActive when disabled', () => {
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Checkbox {...props} isDisabled setActive={setActive}>{children}</Checkbox>))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setActive).not.toHaveBeenCalled()
  })

  it('should call setChecked', () => {
    const setChecked = jest.fn()
    const { container } = render(wrapTheme(<Checkbox {...props} setChecked={setChecked}>{children}</Checkbox>))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setChecked).toHaveBeenCalled()
  })

  it('should not call setChecked when disabled', () => {
    const setChecked = jest.fn()
    const { container } = render(wrapTheme(<Checkbox {...props} isDisabled setChecked={setChecked}>{children}</Checkbox>))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setChecked).not.toHaveBeenCalled()
  })

  it('should not render label', () => {
    const { container } = render(wrapTheme(<Checkbox {...props} />))
    expect(container.querySelector('span')).toBeFalsy()
  })

  it('should render custom component', () => {
    const { container } = render(wrapTheme(<Checkbox {...props} render={() => <svg />}>{children}</Checkbox>))
    expect(container.querySelector('svg')).toBeTruthy()
  })
})

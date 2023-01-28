import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Checkbox from './'

describe('<Checkbox />', () => {
  let props

  beforeAll(() => {
    props = {
      active: [],
      label: 'Label',
      value: 'value',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Checkbox {...props} active={['value']} setActive={jest.fn()} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setActive', () => {
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Checkbox {...props} setActive={setActive} />))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setActive).toHaveBeenCalled()
  })

  it('should not call setActive when disabled', () => {
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Checkbox {...props} isDisabled setActive={setActive} />))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setActive).not.toHaveBeenCalled()
  })

  it('should call setChecked', () => {
    const setChecked = jest.fn()
    const { container } = render(wrapTheme(<Checkbox {...props} setChecked={setChecked} />))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setChecked).toHaveBeenCalled()
  })

  it('should not call setChecked when disabled', () => {
    const setChecked = jest.fn()
    const { container } = render(wrapTheme(<Checkbox {...props} isDisabled setChecked={setChecked} />))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setChecked).not.toHaveBeenCalled()
  })

  it('should not render label', () => {
    const { asFragment } = render(wrapTheme(<Checkbox {...props} label={null} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render custom component', () => {
    const Template = props => <div>{props.children}<svg /></div>
    const { asFragment } = render(wrapTheme(<Checkbox {...props} template={<Template />} />))
    expect(asFragment()).toMatchSnapshot()
  })
})

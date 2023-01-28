import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Radio from './'

describe('<Radio />', () => {
  let props

  beforeAll(() => {
    props = {
      active: 'active',
      label: 'Label',
      value: 'value',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Radio {...props} active="value" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setActive', () => {
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Radio {...props} setActive={setActive} />))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setActive).toHaveBeenCalled()
  })

  it('should not call setActive when disabled', () => {
    const setActive = jest.fn()
    const { container } = render(wrapTheme(<Radio {...props} isDisabled setActive={setActive} />))
    const node = container.querySelector('input')!
    fireEvent.click(node)
    expect(setActive).not.toHaveBeenCalled()
  })

  it('should not render label', () => {
    const { asFragment } = render(wrapTheme(<Radio {...props} label={null} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render custom component', () => {
    const Template = props => <div>{props.children}<svg /></div>
    const { asFragment } = render(wrapTheme(<Radio {...props} template={<Template />} />))
    expect(asFragment()).toMatchSnapshot()
  })
})

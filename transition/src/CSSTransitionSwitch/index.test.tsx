import { render } from '@testing-library/react'
import React from 'react'
import CSSTransitionSwitch from './'

describe('<CSSTransitionSwitch />', () => {
  let props
  let children

  beforeAll(() => {
    props = {
      active: 'element-1',
      className: 'test',
      duration: 100,
    }
    children = [<div key="element-1" data-testid="element-1" />, <div key="element-2" data-testid="element-2" />]
  })

  it('should render element when it\'s active', () => {
    const screen = render(<CSSTransitionSwitch {...props}>{children}</CSSTransitionSwitch>)
    expect(screen.queryByTestId('element-1')).toBeTruthy()
  })

  it('should render element when it\'s not active', () => {
    const screen = render(<CSSTransitionSwitch {...props}>{children}</CSSTransitionSwitch>)
    expect(screen.queryByTestId('element-2')).toBeFalsy()
  })
})

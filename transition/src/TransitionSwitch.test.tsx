import { render } from '@testing-library/react'
import React from 'react'
import TransitionSwitch from './TransitionSwitch'

describe('<TransitionSwitch />', () => {
  let props
  let children

  beforeAll(() => {
    props = {
      active: 'element-1',
      hide: jest.fn(() => Promise.resolve()),
      show: jest.fn(() => Promise.resolve()),
    }
    children = [<div key="element-1" data-testid="element-1" />, <div key="element-2" data-testid="element-2" />]
  })

  it('should render element when it\'s active', () => {
    const screen = render(<TransitionSwitch {...props}>{children}</TransitionSwitch>)
    expect(screen.queryByTestId('element-1')).toBeTruthy()
  })

  it('should render element when it\'s not active', () => {
    const screen = render(<TransitionSwitch {...props}>{children}</TransitionSwitch>)
    expect(screen.queryByTestId('element-2')).toBeFalsy()
  })
})

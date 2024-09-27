import { render } from '@testing-library/react'
import React from 'react'
import CSSTransitionGroup from './'

describe('<CSSTransitionGroup />', () => {
  it('should render all children elements', () => {
    const screen = render(<CSSTransitionGroup className="test" duration={100}><div key="1" /><div key="2" /></CSSTransitionGroup>)
    expect(screen.container.querySelectorAll('div').length).toEqual(2)
  })
})

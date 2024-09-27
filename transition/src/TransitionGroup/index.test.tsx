import { render } from '@testing-library/react'
import React from 'react'
import TransitionGroup from './'

describe('<TransitionGroup />', () => {
  it('should render all children elements', () => {
    const screen = render(<TransitionGroup><div key="1" /><div key="2" /></TransitionGroup>)
    expect(screen.container.querySelectorAll('div').length).toEqual(2)
  })
})

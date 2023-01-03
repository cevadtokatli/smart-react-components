import { render } from '@testing-library/react'
import React from 'react'
import Nav from './Nav'

describe('<Nav />', () => {
  it('should render nav element', () => {
    const screen = render(<Nav />)
    expect(screen.container.querySelector('nav')).toBeTruthy()
  })
})

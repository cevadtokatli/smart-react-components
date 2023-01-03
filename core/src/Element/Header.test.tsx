import { render } from '@testing-library/react'
import React from 'react'
import Header from './Header'

describe('<Header />', () => {
  it('should render header element', () => {
    const screen = render(<Header />)
    expect(screen.container.querySelector('header')).toBeTruthy()
  })
})

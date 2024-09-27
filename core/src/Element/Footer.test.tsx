import { render } from '@testing-library/react'
import React from 'react'
import Footer from './Footer'

describe('<Footer />', () => {
  it('should render footer element', () => {
    const screen = render(<Footer />)
    expect(screen.container.querySelector('footer')).toBeTruthy()
  })
})

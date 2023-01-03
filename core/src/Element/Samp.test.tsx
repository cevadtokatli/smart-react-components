import { render } from '@testing-library/react'
import React from 'react'
import Samp from './Samp'

describe('<Samp />', () => {
  it('should render samp element', () => {
    const screen = render(<Samp />)
    expect(screen.container.querySelector('samp')).toBeTruthy()
  })
})

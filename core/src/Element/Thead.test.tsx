import { render } from '@testing-library/react'
import React from 'react'
import Thead from './Thead'

describe('<Thead />', () => {
  it('should render thead element', () => {
    const screen = render(<table><Thead /></table>)
    expect(screen.container.querySelector('thead')).toBeTruthy()
  })
})

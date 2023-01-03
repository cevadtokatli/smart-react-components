import { render } from '@testing-library/react'
import React from 'react'
import Ellipse from './Ellipse'

describe('<Ellipse />', () => {
  it('should render ellipse element', () => {
    const screen = render(<svg><Ellipse /></svg>)
    expect(screen.container.querySelector('ellipse')).toBeTruthy()
  })
})

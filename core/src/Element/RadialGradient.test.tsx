import { render } from '@testing-library/react'
import React from 'react'
import RadialGradient from './RadialGradient'

describe('<RadialGradient />', () => {
  it('should render radialGradient element', () => {
    const screen = render(<svg><RadialGradient /></svg>)
    expect(screen.container.querySelector('radialGradient')).toBeTruthy()
  })
})

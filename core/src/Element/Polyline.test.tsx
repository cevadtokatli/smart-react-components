import { render } from '@testing-library/react'
import React from 'react'
import Polyline from './Polyline'

describe('<Polyline />', () => {
  it('should render polyline element', () => {
    const screen = render(<svg><Polyline /></svg>)
    expect(screen.container.querySelector('polyline')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Marker from './Marker'

describe('<Marker />', () => {
  it('should render marker element', () => {
    const screen = render(<svg><Marker /></svg>)
    expect(screen.container.querySelector('marker')).toBeTruthy()
  })
})

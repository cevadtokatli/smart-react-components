import { render } from '@testing-library/react'
import React from 'react'
import Map from './Map'

describe('<Map />', () => {
  it('should render map element', () => {
    const screen = render(<Map />)
    expect(screen.container.querySelector('map')).toBeTruthy()
  })
})

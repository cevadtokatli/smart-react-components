import { render } from '@testing-library/react'
import React from 'react'
import Polygon from './Polygon'

describe('<Polygon />', () => {
  it('should render polygon element', () => {
    const screen = render(<svg><Polygon /></svg>)
    expect(screen.container.querySelector('polygon')).toBeTruthy()
  })
})

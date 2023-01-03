import { render } from '@testing-library/react'
import React from 'react'
import Tspan from './Tspan'

describe('<Tspan />', () => {
  it('should render tspan element', () => {
    const screen = render(<svg><Tspan /></svg>)
    expect(screen.container.querySelector('tspan')).toBeTruthy()
  })
})

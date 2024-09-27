import { render } from '@testing-library/react'
import React from 'react'
import Kbd from './Kbd'

describe('<Kbd />', () => {
  it('should render kbd element', () => {
    const screen = render(<Kbd />)
    expect(screen.container.querySelector('kbd')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Meter from './Meter'

describe('<Meter />', () => {
  it('should render meter element', () => {
    const screen = render(<Meter />)
    expect(screen.container.querySelector('meter')).toBeTruthy()
  })
})

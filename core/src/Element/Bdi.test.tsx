import { render } from '@testing-library/react'
import React from 'react'
import Bdi from './Bdi'

describe('<Bdi />', () => {
  it('should render bdi element', () => {
    const screen = render(<Bdi />)
    expect(screen.container.querySelector('bdi')).toBeTruthy()
  })
})

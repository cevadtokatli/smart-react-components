import { render } from '@testing-library/react'
import React from 'react'
import Stop from './Stop'

describe('<Stop />', () => {
  it('should render stop element', () => {
    const screen = render(<svg><Stop /></svg>)
    expect(screen.container.querySelector('stop')).toBeTruthy()
  })
})

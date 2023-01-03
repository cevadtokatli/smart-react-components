import { render } from '@testing-library/react'
import React from 'react'
import Circle from './Circle'

describe('<Circle />', () => {
  it('should render circle element', () => {
    const screen = render(<svg><Circle /></svg>)
    expect(screen.container.querySelector('circle')).toBeTruthy()
  })
})

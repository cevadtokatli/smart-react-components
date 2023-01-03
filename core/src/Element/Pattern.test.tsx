import { render } from '@testing-library/react'
import React from 'react'
import Pattern from './Pattern'

describe('<Pattern />', () => {
  it('should render pattern element', () => {
    const screen = render(<svg><Pattern /></svg>)
    expect(screen.container.querySelector('pattern')).toBeTruthy()
  })
})

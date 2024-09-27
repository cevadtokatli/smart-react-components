import { render } from '@testing-library/react'
import React from 'react'
import Q from './Q'

describe('<Q />', () => {
  it('should render q element', () => {
    const screen = render(<Q />)
    expect(screen.container.querySelector('q')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Source from './Source'

describe('<Source />', () => {
  it('should render source element', () => {
    const screen = render(<Source />)
    expect(screen.container.querySelector('source')).toBeTruthy()
  })
})

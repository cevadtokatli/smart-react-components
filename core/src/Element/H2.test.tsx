import { render } from '@testing-library/react'
import React from 'react'
import H2 from './H2'

describe('<H2 />', () => {
  it('should render h2 element', () => {
    const screen = render(<H2 />)
    expect(screen.container.querySelector('h2')).toBeTruthy()
  })
})

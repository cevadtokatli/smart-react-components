import { render } from '@testing-library/react'
import React from 'react'
import H1 from './H1'

describe('<H1 />', () => {
  it('should render h1 element', () => {
    const screen = render(<H1 />)
    expect(screen.container.querySelector('h1')).toBeTruthy()
  })
})

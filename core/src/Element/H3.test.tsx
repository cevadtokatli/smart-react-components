import { render } from '@testing-library/react'
import React from 'react'
import H3 from './H3'

describe('<H3 />', () => {
  it('should render h3 element', () => {
    const screen = render(<H3 />)
    expect(screen.container.querySelector('h3')).toBeTruthy()
  })
})

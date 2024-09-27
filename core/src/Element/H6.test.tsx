import { render } from '@testing-library/react'
import React from 'react'
import H6 from './H6'

describe('<H6 />', () => {
  it('should render h6 element', () => {
    const screen = render(<H6 />)
    expect(screen.container.querySelector('h6')).toBeTruthy()
  })
})

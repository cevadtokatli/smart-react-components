import { render } from '@testing-library/react'
import React from 'react'
import H4 from './H4'

describe('<H4 />', () => {
  it('should render h4 element', () => {
    const screen = render(<H4 />)
    expect(screen.container.querySelector('h4')).toBeTruthy()
  })
})

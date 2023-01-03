import { render } from '@testing-library/react'
import React from 'react'
import B from './B'

describe('<B />', () => {
  it('should render b element', () => {
    const screen = render(<B />)
    expect(screen.container.querySelector('b')).toBeTruthy()
  })
})

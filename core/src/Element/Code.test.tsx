import { render } from '@testing-library/react'
import React from 'react'
import Code from './Code'

describe('<Code />', () => {
  it('should render code element', () => {
    const screen = render(<Code />)
    expect(screen.container.querySelector('code')).toBeTruthy()
  })
})

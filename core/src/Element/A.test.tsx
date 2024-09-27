import { render } from '@testing-library/react'
import React from 'react'
import A from './A'

describe('<A />', () => {
  it('should render a element', () => {
    const screen = render(<A />)
    expect(screen.container.querySelector('a')).toBeTruthy()
  })
})

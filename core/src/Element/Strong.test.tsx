import { render } from '@testing-library/react'
import React from 'react'
import Strong from './Strong'

describe('<Strong />', () => {
  it('should render strong element', () => {
    const screen = render(<Strong />)
    expect(screen.container.querySelector('strong')).toBeTruthy()
  })
})

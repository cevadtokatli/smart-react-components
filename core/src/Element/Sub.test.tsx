import { render } from '@testing-library/react'
import React from 'react'
import Sub from './Sub'

describe('<Sub />', () => {
  it('should render sub element', () => {
    const screen = render(<Sub />)
    expect(screen.container.querySelector('sub')).toBeTruthy()
  })
})

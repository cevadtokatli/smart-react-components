import { render } from '@testing-library/react'
import React from 'react'
import Canvas from './Canvas'

describe('<Canvas />', () => {
  it('should render canvas element', () => {
    const screen = render(<Canvas />)
    expect(screen.container.querySelector('canvas')).toBeTruthy()
  })
})

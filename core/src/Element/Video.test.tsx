import { render } from '@testing-library/react'
import React from 'react'
import Video from './Video'

describe('<Video />', () => {
  it('should render video element', () => {
    const screen = render(<Video />)
    expect(screen.container.querySelector('video')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Image from './Image'

describe('<Image />', () => {
  it('should render image element', () => {
    const screen = render(<svg><Image /></svg>)
    expect(screen.container.querySelector('image')).toBeTruthy()
  })
})

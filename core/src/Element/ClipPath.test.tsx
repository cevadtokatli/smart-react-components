import { render } from '@testing-library/react'
import React from 'react'
import ClipPath from './ClipPath'

describe('<ClipPath />', () => {
  it('should render clipPath element', () => {
    const screen = render(<svg><ClipPath /></svg>)
    expect(screen.container.querySelector('clipPath')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Path from './Path'

describe('<Path />', () => {
  it('should render path element', () => {
    const screen = render(<svg><Path /></svg>)
    expect(screen.container.querySelector('path')).toBeTruthy()
  })
})

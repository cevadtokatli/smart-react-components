import { render } from '@testing-library/react'
import React from 'react'
import Picture from './Picture'

describe('<Picture />', () => {
  it('should render picture element', () => {
    const screen = render(<Picture />)
    expect(screen.container.querySelector('picture')).toBeTruthy()
  })
})

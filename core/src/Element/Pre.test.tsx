import { render } from '@testing-library/react'
import React from 'react'
import Pre from './Pre'

describe('<Pre />', () => {
  it('should render pre element', () => {
    const screen = render(<Pre />)
    expect(screen.container.querySelector('pre')).toBeTruthy()
  })
})

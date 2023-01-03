import { render } from '@testing-library/react'
import React from 'react'
import Blockquote from './Blockquote'

describe('<Blockquote />', () => {
  it('should render blockquote element', () => {
    const screen = render(<Blockquote />)
    expect(screen.container.querySelector('blockquote')).toBeTruthy()
  })
})

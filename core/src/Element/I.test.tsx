import { render } from '@testing-library/react'
import React from 'react'
import I from './I'

describe('<I />', () => {
  it('should render i element', () => {
    const screen = render(<I />)
    expect(screen.container.querySelector('i')).toBeTruthy()
  })
})

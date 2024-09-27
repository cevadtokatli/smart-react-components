import { render } from '@testing-library/react'
import React from 'react'
import Ruby from './Ruby'

describe('<Ruby />', () => {
  it('should render ruby element', () => {
    const screen = render(<Ruby />)
    expect(screen.container.querySelector('ruby')).toBeTruthy()
  })
})

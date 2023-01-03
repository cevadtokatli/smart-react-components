import { render } from '@testing-library/react'
import React from 'react'
import Input from './Input'

describe('<Input />', () => {
  it('should render input element', () => {
    const screen = render(<Input />)
    expect(screen.container.querySelector('input')).toBeTruthy()
  })
})

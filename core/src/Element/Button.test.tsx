import { render } from '@testing-library/react'
import React from 'react'
import Button from './Button'

describe('<Button />', () => {
  it('should render button element', () => {
    const screen = render(<Button />)
    expect(screen.container.querySelector('button')).toBeTruthy()
  })
})

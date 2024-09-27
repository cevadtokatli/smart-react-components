import { render } from '@testing-library/react'
import React from 'react'
import Dialog from './Dialog'

describe('<Dialog />', () => {
  it('should render dialog element', () => {
    const screen = render(<Dialog />)
    expect(screen.container.querySelector('dialog')).toBeTruthy()
  })
})

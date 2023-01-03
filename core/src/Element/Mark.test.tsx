import { render } from '@testing-library/react'
import React from 'react'
import Mark from './Mark'

describe('<Mark />', () => {
  it('should render mark element', () => {
    const screen = render(<Mark />)
    expect(screen.container.querySelector('mark')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import P from './P'

describe('<P />', () => {
  it('should render p element', () => {
    const screen = render(<P />)
    expect(screen.container.querySelector('p')).toBeTruthy()
  })
})

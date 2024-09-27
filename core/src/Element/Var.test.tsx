import { render } from '@testing-library/react'
import React from 'react'
import Var from './Var'

describe('<Var />', () => {
  it('should render var element', () => {
    const screen = render(<Var />)
    expect(screen.container.querySelector('var')).toBeTruthy()
  })
})

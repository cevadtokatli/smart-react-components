import { render } from '@testing-library/react'
import React from 'react'
import Rect from './Rect'

describe('<Rect />', () => {
  it('should render rect element', () => {
    const screen = render(<svg><Rect /></svg>)
    expect(screen.container.querySelector('rect')).toBeTruthy()
  })
})

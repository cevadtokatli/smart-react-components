import { render } from '@testing-library/react'
import React from 'react'
import Span from './Span'

describe('<Span />', () => {
  it('should render span element', () => {
    const screen = render(<Span />)
    expect(screen.container.querySelector('span')).toBeTruthy()
  })
})

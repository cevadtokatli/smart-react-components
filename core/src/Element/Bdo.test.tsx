import { render } from '@testing-library/react'
import React from 'react'
import Bdo from './Bdo'

describe('<Bdo />', () => {
  it('should render bdo element', () => {
    const screen = render(<Bdo />)
    expect(screen.container.querySelector('bdo')).toBeTruthy()
  })
})

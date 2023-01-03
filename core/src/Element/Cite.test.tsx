import { render } from '@testing-library/react'
import React from 'react'
import Cite from './Cite'

describe('<Cite />', () => {
  it('should render cite element', () => {
    const screen = render(<Cite />)
    expect(screen.container.querySelector('cite')).toBeTruthy()
  })
})

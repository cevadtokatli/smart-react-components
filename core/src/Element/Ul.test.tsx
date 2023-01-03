import { render } from '@testing-library/react'
import React from 'react'
import Ul from './Ul'

describe('<Ul />', () => {
  it('should render ul element', () => {
    const screen = render(<Ul />)
    expect(screen.container.querySelector('ul')).toBeTruthy()
  })
})

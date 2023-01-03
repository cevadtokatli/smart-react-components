import { render } from '@testing-library/react'
import React from 'react'
import Dd from './Dd'

describe('<Dd />', () => {
  it('should render dd element', () => {
    const screen = render(<Dd />)
    expect(screen.container.querySelector('dd')).toBeTruthy()
  })
})

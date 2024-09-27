import { render } from '@testing-library/react'
import React from 'react'
import Address from './Address'

describe('<Address />', () => {
  it('should render address element', () => {
    const screen = render(<Address />)
    expect(screen.container.querySelector('address')).toBeTruthy()
  })
})

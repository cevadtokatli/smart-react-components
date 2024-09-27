import { render } from '@testing-library/react'
import React from 'react'
import Dl from './Dl'

describe('<Dl />', () => {
  it('should render dl element', () => {
    const screen = render(<Dl />)
    expect(screen.container.querySelector('dl')).toBeTruthy()
  })
})

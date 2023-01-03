import { render } from '@testing-library/react'
import React from 'react'
import Param from './Param'

describe('<Param />', () => {
  it('should render param element', () => {
    const screen = render(<Param />)
    expect(screen.container.querySelector('param')).toBeTruthy()
  })
})

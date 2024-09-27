import { render } from '@testing-library/react'
import React from 'react'
import Data from './Data'

describe('<Data />', () => {
  it('should render data element', () => {
    const screen = render(<Data />)
    expect(screen.container.querySelector('data')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Line from './Line'

describe('<Line />', () => {
  it('should render line element', () => {
    const screen = render(<svg><Line /></svg>)
    expect(screen.container.querySelector('line')).toBeTruthy()
  })
})

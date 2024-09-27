import { render } from '@testing-library/react'
import React from 'react'
import Ins from './Ins'

describe('<Ins />', () => {
  it('should render ins element', () => {
    const screen = render(<Ins />)
    expect(screen.container.querySelector('ins')).toBeTruthy()
  })
})

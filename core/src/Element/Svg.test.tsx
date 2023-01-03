import { render } from '@testing-library/react'
import React from 'react'
import Svg from './Svg'

describe('<Svg />', () => {
  it('should render svg element', () => {
    const screen = render(<Svg />)
    expect(screen.container.querySelector('svg')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Embed from './Embed'

describe('<Embed />', () => {
  it('should render embed element', () => {
    const screen = render(<Embed />)
    expect(screen.container.querySelector('embed')).toBeTruthy()
  })
})

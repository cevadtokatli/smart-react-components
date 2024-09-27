import { render } from '@testing-library/react'
import React from 'react'
import Ol from './Ol'

describe('<Ol />', () => {
  it('should render ol element', () => {
    const screen = render(<Ol />)
    expect(screen.container.querySelector('ol')).toBeTruthy()
  })
})

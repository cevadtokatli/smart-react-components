import { render } from '@testing-library/react'
import React from 'react'
import Abbr from './Abbr'

describe('<Abbr />', () => {
  it('should render abbr element', () => {
    const screen = render(<Abbr />)
    expect(screen.container.querySelector('abbr')).toBeTruthy()
  })
})

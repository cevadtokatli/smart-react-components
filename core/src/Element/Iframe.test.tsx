import { render } from '@testing-library/react'
import React from 'react'
import Iframe from './Iframe'

describe('<Iframe />', () => {
  it('should render iframe element', () => {
    const screen = render(<Iframe />)
    expect(screen.container.querySelector('iframe')).toBeTruthy()
  })
})

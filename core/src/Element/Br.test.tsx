import { render } from '@testing-library/react'
import React from 'react'
import Br from './Br'

describe('<Br />', () => {
  it('should render br element', () => {
    const screen = render(<Br />)
    expect(screen.container.querySelector('br')).toBeTruthy()
  })
})

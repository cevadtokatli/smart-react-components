import { render } from '@testing-library/react'
import React from 'react'
import Rp from './Rp'

describe('<Rp />', () => {
  it('should render rp element', () => {
    const screen = render(<Rp />)
    expect(screen.container.querySelector('rp')).toBeTruthy()
  })
})

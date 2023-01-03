import { render } from '@testing-library/react'
import React from 'react'
import Dt from './Dt'

describe('<Dt />', () => {
  it('should render dt element', () => {
    const screen = render(<Dt />)
    expect(screen.container.querySelector('dt')).toBeTruthy()
  })
})

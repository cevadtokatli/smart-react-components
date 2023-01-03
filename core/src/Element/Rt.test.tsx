import { render } from '@testing-library/react'
import React from 'react'
import Rt from './Rt'

describe('<Rt />', () => {
  it('should render rt element', () => {
    const screen = render(<Rt />)
    expect(screen.container.querySelector('rt')).toBeTruthy()
  })
})

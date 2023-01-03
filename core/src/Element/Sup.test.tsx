import { render } from '@testing-library/react'
import React from 'react'
import Sup from './Sup'

describe('<Sup />', () => {
  it('should render sup element', () => {
    const screen = render(<Sup />)
    expect(screen.container.querySelector('sup')).toBeTruthy()
  })
})

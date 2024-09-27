import { render } from '@testing-library/react'
import React from 'react'
import Summary from './Summary'

describe('<Summary />', () => {
  it('should render summary element', () => {
    const screen = render(<Summary />)
    expect(screen.container.querySelector('summary')).toBeTruthy()
  })
})

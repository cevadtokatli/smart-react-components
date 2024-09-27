import { render } from '@testing-library/react'
import React from 'react'
import Legend from './Legend'

describe('<Legend />', () => {
  it('should render legend element', () => {
    const screen = render(<Legend />)
    expect(screen.container.querySelector('legend')).toBeTruthy()
  })
})

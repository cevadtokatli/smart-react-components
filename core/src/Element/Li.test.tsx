import { render } from '@testing-library/react'
import React from 'react'
import Li from './Li'

describe('<Li />', () => {
  it('should render li element', () => {
    const screen = render(<Li />)
    expect(screen.container.querySelector('li')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Audio from './Audio'

describe('<Audio />', () => {
  it('should render audio element', () => {
    const screen = render(<Audio />)
    expect(screen.container.querySelector('audio')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Track from './Track'

describe('<Track />', () => {
  it('should render track element', () => {
    const screen = render(<Track />)
    expect(screen.container.querySelector('track')).toBeTruthy()
  })
})

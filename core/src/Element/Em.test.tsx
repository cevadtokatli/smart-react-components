import { render } from '@testing-library/react'
import React from 'react'
import Em from './Em'

describe('<Em />', () => {
  it('should render em element', () => {
    const screen = render(<Em />)
    expect(screen.container.querySelector('em')).toBeTruthy()
  })
})

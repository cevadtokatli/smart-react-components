import { render } from '@testing-library/react'
import React from 'react'
import Time from './Time'

describe('<Time />', () => {
  it('should render time element', () => {
    const screen = render(<Time />)
    expect(screen.container.querySelector('time')).toBeTruthy()
  })
})

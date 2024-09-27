import { render } from '@testing-library/react'
import React from 'react'
import Output from './Output'

describe('<Output />', () => {
  it('should render output element', () => {
    const screen = render(<Output />)
    expect(screen.container.querySelector('output')).toBeTruthy()
  })
})

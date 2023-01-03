import { render } from '@testing-library/react'
import React from 'react'
import H5 from './H5'

describe('<H5 />', () => {
  it('should render h5 element', () => {
    const screen = render(<H5 />)
    expect(screen.container.querySelector('h5')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Area from './Area'

describe('<Area />', () => {
  it('should render area element', () => {
    const screen = render(<Area />)
    expect(screen.container.querySelector('area')).toBeTruthy()
  })
})

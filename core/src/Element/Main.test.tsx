import { render } from '@testing-library/react'
import React from 'react'
import Main from './Main'

describe('<Main />', () => {
  it('should render main element', () => {
    const screen = render(<Main />)
    expect(screen.container.querySelector('main')).toBeTruthy()
  })
})

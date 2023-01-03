import { render } from '@testing-library/react'
import React from 'react'
import Aside from './Aside'

describe('<Aside />', () => {
  it('should render aside element', () => {
    const screen = render(<Aside />)
    expect(screen.container.querySelector('aside')).toBeTruthy()
  })
})

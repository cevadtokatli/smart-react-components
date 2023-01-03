import { render } from '@testing-library/react'
import React from 'react'
import Dfn from './Dfn'

describe('<Dfn />', () => {
  it('should render dfn element', () => {
    const screen = render(<Dfn />)
    expect(screen.container.querySelector('dfn')).toBeTruthy()
  })
})

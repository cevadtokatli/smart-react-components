import { render } from '@testing-library/react'
import React from 'react'
import Defs from './Defs'

describe('<Defs />', () => {
  it('should render defs element', () => {
    const screen = render(<svg><Defs /></svg>)
    expect(screen.container.querySelector('defs')).toBeTruthy()
  })
})

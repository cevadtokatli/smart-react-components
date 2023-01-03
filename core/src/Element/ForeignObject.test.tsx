import { render } from '@testing-library/react'
import React from 'react'
import ForeignObject from './ForeignObject'

describe('<ForeignObject />', () => {
  it('should render foreignObject element', () => {
    const screen = render(<svg><ForeignObject /></svg>)
    expect(screen.container.querySelector('foreignObject')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import G from './G'

describe('<G />', () => {
  it('should render g element', () => {
    const screen = render(<svg><G /></svg>)
    expect(screen.container.querySelector('g')).toBeTruthy()
  })
})

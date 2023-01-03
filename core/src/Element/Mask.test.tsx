import { render } from '@testing-library/react'
import React from 'react'
import Mask from './Mask'

describe('<Mask />', () => {
  it('should render mask element', () => {
    const screen = render(<svg><Mask /></svg>)
    expect(screen.container.querySelector('mask')).toBeTruthy()
  })
})

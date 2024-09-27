import { render } from '@testing-library/react'
import React from 'react'
import LinearGradient from './LinearGradient'

describe('<LinearGradient />', () => {
  it('should render linearGradient element', () => {
    const screen = render(<svg><LinearGradient /></svg>)
    expect(screen.container.querySelector('linearGradient')).toBeTruthy()
  })
})

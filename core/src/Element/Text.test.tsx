import { render } from '@testing-library/react'
import React from 'react'
import Text from './Text'

describe('<Text />', () => {
  it('should render text element', () => {
    const screen = render(<svg><Text /></svg>)
    expect(screen.container.querySelector('text')).toBeTruthy()
  })
})

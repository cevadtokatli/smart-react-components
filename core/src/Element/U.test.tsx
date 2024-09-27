import { render } from '@testing-library/react'
import React from 'react'
import U from './U'

describe('<U />', () => {
  it('should render u element', () => {
    const screen = render(<U />)
    expect(screen.container.querySelector('u')).toBeTruthy()
  })
})

import { render } from '@testing-library/react'
import React from 'react'
import Article from './Article'

describe('<Article />', () => {
  it('should render article element', () => {
    const screen = render(<Article />)
    expect(screen.container.querySelector('article')).toBeTruthy()
  })
})

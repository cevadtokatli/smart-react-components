import { render } from '@testing-library/react'
import React from 'react'
import Base from './Base'

describe('<Base />', () => {
  it('should render base element', () => {
    const screen = render(<Base />)
    expect(screen.container.querySelector('base')).toBeTruthy()
  })
})

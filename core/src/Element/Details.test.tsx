import { render } from '@testing-library/react'
import React from 'react'
import Details from './Details'

describe('<Details />', () => {
  it('should render details element', () => {
    const screen = render(<Details />)
    expect(screen.container.querySelector('details')).toBeTruthy()
  })
})

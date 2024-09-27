import { render } from '@testing-library/react'
import React from 'react'
import Label from './Label'

describe('<Label />', () => {
  it('should render label element', () => {
    const screen = render(<Label />)
    expect(screen.container.querySelector('label')).toBeTruthy()
  })
})

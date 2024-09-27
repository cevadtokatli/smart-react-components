import { render } from '@testing-library/react'
import React from 'react'
import Table from './Table'

describe('<Table />', () => {
  it('should render table element', () => {
    const screen = render(<Table />)
    expect(screen.container.querySelector('table')).toBeTruthy()
  })
})

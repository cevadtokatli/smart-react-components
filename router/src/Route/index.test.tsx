import { render } from '@testing-library/react'
import React from 'react'
import Route from './'
import ClientRouter from '../ClientRouter'

describe('<Route />', () => {
  it('should render element when matched', () => {
    const screen = render(
      <ClientRouter routes={[]}>
        <Route path="/"><div data-testid="element" /></Route>
      </ClientRouter>
    )
    expect(screen.queryByTestId('element')).toBeTruthy()
  })

  it('should not render element when not matched', () => {
    const screen = render(
      <ClientRouter routes={[]}>
        <Route path="/home" isExact><div data-testid="element" /></Route>
      </ClientRouter>
    )
    expect(screen.queryByTestId('element')).toBeFalsy()
  })

  it('should render element when not matched', () => {
    const screen = render(
      <ClientRouter routes={[]}>
        <Route path="/home" isExact>
          { () => <div data-testid="element" /> }
        </Route>
      </ClientRouter>
    )
    expect(screen.queryByTestId('element')).toBeTruthy()
  })
})

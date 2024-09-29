import { wrapTheme } from '@smart-react-components/core/test'
import { createEvent, fireEvent, render } from '@testing-library/react'
import React from 'react'
import Link from './'
import ClientRouter from '../ClientRouter'
import RouterContext from '../RouterContext'
import { generateURL } from '../util'

describe('<Link />', () => {
  it('isActive should be true', () => {
    const screen = render(
      <ClientRouter routes={[]}>
        <Link to="/">{ ({ isActive }) => <span>{!!isActive}</span> }</Link>
      </ClientRouter>
    )

    expect(screen.container.querySelector('.active')).toBeTruthy()
    expect(screen.findAllByText('true')).toBeTruthy()
  })

  it('isActivating should be true', () => {
    const ctx = {
      state: {
        activeURL: generateURL('/home'),
        activatingURL: generateURL('/'),
        isHashRouter: false,
        key: 1,
        percentage: 0,
        cancelCallback: jest.fn(),
      },
      dispatch: jest.fn(),
      modules: {},
      push: jest.fn(),
      redirect: jest.fn(),
      replace: jest.fn(),
    }

    const screen = render(
      <RouterContext.Provider value={ctx}>
        <Link to="/">{ ({ isActivating }) => <span>{!!isActivating}</span> }</Link>
      </RouterContext.Provider>
    )

    expect(screen.container.querySelector('.activating')).toBeTruthy()
    expect(screen.findAllByText('true')).toBeTruthy()
  })

  it('should call onClick method', () => {
    const onClick = jest.fn()
    const screen = render(
      <ClientRouter routes={[]}>
        <Link to="/" onClick={onClick}>Label</Link>
      </ClientRouter>
    )
    const node = screen.container.querySelector('a')!
    fireEvent(node, createEvent.click(node))
    expect(onClick).toHaveBeenCalled()
  })

  it('should call push method', () => {
    const screen = render(
      <ClientRouter routes={[]}>
        <Link to="/">Label</Link>
      </ClientRouter>
    )
    const node = screen.container.querySelector('a')!
    fireEvent(node, createEvent.click(node))
  })

  it('should call redirect method', () => {
    const screen = render(
      <ClientRouter routes={[]}>
        <Link to="/">Label</Link>
      </ClientRouter>
    )
    const node = screen.container.querySelector('a')!
    window.open = jest.fn()
    fireEvent(node, createEvent.click(node, { metaKey: true }))
    expect(window.open).toHaveBeenCalled()
  })

  it('should call onClick and not history methods when prevented', () => {
    const onClick = jest.fn()
    const screen = render(
      <ClientRouter routes={[]}>
        <Link to="/" onClick={onClick}>Label</Link>
      </ClientRouter>
    )
    window.open = jest.fn()
    const node = screen.container.querySelector('a')!
    const event = createEvent.click(node)
    event.preventDefault()
    fireEvent(node, event)
    expect(onClick).toHaveBeenCalled()
    expect(window.open).not.toHaveBeenCalled()
  })

  it('should not call any of the methods when disabled', () => {
    const onClick = jest.fn()
    const screen = render(wrapTheme(
      <ClientRouter routes={[]}>
        <Link to="/" onClick={onClick} isDisabled={true}>Label</Link>
      </ClientRouter>
    ))
    window.open = jest.fn()
    const node = screen.container.querySelector('a')!
    fireEvent(node, createEvent.click(node))
    expect(onClick).not.toHaveBeenCalled()
    expect(window.open).not.toHaveBeenCalled()
  })
})

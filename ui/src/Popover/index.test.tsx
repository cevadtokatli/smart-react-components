import { wrapTheme } from '@smart-react-components/core/test'
import { createEvent, fireEvent, render } from '@testing-library/react'
import React from 'react'
import Popover from './'

describe('<Popover />', () => {
  let children

  beforeAll(() => {
    children = [
      <button key="button">Button</button>,
      <div key="popover">Popover</div>,
      <span key="header">Header</span>,
    ]
  })

  it('should render component when status true', () => {
    const { asFragment } = render(wrapTheme(<Popover status>{children}</Popover>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not render component when status false', () => {
    const { asFragment } = render(wrapTheme(<Popover status={false}>{children}</Popover>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setStatus when clicked on button', () => {
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<Popover status={false} setStatus={setStatus}>{children}</Popover>))
    const node = container.querySelector('button')!
    fireEvent(node, createEvent.click(node))
    expect(setStatus).toHaveBeenCalled()
  })
})

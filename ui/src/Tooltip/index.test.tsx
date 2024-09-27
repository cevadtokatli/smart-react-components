import { wrapTheme } from '@smart-react-components/core/test'
import { createEvent, fireEvent, render } from '@testing-library/react'
import React from 'react'
import Tooltip from './'

describe('<Tooltip />', () => {
  let children

  beforeAll(() => {
    children = [
      <button key="button">Button</button>,
      <div key="tooltip">Tooltip</div>,
    ]
  })

  it('should render component when status true', () => {
    const { asFragment } = render(wrapTheme(<Tooltip status>{children}</Tooltip>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not render component when status false', () => {
    const { asFragment } = render(wrapTheme(<Tooltip status={false}>{children}</Tooltip>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setStatus when clicked on button', () => {
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<Tooltip status={false} setStatus={setStatus}>{children}</Tooltip>))
    const node = container.querySelector('button')!
    fireEvent(node, createEvent.click(node))
    expect(setStatus).toHaveBeenCalled()
  })
})

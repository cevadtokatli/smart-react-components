import { wrapTheme } from '@smart-react-components/core/test'
import { createEvent, fireEvent, render } from '@testing-library/react'
import React from 'react'
import FixedBox from './'

describe('<FixedBox />', () => {
  let children

  beforeAll(() => {
    children = [
      <button key="button">Button</button>,
      <div key="box">Box</div>,
    ]
  })

  it('should render component when status true', () => {
    const { asFragment } = render(wrapTheme(<FixedBox status>{children}</FixedBox>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not render component when status false', () => {
    const { asFragment } = render(wrapTheme(<FixedBox status={false}>{children}</FixedBox>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call setStatus when clicked on button', () => {
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<FixedBox status={false} setStatus={setStatus}>{children}</FixedBox>))
    const node = container.querySelector('button')!
    fireEvent(node, createEvent.click(node))
    expect(setStatus).toHaveBeenCalled()
  })
})

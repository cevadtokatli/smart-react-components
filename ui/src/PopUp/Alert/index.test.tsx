import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Alert from './'

describe('<Alert />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Alert title="Title" message="Message" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call action and setStatus when button clicked on', () => {
    const action = jest.fn()
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<Alert message="Message" action={action} setStatus={setStatus} />))
    fireEvent.click(container.querySelector('button')!)
    expect(action).toHaveBeenCalled()
    expect(setStatus).toHaveBeenCalled()
  })
})

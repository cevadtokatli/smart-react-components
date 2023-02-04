import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Confirm from './'

describe('<Confirm />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Confirm title="Title" message="Message" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call action and setStatus when confirm button clicked on', () => {
    const action = jest.fn()
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<Confirm message="Message" action={action} setStatus={setStatus} />))
    fireEvent.click(container.querySelectorAll('button')[1]!)
    expect(action).toBeCalledWith(true)
    expect(setStatus).toHaveBeenCalled()
  })

  it('should call action and setStatus when cancel button clicked on', () => {
    const action = jest.fn()
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<Confirm message="Message" action={action} setStatus={setStatus} />))
    fireEvent.click(container.querySelectorAll('button')[0]!)
    expect(action).toBeCalledWith(false)
    expect(setStatus).toHaveBeenCalled()
  })
})

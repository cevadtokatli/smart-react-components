import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Prompt from './'

describe('<Prompt />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Prompt placeholder="Placeholder" title="Title" message="Message" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call action and setStatus when confirm button clicked on', () => {
    const action = jest.fn()
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<Prompt message="Message" action={action} setStatus={setStatus} />))
    fireEvent.change(container.querySelector('input')!, { target: { value: 'text' } })
    fireEvent.click(container.querySelectorAll('button')[1]!)
    expect(action).toBeCalledWith('text', true)
    expect(setStatus).toHaveBeenCalled()
  })

  it('should call action and setStatus when cancel button clicked on', () => {
    const action = jest.fn()
    const setStatus = jest.fn()
    const { container } = render(wrapTheme(<Prompt message="Message" action={action} setStatus={setStatus} />))
    fireEvent.change(container.querySelector('input')!, { target: { value: 'text' } })
    fireEvent.click(container.querySelectorAll('button')[0]!)
    expect(action).toBeCalledWith('text', false)
    expect(setStatus).toHaveBeenCalled()
  })
})

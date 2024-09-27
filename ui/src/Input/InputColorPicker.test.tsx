import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import InputColorPicker from './InputColorPicker'

describe('<InputColorPicker />', () => {
  it('should render component', async () => {
    const { asFragment, container } = render(wrapTheme(<InputColorPicker label="Label" setValue={jest.fn()} value="red" />))

    await waitFor(() => {
      fireEvent.click(container.querySelector('input')!)
    })

    expect(asFragment()).toMatchSnapshot()
  })
})

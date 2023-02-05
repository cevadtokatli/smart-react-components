import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render, waitFor } from '@testing-library/react' 
import React from 'react'
import ButtonSelect from './ButtonSelect'
import Option from '../Select/Option'
import OptionGroup from '../Select/OptionGroup'

describe('<SelectBox />', () => {
  it('should render component', async () => {
    const { asFragment, container } = render(wrapTheme(
      <ButtonSelect active="item-1" setActive={jest.fn()} placeholder="Placeholder">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </ButtonSelect>
    ))

    await waitFor(() => {
      fireEvent.click(container.querySelector('div')!)
    })
  
    expect(asFragment()).toMatchSnapshot()
  })
})

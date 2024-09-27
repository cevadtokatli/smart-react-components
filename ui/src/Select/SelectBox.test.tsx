import { wrapTheme } from '@smart-react-components/core/test'
import { fireEvent, render, waitFor } from '@testing-library/react' 
import React from 'react'
import SelectBox from './SelectBox'
import Option from './Option'
import OptionGroup from './OptionGroup'

describe('<SelectBox />', () => {
  it('should render component', async () => {
    const { asFragment, container } = render(wrapTheme(
      <SelectBox active="item-1" setActive={jest.fn()}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
    ))

    await waitFor(() => {
      fireEvent.click(container.querySelector('div')!)
    })
  
    expect(asFragment()).toMatchSnapshot()
  })
})

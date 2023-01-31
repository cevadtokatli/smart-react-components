import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Select from './'
import Option from './Option'
import OptionGroup from './OptionGroup'

describe('<Select />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <Select
        active="item-1"
        setActive={jest.fn()}
      >
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react' 
import React from 'react'
import Dropdown from './'
import DropdownCategory from './DropdownCategory'
import DropdownItem from './DropdownItem'
import DropdownList from './DropdownList'

describe('<Dropdown />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <Dropdown status>
        <button>Button</button>
        <DropdownList>
          <DropdownCategory label="Category">
            <DropdownItem>Item 1</DropdownItem>
            <DropdownItem>Item 2</DropdownItem>
            <DropdownItem>Item 3</DropdownItem>
          </DropdownCategory>
        </DropdownList>
      </Dropdown>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

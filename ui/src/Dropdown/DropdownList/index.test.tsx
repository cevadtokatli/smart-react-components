import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react' 
import React from 'react'
import DropdownList from './'
import DropdownCategory from '../DropdownCategory'
import DropdownItem from '../DropdownItem'

describe('<DropdownList />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <DropdownList>
        <DropdownCategory key="cat">Category</DropdownCategory>
        <DropdownItem key="item-1">Item 1</DropdownItem>
        <DropdownItem key="item-2">Item 2</DropdownItem>
        <DropdownItem key="item-3">Item 3</DropdownItem>
      </DropdownList>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

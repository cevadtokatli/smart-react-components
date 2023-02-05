import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import PaginationItem from './PaginationItem'
import PaginationList from './PaginationList'

describe('<PaginationList />', () => {
  it('should render component', () => {
    const { asFragment }= render(wrapTheme(
      <PaginationList>
        <PaginationItem>1</PaginationItem>
        <PaginationItem isDisabled>2</PaginationItem>
        <PaginationItem isActive>3</PaginationItem>
      </PaginationList>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

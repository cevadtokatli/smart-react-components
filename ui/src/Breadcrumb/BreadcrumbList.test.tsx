import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import BreadcrumbItem from './BreadcrumbItem'
import BreadcrumbList from './BreadcrumbList'

describe('<BreadcrumbList />', () => {
  it('should render component', () => {
    const { asFragment }= render(wrapTheme(
      <BreadcrumbList>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem isDisabled>Section</BreadcrumbItem>
        <BreadcrumbItem isActive>Item</BreadcrumbItem>
      </BreadcrumbList>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

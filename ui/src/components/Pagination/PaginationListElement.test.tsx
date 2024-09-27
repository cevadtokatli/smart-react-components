import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import PaginationListElement from './PaginationListElement'

describe('<PaginationListElement />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<PaginationListElement />))
    expect(asFragment()).toMatchSnapshot()
  })
})

import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react' 
import React from 'react'
import BadgeList from './BadgeList'
import Badge from './'

describe('<BadgeList />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <BadgeList>
        <Badge key="item-1">Item 1</Badge>
        <Badge key="item-2">Item 2</Badge>
        <Badge key="item-3">Item 3</Badge>
      </BadgeList>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

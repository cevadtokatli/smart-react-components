import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import BadgeListElement from './BadgeListElement'

describe('<BadgeListElement />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<BadgeListElement badgeListSize="medium" hasSpace />))
    expect(asFragment()).toMatchSnapshot()
  })
})

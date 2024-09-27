import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Badge from './'
import BadgeIcon from './BadgeIcon'

describe('<Badge />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <Badge>
        <BadgeIcon><svg /></BadgeIcon>
        <span>Content</span>
        <BadgeIcon><svg /></BadgeIcon>
      </Badge>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

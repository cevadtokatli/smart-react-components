import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import { Position } from '../../types'
import BadgeElement, { Content } from './BadgeElement'

describe('<BadgeElement />', () => {
  let props

  beforeAll(() => {
    props = {
      badgeOffset: 10,
      badgePosition: Position.RIGHT,
      badgeSize: 'medium',
      hasIconLeft: false,
      hasIconRight: false,
      hasSpace: false,
      isAbsolute: false,
      isClickable: true,
      isFixedSize: false,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props}><Content /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isOutline><Content /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isSoft><Content /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline with soft colors', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isOutline isSoft><Content /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} badgeSize="small" badgeSizeMd="medium" badgeSizeLg="large"><Content /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be fixed size', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isFixedSize><Content /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have space', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} hasSpace><Content /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be absolute', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isAbsolute><Content /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not be clickable', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isClickable={false}><Content /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })
})

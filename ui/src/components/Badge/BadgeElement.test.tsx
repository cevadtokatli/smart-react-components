import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import { Position } from '../../types'
import BadgeContent from './BadgeContent'
import BadgeElement from './BadgeElement'

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
    const { asFragment } = render(wrapTheme(<BadgeElement {...props}><BadgeContent /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isOutline><BadgeContent /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isSoft><BadgeContent /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline with soft colors', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isOutline isSoft><BadgeContent /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} badgeSize="small" badgeSizeMd="medium" badgeSizeLg="large"><BadgeContent /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be fixed size', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isFixedSize><BadgeContent /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have space', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} hasSpace><BadgeContent /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be absolute', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isAbsolute><BadgeContent /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not be clickable', () => {
    const { asFragment } = render(wrapTheme(<BadgeElement {...props} isClickable={false}><BadgeContent /></BadgeElement>))
    expect(asFragment()).toMatchSnapshot()
  })
})

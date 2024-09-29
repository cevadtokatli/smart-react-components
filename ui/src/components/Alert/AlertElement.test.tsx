import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import AlertContent from './AlertContent'
import AlertElement from './AlertElement'
import AlertIcon from '../../Alert/AlertIcon'

describe('<AlertElement />', () => {
  let props

  beforeAll(() => {
    props = {
      alertSize: 'medium',
      hasIconLeft: false,
      hasIconRight: false,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })
  
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<AlertElement {...props}><AlertContent /></AlertElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<AlertElement {...props} isOutline><AlertContent /></AlertElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<AlertElement {...props} isSoft><AlertContent /></AlertElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline with soft colors', () => {
    const { asFragment } = render(wrapTheme(<AlertElement {...props} isOutline isSoft><AlertContent /></AlertElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<AlertElement {...props} alertSize="small" alertSizeMd="medium" alertSizeLg="large"><AlertContent /></AlertElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have icons', () => {
    const iconProps = {
      alertPalette: props.palette,
      alertSize: props.alertSize,
      hasBackground: false,
      hasHover: false,
      isSoft: props.isSoft,
      palette: props.palette,
    }
    const { asFragment } = render(wrapTheme(
      <AlertElement {...props} hasIconLeft hasIconRight>
        <AlertIcon {...iconProps}><svg /></AlertIcon>
        <AlertContent>Content</AlertContent>
        <AlertIcon {...iconProps}><svg /></AlertIcon>
      </AlertElement>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

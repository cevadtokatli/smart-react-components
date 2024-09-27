import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonElement from './ButtonElement'
import ButtonContent from './ButtonContent'
import ButtonAddon from '../../Button/ButtonAddon'
import { OrderPosition } from '../../types'

describe('<Button />', () => {
  let props

  beforeAll(() => {
    props = {
      buttonSize: 'medium',
      hasButtonContainer: false,
      hasHover: true,
      hasLeftAddon: false,
      hasRightAddon: false,
      hasSeparatedLeftAddon: false,
      hasSeparatedRightAddon: false,
      isBlock: true,
      isDisabled: false,
      isFixedSize: false,
      isLink: false,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props}><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} isOutline><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} isSoft><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline with soft colors', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} isOutline isSoft><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component as link', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} isLink><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} buttonSize="small" buttonSizeMd="medium" buttonSizeLg="large"><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be fixed size', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} isFixedSize><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be block', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} isBlock><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be disabled', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} isDisabled><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })
  
  it('should be loading', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} isLoading><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have addon', () => {
    const { asFragment } = render(wrapTheme(
      <ButtonElement {...props} hasLeftAddon>
        <ButtonAddon
          palette="primary"
          {...{
            position: OrderPosition.LEFT,
            shape: 'rectangle',
          }}
        >Addon</ButtonAddon>
        <ButtonContent>Content</ButtonContent>
      </ButtonElement>
    ))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have separated addon', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} hasSeparatedRightAddon><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be under the button container', () => {
    const { asFragment } = render(wrapTheme(<ButtonElement {...props} hasButtonContainer><ButtonContent>Content</ButtonContent></ButtonElement>))
    expect(asFragment()).toMatchSnapshot()
  })
})

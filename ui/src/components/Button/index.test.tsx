import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Button from './'
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
    const { asFragment } = render(wrapTheme(<Button {...props}><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} isOutline><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} isSoft><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component outline with soft colors', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} isOutline isSoft><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component as link', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} isLink><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} buttonSize="small" buttonSizeMd="medium" buttonSizeLg="large"><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be fixed size', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} isFixedSize><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be block', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} isBlock><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be disabled', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} isDisabled><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })
  
  it('should be loading', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} isLoading><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have addon', () => {
    const { asFragment } = render(wrapTheme(
      <Button {...props} hasLeftAddon>
        <ButtonAddon
          palette="primary"
          {...{
            position: OrderPosition.LEFT,
            shape: 'rectangle',
          }}
        >Addon</ButtonAddon>
        <ButtonContent>Content</ButtonContent>
      </Button>
    ))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have separated addon', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} hasSeparatedRightAddon><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be under the button container', () => {
    const { asFragment } = render(wrapTheme(<Button {...props} hasButtonContainer><ButtonContent>Content</ButtonContent></Button>))
    expect(asFragment()).toMatchSnapshot()
  })
})

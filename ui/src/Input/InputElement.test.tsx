import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import InputElement from './InputElement'

describe('<InputElement />', () => {
  let props

  beforeAll(() => {
    props = {
      hasBorder: true,
      hasLeftAddon: false,
      hasRightAddon: false,
      hasSeparatedLeftAddon: false,
      hasSeparatedRightAddon: false,
      inputSize: 'medium',
      isDisabled: false,
      isFocused: false,
      isOutline: true,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<InputElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

    it('should render component focused', () => {
    const { asFragment } = render(wrapTheme(<InputElement {...props} isFocused />))
    expect(asFragment()).toMatchSnapshot()
  })

    it('should render component disabled', () => {
    const { asFragment } = render(wrapTheme(<InputElement {...props} isDisabled />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render not outline', () => {
    const { asFragment } = render(wrapTheme(<InputElement {...props} isOutline={false} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render with soft colors', () => {
    const { asFragment } = render(wrapTheme(<InputElement {...props} isOutline={false} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<InputElement {...props} inputSize="small" inputSizeMd="medium" inputSizeLg="large" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have left addon', () => {
    const { asFragment } = render(wrapTheme(<InputElement {...props} hasLeftAddon />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have separated left addon', () => {
    const { asFragment } = render(wrapTheme(<InputElement {...props} hasLeftAddon hasSeparatedLeftAddon />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have right addon', () => {
    const { asFragment } = render(wrapTheme(<InputElement {...props} hasRightAddon />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have separated right addon', () => {
    const { asFragment } = render(wrapTheme(<InputElement {...props} hasRightAddon hasSeparatedRightAddon />))
    expect(asFragment()).toMatchSnapshot()
  })
})

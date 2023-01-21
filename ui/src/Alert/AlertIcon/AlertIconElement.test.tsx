import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import AlertIconElement from './AlertIconElement'

describe('<AlertIconElement />', () => {
  let props

  beforeAll(() => {
    props = {
      alertPalette: 'primary',
      alertSize: 'medium',
      hasBackground: false,
      hasHover: false,
      isSoft: false,
      palette: 'primary',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<AlertIconElement {...props} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(<AlertIconElement {...props} isSoft />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should resize component responsively', () => {
    const { asFragment } = render(wrapTheme(<AlertIconElement {...props} alertSize="small" alertSizeMd="medium" alertSizeLg="large" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render different palette from alert', () => {
    const { asFragment } = render(wrapTheme(<AlertIconElement {...props} palette="light" />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have background', () => {
    const { asFragment } = render(wrapTheme(<AlertIconElement {...props} hasBackground />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have hover effect', () => {
    const { asFragment } = render(wrapTheme(<AlertIconElement {...props} hasHover />))
    expect(asFragment()).toMatchSnapshot()
  })
})

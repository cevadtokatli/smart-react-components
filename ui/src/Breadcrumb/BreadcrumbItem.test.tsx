import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import BreadcrumbItem from './BreadcrumbItem'

describe('<BreadcrumbItem />', () => {
  let props

  beforeAll(() => [
    props = {
      hasWaveEffect: true,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      separator: null,
      shape: 'rectangle',
      waveEffectPalette: 'light',
    }
  ])

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <BreadcrumbItem {...props}>Breadcrumb Item</BreadcrumbItem>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

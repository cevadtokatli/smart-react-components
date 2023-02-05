import { wrapTheme } from '@smart-react-components/core/test'
import ClientRouter from '@smart-react-components/router/ClientRouter'
import { render } from '@testing-library/react'
import React from 'react'
import BreadcrumbLink from './BreadcrumbLink'

describe('<BreadcrumbLink />', () => {
  let props

  beforeAll(() => {
    props = {
      hasWaveEffect: true,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      separator: null,
      shape: 'rectangle',
      to: '/',
      waveEffectPalette: 'light',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <ClientRouter routes={[]}>
        <BreadcrumbLink {...props}>Home</BreadcrumbLink>
      </ClientRouter>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

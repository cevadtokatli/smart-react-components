import { wrapTheme } from '@smart-react-components/core/test'
import ClientRouter from '@smart-react-components/router/ClientRouter'
import { render } from '@testing-library/react'
import React from 'react'
import PaginationLink from './PaginationLink'

describe('<PaginationLink />', () => {
  let props

  beforeAll(() => {
    props = {
      hasWaveEffect: true,
      isFixedSize: false,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
      to: '/',
      waveEffectPalette: 'light',
    }
  })

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <ClientRouter routes={[]}>
        <PaginationLink {...props}>1</PaginationLink>
      </ClientRouter>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

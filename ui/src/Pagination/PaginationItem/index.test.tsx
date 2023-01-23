import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import PaginationItem from './'

describe('<PaginationItem />', () => {
  let props

  beforeAll(() => [
    props = {
      hasWaveEffect: true,
      isFixedSize: false,
      isOutline: false,
      isSoft: false,
      palette: 'primary',
      shape: 'rectangle',
      waveEffectPalette: 'light',
    }
  ])

  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <PaginationItem {...props}>Pagination Item</PaginationItem>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

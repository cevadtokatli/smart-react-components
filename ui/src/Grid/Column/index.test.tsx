import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Column from './'

describe('<Column />', () => {
  it('should render component with default props', () => {
    const { asFragment } = render(wrapTheme(<Column  />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should add col prop styles', () => {
    const { asFragment } = render(wrapTheme(<Column col={12} colSm={6} colXl={3}  />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should add pos prop styles', () => {
    const { asFragment } = render(wrapTheme(<Column pos={0} posSm={-6} posXl={3}  />))
    expect(asFragment()).toMatchSnapshot()
  })
})

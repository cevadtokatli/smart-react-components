import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ProgressBar from './'

describe('<ProgressBar />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<ProgressBar value={50} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should display value', () => {
    const { asFragment } = render(wrapTheme(<ProgressBar displayValue value={50} />))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should calculate percentage by total value', () => {
    const { asFragment } = render(wrapTheme(<ProgressBar displayValue value={100} totalValue={1000}  suffix="" />))
    expect(asFragment()).toMatchSnapshot()
  })
})

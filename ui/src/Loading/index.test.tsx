import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Loading from './'

describe('<Loading />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Loading />))
    expect(asFragment()).toMatchSnapshot()
  })
})

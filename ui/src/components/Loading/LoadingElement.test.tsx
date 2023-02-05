import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import LoadingElement from './LoadingElement'

describe('<LoadingElement />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <LoadingElement
        loadingColor="$color.blue"
        loadingSize="small"
        loadingSizeSm="medium"
        loadingSizeMd="large"
      />
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

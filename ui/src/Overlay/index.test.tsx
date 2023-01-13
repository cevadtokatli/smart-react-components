import { render } from '@testing-library/react'
import { wrapTheme } from '@smart-react-components/core/test'
import React from 'react'
import Overlay from './'

describe('<Overlay />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Overlay><div>Overlay</div></Overlay>))
    expect(asFragment()).toMatchSnapshot()
  })
})

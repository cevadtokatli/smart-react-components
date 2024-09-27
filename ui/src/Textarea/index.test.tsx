import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Textarea from './'

describe('<Textarea />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Textarea />))
    expect(asFragment()).toMatchSnapshot()
  })
})

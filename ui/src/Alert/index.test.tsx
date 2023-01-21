import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Alert from './'
import AlertIcon from './AlertIcon'

describe('<Alert />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <Alert>
        <AlertIcon><svg /></AlertIcon>
        <span>Content</span>
        <AlertIcon><svg /></AlertIcon>
      </Alert>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

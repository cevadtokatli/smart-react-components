import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Switch from './'

describe('<Switch />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <Switch value="value" active={['value']} setActive={jest.fn()} label="Label" />
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import InputNumber from './'

describe('<InputNumber />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <InputNumber
        label="Label"
        value={1}
      />
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

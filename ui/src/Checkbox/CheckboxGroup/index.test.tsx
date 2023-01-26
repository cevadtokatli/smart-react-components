import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import CheckboxGroup from './'
import Checkbox from '../'

describe('<CheckboxGroup />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <CheckboxGroup active={['item-1']} setActive={jest.fn()}>
        <Checkbox value="item-1">Item 1</Checkbox>
        <Checkbox value="item-2">Item 2</Checkbox>
        <Checkbox value="item-3">Item 3</Checkbox>
      </CheckboxGroup>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

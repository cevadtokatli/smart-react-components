import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import CheckboxGroup from './CheckboxGroup'
import Checkbox from './'

describe('<CheckboxGroup />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <CheckboxGroup active={['item-1']} setActive={jest.fn()}>
        <Checkbox value="item-1" label="Item 1" />
        <Checkbox value="item-2" label="Item 2" />
        <Checkbox value="item-3" label="Item 3" />
      </CheckboxGroup>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

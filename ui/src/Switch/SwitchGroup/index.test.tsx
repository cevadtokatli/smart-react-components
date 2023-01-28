import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import SwitchGroup from './'
import Switch from '../'

describe('<SwitchGroup />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <SwitchGroup active={['item-1']} setActive={jest.fn()}>
        <Switch value="item-1" label="Item 1" />
        <Switch value="item-1" label="Item 2" />
        <Switch value="item-1" label="Item 3" />
      </SwitchGroup>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

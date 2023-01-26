import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import SwitchGroup from './'
import Switch from '../'

describe('<SwitchGroup />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <SwitchGroup active={['item-1']} setActive={jest.fn()}>
        <Switch value="item-1">Item 1</Switch>
        <Switch value="item-2">Item 2</Switch>
        <Switch value="item-3">Item 3</Switch>
      </SwitchGroup>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

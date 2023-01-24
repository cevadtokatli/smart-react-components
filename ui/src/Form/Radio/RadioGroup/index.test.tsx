import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import RadioGroup from './'
import Radio from '../'

describe('<Radio />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <RadioGroup active="item-1" setActive={jest.fn()}>
        <Radio value="item-1">Item 1</Radio>
        <Radio value="item-2">Item 2</Radio>
        <Radio value="item-3">Item 3</Radio>
      </RadioGroup>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import RadioGroup from './RadioGroup'
import Radio from './'

describe('<RadioGroup />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <RadioGroup active="item-1" setActive={jest.fn()}>
        <Radio value="item-1" label="Item 1" />
        <Radio value="item-2" label="Item 2" />
        <Radio value="item-3" label="Item 3" />
      </RadioGroup>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import A from './A'

describe('<A />', () => {
  it('should render a element', () => {
    const wrapper = shallow(<A />)
    expect(wrapper.first().type()).toEqual('a')
  })
})

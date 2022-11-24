import React from 'react'
import { shallow } from 'enzyme'
import Path from './Path'

describe('<Path />', () => {
  it('should render path element', () => {
    const wrapper = shallow(<Path />)
    expect(wrapper.first().type()).toEqual('path')
  })
})

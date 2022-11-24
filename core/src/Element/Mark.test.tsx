import React from 'react'
import { shallow } from 'enzyme'
import Mark from './Mark'

describe('<Mark />', () => {
  it('should render mark element', () => {
    const wrapper = shallow(<Mark />)
    expect(wrapper.first().type()).toEqual('mark')
  })
})

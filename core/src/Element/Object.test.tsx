import React from 'react'
import { shallow } from 'enzyme'
import Object from './Object'

describe('<Object />', () => {
  it('should render object element', () => {
    const wrapper = shallow(<Object />)
    expect(wrapper.first().type()).toEqual('object')
  })
})

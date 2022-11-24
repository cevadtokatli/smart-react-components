import React from 'react'
import { shallow } from 'enzyme'
import Dl from './Dl'

describe('<Dl />', () => {
  it('should render dl element', () => {
    const wrapper = shallow(<Dl />)
    expect(wrapper.first().type()).toEqual('dl')
  })
})

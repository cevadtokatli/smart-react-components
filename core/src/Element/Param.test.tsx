import React from 'react'
import { shallow } from 'enzyme'
import Param from './Param'

describe('<Param />', () => {
  it('should render param element', () => {
    const wrapper = shallow(<Param />)
    expect(wrapper.first().type()).toEqual('param')
  })
})

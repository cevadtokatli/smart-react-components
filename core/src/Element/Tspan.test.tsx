import React from 'react'
import { shallow } from 'enzyme'
import Tspan from './Tspan'

describe('<Tspan />', () => {
  it('should render tspan element', () => {
    const wrapper = shallow(<Tspan />)
    expect(wrapper.first().type()).toEqual('tspan')
  })
})

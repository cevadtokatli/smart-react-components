import React from 'react'
import { shallow } from 'enzyme'
import Circle from './Circle'

describe('<Circle />', () => {
  it('should render circle element', () => {
    const wrapper = shallow(<Circle />)
    expect(wrapper.first().type()).toEqual('circle')
  })
})

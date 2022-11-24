import React from 'react'
import { shallow } from 'enzyme'
import Line from './Line'

describe('<Line />', () => {
  it('should render line element', () => {
    const wrapper = shallow(<Line />)
    expect(wrapper.first().type()).toEqual('line')
  })
})

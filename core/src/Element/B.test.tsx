import React from 'react'
import { shallow } from 'enzyme'
import B from './B'

describe('<B />', () => {
  it('should render b element', () => {
    const wrapper = shallow(<B />)
    expect(wrapper.first().type()).toEqual('b')
  })
})

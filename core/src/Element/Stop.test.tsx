import React from 'react'
import { shallow } from 'enzyme'
import Stop from './Stop'

describe('<Stop />', () => {
  it('should render stop element', () => {
    const wrapper = shallow(<Stop />)
    expect(wrapper.first().type()).toEqual('stop')
  })
})

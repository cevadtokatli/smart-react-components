import React from 'react'
import { shallow } from 'enzyme'
import Polyline from './Polyline'

describe('<Polyline />', () => {
  it('should render polyline element', () => {
    const wrapper = shallow(<Polyline />)
    expect(wrapper.first().type()).toEqual('polyline')
  })
})

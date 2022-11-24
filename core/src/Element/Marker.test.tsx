import React from 'react'
import { shallow } from 'enzyme'
import Marker from './Marker'

describe('<Marker />', () => {
  it('should render marker element', () => {
    const wrapper = shallow(<Marker />)
    expect(wrapper.first().type()).toEqual('marker')
  })
})

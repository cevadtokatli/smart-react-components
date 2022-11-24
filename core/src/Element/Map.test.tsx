import React from 'react'
import { shallow } from 'enzyme'
import Map from './Map'

describe('<Map />', () => {
  it('should render map element', () => {
    const wrapper = shallow(<Map />)
    expect(wrapper.first().type()).toEqual('map')
  })
})

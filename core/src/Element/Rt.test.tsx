import React from 'react'
import { shallow } from 'enzyme'
import Rt from './Rt'

describe('<Rt />', () => {
  it('should render rt element', () => {
    const wrapper = shallow(<Rt />)
    expect(wrapper.first().type()).toEqual('rt')
  })
})

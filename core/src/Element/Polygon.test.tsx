import React from 'react'
import { shallow } from 'enzyme'
import Polygon from './Polygon'

describe('<Polygon />', () => {
  it('should render polygon element', () => {
    const wrapper = shallow(<Polygon />)
    expect(wrapper.first().type()).toEqual('polygon')
  })
})

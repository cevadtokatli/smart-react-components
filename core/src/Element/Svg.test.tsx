import React from 'react'
import { shallow } from 'enzyme'
import Svg from './Svg'

describe('<Svg />', () => {
  it('should render svg element', () => {
    const wrapper = shallow(<Svg />)
    expect(wrapper.first().type()).toEqual('svg')
  })
})

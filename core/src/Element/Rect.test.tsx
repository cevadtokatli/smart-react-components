import React from 'react'
import { shallow } from 'enzyme'
import Rect from './Rect'

describe('<Rect />', () => {
  it('should render rect element', () => {
    const wrapper = shallow(<Rect />)
    expect(wrapper.first().type()).toEqual('rect')
  })
})

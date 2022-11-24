import React from 'react'
import { shallow } from 'enzyme'
import Ellipse from './Ellipse'

describe('<Ellipse />', () => {
  it('should render ellipse element', () => {
    const wrapper = shallow(<Ellipse />)
    expect(wrapper.first().type()).toEqual('ellipse')
  })
})

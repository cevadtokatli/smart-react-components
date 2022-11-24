import React from 'react'
import { shallow } from 'enzyme'
import Embed from './Embed'

describe('<Embed />', () => {
  it('should render embed element', () => {
    const wrapper = shallow(<Embed />)
    expect(wrapper.first().type()).toEqual('embed')
  })
})

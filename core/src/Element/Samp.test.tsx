import React from 'react'
import { shallow } from 'enzyme'
import Samp from './Samp'

describe('<Samp />', () => {
  it('should render samp element', () => {
    const wrapper = shallow(<Samp />)
    expect(wrapper.first().type()).toEqual('samp')
  })
})

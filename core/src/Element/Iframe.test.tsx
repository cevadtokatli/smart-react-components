import React from 'react'
import { shallow } from 'enzyme'
import Iframe from './Iframe'

describe('<Iframe />', () => {
  it('should render iframe element', () => {
    const wrapper = shallow(<Iframe />)
    expect(wrapper.first().type()).toEqual('iframe')
  })
})

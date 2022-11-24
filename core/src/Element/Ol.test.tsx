import React from 'react'
import { shallow } from 'enzyme'
import Ol from './Ol'

describe('<Ol />', () => {
  it('should render ol element', () => {
    const wrapper = shallow(<Ol />)
    expect(wrapper.first().type()).toEqual('ol')
  })
})

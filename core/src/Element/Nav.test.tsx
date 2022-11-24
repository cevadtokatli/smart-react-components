import React from 'react'
import { shallow } from 'enzyme'
import Nav from './Nav'

describe('<Nav />', () => {
  it('should render nav element', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.first().type()).toEqual('nav')
  })
})

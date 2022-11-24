import React from 'react'
import { shallow } from 'enzyme'
import H3 from './H3'

describe('<H3 />', () => {
  it('should render h3 element', () => {
    const wrapper = shallow(<H3 />)
    expect(wrapper.first().type()).toEqual('h3')
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import Legend from './Legend'

describe('<Legend />', () => {
  it('should render legend element', () => {
    const wrapper = shallow(<Legend />)
    expect(wrapper.first().type()).toEqual('legend')
  })
})

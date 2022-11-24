import React from 'react'
import { shallow } from 'enzyme'
import Em from './Em'

describe('<Em />', () => {
  it('should render em element', () => {
    const wrapper = shallow(<Em />)
    expect(wrapper.first().type()).toEqual('em')
  })
})

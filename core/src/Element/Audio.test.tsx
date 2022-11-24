import React from 'react'
import { shallow } from 'enzyme'
import Audio from './Audio'

describe('<Audio />', () => {
  it('should render audio element', () => {
    const wrapper = shallow(<Audio />)
    expect(wrapper.first().type()).toEqual('audio')
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import Video from './Video'

describe('<Video />', () => {
  it('should render video element', () => {
    const wrapper = shallow(<Video />)
    expect(wrapper.first().type()).toEqual('video')
  })
})

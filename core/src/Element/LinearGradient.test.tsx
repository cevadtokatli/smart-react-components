import React from 'react'
import { shallow } from 'enzyme'
import LinearGradient from './LinearGradient'

describe('<LinearGradient />', () => {
  it('should render linearGradient element', () => {
    const wrapper = shallow(<LinearGradient />)
    expect(wrapper.first().type()).toEqual('linearGradient')
  })
})

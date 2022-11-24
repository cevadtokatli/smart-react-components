import React from 'react'
import { shallow } from 'enzyme'
import Pre from './Pre'

describe('<Pre />', () => {
  it('should render pre element', () => {
    const wrapper = shallow(<Pre />)
    expect(wrapper.first().type()).toEqual('pre')
  })
})

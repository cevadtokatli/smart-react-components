import React from 'react'
import { shallow } from 'enzyme'
import Picture from './Picture'

describe('<Picture />', () => {
  it('should render picture element', () => {
    const wrapper = shallow(<Picture />)
    expect(wrapper.first().type()).toEqual('picture')
  })
})

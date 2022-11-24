import React from 'react'
import { shallow } from 'enzyme'
import U from './U'

describe('<U />', () => {
  it('should render u element', () => {
    const wrapper = shallow(<U />)
    expect(wrapper.first().type()).toEqual('u')
  })
})

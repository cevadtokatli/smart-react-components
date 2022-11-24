import React from 'react'
import { shallow } from 'enzyme'
import G from './G'

describe('<G />', () => {
  it('should render g element', () => {
    const wrapper = shallow(<G />)
    expect(wrapper.first().type()).toEqual('g')
  })
})

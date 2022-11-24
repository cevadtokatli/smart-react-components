import React from 'react'
import { shallow } from 'enzyme'
import Th from './Th'

describe('<Th />', () => {
  it('should render th element', () => {
    const wrapper = shallow(<Th />)
    expect(wrapper.first().type()).toEqual('th')
  })
})

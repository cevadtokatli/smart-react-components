import React from 'react'
import { shallow } from 'enzyme'
import Td from './Td'

describe('<Td />', () => {
  it('should render td element', () => {
    const wrapper = shallow(<Td />)
    expect(wrapper.first().type()).toEqual('td')
  })
})

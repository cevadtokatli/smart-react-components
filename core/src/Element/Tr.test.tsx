import React from 'react'
import { shallow } from 'enzyme'
import Tr from './Tr'

describe('<Tr />', () => {
  it('should render tr element', () => {
    const wrapper = shallow(<Tr />)
    expect(wrapper.first().type()).toEqual('tr')
  })
})

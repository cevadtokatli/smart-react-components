import React from 'react'
import { shallow } from 'enzyme'
import Rp from './Rp'

describe('<Rp />', () => {
  it('should render rp element', () => {
    const wrapper = shallow(<Rp />)
    expect(wrapper.first().type()).toEqual('rp')
  })
})

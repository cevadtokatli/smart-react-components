import React from 'react'
import { shallow } from 'enzyme'
import Defs from './Defs'

describe('<Defs />', () => {
  it('should render defs element', () => {
    const wrapper = shallow(<Defs />)
    expect(wrapper.first().type()).toEqual('defs')
  })
})

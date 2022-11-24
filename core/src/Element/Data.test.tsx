import React from 'react'
import { shallow } from 'enzyme'
import Data from './Data'

describe('<Data />', () => {
  it('should render data element', () => {
    const wrapper = shallow(<Data />)
    expect(wrapper.first().type()).toEqual('data')
  })
})

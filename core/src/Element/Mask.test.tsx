import React from 'react'
import { shallow } from 'enzyme'
import Mask from './Mask'

describe('<Mask />', () => {
  it('should render mask element', () => {
    const wrapper = shallow(<Mask />)
    expect(wrapper.first().type()).toEqual('mask')
  })
})

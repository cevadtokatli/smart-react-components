import React from 'react'
import { shallow } from 'enzyme'
import Var from './Var'

describe('<Var />', () => {
  it('should render var element', () => {
    const wrapper = shallow(<Var />)
    expect(wrapper.first().type()).toEqual('var')
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import Optgroup from './Optgroup'

describe('<Optgroup />', () => {
  it('should render optgroup element', () => {
    const wrapper = shallow(<Optgroup />)
    expect(wrapper.first().type()).toEqual('optgroup')
  })
})

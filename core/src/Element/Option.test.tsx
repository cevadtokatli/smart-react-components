import React from 'react'
import { shallow } from 'enzyme'
import Option from './Option'

describe('<Option />', () => {
  it('should render option element', () => {
    const wrapper = shallow(<Option />)
    expect(wrapper.first().type()).toEqual('option')
  })
})

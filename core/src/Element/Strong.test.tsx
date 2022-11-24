import React from 'react'
import { shallow } from 'enzyme'
import Strong from './Strong'

describe('<Strong />', () => {
  it('should render strong element', () => {
    const wrapper = shallow(<Strong />)
    expect(wrapper.first().type()).toEqual('strong')
  })
})

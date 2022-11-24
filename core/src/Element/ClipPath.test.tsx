import React from 'react'
import { shallow } from 'enzyme'
import ClipPath from './ClipPath'

describe('<ClipPath />', () => {
  it('should render clipPath element', () => {
    const wrapper = shallow(<ClipPath />)
    expect(wrapper.first().type()).toEqual('clipPath')
  })
})

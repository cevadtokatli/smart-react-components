import React from 'react'
import { shallow } from 'enzyme'
import Image from './Image'

describe('<Image />', () => {
  it('should render image element', () => {
    const wrapper = shallow(<Image />)
    expect(wrapper.first().type()).toEqual('image')
  })
})

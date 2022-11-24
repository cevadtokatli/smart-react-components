import React from 'react'
import { shallow } from 'enzyme'
import Del from './Del'

describe('<Del />', () => {
  it('should render del element', () => {
    const wrapper = shallow(<Del />)
    expect(wrapper.first().type()).toEqual('del')
  })
})

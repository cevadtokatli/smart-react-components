import React from 'react'
import { shallow } from 'enzyme'
import Source from './Source'

describe('<Source />', () => {
  it('should render source element', () => {
    const wrapper = shallow(<Source />)
    expect(wrapper.first().type()).toEqual('source')
  })
})

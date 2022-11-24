import React from 'react'
import { shallow } from 'enzyme'
import H2 from './H2'

describe('<H2 />', () => {
  it('should render h2 element', () => {
    const wrapper = shallow(<H2 />)
    expect(wrapper.first().type()).toEqual('h2')
  })
})

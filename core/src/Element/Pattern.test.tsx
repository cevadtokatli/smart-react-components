import React from 'react'
import { shallow } from 'enzyme'
import Pattern from './Pattern'

describe('<Pattern />', () => {
  it('should render pattern element', () => {
    const wrapper = shallow(<Pattern />)
    expect(wrapper.first().type()).toEqual('pattern')
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import Col from './Col'

describe('<Col />', () => {
  it('should render col element', () => {
    const wrapper = shallow(<Col />)
    expect(wrapper.first().type()).toEqual('col')
  })
})

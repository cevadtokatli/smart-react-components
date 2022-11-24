import React from 'react'
import { shallow } from 'enzyme'
import ForeignObject from './ForeignObject'

describe('<ForeignObject />', () => {
  it('should render foreignObject element', () => {
    const wrapper = shallow(<ForeignObject />)
    expect(wrapper.first().type()).toEqual('foreignObject')
  })
})

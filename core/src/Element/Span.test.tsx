import React from 'react'
import { shallow } from 'enzyme'
import Span from './Span'

describe('<Span />', () => {
  it('should render span element', () => {
    const wrapper = shallow(<Span />)
    expect(wrapper.first().type()).toEqual('span')
  })
})

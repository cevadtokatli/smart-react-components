import React from 'react'
import { shallow } from 'enzyme'
import Blockquote from './Blockquote'

describe('<Blockquote />', () => {
  it('should render blockquote element', () => {
    const wrapper = shallow(<Blockquote />)
    expect(wrapper.first().type()).toEqual('blockquote')
  })
})

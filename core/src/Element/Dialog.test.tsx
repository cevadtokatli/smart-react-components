import React from 'react'
import { shallow } from 'enzyme'
import Dialog from './Dialog'

describe('<Dialog />', () => {
  it('should render dialog element', () => {
    const wrapper = shallow(<Dialog />)
    expect(wrapper.first().type()).toEqual('dialog')
  })
})

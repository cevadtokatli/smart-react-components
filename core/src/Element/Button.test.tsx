import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button />', () => {
  it('should render button element', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.first().type()).toEqual('button')
  })
})

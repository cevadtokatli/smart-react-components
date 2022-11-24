import React from 'react'
import { shallow } from 'enzyme'
import Label from './Label'

describe('<Label />', () => {
  it('should render label element', () => {
    const wrapper = shallow(<Label />)
    expect(wrapper.first().type()).toEqual('label')
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import H5 from './H5'

describe('<H5 />', () => {
  it('should render h5 element', () => {
    const wrapper = shallow(<H5 />)
    expect(wrapper.first().type()).toEqual('h5')
  })
})

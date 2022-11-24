import React from 'react'
import { shallow } from 'enzyme'
import Caption from './Caption'

describe('<Caption />', () => {
  it('should render caption element', () => {
    const wrapper = shallow(<Caption />)
    expect(wrapper.first().type()).toEqual('caption')
  })
})

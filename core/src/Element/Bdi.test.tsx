import React from 'react'
import { shallow } from 'enzyme'
import Bdi from './Bdi'

describe('<Bdi />', () => {
  it('should render bdi element', () => {
    const wrapper = shallow(<Bdi />)
    expect(wrapper.first().type()).toEqual('bdi')
  })
})

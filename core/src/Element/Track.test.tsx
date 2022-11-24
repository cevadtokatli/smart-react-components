import React from 'react'
import { shallow } from 'enzyme'
import Track from './Track'

describe('<Track />', () => {
  it('should render track element', () => {
    const wrapper = shallow(<Track />)
    expect(wrapper.first().type()).toEqual('track')
  })
})

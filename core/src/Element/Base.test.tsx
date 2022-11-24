import React from 'react'
import { shallow } from 'enzyme'
import Base from './Base'

describe('<Base />', () => {
  it('should render base element', () => {
    const wrapper = shallow(<Base />)
    expect(wrapper.first().type()).toEqual('base')
  })
})

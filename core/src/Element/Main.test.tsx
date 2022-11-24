import React from 'react'
import { shallow } from 'enzyme'
import Main from './Main'

describe('<Main />', () => {
  it('should render main element', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.first().type()).toEqual('main')
  })
})

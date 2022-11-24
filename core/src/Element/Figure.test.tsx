import React from 'react'
import { shallow } from 'enzyme'
import Figure from './Figure'

describe('<Figure />', () => {
  it('should render figure element', () => {
    const wrapper = shallow(<Figure />)
    expect(wrapper.first().type()).toEqual('figure')
  })
})

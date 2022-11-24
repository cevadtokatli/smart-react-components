import React from 'react'
import { shallow } from 'enzyme'
import S from './S'

describe('<S />', () => {
  it('should render s element', () => {
    const wrapper = shallow(<S />)
    expect(wrapper.first().type()).toEqual('s')
  })
})

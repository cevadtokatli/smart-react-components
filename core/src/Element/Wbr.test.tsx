import React from 'react'
import { shallow } from 'enzyme'
import Wbr from './Wbr'

describe('<Wbr />', () => {
  it('should render wbr element', () => {
    const wrapper = shallow(<Wbr />)
    expect(wrapper.first().type()).toEqual('wbr')
  })
})

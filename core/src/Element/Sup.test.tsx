import React from 'react'
import { shallow } from 'enzyme'
import Sup from './Sup'

describe('<Sup />', () => {
  it('should render sup element', () => {
    const wrapper = shallow(<Sup />)
    expect(wrapper.first().type()).toEqual('sup')
  })
})

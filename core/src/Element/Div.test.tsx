import React from 'react'
import { shallow } from 'enzyme'
import Div from './Div'

describe('<Div />', () => {
  it('should render div element', () => {
    const wrapper = shallow(<Div />)
    expect(wrapper.first().type()).toEqual('div')
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import RadialGradient from './RadialGradient'

describe('<RadialGradient />', () => {
  it('should render radialGradient element', () => {
    const wrapper = shallow(<RadialGradient />)
    expect(wrapper.first().type()).toEqual('radialGradient')
  })
})

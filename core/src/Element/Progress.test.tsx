import React from 'react'
import { shallow } from 'enzyme'
import Progress from './Progress'

describe('<Progress />', () => {
  it('should render progress element', () => {
    const wrapper = shallow(<Progress />)
    expect(wrapper.first().type()).toEqual('progress')
  })
})

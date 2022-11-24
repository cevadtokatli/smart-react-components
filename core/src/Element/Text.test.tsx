import React from 'react'
import { shallow } from 'enzyme'
import Text from './Text'

describe('<Text />', () => {
  it('should render text element', () => {
    const wrapper = shallow(<Text />)
    expect(wrapper.first().type()).toEqual('text')
  })
})

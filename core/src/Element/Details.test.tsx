import React from 'react'
import { shallow } from 'enzyme'
import Details from './Details'

describe('<Details />', () => {
  it('should render details element', () => {
    const wrapper = shallow(<Details />)
    expect(wrapper.first().type()).toEqual('details')
  })
})

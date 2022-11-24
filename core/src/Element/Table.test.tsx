import React from 'react'
import { shallow } from 'enzyme'
import Table from './Table'

describe('<Table />', () => {
  it('should render table element', () => {
    const wrapper = shallow(<Table />)
    expect(wrapper.first().type()).toEqual('table')
  })
})

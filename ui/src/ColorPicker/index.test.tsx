import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ColorPicker from './'

describe('<ColorPicker />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(wrapTheme(<ColorPicker value="red" setValue={jest.fn()} />))
    expect(asFragment()).toMatchSnapshot()
  })
})

import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Button from './'
import ButtonAddon from './ButtonAddon'

describe('<Button />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(<Button>Content</Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have addon', () => {
    const { asFragment } = render(wrapTheme(<Button leftAddon={<span>Left Addon</span>}>Content</Button>))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have separated addon', () => {
    const { asFragment } = render(wrapTheme(<Button rightAddon={<ButtonAddon isSeparated>Separated Right Addon</ButtonAddon>}>Content</Button>))
    expect(asFragment()).toMatchSnapshot()
  })
})

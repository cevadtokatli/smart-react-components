import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonList from './ButtonList'
import Button from './'

describe('<ButtonList />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <ButtonList>
        <Button>Button-1</Button>
        <Button>Button-2</Button>
        <Button>Button-3</Button>
      </ButtonList>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

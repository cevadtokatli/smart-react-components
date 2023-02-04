import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonGroup from './'
import Button from '../'

describe('<ButtonGroup />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <ButtonGroup>
        <Button>Button-1</Button>
        <Button>Button-2</Button>
        <Button>Button-3</Button>
      </ButtonGroup>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

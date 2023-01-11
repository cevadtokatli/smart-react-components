import { wrapTheme } from '@smart-react-components/core/test'
import { act, createEvent, fireEvent, render, waitFor } from '@testing-library/react' 
import React from 'react'
import WaveEffect from './'

describe('<WaveEffect />', () => {
  let Component

  beforeAll(() => {
    Component = () => <WaveEffect><div>Wave Effect</div></WaveEffect>
  })

  it('should render wave effect', async () => {
    const { container, asFragment, rerender } = render(wrapTheme(<Component />))
    const node = container.querySelector('div')!

    await waitFor(() => {
      fireEvent(node, createEvent.mouseDown(node))
    })

    rerender(wrapTheme(<Component />))

    expect(asFragment()).toMatchSnapshot()
  })

  it('should not render wave effect', () => {
    const { asFragment } = render(wrapTheme(<Component />))
    expect(asFragment()).toMatchSnapshot()
  })
})

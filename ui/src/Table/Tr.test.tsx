import { wrapTheme } from '@smart-react-components/core/test'
import { render } from '@testing-library/react'
import React from 'react'
import Tr from './Tr'

describe('<Tr />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <table>
        <tbody>
          <Tr  palette="light" hasHover />
        </tbody>
      </table>
    ))
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render component with soft colors', () => {
    const { asFragment } = render(wrapTheme(
      <table>
        <tbody>
          <Tr  palette="light" hasHover isSoft />
        </tbody>
      </table>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

import { wrapTheme } from '@smart-react-components/core/test'
import { ClientRouter } from '@smart-react-components/router'
import { render } from '@testing-library/react'
import React from 'react'
import ButtonLink from './'

describe('<ButtonLink />', () => {
  it('should render component', () => {
    const { asFragment } = render(wrapTheme(
      <ClientRouter routes={[]}>
          <ButtonLink to="/link">Link</ButtonLink>
      </ClientRouter>
    ))
    expect(asFragment()).toMatchSnapshot()
  })
})

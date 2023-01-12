import { Div } from '@smart-react-components/core'
import { Loading } from '@smart-react-components/ui'
import React from 'react'

export const Color = () => (
  <Div display="flex" flexWrap="wrap">
      <Loading marginRight="$length.3" marginBottom="$length.3" />
      <Loading color="!secondary" marginRight="$length.3" marginBottom="$length.3" />
      <Loading color="!success" marginRight="$length.3" marginBottom="$length.3" />
      <Loading color="!danger" marginRight="$length.3" marginBottom="$length.3" />
      <Loading color="!warning" marginRight="$length.3" marginBottom="$length.3" />
      <Loading color="!info" marginRight="$length.3" marginBottom="$length.3" />
      <Loading color="!light" marginRight="$length.3" marginBottom="$length.3" />
      <Loading color="!dark" marginRight="$length.3" marginBottom="$length.3" />
  </Div>
)

export const Size = () => (
  <Div display="flex" flexWrap="wrap">
    <Loading size="small" marginRight="$length.3" marginBottom="$length.3" />
    <Loading marginRight="$length.3" marginBottom="$length.3" />
    <Loading size="large" marginRight="$length.3" marginBottom="$length.3" />
  </Div>
)

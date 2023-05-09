import Td from '@smart-react-components/core/Element/Td'
import { StyledProps } from '@smart-react-components/core/styled-props'
import React from 'react'
import styled from 'styled-components'

interface Props extends StyledProps {
  isEmpty?: boolean
}

export default styled(Td).attrs<Props>(({ isEmpty }) => ({
  ...(isEmpty && { children: <>&nbsp;</> }),
}))<Props>(({ isEmpty }) => `
  ${isEmpty
    ? `
      user-select: none;
    `
    : ''
  }
`)

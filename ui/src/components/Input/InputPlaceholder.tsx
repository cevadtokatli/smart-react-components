import Div from '@smart-react-components/core/Element/Div'
import React from 'react'
import styled from 'styled-components'

export default styled(Div).attrs<{ children?: string }>(({ children }) => ({
  ...(!children && { children: <>&nbsp;</>, userSelect: 'none' }),
}))``

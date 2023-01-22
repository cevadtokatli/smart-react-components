import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends
  StyledProps,
  ResponsiveProp<'badgeListSize', SizeProp> {
  hasSpace: boolean
}

export default styled(Div).attrs<Props>(({ hasSpace }: Props) => ({
  getBadgeListSize: (v, t) => `
    ${hasSpace
      ? `
        margin -${t.$.size.badge[v].margin.y} -${t.$.size.badge[v].margin.x};
      `
      : ''
    }
  `,
}))<Props>`
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
`

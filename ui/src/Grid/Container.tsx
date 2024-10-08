import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'

export default styled(Div).attrs<StyledProps>(
  ({
    marginHorizontal = 'auto',
    paddingHorizontal = '$length.grid.space',
    maxWidth = '100%',
    maxWidthSm = '{length.grid.containerWidth.small}px',
    maxWidthMd = '{length.grid.containerWidth.medium}px',
    maxWidthLg = '{length.grid.containerWidth.large}px',
    maxWidthXl = '{length.grid.containerWidth.xlarge}px',
  }) => ({ marginHorizontal, paddingHorizontal, maxWidth, maxWidthSm, maxWidthMd, maxWidthLg, maxWidthXl }),
)<StyledProps>`
  box-sizing: border-box;
`

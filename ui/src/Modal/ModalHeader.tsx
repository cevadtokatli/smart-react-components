import Header from '@smart-react-components/core/Element/Header'
import Svg from '@smart-react-components/core/Element/Svg'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'

interface Props extends StyledProps {
  hasBorder?: boolean
}

export default styled(Header)<Props>(({ theme, hasBorder = true }: Props) => `
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;

  ${hasBorder
    ? `
      border-bottom: solid 1px ${theme.$.color.dynamic.accent};
    `
    : ''
  }

  > ${Svg} {
    box-sizing: content-box;
    cursor: ${theme.$.cursor.modalHeaderIcon};
    flex: 0 0 auto;
    opacity: .5;

    &:hover {
      opacity: 1;
    }
  }
`)

import Footer from '@smart-react-components/core/Element/Footer'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'
import ButtonList from '../../components/Button/ButtonList'

interface Props extends StyledProps {
  hasBorder?: boolean
}

export default styled(Footer)<Props>(({ theme, hasBorder = true }: Props) => `
  flex: 0 0 auto;

  ${hasBorder
    ? `
      border-top: solid 1px ${theme.$.color.dynamic.accent};
    `
    : ''
  }

  ${ButtonList} {
    justify-content: flex-end;
  }
`)

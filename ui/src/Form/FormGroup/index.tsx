import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'

interface Props extends StyledProps {
  isBlock: boolean
}

export default styled(Div)<Props>(({ isBlock }: Props) => `
  ${!isBlock
    ? `
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;  
    `
    : ''
  }
`)

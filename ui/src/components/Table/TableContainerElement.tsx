import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'

interface Props extends StyledProps {
  styled: string
}

export default styled(Div)<Props>(({ styled }) => `
  position: relative;

  ${styled}
`)

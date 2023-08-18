import Th from '@smart-react-components/core/Element/Th'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'

export default styled(Th).attrs<StyledProps>(({ textAlign = 'left' }) => ({ textAlign }))<StyledProps>``

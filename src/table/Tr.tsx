import styled from "styled-components"
import ElementProps from "../element/Props"
import Tr from "../element/Tr"

export interface Props extends ElementProps {
    type?: string
}

export default styled(Tr)<Props>`
    ${({theme,type}) => type && `
        & > * {
            border-color: ${theme.src.type[type].table.border} !important;
            background: ${theme.src.type[type].table.background} !important;
            color: ${theme.src.type[type].table.font} !important; 
        }

        thead > & > * {
            background: ${theme.src.type[type].table.stripedBackground} !important;
            color: ${theme.src.type[type].table.stripedFont} !important; 
        }
    `}
`
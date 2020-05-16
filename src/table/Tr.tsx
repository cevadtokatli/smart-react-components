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

        thead > & > *:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
            background: ${theme.src.type[type].table.striped} !important;
        }
    `}
`
import styled from "styled-components"
import ElementProps from "../element/Props"
import Td  from "../element/Td"

export interface Props extends ElementProps {
    empty?: boolean
}

export default styled(Td)<Props>`
    box-sizing: border-box;
    word-wrap: break-word;
    word-break: break-word;

    ${({empty}) => empty && `
        width: 0 !important;
        height: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        border: 0 !important;
    `}
`
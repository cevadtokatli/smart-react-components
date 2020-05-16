import styled from "styled-components"
import ElementProps from "../element/Props"
import Tfoot from "../element/Tfoot"

export interface Props extends ElementProps {
    borderless?: boolean
}

export default styled(Tfoot)<Props>`
    ${({borderless}) => borderless && `
        > tr > * {
            border-top-width: 0;
            border-bottom-width: 0;
        }
    `}
`
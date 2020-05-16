import styled from "styled-components"
import ElementProps from "../element/Props"
import Thead from "../element/Thead"

export interface Props extends ElementProps {
    borderless?: boolean
}

export default styled(Thead)<Props>`
    ${({borderless}) => borderless && `
        > tr > * {
            border-top-width: 0;
            border-bottom-width: 0;
        }
    `}
`
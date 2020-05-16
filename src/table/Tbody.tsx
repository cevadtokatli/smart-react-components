import styled from "styled-components"
import ElementProps from "../element/Props"
import Tbody from "../element/Tbody"

export interface Props extends ElementProps {
    borderless?: boolean
}

export default styled(Tbody)<Props>`
    ${({borderless}) => borderless && `
        > tr > * {
            border-top-width: 0;
            border-bottom-width: 0;
        }
    `}
`
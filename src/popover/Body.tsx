import styled from "styled-components"
import Div from "../element/Div"
import Props from "../element/Props"

export default styled(Div).attrs<Props>(({className=""}) => ({
    className: `${className} src-popover-body`
}))<Props>`
    box-sizing: border-box;
`
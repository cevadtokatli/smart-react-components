import styled from "styled-components"
import Div from "../element/Div"
import Props from "../element/Props"

export default styled(Div).attrs<Props>(({theme,mx}) => ({
    mx: typeof mx === "undefined" ? `-${theme.src.grid.columnGap}` : mx
}))<Props>`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`
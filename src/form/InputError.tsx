import styled from "styled-components"
import Div from "../element/Div"
import Props from "../element/Props"

export default styled(Div).attrs<Props>(({theme}) => ({
    mt: "2",
    color: theme.src.type.danger.main
}))``
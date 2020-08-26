import styled from "styled-components"
import Div from "../element/Div"

export default styled(Div).attrs({
    mt: "2"
})(({theme}) => `
    font-weight: ${theme.src.fontWeight.bold};
`)
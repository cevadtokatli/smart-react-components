import styled from "styled-components"
import Span from "../element/Span"

export default styled(Span)(({theme}) => `
    flex: 1 1 auto;
    display: inline-block;
    margin-left: ${theme.src.form.radioSpanSpace};
    font-family: ${theme.src.fontFamily.radioSpan};
`)
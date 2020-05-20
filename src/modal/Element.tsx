import styled from "styled-components"
import Div from "../element/Div"
import Props from "../element/Props"

export default styled(Div)<Props>(({theme}) => `
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    border: solid 1px ${theme.src.modal.borderColor};
    border-radius: ${theme.src.modal.borderRadius};
    background: ${theme.src.modal.backgroundColor};
`)
import styled from "styled-components"
import ElementProps from "../element/Props"
import Label from "../element/Label"

interface Props extends ElementProps {
    disabled: boolean
}

export default styled(Label).attrs<Props>(({mb="2"}) => ({mb}))<Props>(({theme,disabled}) => `
    display: inline-block;
    word-wrap: break-word;
    word-break: break-word;

    ${disabled ? `
        opacity: ${theme.src.form.disabledOpacity};
        user-select: none;
    ` : ""}
`)
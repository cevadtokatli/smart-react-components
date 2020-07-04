import styled from "styled-components"

export default styled.span(({theme}) => `
    &:after {
        content: "";
        position: absolute;
        left: calc(50% - 4px);
        top: calc(50% - 4px);
        border: solid 4px ${theme.src.colorPicker.colorLight};
        border-radius: 100%;
    }
`)
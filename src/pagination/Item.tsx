import styled from "styled-components"
import Li from "../element/Li"
import Props from "../element/Props"

export default styled(Li)<Props>(({theme}) => `
    flex: 0 0 auto;
    padding: 0;

    > a {
        display: inline-flex;
        box-sizing: border-box;
        border: solid 1px;
        text-decoration: none;
        transition: ${theme.src.pagination.transition};
        transition-property: border, background, color, fill;
    
        &:not([href]) {
            cursor: default;
        }

        &[disabled="true"],
        &[data-disabled="true"] {
            pointer-events: none;
            opacity: ${theme.src.pagination.disabledOpacity};
        }
    }
`)
import styled from "styled-components"
import Li from "../element/Li"
import Props from "../element/Props"

export default styled(Li)<Props>(({theme}) => `
    flex: 0 0 auto;
    padding: 0;

    > a {
        display: inline-flex;
        text-decoration: none;
        transition: ${theme.src.breadcrumb.transition};
        transition-property: border, background, color, fill;

        &:hover {
            text-decoration: underline;
        }

        &[disabled="true"],
        &[data-disabled="true"] {
            pointer-events: none;
            opacity: ${theme.src.breadcrumb.disabledOpacity};
        }
    }
`)
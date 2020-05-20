import styled from "styled-components"
import ElementProps from "../Element/Props"
import Div from "../element/Div"

export interface Props extends ElementProps {
    topBorder?: boolean
    bottomBorder?: boolean
}

export default styled(Div).attrs<Props>(({flex="1 1 auto",overflow="auto",webkitOverflowScrolling="touch"}) => ({flex,overflow,webkitOverflowScrolling}))<Props>(({theme,topBorder,bottomBorder}) => `
    box-sizing: border-box;
    padding: ${theme.src.modal.modalContentPadding.y} ${theme.src.modal.modalContentPadding.x};

    > {
        header, h1, h2, h3, h4, h5, h6, p, hr {
            margin-top: 0;
            margin-bottom: ${theme.src.length["3"]};
    
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    
    ${topBorder ? `
        border-top: solid 1px ${theme.src.modal.modalContentBorderColor};
    ` : ""}

    ${bottomBorder ? `
        border-bottom: solid 1px ${theme.src.modal.modalContentBorderColor};
    ` : ""}
`)
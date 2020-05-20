import styled from "styled-components"
import ElementProps from "../element/Props"
import FooterElement from "../element/Footer"

export interface Props extends ElementProps {
    topBorder?: boolean
}

export default styled(FooterElement).attrs<Props>(({flex="0 0 auto"}) => ({flex}))<Props>(({theme,topBorder}) => `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    padding: ${theme.src.modal.modalFooterPadding.y} ${theme.src.modal.modalFooterPadding.x};
    
    > * {
        flex: 0 0 auto;
        margin: ${theme.src.modal.modalFooterContentMargin.y} ${theme.src.modal.modalFooterContentMargin.x};
    }

    ${topBorder ? `
        border-top: solid 1px ${theme.src.modal.modalContentBorderColor};
    ` : ""}
`)
import styled from "styled-components"
import ElementProps from "../element/Props"
import HeaderElement from "../element/Header"

export interface Props extends ElementProps {
    bottomBorder?: boolean
}

export default styled(HeaderElement).attrs<Props>(({bottomBorder=true,flex="0 0 auto",display="flex",justifyContent="space-between",alignItems="center"}) => ({bottomBorder,flex,display,justifyContent,alignItems}))<Props>(({theme,bottomBorder}) => `
    box-sizing: border-box;
    padding: ${theme.src.modal.modalContentPadding.y} ${theme.src.modal.modalContentPadding.x};

    ${bottomBorder ? `
        border-bottom: solid 1px ${theme.src.modal.modalContentBorderColor};
    ` : ""}
`)
import styled from "styled-components"
import ElementProps from "../element/Props"
import {SetValue} from "../props"
import CloseIcon from "../icon/Close"

export interface Props extends ElementProps {
    setStatus?: SetValue<boolean>
}

export default styled(CloseIcon).attrs<Props>(({setStatus,iconSize="large",onClick,flex="0 0 auto"}) => ({
    iconSize,
    onClick: onClick || (() => {if(setStatus){setStatus(false)}})
}))<Props>`
    opacity: .5;

    &:hover {
        opacity: 1;
    }
`

import styled from "styled-components"
import ArrowDown from "../icon/ArrowDown"
import Props from "../element/Props"

export default styled(ArrowDown).attrs<Props>(({type="white",iconSize="default"}) => ({
    type,
    iconSize
}))<Props>``
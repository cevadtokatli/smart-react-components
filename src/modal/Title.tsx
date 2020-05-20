import styled from "styled-components"
import H3 from "../element/H3"
import Props from "../element/Props"

export default styled(H3).attrs<Props>(({flex="0 0 auto",m="0"}) => ({flex,m}))<Props>``
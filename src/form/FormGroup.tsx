import styled from "styled-components"
import Div from "../element/Div"
import Props from "../element/Props"

export default styled(Div).attrs<Props>(({mb="3"}) => ({mb}))<Props>``
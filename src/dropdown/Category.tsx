import React from "react"
import styled from "styled-components"
import ElementProps from "../element/Props"
import {Size$Props} from "../props/size$-props"
import Div from "../element/Div"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, JSXChild} from "../props"
import DV from "../default-value"

interface ItemElementProps extends ElementProps, Size$Props {
    type$?: string
    shape?: string
}

const customKeys = {
    size$: (v, t) => `
        padding: ${t.dropdown.padding[v]} ${t.dropdown.padding[v]};
        margin: ${t.dropdown.margin[v].y} ${t.dropdown.margin[v].x};
        font-size: ${t.dropdown.fontSize[v]};
    `
}

const ItemElement = styled(Div).attrs<ItemElementProps>({customKeys})<ItemElementProps>(({theme,type$,shape}) => `
    border-radius: ${theme.src.dropdown.radius[shape]};
    background: ${theme.src.type[type$].dropdown.background};
    color: ${theme.src.type[type$].dropdown.font};
    cursor: initial;
    word-wrap: break-word;
    word-break: break-word;
    font-family: ${theme.src.fontFamily.dropdown};
    font-weight: bold;
`)

interface Props extends SizeProps {
    elementProps?: JSXElementProps
    children: JSXChild
    type?: string
    shape?: string
}

const Category: React.FC<Props> = ({size,sizeSm,sizeMd,sizeLg,sizeXl,elementProps=DV.JSX_ELEMENT_PROPS,children,type="primary",shape="default"}) => {
    return <ItemElement {...elementProps} size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} shape={shape}>{children}</ItemElement>
}

export default Category
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
    hover?: boolean
    disabled?: boolean
}

const customKeys = {
    size$: (v, t) => `
        padding: ${t.dropdown.padding[v]} ${t.dropdown.padding[v]};
        margin: ${t.dropdown.margin[v].y} ${t.dropdown.margin[v].x};
        font-size: ${t.dropdown.fontSize[v]};
    `
}

const ItemElement = styled(Div).attrs<ItemElementProps>({customKeys})<ItemElementProps>(({theme,type$,shape,hover,disabled}) => `
    border-radius: ${theme.src.dropdown.radius[shape]};
    background: ${theme.src.type[type$].dropdown.background};
    color: ${theme.src.type[type$].dropdown.font};
    word-wrap: break-word;
    word-break: break-word;
    font-family: ${theme.src.fontFamily.dropdown};
    cursor: default;
    transition: 100ms 0s ease-in-out;
    transition-property: background, color;

    ${(hover && !theme.src.isMobile)
        ? `
            &:hover {
                background: ${theme.src.type[type$].main};
                color: ${theme.src.type[type$].font};
            }
        ` : ""
    }

    ${disabled 
    ? `
        pointer-events: none;
        opacity: ${theme.src.dropdown.disabledOpacity};
    ` : ""}
`)

interface Props extends SizeProps {
    elementProps?: JSXElementProps
    children: JSXChild
    type?: string
    shape?: string
    hover?: boolean
    setStatus?: React.Dispatch<React.SetStateAction<boolean>>
    callback?: () => void
    disabled?: boolean
}

const Item: React.FC<Props> = ({size,sizeSm,sizeMd,sizeLg,sizeXl,elementProps=DV.JSX_ELEMENT_PROPS,children,type="primary",shape="default",hover,setStatus,callback,disabled}) => {
    const onClick = () => {
        if(disabled)
            return

        setStatus(false)
        if(callback)
            callback()
    }

    return <ItemElement {...elementProps} size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} shape={shape} hover={hover} onClick={onClick} disabled={disabled}>{children}</ItemElement>
}

export default Item
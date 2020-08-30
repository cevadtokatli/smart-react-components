import React from "react"
import styled from "styled-components"
import ElementProps from "../element/Props"
import {Size$Props} from "../props/size$-props"
import Div from "../element/Div"
import {SizeProps} from "../props/size-props"
import {JSXElementProps} from "../props"
import DV from "../default-value"

interface ListElementProps extends ElementProps, Size$Props {
    type$?: string
    shape?: string
}

const customKeys = {
    size$: (v, t) => `
        > div {
            margin: ${t.dropdown.margin[v].y} 0;
        }
    `
}

const ListElement = styled(Div).attrs<ListElementProps>({customKeys})<ListElementProps>(({theme,type$,shape}) => `
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: ${theme.src.dropdown.radius[shape]};
    background: ${theme.src.type[type$].dropdown.background};
    user-select: none;
`)

interface Props extends SizeProps {
    elementProps?: JSXElementProps
    children: JSX.Element[]
    type?: string
    shape?: string
    hover?: boolean
    waveEffect?: string
    setStatus?: React.Dispatch<React.SetStateAction<boolean>>
}

const List: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,elementProps=DV.JSX_ELEMENT_PROPS,children,type="primary",shape="default",hover=true,waveEffect="light",setStatus}) => {
    return (
        <ListElement {...elementProps} size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} shape={shape}>
            <div>
                {children.map((item,index) => React.cloneElement(item, {key:(item.key || index),size,sizeSm,sizeMd,sizeLg,sizeXl,type,shape,hover,waveEffect,setStatus}))}
            </div>
        </ListElement>
    )
}

export default List
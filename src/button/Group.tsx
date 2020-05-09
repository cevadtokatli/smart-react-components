import React from "react"
import {SizeProps} from "../props/size-props"
import {JSXElementProps} from "../props"
import DV from "../default-value"
import GroupElement from "./GroupElement"

export interface Props extends SizeProps {
    children: JSX.Element[]
    elementProps?: JSXElementProps
    type?: string
    fill?: boolean
    shape?: string
    fixedSize?: boolean
}

const ButtonGroup: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,children,elementProps=DV.JSX_ELEMENT_PROPS,type="primary",fill=true,shape="default",fixedSize}) => {
    return (
        <GroupElement {...elementProps}>
            {children.map((item, index) => React.cloneElement(item, {key: item.key || index,size,sizeSm,sizeMd,sizeLg,sizeXl,type,fill,shape,fixedSize}))}
        </GroupElement>
    )
}

export default ButtonGroup
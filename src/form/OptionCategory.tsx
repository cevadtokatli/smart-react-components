import React from "react"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, JSXChild} from "../props"
import DV from "../default-value"
import OptionCategoryElement from "./OptionCategoryElement"

export interface Props extends SizeProps {
    elementProps?: JSXElementProps
    children: JSXChild
    box?: boolean
    type?: string
    fill?: boolean
}

const OptionCategory: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,elementProps=DV.JSX_ELEMENT_PROPS,children,box,type="primary",fill}) => {
    return <OptionCategoryElement {...elementProps} size={size} sizeSm={sizeSm} sizeMd={sizeMd} sizeLg={sizeLg} sizeXl={sizeXl} box={box} type={type} fill$={fill}>{children}</OptionCategoryElement>
}

export default OptionCategory
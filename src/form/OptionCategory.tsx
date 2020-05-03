import React from "react"
import {SizeProps} from "../props/size-props"
import {JSXChild} from "../props"
import OptionCategoryElement from "./OptionCategoryElement"

export interface Props extends SizeProps {
    children: JSXChild
    box?: boolean
    type?: string
    fill?: boolean
}

const OptionCategory: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,children,box,type="primary",fill}) => {
    return <OptionCategoryElement size={size} sizeSm={sizeSm} sizeMd={sizeMd} sizeLg={sizeLg} sizeXl={sizeXl} box={box} type={type} fill$={fill}>{children}</OptionCategoryElement>
}

export default OptionCategory
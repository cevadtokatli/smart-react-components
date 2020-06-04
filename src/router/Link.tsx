import React from "react"
import Props from "./LinkProps"
import DV from "../default-value"
import useLinkMethods from "./UseLinkMethods"
import A from "../element/A"

const Link: React.FC<Props> = ({children,elementProps=DV.JSX_ELEMENT_PROPS,to}) => {
    const {click} = useLinkMethods({to,checkActive:false})

    return (
        <A {...elementProps} href={to} onClick={click}>
            {children}
        </A>
    )
}

export default Link
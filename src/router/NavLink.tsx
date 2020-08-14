import React from "react"
import Props from "./LinkProps"
import DV from "../default-value"
import useLinkMethods from "./UseLinkMethods"
import A from "../element/A"

const NavLink: React.FC<Props> = ({children,elementProps=DV.JSX_ELEMENT_PROPS,to,path,exact}) => {
    const {click,active,activating} = useLinkMethods({to,path,exact})

    return (
        <A {...elementProps} href={to} onClick={click} className={`${elementProps.className || ""} ${active ? "active" : ""} ${activating ? "activating" : ""}`}>
            {children}
        </A>
    )
}

export default NavLink
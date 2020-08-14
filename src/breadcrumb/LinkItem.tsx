import React from "react"
import LinkProps from "../router/LinkProps"
import DV from "../default-value"
import useLinkMethods from "../router/UseLinkMethods"
import A from "../element/A"
import Item from "./Item"
import WaveEffect from "../wave-effect/WaveEffect"

export interface Props extends LinkProps {
    disabled?: boolean
    waveEffect?: string
}

const LinkItem: React.FC<Props> = ({children,to,path,exact=true,elementProps=DV.JSX_ELEMENT_PROPS,disabled,waveEffect}) => {
    const {click,active,activating} = useLinkMethods({to,path,exact})

    const LinkElement = <A {...elementProps} href={to} onClick={click} className={`${elementProps.className || ""} ${active ? "active" : ""} ${activating ? "activating" : ""}`} data-disabled={disabled}>{children}</A>

    return (
        <Item>
            {waveEffect ? <WaveEffect type={waveEffect}>{LinkElement}</WaveEffect> : LinkElement}
        </Item>
    )
}

export default LinkItem
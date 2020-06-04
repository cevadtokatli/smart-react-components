import React from "react"
import LinkProps from "../router/LinkProps"
import {JSXElementProps} from "../props"
import DV from "../default-value"
import useLinkMethods from "../router/UseLinkMethods"
import A from "../element/A"
import Item from "./Item"
import WaveEffect from "../wave-effect/WaveEffect"

interface Props extends LinkProps {
    elementProps?: JSXElementProps
    isActive?: boolean
    disabled?: boolean
    waveEffect?: string
}

const LinkItem: React.FC<Props> = ({children,to,exact=true,elementProps=DV.JSX_ELEMENT_PROPS,isActive,disabled,waveEffect}) => {
    const {click, active} = useLinkMethods({to,exact})

    const getActive$ = () => typeof isActive !== "undefined" ? isActive : active

    const [active$, setActive$] = React.useState<boolean>(() => getActive$())
    const activeInit$ = React.useRef<boolean>(false)

    React.useEffect(() => {
        if(!activeInit$.current)
            activeInit$.current = true
        else
            setActive$(getActive$())
    }, [isActive, active])

    const LinkElement = <A {...elementProps} href={to} onClick={click} className={`${elementProps.className || ""} ${active$ ? "active" : ""}`} data-disabled={disabled}>{children}</A>

    return (
        <Item>
            {waveEffect ? <WaveEffect type={waveEffect}>{LinkElement}</WaveEffect> : LinkElement}
        </Item>
    )
}

export default LinkItem
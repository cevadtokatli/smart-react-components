import React from "react"
import FixedBox from "../fixed-box/FixedBox"

interface Props {
    children: [JSX.Element, JSX.Element]
    minWidth?: number
    boxShadow?: boolean
    transitionClassName?: string
    transitionType?: string
    transitionDuration?: number
    showAnimation?: boolean
    hideAnimation?: boolean
}

const Dropdown: React.FC<Props> = ({children,minWidth=300,boxShadow,transitionClassName,transitionType,transitionDuration,showAnimation,hideAnimation}) => {
    const [status, setStatus] = React.useState(false)
    return (
        <FixedBox status={status} setStatus={setStatus} minWidth={minWidth} boxShadow={boxShadow} transitionClassName={transitionClassName} transitionType={transitionType} transitionDuration={transitionDuration} showAnimation={showAnimation} hideAnimation={hideAnimation}>
            {children[0]}
            {React.cloneElement(children[1], {setStatus})}
        </FixedBox>
    )
}

export default Dropdown
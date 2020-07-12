import React from "react"
import {Value} from "../props"

export interface Props {
    children: JSX.Element[]
    active: Value
}

interface Status {
    value: Value
    processing: boolean
}

const TransitionSwitch: React.FC<Props> = ({children,active}) => {
    const [status, setStatus] = React.useState<Status>(() => ({value:active,processing:false}))
    const statusInit = React.useRef<boolean>(false)

    const afterHide = React.useCallback(() => {
        setStatus({
            value: active,
            processing: false
        })
    }, [active])

    React.useEffect(() => {
        if(!statusInit.current) 
            statusInit.current = true
        else if(!status.processing)
            setStatus({
                value: active,
                processing: true
            })
    }, [active])

    return (
        <>
            {children.map((item, index) => React.cloneElement(item, {
                key: item.props.key || index,
                status: !status.processing && status.value == item.props.value,
                afterHide
            }))}
        </>
    )
}

export default TransitionSwitch
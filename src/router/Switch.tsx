import React from "react"
import RouterContext from "./RouterContext"
import RouterHelper from "../helper/RouterHelper"

interface Props {
    children: JSX.Element[]
}

const Switch: React.FC<Props> = ({children}) => {
    const router = React.useContext(RouterContext)

    const getElements = () => {
        let switchNotRendered = false

        return children.map((item, index) => {
            let el = React.cloneElement(item, {key:(item.key || index),switchNotRendered})

            if(!switchNotRendered && RouterHelper.matchPath(router.state.url.pathname, router.state.url.query, {path:item.props.path,exact:item.props.exact,searchKeys:item.props.searchKeys}))
                switchNotRendered = true

            return el
        })
    }

    const [elements, setElements] = React.useState<JSX.Element[]>(() => getElements())
    const init = React.useRef<boolean>(false)

    React.useEffect(() => {
        if(!init.current)
            init.current = true
        else
            setElements(getElements())
    }, [children, router.state.url])

    return <>{elements}</>
}

export default Switch
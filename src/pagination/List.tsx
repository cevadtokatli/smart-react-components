import React from "react"
import {JSXElementProps} from "../props"
import DV from "../default-value"
import ListElement from "./ListElement"

export interface Props {
    elementProps?: JSXElementProps
    children: JSX.Element|JSX.Element[]
    type?: string
    fill?: boolean
    shape?: string
    fixedSize?: boolean
    waveEffect?: string
}

const List: React.FC<Props> = ({elementProps=DV.JSX_ELEMENT_PROPS,children,type="primary",fill=true,shape="default",fixedSize,waveEffect="light"}) => {
    const getItemList = (): JSX.Element[] => {
        const list: JSX.Element[] = Array.isArray(children) ? (children as JSX.Element[]) : [children]
        return list.map((item, index) => React.cloneElement(item, {key:(item.key || index),waveEffect}))
    }

    const [itemList, setItemList] = React.useState<JSX.Element[]>(() => getItemList())
    const itemListInit = React.useRef<boolean>(false)

    React.useEffect(() => {
        if(!itemListInit.current)
            itemListInit.current = true
        else
            setItemList(getItemList())
    }, [children, waveEffect])

    return <ListElement {...elementProps} type={type} fill$={fill} shape={shape} fixedSize={fixedSize}>{itemList}</ListElement>
}

export default List
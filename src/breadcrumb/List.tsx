import React from "react"
import {JSXElementProps} from "../props"
import DV from "../default-value"
import DividerElement from "./DividerElement"
import ListElement from "./ListElement"

export interface Props {
    elementProps?: JSXElementProps
    children: JSX.Element|JSX.Element[]
    type?: string
    fill?: boolean
    shape?: string
    waveEffect?: string
    divider?: string
}

const List: React.FC<Props> = ({elementProps=DV.JSX_ELEMENT_PROPS,children,type="primary",fill=true,shape="default",waveEffect="dark",divider="/"}) => {
    const getItemList = (): JSX.Element[] => {
        const list: JSX.Element[] = Array.isArray(children) ? (children as JSX.Element[]) : [children]
        const itemList = []
        list.forEach((item, index) => {
            if(index != 0)
                itemList.push(<DividerElement key={`divider-${index}`}>{divider}</DividerElement>)
            itemList.push(React.cloneElement(item, {key:(item.key || index),waveEffect}))
        })
        return itemList
    }

    const [itemList, setItemList] = React.useState<JSX.Element[]>(() => getItemList())
    const itemListInit = React.useRef<boolean>(false)

    React.useEffect(() => {
        if(!itemListInit.current)
            itemListInit.current = true
        else
            setItemList(getItemList())
    }, [children])

    return <ListElement {...elementProps} type={type} fill$={fill} shape={shape}>{itemList}</ListElement>
}

export default List
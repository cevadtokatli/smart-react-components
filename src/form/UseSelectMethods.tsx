import React from "react"
import {SizeProps} from "../props/size-props"
import {JSXChild, ValueMix, SetValue, Value} from "../props"
import Badge from "../badge/Badge"
import BadgeIcon from "../badge/Icon"
import CloseIcon from "../icon/Close"
import BadgeText from "../badge/Text"
import BadgeContainer from "../badge/Container"
import Span from "../element/Span"
import Div from "../element/Div"
import ArrowDownIcon from "../icon/ArrowDown"

interface Props extends SizeProps {
    box?: boolean
    placeholder?: JSXChild
    optionType?: string
    badgeType?: string
    children: JSX.Element|JSX.Element[]
    fill: boolean
    shape: string
    hover: boolean
    disabled: boolean
    active: ValueMix
    setActive: SetValue<ValueMix>
    closeBox?: () => void
    search?: boolean
}

interface ItemList {
    value: JSX.Element[]
    active: JSX.Element
    isPlaceholder: boolean
}

interface Return {
    itemList: ItemList
    searchText: string
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export default ({size,sizeSm,sizeMd,sizeLg,sizeXl,box,placeholder,optionType,badgeType,children,fill,shape,hover,disabled,active,setActive,closeBox,search}:Props): Return => {
    const [searchText, setSearchText] = React.useState<string>("")
    const searchTextInit = React.useRef<boolean>(false)
    
    /**
     * Sets value if it is not disabled.
     * 
     * @param value 
     */
    const setValue = (value:ValueMix): void => {
        if(!disabled) {
            if(box && !Array.isArray(active))
                closeBox()

            setActive(value)
        }
    }

    /**
     * Removes item from the active if it is not disabled.
     * 
     * @param value 
     */
    const removeItem = (value:Value): void => {
        if(!disabled)
            setActive((active as Value[]).filter(i => i != value))
    }

    /**
     * Clones the item.
     *
     * @param item
     * @param index
     */
    const cloneElement = (item:JSX.Element, index:number) => React.cloneElement(item, {key:item.key || index,box,type:optionType,size,sizeSm,sizeMd,sizeLg,sizeXl,fill,shape,hover,active,setActive:setValue})

    /**
     * Returns item list.
     */
    const getItemList = (): ItemList => {
        let itemList = {
            value: [],
            active: null,
            isPlaceholder: false
        }

        let list: JSX.Element[] = Array.isArray(children) ? children as JSX.Element[] : [children]
        if(search && searchText) {
            const _searchText = searchText.toLowerCase()
            let _list = []
            let lastCategory = null
            let lastCategoryIndex

            list.forEach((item, index) => {
                if(typeof item.props.value !== "undefined") {
                    if(item.props.value) {
                        let value = item.props.searchValue ? item.props.searchValue.toLowerCase() : item.props.value.toLowerCase()
                        if(value.includes(_searchText))
                            _list.push(cloneElement(item, index))
                    }
                } else { // category
                    if(lastCategory && lastCategoryIndex == _list.length)
                        _list.pop()
                    lastCategory = cloneElement(item, index)
                    _list.push(lastCategory)
                    lastCategoryIndex = _list.length
                }
            })
            if(lastCategory && lastCategoryIndex == _list.length)
                _list.pop()

            itemList.value = _list
        } else
            itemList.value = list.map((item, index) => cloneElement(item, index))

        if(box) {
            let base = null

            if(Array.isArray(active) && active.length > 0) {
                let baseList = []

                if(badgeType) {
                    list.forEach((item, index) => {
                        if(active.indexOf(item.props.value) > -1) {
                            baseList.push(
                                <Badge key={item.key != null ? item.key : index} type={badgeType} size={size} sizeSm={sizeSm} sizeMd={sizeMd} sizeLg={sizeLg} sizeXl={sizeXl} data-src-not-clickable>
                                    <BadgeIcon onClick={() => removeItem(item.props.value)}>
                                        <CloseIcon iconSize={size} iconSizeSm={sizeSm} iconSizeMd={sizeMd} iconSizeLg={sizeLg} iconSizeXl={sizeXl} />
                                    </BadgeIcon>
                                    <BadgeText>{item.props.children}</BadgeText>
                                </Badge>
                            )
                        }
                    })

                    base = <BadgeContainer space={true}>{baseList}</BadgeContainer>
                } else {
                    list.forEach((item, index) => {
                        if(active.indexOf(item.props.value) > -1)
                            baseList.push(<span key={item.key != null ? item.key : index}>{item.props.children}</span>, ", ")
                    })

                    baseList.pop()
                    base = <Span wordWrap="break-word" wordBreak="break-word">{baseList}</Span>
                }
            } else if(!Array.isArray(active) && active != null) {
                for(let i in list) {
                    let item = list[i]
                    if(item.props.value == active) {
                        base = item.props.children
                        break
                    }
                }
            } else {
                itemList.isPlaceholder = true
                base = placeholder || <>&nbsp;</>
            }

            itemList.active = (
                <Div display="flex" justifyContent="space-between" alignItems="center">
                    {<Div flex="1 1 auto">{base}</Div>}
                    <ArrowDownIcon iconSize={size} iconSizeSm={sizeSm} iconSizeMd={sizeMd} iconSizeLg={sizeLg} iconSizeXl={sizeXl} flex="0 0 auto" ml={3} />
                </Div>
            )
        }

        return itemList
    }

    const [itemList, setItemList] = React.useState<ItemList>(() => getItemList())
    const itemListInit = React.useRef<boolean>(false)

    React.useEffect(() => {
        if(!itemListInit.current)
            itemListInit.current = true
        else
            setItemList(getItemList())
    }, [children, active])

    React.useEffect(() => {
        if(!searchTextInit.current)
            searchTextInit.current = true
        else
            setItemList(getItemList())
    }, [searchText])

    return {itemList,searchText,setSearchText}
}
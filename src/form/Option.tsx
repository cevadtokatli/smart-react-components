import React from "react"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, JSXChild, Value, ValueMix, SetValue} from "../props"
import DV from "../default-value"
import OptionElement from "./OptionElement"

export interface Props extends SizeProps {
    elementProps?: JSXElementProps
    children: JSXChild
    value: Value
    searchValue?: string
    disabled?: boolean
    box?: boolean
    type?: string
    fill?: boolean
    shape?: string
    hover?: boolean
    space?: boolean
    active?: ValueMix
    setActive?: SetValue<ValueMix>
}

const Option: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,elementProps=DV.JSX_ELEMENT_PROPS,children,value,disabled,box,type="primary",fill,shape="default",hover,active,setActive}) => {
    /**
     * Returns active$ status of the element. 
     */
    const getActive$ = (): boolean => {
        if(value == null)
            return false
        return Array.isArray(active) ? active.indexOf(value) > -1 : value == active
    }

    const [active$, setActive$] = React.useState<boolean>(() => getActive$())
    
    React.useEffect(() => setActive$(getActive$()), [value, active])

    /**
     * Sets value if element is not disabled.
     */
    const set = (): void => {
        if(disabled || (value == null && Array.isArray(active)))
            return

        if(Array.isArray(active)) {
            if(active.indexOf(value) == -1)
                setActive([...active,value])
            else
                setActive(active.filter(i => i != value))
        } else if(value != active)
            setActive(value)
    }

    return <OptionElement {...elementProps} className={`${active$ ? "src-option-active" : ""}`} size={size} sizeSm={sizeSm} sizeMd={sizeMd} sizeLg={sizeLg} sizeXl={sizeXl} box={box} type={type} fill$={fill} shape={shape} hover={hover} disabled={disabled} value={value} onClick={set}>{children}</OptionElement>
}

export default Option
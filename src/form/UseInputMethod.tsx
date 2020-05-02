import React from "react"
import {SetValue} from "../props"

interface Props<ValueType, InputType> {
    disabled: boolean
    value: ValueType
    setValue: SetValue<ValueType>
    onChange: (e:React.FormEvent<InputType>) => void
    onFocus: (e:React.FormEvent<InputType>) => void
    onBlur: (e:React.FormEvent<InputType>) => void
}

interface Return<ValueType, InputType> {
    props: {
        value?: ValueType
        onChange?: (e:React.FormEvent<InputType>) => void
        onFocus: (e:React.FormEvent<InputType>) => void
        onBlur: (e:React.FormEvent<InputType>) => void
    }
    isFocused: boolean
}

export default function<ValueType, InputType extends HTMLInputElement|HTMLTextAreaElement>({disabled,value,setValue,onChange,onFocus,onBlur}:Props<ValueType, InputType>): Return<ValueType, InputType> {
    const [isFocused, setIsFocused] = React.useState<boolean>(false)

    /**
     * Calls onChange method.
     * Sets value if event is not prevented.
     * 
     * @param e 
     */
    const change = (e:React.FormEvent<InputType>): void => {
        if(!disabled) {
            if(onChange)
                onChange(e)

            if(!e.defaultPrevented) {
                let el: InputType = e.target as InputType
                if(el.type !== "file")
                    setValue(el.value as any as ValueType)
            }
        }
    }

    /**
     * Calls onFocus method.
     * Sets focus status.
     * 
     * @param e 
     */
    const focus = (e:React.FormEvent<InputType>): void => {
        if(!disabled) {
            if(onFocus)
                onFocus(e)

            if(!e.defaultPrevented)
                setIsFocused(true)
        }
    }

    /**
     * Calls onBlur method.
     * Sets focus status.
     * 
     * @param e 
     */
    const blur = (e:React.FormEvent<InputType>): void => {
        if(onBlur)
            onBlur(e)

        if(!e.defaultPrevented)
            setIsFocused(false)
    }

    return {
        props: setValue ? {value,onChange:change,onFocus:focus,onBlur:blur} : {onFocus:focus,onBlur:blur},
        isFocused
    }
}
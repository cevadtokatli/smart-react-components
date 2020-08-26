import React from "react"
import {Value, SetValue} from "../props"

interface Props {
    value: Value
    active: Value[]
    setActive: SetValue<Value[]>
    checked: boolean
    setChecked: SetValue<boolean>
    disabled: boolean
    onChange: (e:React.FormEvent<HTMLInputElement>) => void
}

interface Return {
    checked$: boolean
    change: (e:React.FormEvent<HTMLInputElement>) => void
}

export default ({value,active,setActive,checked,setChecked,disabled,onChange}:Props): Return => {
    /**
     * Checks if input is checked.
     */
    const getChecked$ = (): boolean => {
        if(setChecked)
            return checked
        else if(setActive)
            return typeof active.find(v => v == value) !== "undefined"
        
        return false
    }

    const [checked$, setChecked$] = React.useState<boolean>(() => getChecked$())

    React.useEffect(() => {
        setChecked$(getChecked$())
    }, [active, checked])

    /**
     * Sets value if event is not prevented.
     * 
     * @param e 
     */
    const change = (e:React.FormEvent<HTMLInputElement>): void => {
        if(disabled)
            return

        if(onChange)
            onChange(e)

        if(!e.defaultPrevented) {
            let c: boolean = ((e.target) as HTMLInputElement).checked

            if(setChecked)
                setChecked(c)
            else if(setActive) {
                let i: number = active.indexOf(value)

                if(i == -1 && c)
                    setActive([...active, value])
                if(i > -1 && !c)
                    setActive(active.filter(v => v != value))
            }
        }
    }

    return {checked$, change}
}
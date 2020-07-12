import React from "react"
import {Value, Language} from "../types/date-picker"
import {SetValue} from "../props"
import Div from "../element/Div"
import Button from "../button/Button"

interface Props {
    value: Value
    setValue: SetValue<Value>
    initialValue: Value
    setInitialValue: React.Dispatch<React.SetStateAction<Value>>
    onSave: () => void
    onCancel: () => void
    type: string
    lang: Language
}

const Buttons: React.FC<Props> = ({value,setValue,initialValue,setInitialValue,onSave,onCancel,type,lang}) => {
    /**
     * Sets initial value as value.
     */
    const cancel = () => {
        setValue(initialValue)
        if(onCancel)
            onCancel()
    }

    /**
     * Sets value as initial value.
     */
    const save = () => {
        setInitialValue(value)
        if(onSave)
            onSave()
    }

    return (
        <Div className="src-date-picker-buttons" display="flex" justifyContent="flex-end" alignItems="center">
            <Button type={type} link={true} waveEffect="dark" elementProps={{onClick:cancel}}>{lang.cancel}</Button>
            <Button type={type} link={true} waveEffect="dark" elementProps={{onClick:save}}>{lang.save}</Button>
        </Div>
    )
}

export default Buttons
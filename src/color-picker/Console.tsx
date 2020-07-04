import React from "react"
import {ColorObject} from "../types"
import {SetValue$} from "../types/color-picker"
import ColorPickerHelper from "../helper/ColorPickerHelper"
import * as CT from "../constants/color-picker/change-type"
import ConsoleElement from "./ConsoleElement"
import InitialButton from "./InitialButton"
import Input from "./Input"
import ClearButton from "./ClearButton"

export interface ConsoleOnRef {
    setStyle: (value:string, color:ColorObject, changeType:number) => void
}

interface Props {
    initialColor: string
    setValue: SetValue$
    onRef: (e:ConsoleOnRef) => void
}

const Console: React.FC<Props> = ({initialColor,setValue,onRef}) => {    
    const consoleEl = React.useRef<HTMLDivElement>(null)
    const inputEl = React.useRef<HTMLInputElement>(null)

    /**
     * Sets console style.
     * 
     * @param value
     * @param color
     * @param changeType
     */
    const setStyle = (value:string, color:ColorObject, changeType:number): void => {
        if(value) {
            consoleEl.current.style.background = value
            consoleEl.current.setAttribute("data-src-is-dark", ColorPickerHelper.isLight(color).toString())
        } else {
            consoleEl.current.style.background = "transparent"
            consoleEl.current.setAttribute("data-src-is-dark", "true")
        }

        if(changeType != CT.INPUT)
            inputEl.current.value = value || ""
    }

    React.useEffect(() => {
        onRef({setStyle})
    }, [])

    return (
        <ConsoleElement>
            <div className="src-color-picker-bg-transparent">
                <div ref={consoleEl}>
                    <InitialButton value={initialColor} setValue={setValue} />
                    <Input ref={inputEl} setValue={setValue} />
                    <ClearButton setValue={setValue} />
                </div>
            </div>
        </ConsoleElement>
    )
}

export default Console
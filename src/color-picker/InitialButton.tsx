import React from "react"
import {SetValue$} from "../types/color-picker"
import ColorPickerHelper from "../helper/ColorPickerHelper"
import ColorHelper from "../helper/ColorHelper"
import * as CT from "../constants/color-picker/change-type"
import ConsoleButtonElement from "./ConsoleButtonElement"
import InitialIcon from "./icons/Initial"

interface Props {
    value: string
    setValue: SetValue$
}

const InitialButton: React.FC<Props> = ({value,setValue}) => {
    const getIsDark = () => {
        try {
            return value ? ColorPickerHelper.isLight(ColorHelper.getColor(value)) : true
        } catch(ignored) {
            return true
        }
    }

    const [isDark, setIsDark]  = React.useState<boolean>(() => getIsDark())

    React.useEffect(() => setIsDark(getIsDark()), [value])

    const setColor = () => setValue(value, null, CT.BUTTON)

    return (
        <div data-src-transparent-bg>
            <ConsoleButtonElement isDark={isDark} height="100%" style={{background:value}} onClick={setColor}>
                <InitialIcon />
            </ConsoleButtonElement>
        </div>
    )
}

export default InitialButton
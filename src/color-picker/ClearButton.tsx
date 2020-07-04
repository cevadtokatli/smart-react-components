import React from "react"
import {SetValue$} from "../types/color-picker"
import * as CT from "../constants/color-picker/change-type"
import ConsoleButtonElement from "./ConsoleButtonElement"
import ClearIcon from "./icons/Clear"

interface Props {
    setValue: SetValue$
}

const ClearButton: React.FC<Props> = ({setValue}) => {
    const setColor = () => setValue(null, null, CT.BUTTON)

    return (
        <ConsoleButtonElement onClick={setColor}>
            <ClearIcon />
        </ConsoleButtonElement>
    )
}

export default ClearButton
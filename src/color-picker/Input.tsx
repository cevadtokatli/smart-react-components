import React from "react"
import styled from "styled-components"
import size from "../constants/color-picker/size"
import {SetValue$} from "../types/color-picker"

export const InputElement = styled.input`
    padding: ${size.space.small}px;
    background: transparent;
    font-family: "Open Sans",Source Sans,Helvetica,sans-serif;
    font-size: 12px;
    font-weight: bold;

    &,
    &:active,
    &:focus {
        border: 0;
        outline: 0;
    }
`

interface Props {
    setValue: SetValue$
}

const Input = React.forwardRef<HTMLInputElement, Props>(({setValue}, ref) => {
    const keyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode == 13)
            (e.target as HTMLInputElement).blur()
    }

    return <InputElement ref={ref} spellCheck={false} onKeyDown={keyDown} onBlur={e => setValue(e.target.value, null, 8)} />
})

export default Input
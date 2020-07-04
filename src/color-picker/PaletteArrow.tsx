import React from "react"
import styled from "styled-components"
import ArrowDownIcon from "./icons/ArrowDown"
import size from "../constants/color-picker/size"

const PaletteArrowElement = styled(ArrowDownIcon)(({theme}) => `
    display: block;
    width: ${size.icon.width}px;
    height: ${size.icon.height}px;
    margin: auto;
    fill: ${theme.src.colorPicker.paletteIconColor};
`)

interface Props {
    status: boolean
    setStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const PaletteArrow: React.FC<Props> = ({status,setStatus}) => {
    const toggle = () => setStatus(!status)

    return <PaletteArrowElement onClick={toggle} />
}

export default PaletteArrow
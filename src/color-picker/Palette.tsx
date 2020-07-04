import React from "react"
import styled from "styled-components"
import size from "../constants/color-picker/size"
import AddIcon from "./icons/Add"
import {SetValue$} from "../types/color-picker"
import {SetValue} from "../props"
import * as CT from "../constants/color-picker/change-type"

export const Hr = styled.hr(({theme}) => `
    margin: ${size.space.default}px -${size.space.default}px;
    border: solid 1px ${theme.src.colorPicker.paletteBorderColor};
`)

export const PaletteListElement = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: -${size.space.small}px; 
`

export const PaletteItemElement = styled.li<{add:boolean}>(({theme,add}) => `
    overflow: hidden;
    flex: 0 0 auto;
    box-sizing: border-box;
    margin: ${size.space.small}px; 
    border-radius: ${size.radius.small}px;

    ${add ? `
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px ${theme.src.colorPicker.paletteBorderColor};
    ` : `
        > div {
            width: 100%;
            height: 100%;
        }
    `}
`)

export const PaletteAddElement = styled(AddIcon)(({theme}) => `
    display: block;
    width: ${size.icon.width}px;
    height: ${size.icon.height}px;;
    fill: ${theme.src.colorPicker.paletteIconColor};
`)

interface Props {
    value: string
    setValue: SetValue$
    allowAddColorPalette: boolean
    palette: string[]
    setPalette: SetValue<string[]>
}

const Palette: React.FC<Props> = ({value,setValue,allowAddColorPalette,palette,setPalette}) => {
    /**
     * Adds value to the palette, if it already is not in the palette.
     */
    const addColor = () => {
        if(palette.indexOf(value) == -1)
            setPalette([value,...palette])
    }

    /**
     * Sets the given color as current color. 
     */
    const setColor = (val:string) => setValue(val, null, CT.BUTTON)

    return(
        <div>
            <Hr />
            <PaletteListElement>
                {allowAddColorPalette && (
                    <PaletteItemElement add={true} className="src-color-picker-palette-item">
                        <PaletteAddElement onClick={addColor} />
                    </PaletteItemElement>
                )}
                {palette.map(item => (
                    <PaletteItemElement key={item} add={false} className="src-color-picker-palette-item src-color-picker-bg-transparent" onClick={() => setColor(item)}>
                        <div style={{background:item}} />
                    </PaletteItemElement>
                ))}
            </PaletteListElement>
        </div>
    )
}

export default Palette
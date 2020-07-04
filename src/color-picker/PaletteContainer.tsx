import React from "react"
import styled from "styled-components"
import size from "../constants/color-picker/size"
import {SetValue$} from "../types/color-picker"
import {SetValue} from "../props"
import ColorHelper from "../helper/ColorHelper"
import DEFAULT_PALETTE from "../constants/color-picker/default-palette"
import PaletteArrow from "./PaletteArrow"
import CSSTransition from "../transition/CSSTransition"
import Palette from "./Palette"

const PaletteContainerElement = styled.div`
    padding-top: ${size.space.default}px;
`

interface Props {
    value: string
    setValue: SetValue$
    colorFormat: string
    allowAddColorPalette: boolean
    addDefaultPaletteColors: boolean
    palette: string[]
    setPalette: SetValue<string[]>
}

const PaletteContainer: React.FC<Props> = ({value,setValue,colorFormat,allowAddColorPalette,addDefaultPaletteColors,palette,setPalette}) => {
    /**
     * Converts palette colors to the given color format and removes duplicate colors.
     * 
     * @param arr 
     */
    const convertPaletteColors = (arr:string[]): string[] => {
        const result = []

        arr.forEach(item => {
            try {
                const color = ColorHelper.getColor(item)
                const colorVal = (colorFormat == "hex" && color.valpha < 1) ? color.rgb().toString() : color[colorFormat]().toString()
                if(result.indexOf(colorVal) == -1)
                    result.push(colorVal)
            } catch(ignored) {}
        })

        return result
    }

    const init = React.useRef<boolean>(false)
    /**
     * Local palette (pallette$) holds the palette data if palette data is not given as props to ColorPicker.
     */
    const [palette$, setPalette$] = React.useState<string[]>(() => convertPaletteColors(addDefaultPaletteColors ? DEFAULT_PALETTE : []))
    const [status, setStatus] = React.useState<boolean>(false)

    React.useEffect(() => {
        if(palette)
            setPalette(convertPaletteColors((!init.current && addDefaultPaletteColors) ? [...palette,...DEFAULT_PALETTE] : palette))
        else if(init.current)
            setPalette$(convertPaletteColors(palette$))

        if(!init.current)
            init.current = true
    }, [colorFormat])

    return (
        <PaletteContainerElement>
            <PaletteArrow status={status} setStatus={setStatus} />
            <CSSTransition status={status} className="src-fade">
                <Palette value={value} setValue={setValue} allowAddColorPalette={allowAddColorPalette} palette={palette || palette$} setPalette={setPalette || setPalette$} />
            </CSSTransition>
        </PaletteContainerElement>
    )
}

export default PaletteContainer
import React from "react"
import {createGlobalStyle, ThemeContext} from "styled-components"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, SetValue} from "../props"
import {Language, SetValue$} from "../types/color-picker"
import DV from "../default-value"
import DOMHelper from "../helper/DOMHelper"
import DEFAULT_LANGUAGE from "../constants/color-picker/default-language"
import {PickerContainerOnRef} from "./PickerContainer"
import {ConsoleOnRef} from "./Console"
import {ColorObject} from "../types"
import ColorHelper from "../helper/ColorHelper"
import * as CT from "../constants/color-picker/change-type"
import ColorPickerElement from "./ColorPickerElement"
import PickerContainer from "./PickerContainer"
import Console from "./Console"
import Buttons from "./Buttons"
import PaletteContainer from "./PaletteContainer"

const GlobalStyle = createGlobalStyle`
    body[data-src-color-picker-dragging] {
        user-select: none !important;
    }
`

export interface Props extends SizeProps {
    elementProps?: JSXElementProps
    type?: string
    value: string
    setValue: SetValue<string>
    colorFormat?: string
    allowOpacity?: boolean
    showConsole?: boolean
    showButtons?: boolean
    showPalette?: boolean
    allowAddColorPalette?: boolean
    addDefaultPaletteColors?: boolean    
    palette?: string[]
    setPalette?: SetValue<string[]>
    lang?: Language
    onChange?: (value:string) => void
    onSave?: () => void
    onCancel?: () => void
}

const ColorPicker: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,elementProps=DV.JSX_ELEMENT_PROPS,type="primary",value,setValue,colorFormat="hex",allowOpacity=true,showConsole=true,showButtons=true,showPalette=true,allowAddColorPalette=true,addDefaultPaletteColors=true,palette,setPalette,lang=DEFAULT_LANGUAGE,onChange,onSave,onCancel}) => {
    const theme = React.useContext(ThemeContext).src
    
    const getBreakpoint = (): string => DOMHelper.getBreakpointKey({size,sizeSm,sizeMd,sizeLg,sizeXl}, theme)

    const [breakpoint, setBreakpoint] = React.useState<string>(() => DOMHelper.isServer ? size : getBreakpoint())
    const [initialColor, setInitialColor] = React.useState<string>(() => value)

    const valueInit = React.useRef<boolean>(false)
    const value$ = React.useRef<string>(null)
    const pickerContainer = React.useRef<PickerContainerOnRef>(null)
    const console$ = React.useRef<ConsoleOnRef>(null)

    /**
     * Sets breakpoint.
     */
    const resize = () => setBreakpoint(getBreakpoint())

    /**
     * Converts value to the given color format and returns it
     */
    const convertValue = (val:string, col?:ColorObject) => {
        let isChanged = false // if value is changed 

        try {
            if(!col)
                col = ColorHelper.getColor(val)
        } catch(ignored){
            if(val != null) {
                val = null
                isChanged = true
            }
        }

        if(val) {
            if(!allowOpacity && col.valpha < 1) {
                col = col.alpha(1)
                isChanged = true
            } 

            const _val = (colorFormat == "hex" && col.valpha < 1) ? col.rgb().toString() : col[colorFormat]().toString()
            if(val != _val)
                isChanged = true
            val = _val
        }

        return {
            value: val,
            color: col,
            isChanged
        }
    }

    /**
     * According to changeType, sets value and calls onchange method.
     * 
     * @param val 
     * @param col
     * @param changeType - 1:initial, 2:parent, 4:button, 8:input, 16:dragging, 32:draggingEnd
     * 
     */
    const setValue$: SetValue$ = (val, col, changeType) => {
        if(changeType != CT.DRAGGING_END) {
            const oldValue = value$.current
            const cv = convertValue(val, col) // converted new value
            value$.current = cv.value
            const color = cv.color
            if(
                (value$.current == oldValue && changeType == CT.DRAGGING) ||
                (value$.current == value && changeType & (CT.BUTTON|CT.INPUT))
            )
                return

            if(changeType != CT.DRAGGING)
                pickerContainer.current.setPosition(value$.current, color)
            if(console$.current)
                console$.current.setStyle(value$.current, color, changeType)
        }

        if(!(changeType & (CT.INITIAL|CT.DRAGGING_END)) && onChange)
            onChange(value$.current)

        if(changeType & (CT.BUTTON|CT.INPUT|CT.DRAGGING_END))
            setValue(value$.current)
    }

    /**
     * Sets color as initial color.
     */
    const save = () => {
        setInitialColor(value)
        if(onSave)
            onSave()
    }

    /**
     * Sets initial color as color.
     */
    const cancel = () => {
        setValue$(initialColor, null, CT.BUTTON)
        if(onCancel)
            onCancel()
    }

    React.useEffect(() => {
        DOMHelper.addEventListener(window, ["resize"], resize)

        return () => {
            DOMHelper.removeEventListener(window, ["resize"], resize)
        }
    }, [])

    React.useEffect(() => {
        if(!valueInit.current || value != value$.current) {
            const cv = convertValue(value)
            if(cv.isChanged) { 
                if(!valueInit.current)
                    setInitialColor(cv.value)
                setValue(cv.value)
            } else {
                const type = valueInit.current ? CT.PARENT : CT.INITIAL
                valueInit.current = true
                setValue$(cv.value, cv.color, type)
            }
        }
    }, [value])

    return (
        <ColorPickerElement {...elementProps} size={size} sizeSm={sizeSm} sizeMd={sizeMd} sizeLg={sizeLg} sizeXl={sizeXl}>
            <GlobalStyle />
            <PickerContainer allowOpacity={allowOpacity} breakpoint={breakpoint} value={value$} setValue={setValue$} onRef={e => pickerContainer.current = e} />
            {showConsole && <Console initialColor={initialColor} setValue={setValue$} onRef={e => console$.current = e}  />}
            {showButtons && <Buttons type={type} save={save} cancel={cancel} lang={lang} />}
            {showPalette && <PaletteContainer value={value} setValue={setValue$} colorFormat={colorFormat} allowAddColorPalette={allowAddColorPalette} addDefaultPaletteColors={addDefaultPaletteColors} palette={palette} setPalette={setPalette} />}
        </ColorPickerElement>
    )
}

export default ColorPicker
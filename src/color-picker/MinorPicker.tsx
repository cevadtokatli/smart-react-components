import React from "react"
import DOMHelper from "../helper/DOMHelper"
import ColorPickerHelper from "../helper/ColorPickerHelper"
import size from "../constants/color-picker/size"
import MinorPickerElement from "./MinorPickerElement"
import MinorDraggerElement from "./MinorDraggerElement"

interface Props {
    breakpoint: string
    processStart: () => void
    processEnd: () => void
    minorPickerStart: () => void
    minorPickerProcess: (h:number) => void
    minorPickerDraggerEl: React.RefObject<HTMLSpanElement>
}

const MinorPicker: React.FC<Props> = ({breakpoint,processStart,processEnd,minorPickerStart,minorPickerProcess,minorPickerDraggerEl}) => {
    const pickerEl = React.useRef<HTMLDivElement>(null)

    /**
     * Adds mouse and touch events.
     * Calls the process methods.
     * 
     * @param e 
     */
    const start = (e:React.MouseEvent|React.TouchEvent): void => {
        DOMHelper.addEventListener(document, ["mousemove", "touchmove"], move)
        DOMHelper.addEventListener(document, ["mouseup", "touchend"], end)
        minorPickerStart()
        processStart()
        process(e as any as MouseEvent)
    }
    
    /**
     * Calls the process method.
     *
     * @param e 
     */
    const move = (e:Event) => process(e as MouseEvent)
        
    /**
     * Removes mouse and touch events.
     * Calls the end process method.
     */
    const end = (): void => {
        DOMHelper.removeEventListener(document, ["mousemove", "touchmove"], move)
        DOMHelper.removeEventListener(document, ["mouseup", "touchend"], end)
        processEnd()
    }

    /**
     * Sets position of the minor picker dragger.
     * 
     * @param e 
     */
    const process = (e:MouseEvent): void => {
        const {left, top, y} = ColorPickerHelper.getDraggerNewPosition(e, pickerEl.current, size[breakpoint].minorDraggerSize)
        minorPickerDraggerEl.current.style.left = `${left}px`
        minorPickerDraggerEl.current.style.top = `${top}px`
        const height = size[breakpoint].minorPickerHeight
        const h = Math.round(y * (360 / height))
        minorPickerProcess(h)
    }

    return (
        <MinorPickerElement className="src-color-picker-picker-shadow" ref={pickerEl} onMouseDown={start} onTouchStart={start}>
            <MinorDraggerElement ref={minorPickerDraggerEl} />
        </MinorPickerElement>
    )
}

export default MinorPicker
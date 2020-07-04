import React from "react"
import DOMHelper from "../helper/DOMHelper"
import ColorPickerHelper from "../helper/ColorPickerHelper"
import size from "../constants/color-picker/size"
import OpacityPickerElement from "./OpacityPickerElement"
import MinorDraggerElement from "./MinorDraggerElement"

interface Props {
    breakpoint: string
    processStart: () => void
    processEnd: () => void
    opacityPickerProcess: (a:number) => void
    opacityPickerBgEl: React.RefObject<HTMLDivElement>
    opacityPickerDraggerEl: React.RefObject<HTMLSpanElement>
}

const OpacityPicker: React.FC<Props> = ({breakpoint,processStart,processEnd,opacityPickerProcess,opacityPickerBgEl,opacityPickerDraggerEl}) => {
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
     * Sets position of the opacity picker dragger.
     * 
     * @param e 
     */
    const process = (e:MouseEvent): void => {
        const {left, top, y} = ColorPickerHelper.getDraggerNewPosition(e, pickerEl.current, size[breakpoint].minorDraggerSize)
        opacityPickerDraggerEl.current.style.left = `${left}px`
        opacityPickerDraggerEl.current.style.top = `${top}px`
        const height = size[breakpoint].minorPickerHeight
        const a = Math.round((100 / height) * y) / 100
        opacityPickerProcess(a)
    }

    return (
        <OpacityPickerElement className="src-color-picker-bg-transparent" ref={pickerEl} onMouseDown={start} onTouchStart={start}>
            <div className="src-color-picker-picker-shadow" ref={opacityPickerBgEl}>
                <MinorDraggerElement ref={opacityPickerDraggerEl} />
            </div>
        </OpacityPickerElement>
    )
}

export default OpacityPicker
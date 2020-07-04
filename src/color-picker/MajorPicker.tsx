import React from "react"
import DOMHelper from "../helper/DOMHelper"
import ColorPickerHelper from "../helper/ColorPickerHelper"
import size from "../constants/color-picker/size"
import MajorPickerElement from "./MajorPickerElement"
import MajorDraggerElement from "./MajorDraggerElement"

export interface MajorPickerOnRef {
    setValue: (x:number, y:number) => void 
}

interface Props {
    breakpoint: string
    rgba: React.RefObject<number[]>
    processStart: () => void
    processEnd: () => void
    majorPickerProcess: (value:string, rgb:number[]) => void
    majorPickerBgEl: React.RefObject<HTMLDivElement>
    majorPickerDraggerEl: React.RefObject<HTMLSpanElement>
    onRef: (e:MajorPickerOnRef) => void
}

const MajorPicker: React.FC<Props> = ({breakpoint,rgba,processStart,processEnd,majorPickerProcess,majorPickerBgEl,majorPickerDraggerEl,onRef}) => {
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
     * Sets position of the major picker dragger.
     * Calls the set value method.
     * 
     * @param e 
     */
    const process = (e:MouseEvent): void => {
        const {left, top, x, y} = ColorPickerHelper.getDraggerNewPosition(e, pickerEl.current, size[breakpoint].majorDraggerSize)
        majorPickerDraggerEl.current.style.left = `${left}px`
        majorPickerDraggerEl.current.style.top = `${top}px`
        setValue(x, y)
    }

    /**
     * Sets value by the given coordinators.
     * 
     * @param x 
     * @param y 
     */
    const setValue = (x:number, y:number): void => {
        const rgb = [rgba.current[0], rgba.current[1], rgba.current[2]]
        const width = size[breakpoint].majorPickerWidth
        const height = size[breakpoint].majorPickerHeight

        for(let i in rgb) {
            const v = rgb[i]
            let netVal
            if(v == 255)
                netVal = Math.abs(Math.round(((255 / height) * y) - 255))
            else {
                const topNetVal = Math.round((height - y) * (v / height))
                const leftVal = Math.round((width - x) * ((255 - v) / width))
                const leftNetVal = Math.abs(Math.round((height - y) * (leftVal / width)))
                netVal = topNetVal + leftNetVal
            }
            rgb[i] = netVal
        }

        majorPickerProcess(`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rgba.current[3]})`, rgb)
    }

    React.useEffect(() => {
        onRef({setValue}) 
    }, [])

    return (
        <MajorPickerElement ref={pickerEl} onMouseDown={start} onTouchStart={start}>
            <div ref={majorPickerBgEl}>
                <div className="src-color-picker-gradient-light">
                    <div className="src-color-picker-gradient-dark src-color-picker-picker-shadow">
                        <MajorDraggerElement ref={majorPickerDraggerEl} />
                    </div>
                </div>
            </div>
        </MajorPickerElement>
    )
}

export default MajorPicker
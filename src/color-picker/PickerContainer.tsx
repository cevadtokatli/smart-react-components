import React from "react"
import styled from "styled-components"
import size from "../constants/color-picker/size"
import {ColorObject} from "../types"
import {SetValue$} from "../types/color-picker"
import ColorHelper from "../helper/ColorHelper"
import MajorPicker, {MajorPickerOnRef} from "./MajorPicker"
import ColorPickerHelper from "../helper/ColorPickerHelper"
import * as CT from "../constants/color-picker/change-type"
import MinorPicker from "./MinorPicker"
import OpacityPicker from "./OpacityPicker"

const PickerContainerElement = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: ${size.space.default}px;
`

export interface PickerContainerOnRef {
    setPosition: (value:string, color:ColorObject) => void
}

interface Props {
    allowOpacity: boolean
    breakpoint: string
    value: React.RefObject<string>
    setValue: SetValue$
    onRef: (e:PickerContainerOnRef) => void
}

const PickerContainer: React.FC<Props> = ({allowOpacity,breakpoint,value,setValue,onRef}) => {
    const breakpointInit = React.useRef<boolean>(false)
    const rgba = React.useRef<number[]>(null)
    const majorPickerBgEl = React.useRef<HTMLDivElement>(null)
    const majorPickerDraggerEl = React.useRef<HTMLSpanElement>(null)
    const majorPickerDraggerPosition = React.useRef<{x:number,y:number}>(null)
    const majorPicker = React.useRef<MajorPickerOnRef>(null)
    const minorPickerDraggerEl = React.useRef<HTMLSpanElement>(null)
    const opacityPickerBgEl = React.useRef<HTMLDivElement>(null)
    const opacityPickerDraggerEl = React.useRef<HTMLSpanElement>(null)

    React.useEffect(() => {
        if(!breakpointInit.current)
            breakpointInit.current = true
        else
            setPosition(value.current, value.current ? ColorHelper.getColor(value.current) : null)
    }, [breakpoint])

    /**
     * Sets positions of the draggers
     */
    const setPosition = (value:string, color:ColorObject): void => {   
        const majorDraggerHalfSize = size[breakpoint].majorDraggerSize / 2
        const minorDraggerHalfSize = size[breakpoint].minorDraggerSize / 2

        if(value) {
            const rgb = color.rgb().color
            const hsl = color.hsl().color
            const [r, g, b] = rgb
            const [h] = hsl
            const a = color.valpha
            const rgbaString = `hsl(${h}, 100%, 50%)`
            const rgbaColor = ColorHelper.getColor(rgbaString)
            rgba.current = [...rgbaColor.rgb().color, a]
            
            // major picker
            majorPickerBgEl.current.style.background = rgbaString
            majorPickerDraggerEl.current.setAttribute(`data-src-is-dark`, ColorPickerHelper.isLight(color, false).toString())

            const majorPickerWidth = size[breakpoint].majorPickerWidth
            const majorPickerHeight = size[breakpoint].majorPickerHeight
            const maxColor = Math.max(r, g, b)
            const minColor = Math.min(r, g, b)
            const topNetVal = Math.abs(Math.round(((majorPickerHeight / 255) * maxColor) - majorPickerHeight))
            const leftVal = Math.abs(Math.round(((majorPickerWidth / 255) * minColor) - majorPickerWidth))
            const leftNetVal = leftVal - Math.abs(Math.round((topNetVal / maxColor) * minColor))
            majorPickerDraggerEl.current.style.left = `${leftNetVal - majorDraggerHalfSize}px`
            majorPickerDraggerEl.current.style.top = `${topNetVal - majorDraggerHalfSize}px`

            // minor & opacity picker
            const minorPickerHeight = size[breakpoint].minorPickerHeight

            // minor picker
            minorPickerDraggerEl.current.style.left = `calc(50% - ${minorDraggerHalfSize}px)`
            minorPickerDraggerEl.current.style.top = `${Math.round((minorPickerHeight / 360) * h) - minorDraggerHalfSize}px`

            // opacity picker
            if(allowOpacity) {
                opacityPickerBgEl.current.style.background = `linear-gradient(to top, rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0))`
                opacityPickerDraggerEl.current.setAttribute(`data-src-is-dark`, ColorPickerHelper.isLight(color).toString())
                opacityPickerDraggerEl.current.style.left = `calc(50% - ${minorDraggerHalfSize}px)`
                opacityPickerDraggerEl.current.style.top = `${Math.round((minorPickerHeight / 100) * (a * 100)) - minorDraggerHalfSize}px`
            }
        } else {
            rgba.current = [255, 0, 0, 1]
            majorPickerBgEl.current.style.background = "rgb(255, 0, 0)"
            majorPickerDraggerEl.current.setAttribute(`data-src-is-dark`, "true")
            majorPickerDraggerEl.current.style.left = `-${majorDraggerHalfSize}px`
            majorPickerDraggerEl.current.style.top = `-${majorDraggerHalfSize}px`
            minorPickerDraggerEl.current.style.left = `calc(50% - ${minorDraggerHalfSize}px)`
            minorPickerDraggerEl.current.style.top = `-${minorDraggerHalfSize}px`
            if(allowOpacity) {
                opacityPickerBgEl.current.style.background = `linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`
                opacityPickerDraggerEl.current.setAttribute(`data-src-is-dark`, "true")
                opacityPickerDraggerEl.current.style.left = `calc(50% - ${minorDraggerHalfSize}px)`
                opacityPickerDraggerEl.current.style.top = `${size[breakpoint].minorPickerHeight - minorDraggerHalfSize}px`
            }
        }
    }

    /**
     * It's called when the moving process is started.
     */
    const processStart = (): void => document.body.setAttribute("data-src-color-picker-dragging", "true")

    /**
     * It's called when the moving process is ended.
     * Calls setValue method.
     */
    const processEnd = (): void => {
        document.body.removeAttribute("data-src-color-picker-dragging")
        setValue(value.current, null, CT.DRAGGING_END)
    }
    
    /**
     * Sets position and background of the opacity picker and dragger.
     * Sets value.
     * 
     * @param val 
     * @param rgb 
     */
    const majorPickerProcess = (val:string, rgb:number[]): void => {
        const color = ColorHelper.getColor(val)
        majorPickerDraggerEl.current.setAttribute(`data-src-is-dark`, ColorPickerHelper.isLight(color, false).toString())
        if(allowOpacity) {
            opacityPickerBgEl.current.style.background = `linear-gradient(to top, rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1), rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0))`
            opacityPickerDraggerEl.current.setAttribute(`data-src-is-dark`, ColorPickerHelper.isLight(color).toString())
        }
        setValue(val, color, CT.DRAGGING)
    }

    /**
     * Saves position of the major picker dragger for later use.
     */
    const minorPickerStart = (): void => {
        const halfMajorDraggerSize = size[breakpoint].majorDraggerSize / 2
        majorPickerDraggerPosition.current = {
            x: majorPickerDraggerEl.current.offsetLeft + halfMajorDraggerSize,
            y: majorPickerDraggerEl.current.offsetTop + halfMajorDraggerSize
        }
    }

    /**
     * Sets rgba and background of the major picker.
     * 
     * @param h 
     */
    const minorPickerProcess = (h:number): void => {
        const val = `hsl(${h}, 100%, 50%)`
        const rgb = ColorHelper.getColor(val).rgb().color
        rgba.current = [rgb[0], rgb[1], rgb[2], rgba.current[3]]
        majorPickerBgEl.current.style.background = val
        majorPicker.current.setValue(majorPickerDraggerPosition.current.x, majorPickerDraggerPosition.current.y)
    }

    /**
     * Sets value.
     * 
     * @param a 
     */
    const opacityPickerProcess = (a:number): void => {
        rgba.current[3] = a
        const color = ColorHelper.getColor(value.current).alpha(a)
        opacityPickerDraggerEl.current.setAttribute(`data-src-is-dark`, ColorPickerHelper.isLight(color).toString())
        setValue(color.toString(), color, CT.DRAGGING)
    }

    React.useEffect(() => {
        onRef({setPosition})
    }, [])

    return (
        <PickerContainerElement>
            <MajorPicker breakpoint={breakpoint} rgba={rgba} processStart={processStart} processEnd={processEnd} majorPickerProcess={majorPickerProcess} majorPickerBgEl={majorPickerBgEl} majorPickerDraggerEl={majorPickerDraggerEl} onRef={e => majorPicker.current = e} />
            <MinorPicker breakpoint={breakpoint} processStart={processStart} processEnd={processEnd} minorPickerStart={minorPickerStart} minorPickerProcess={minorPickerProcess} minorPickerDraggerEl={minorPickerDraggerEl} />
            {allowOpacity && <OpacityPicker breakpoint={breakpoint} processStart={processStart} processEnd={processEnd} opacityPickerProcess={opacityPickerProcess} opacityPickerBgEl={opacityPickerBgEl} opacityPickerDraggerEl={opacityPickerDraggerEl} />}
        </PickerContainerElement>
    )
}

export default PickerContainer
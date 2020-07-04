import {ColorObject} from "../types"

export default class ColorPickerHelper {
    /**
     * Calculates new position of the dragger.
     * 
     * @param e 
     * @param pickerEl
     * @param draggerSize 
     */
    static getDraggerNewPosition(e:MouseEvent, pickerEl:HTMLDivElement, draggerSize:number): {left:number,top:number,x:number,y:number} {
        const pickerRect = pickerEl.getBoundingClientRect()
        const draggerHalfSize = draggerSize / 2
        const eX = e.clientX || e.pageX - window.pageXOffset
        const eY = e.clientY || e.pageY - window.pageYOffset
        let x = eX - (pickerRect.left + draggerHalfSize)
        let y = eY - (pickerRect.top + draggerHalfSize)

        if(x < -draggerHalfSize)
            x = -draggerHalfSize
        else if(x > (pickerRect.width - draggerHalfSize))
            x = pickerRect.width - draggerHalfSize

        if(y < -draggerHalfSize)
            y = -draggerHalfSize
        else if(y > (pickerRect.height - draggerHalfSize))
            y = pickerRect.height - draggerHalfSize

        return {
            left: x,
            top: y,
            x: x + draggerHalfSize,
            y: y + draggerHalfSize
        }
    }

    /**
     * Checks if the given color is light.
     * 
     * @param color 
     * @param opacity 
     */
    static isLight(color:ColorObject, opacity:boolean=true): boolean {
        const isLight = color.isLight()
        return opacity ? (isLight || color.valpha < .4) : isLight
    }
}
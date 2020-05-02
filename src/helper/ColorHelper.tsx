import Color from "color"
import {ColorObject} from "../types"
import DV from "../default-value"

export default class ColorHelper {
    /**
     * Creates a color object with the given value and returns it.
     * 
     * @param value 
     */
    static getColor(value:string): ColorObject {
        return Color(value) as any as ColorObject
    }

    /**
     * Mixes two colors.
     * If weight is a negative number, mixs value with white.
     * If weight is a positive number, mixs value with black.
     * 
     * @param value
     * @param weight 
     */
    static mix(value:string, weight:number): string {
        const hex1 = weight > 0 ? "#000000" : "#FFFFFF"
        const hex2 = this.getColor(value).hex().toString()
        const red1 = parseInt(hex1.substring(1, 3), 16)
        const green1 = parseInt(hex1.substring(3, 5), 16)
        const blue1 = parseInt(hex1.substring(5, 7), 16)
        const red2 = parseInt(hex2.substring(1, 3), 16)
        const green2 = parseInt(hex2.substring(3, 5), 16)
        const blue2 = parseInt(hex2.substring(5, 7), 16)
        weight = Math.abs(weight)
        let redMixed = Math.floor(red1*weight+red2*(1-weight)).toString(16)
        let greenMixed = Math.floor(green1*weight+green2*(1-weight)).toString(16)
        let blueMixed = Math.floor(blue1*weight+blue2*(1-weight)).toString(16)
        if(redMixed.length == 1)
            redMixed = `0${redMixed}`
        if(greenMixed.length == 1)
            greenMixed = `0${greenMixed}`
        if(blueMixed.length == 1)
            blueMixed = `0${blueMixed}`
        return `#${redMixed}${greenMixed}${blueMixed}`
    }

    /**
     * Gets the font color by value.
     * If the value is dark, returns the light font color or vice versa.
     * 
     * @param value 
     */
    static getFontColor(value:string): string {
        return this.getColor(value).isDark() ? DV.LIGHT_FONT_COLOR : DV.DARK_FONT_COLOR
    }

    /**
     * Converts the given string color value to rgb string value. 
     * 
     * @param value 
     */
    static convertToRgb(value:string) {
        return this.getColor(value).rgb().toString()
    }
}
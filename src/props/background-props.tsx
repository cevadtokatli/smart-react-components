import {EPV, Value} from "./"
import CSSHelper from "../helper/CSSHelper"

export interface BackgroundProps {
    bg?: EPV<string>
    bgAttachment?: EPV<string>
    bgBlendMode?: EPV<string>
    bgClip?: EPV<string>
    bgColor?: EPV<string>
    bgImage?: EPV<string|string[]>
    bgOrigin?: EPV<string>
    bgPosition?: EPV<string>
    bgRepeat?: EPV<string>
    bgSize?: EPV<Value>
}

export default {
    bg: "background",
    bgAttachment: "background-attachment",
    bgBlendMode: "background-blend-mode",
    bgClip: "background-clip",    
    bgColor: (v, t) => `background-color:${CSSHelper.setColor(v, t)};`,
    bgImage: v => `background-image:${(Array.isArray(v) ? v : [v]).map(i => `url("${i}")`).join(" ")};`,
    bgOrigin: "background-origin",
    bgPosition: "background-position",
    bgRepeat: "background-repeat",
    bgSize: v => `background-size:${CSSHelper.setValue(v)};`
}
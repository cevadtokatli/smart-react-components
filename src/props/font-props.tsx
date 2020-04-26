import {EPV, Value} from "./"
import CSSHelper from "../helper/CSSHelper"

export interface FontProps {
    font?: EPV<string>
    fontFamily?: EPV<string>
    fontSize?: EPV<Value>
    fontSizeSm?: EPV<Value>
    fontSizeMd?: EPV<Value>
    fontSizeLg?: EPV<Value>
    fontSizeXl?: EPV<Value>
    fontStyle?: EPV<string>
    fontVariant?: EPV<string>
    fontWeight?: EPV<Value>
}

export default {
    font: "font",
    fontFamily: (v, t) => `font-family:${CSSHelper.setFontFamily(v, t)};`,
    fontSize: (v, t) => `font-size:${CSSHelper.setFontSize(v, t)};`,
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: (v, t) => `font-weight:${CSSHelper.setFontWeight(v, t)};`
}
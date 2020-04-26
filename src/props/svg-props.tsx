import {EPV, Value} from "./"
import CSSHelper from "../helper/CSSHelper"

export interface SvgProps {
    fill?: EPV<string>
    stroke?: EPV<string>
    iconSize?: EPV<Value>
    iconSizeSm?: EPV<Value>
    iconSizeMd?: EPV<Value>
    iconSizeLg?: EPV<Value>
    iconSizeXl?: EPV<Value>
}

export default {
    fill: (v, t) => `fill:${CSSHelper.setColor(v, t)};`,
    stroke: (v, t) => `stroke:${CSSHelper.setColor(v, t)};`,
    iconSize: (v, t) => `
        width:${CSSHelper.setIconSize(v, t)};
        height:${CSSHelper.setIconSize(v, t)};
    `
}
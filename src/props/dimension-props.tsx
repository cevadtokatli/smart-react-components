import {EPV, Value} from "./"
import CSSHelper from "../helper/CSSHelper"

export interface DimensionProps {
    width?: EPV<Value>
    widthSm?: EPV<Value>
    widthMd?: EPV<Value>
    widthLg?: EPV<Value>
    widthXl?: EPV<Value>
    minWidth?: EPV<Value>
    minWidthSm?: EPV<Value>
    minWidthMd?: EPV<Value>
    minWidthLg?: EPV<Value>
    minWidthXl?: EPV<Value>
    maxWidth?: EPV<Value>
    maxWidthSm?: EPV<Value>
    maxWidthMd?: EPV<Value>
    maxWidthLg?: EPV<Value>
    maxWidthXl?: EPV<Value>
    height?: EPV<Value>
    heightSm?: EPV<Value>
    heightMd?: EPV<Value>
    heightLg?: EPV<Value>
    heightXl?: EPV<Value>
    minHeight?: EPV<Value>
    minHeightSm?: EPV<Value>
    minHeightMd?: EPV<Value>
    minHeightLg?: EPV<Value>
    minHeightXl?: EPV<Value>
    maxHeight?: EPV<Value>
    maxHeightSm?: EPV<Value>
    maxHeightMd?: EPV<Value>
    maxHeightLg?: EPV<Value>
    maxHeightXl?: EPV<Value>
}

export default {
    width: (v, t) => `width:${CSSHelper.setLength(v, t)};`,
    minWidth: (v, t) => `min-width:${CSSHelper.setLength(v, t)};`,
    maxWidth: (v, t) => `max-width:${CSSHelper.setLength(v, t)};`,
    height: (v, t) => `height:${CSSHelper.setLength(v, t)};`,
    minHeight: (v, t) => `min-height:${CSSHelper.setLength(v, t)};`,
    maxHeight: (v, t) => `max-height:${CSSHelper.setLength(v, t)};`
}
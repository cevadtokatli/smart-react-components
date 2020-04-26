import {EPV, Value} from "./"
import CSSHelper from "../helper/CSSHelper"

export interface PositionProps {
    position?: EPV<string>
    positionSm?: EPV<string>
    positionMd?: EPV<string>
    positionLg?: EPV<string>
    positionXl?: EPV<string>
    zIndex?: EPV<Value>
    zIndexSm?: EPV<Value>
    zIndexMd?: EPV<Value>
    zIndexLg?: EPV<Value>
    zIndexXl?: EPV<Value>
    left?: EPV<Value>
    leftSm?: EPV<Value>
    leftMd?: EPV<Value>
    leftLg?: EPV<Value>
    leftXl?: EPV<Value>
    right?: EPV<Value>
    rightSm?: EPV<Value>
    rightMd?: EPV<Value>
    rightLg?: EPV<Value>
    rightXl?: EPV<Value> 
    top?: EPV<Value>
    topSm?: EPV<Value>
    topMd?: EPV<Value>
    topLg?: EPV<Value>
    topXl?: EPV<Value> 
    bottom?: EPV<Value>
    bottomSm?: EPV<Value>
    bottomMd?: EPV<Value>
    bottomLg?: EPV<Value>
    bottomXl?: EPV<Value> 
}

export default {
    position: "position",
    zIndex: (v, t) => `z-index:${CSSHelper.setZIndex(v, t)};`,
    left: (v, t) => `left:${CSSHelper.setLength(v, t)};`,
    top: (v, t) => `top:${CSSHelper.setLength(v, t)};`,
    right: (v, t) => `right:${CSSHelper.setLength(v, t)};`,
    bottom: (v, t) => `bottom:${CSSHelper.setLength(v, t)};`
}
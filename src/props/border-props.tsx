import {EPV, Value} from "./"
import CSSHelper from "../helper/CSSHelper"

export interface BorderProps {
    border?: EPV<string>
    borderColor?: EPV<string>
    borderStyle?: EPV<string>
    borderWidth?: EPV<Value>
    borderRadius?: EPV<Value>
    borderTop?: EPV<string>
    borderTopColor?: EPV<string>
    borderTopRadius?: EPV<Value>
    borderTopLeftRadius?: EPV<Value>
    borderTopRightRadius?: EPV<Value>
    borderTopStyle?: EPV<string>
    borderTopWidth?: EPV<Value>
    borderBottom?: EPV<string>
    borderBottomColor?: EPV<string>
    borderBottomRadius?: EPV<Value>
    borderBottomLeftRadius?: EPV<Value>
    borderBottomRightRadius?: EPV<Value>
    borderBottomStyle?: EPV<string>
    borderBottomWidth?: EPV<Value>
    borderLeft?: EPV<string>
    borderLeftColor?: EPV<string>
    borderLeftRadius?: EPV<Value>
    borderLeftStyle?: EPV<string>
    borderLeftWidth?: EPV<Value>
    borderRight?: EPV<string>
    borderRightRadius?: EPV<Value>
    borderRightColor?: EPV<string>
    borderRightStyle?: EPV<string>
    borderRightWidth?: EPV<Value>
    borderImage?: EPV<string>
    borderImageOutset?: EPV<Value>
    borderImageRepeat?: EPV<string>
    borderImageSlice?: EPV<string>
    borderImageSource?: EPV<string>
    borderImageWidth?: EPV<Value>
    borderCollapse?: EPV<string>
    borderSpacing?: EPV<Value>
}

export default {
    border: "border",
    borderColor: (v, t) => `border-color:${CSSHelper.setColor(v, t)};`,
    borderStyle: "border-style",
    borderWidth: (v, t) => `border-width:${CSSHelper.setLength(v, t)};`,
    borderRadius: (v, t) => `border-radius:${CSSHelper.setRadius(v, t)};`,
    borderTop: "border-top",
    borderTopColor: (v, t) => `border-top-color:${CSSHelper.setColor(v, t)};`,
    borderTopRadius: (v, t) => `
        border-top-left-radius: ${CSSHelper.setRadius(v, t)};
        border-top-right-radius: ${CSSHelper.setRadius(v, t)};
    `,
    borderTopLeftRadius: (v, t) => `border-top-left-radius: ${CSSHelper.setRadius(v, t)};`,
    borderTopRightRadius: (v, t) => `border-top-right-radius: ${CSSHelper.setRadius(v, t)};`,
    borderTopStyle: "border-top-style",
    borderTopWidth: (v, t) => `border-top-width:${CSSHelper.setLength(v, t)};`,
    borderBottom: "border-bottom",
    borderBottomColor: (v, t) => `border-bottom-color:${CSSHelper.setColor(v, t)};`,
    borderBottomRadius: (v, t) => `
        border-bottom-left-radius: ${CSSHelper.setRadius(v, t)};
        border-bottom-right-radius: ${CSSHelper.setRadius(v, t)};
    `,
    borderBottomLeftRadius: (v, t) => `border-bottom-left-radius: ${CSSHelper.setRadius(v, t)};`,
    borderBottomRightRadius: (v, t) => `border-bottom-right-radius: ${CSSHelper.setRadius(v, t)};`,
    borderBottomStyle: "border-bottom-style",
    borderBottomWidth: (v, t) => `border-bottom-width:${CSSHelper.setLength(v, t)};`,
    borderLeft: "border-left",
    borderLeftColor: (v, t) => `border-left-color:${CSSHelper.setColor(v, t)};`,
    borderLeftRadius: (v, t) => `
        border-top-left-radius: ${CSSHelper.setRadius(v, t)};
        border-bottom-left-radius: ${CSSHelper.setRadius(v, t)};
    `,
    borderLeftStyle: "border-left-style",
    borderLeftWidth: (v, t) => `border-left-width:${CSSHelper.setLength(v, t)};`,
    borderRight: "border-right",
    borderRightColor: (v, t) => `border-right-color:${CSSHelper.setColor(v, t)};`,
    borderRightRadius: (v, t) => `
        border-top-right-radius: ${CSSHelper.setRadius(v, t)};
        border-bottom-right-radius: ${CSSHelper.setRadius(v, t)};
    `,
    borderRightStyle: "border-right-style",
    borderRightWidth: (v, t) => `border-right-width:${CSSHelper.setLength(v, t)};`,
    borderImage: "border-image",
    borderImageOutset: (v, t) => `border-image-outset:${CSSHelper.setLength(v, t)};`,
    borderImageRepeat: "border-image-repeat",
    borderImageSlice: "border-image-slice",
    borderImageSource: v => `border-image-source:url(${v});`,
    borderImageWidth: (v, t) => `border-image-width:${CSSHelper.setLength(v, t)};`,
    borderCollapse: "border-collapse",
    borderSpacing: (v, t) => `border-spacing:${CSSHelper.setLength(v, t)};`
}
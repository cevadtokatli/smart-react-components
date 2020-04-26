import {EPV, Value} from "./"
import CSSHelper from "../helper/CSSHelper"

export interface TextProps {
    color?: EPV<string>
    direction?: EPV<string>
    letterSpacing?: EPV<Value>
    lineHeight?: EPV<Value>
    textAlign?: EPV<string>
    textDecoration?: EPV<string>
    textIndent?: EPV<string>
    textShadow?: EPV<string>
    textTransform?: EPV<string>
    textOverflow?: EPV<string>
    unicodeBidi?: EPV<string>
    whiteSpacing?: EPV<Value>
    wordBreak?: EPV<string>
    wordSpacing?: EPV<Value>
    wordWrap?: EPV<string>
}

export default {
    color: (v, t) => `color:${CSSHelper.setColor(v, t)};`,
    direction: "direction",
    letterSpacing: v => `letter-spacing:${CSSHelper.setValue(v)};`,
    lineHeight: v => `line-height:${CSSHelper.setValue(v)};`,
    textAlign: "text-align",
    textDecoration: "text-decoration",
    textIndent: "text-indent",
    textShadow: "text-shadow",
    textTransform: "text-transform",
    textOverflow: "text-overflow",
    unicodeBidi: "unicode-bidi",
    whiteSpacing: v => `white-spacing:${CSSHelper.setValue(v)};`,
    wordBreak: "word-break",
    wordSpacing: v => `word-spacing:${CSSHelper.setValue(v)};`,
    wordWrap: "word-wrap",
}
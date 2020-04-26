import {EPV, Value} from "./"
import CSSHelper from "../helper/CSSHelper"

export interface FlexProps {
    flex?: EPV<Value>
    flexSm?: EPV<Value>
    flexMd?: EPV<Value>
    flexLg?: EPV<Value>
    flexXl?: EPV<Value>
    flexGrow?: EPV<Value>
    flexGrowSm?: EPV<Value>
    flexGrowMd?: EPV<Value>
    flexGrowLg?: EPV<Value>
    flexGrowXl?: EPV<Value>
    flexShrink?: EPV<Value>
    flexShrinkSm?: EPV<Value>
    flexShrinkMd?: EPV<Value>
    flexShrinkLg?: EPV<Value>
    flexShrinkXl?: EPV<Value>
    flexBasis?: EPV<Value>
    flexBasisSm?: EPV<Value>
    flexBasisMd?: EPV<Value>
    flexBasisLg?: EPV<Value>
    flexBasisXl?: EPV<Value>
    flexFlow?: EPV<string>
    flexFlowSm?: EPV<string>
    flexFlowMd?: EPV<string>
    flexFlowLg?: EPV<string>
    flexFlowXl?: EPV<string>
    flexDirection?: EPV<string>
    flexDirectionSm?: EPV<string>
    flexDirectionMd?: EPV<string>
    flexDirectionLg?: EPV<string>
    flexDirectionXl?: EPV<string>
    flexWrap?: EPV<string>
    flexWrapSm?: EPV<string>
    flexWrapMd?: EPV<string>
    flexWrapLg?: EPV<string>
    flexWrapXl?: EPV<string>
    justifyContent?: EPV<string>
    justifyContentSm?: EPV<string>
    justifyContentMd?: EPV<string>
    justifyContentLg?: EPV<string>
    justifyContentXl?: EPV<string>
    alignItems?: EPV<string>
    alignItemsSm?: EPV<string>
    alignItemsMd?: EPV<string>
    alignItemsLg?: EPV<string>
    alignItemsXl?: EPV<string>
    alignContent?: EPV<string>
    alignContentSm?: EPV<string>
    alignContentMd?: EPV<string>
    alignContentLg?: EPV<string>
    alignContentXl?: EPV<string>
    alignSelf?: EPV<string>
    alignSelfSm?: EPV<string>
    alignSelfMd?: EPV<string>
    alignSelfLg?: EPV<string>
    alignSelfXl?: EPV<string>
    order?: EPV<Value>
    orderSm?: EPV<Value>
    orderMd?: EPV<Value>
    orderLg?: EPV<Value>
    orderXl?: EPV<Value>
}

export default {
    flex: "flex",
    flexGrow: "flex-grow",
    flexShrink: "flex-shrink",
    flexBasis: (v, t) => `flex-basis:${CSSHelper.setLength(v, t)};`, 
    flexFlow: "flex-flow",
    flexDirection: "flex-direction",
    flexWrap: "flex-wrap",
    justifyContent: "justify-content",
    alignItems: "align-items",
    alignContent: "align-content",
    alignSelf: "align-self",
    order: "order"
}
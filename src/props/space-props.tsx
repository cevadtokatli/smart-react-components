import {EPV, Value} from "./"
import CSSHelper from "../helper/CSSHelper"

export interface SpaceProps {
    m?: EPV<Value>
    mSm?: EPV<Value>
    mMd?: EPV<Value>
    mLg?: EPV<Value>
    mXl?: EPV<Value>
    mx?: EPV<Value>
    mxSm?: EPV<Value>
    mxMd?: EPV<Value>
    mxLg?: EPV<Value>
    mxXl?: EPV<Value>
    my?: EPV<Value>
    mySm?: EPV<Value>
    myMd?: EPV<Value>
    myLg?: EPV<Value>
    myXl?: EPV<Value>
    ml?: EPV<Value>
    mlSm?: EPV<Value>
    mlMd?: EPV<Value>
    mlLg?: EPV<Value>
    mlXl?: EPV<Value>
    mr?: EPV<Value>
    mrSm?: EPV<Value>
    mrMd?: EPV<Value>
    mrLg?: EPV<Value>
    mrXl?: EPV<Value>
    mt?: EPV<Value>
    mtSm?: EPV<Value>
    mtMd?: EPV<Value>
    mtLg?: EPV<Value>
    mtXl?: EPV<Value>
    mb?: EPV<Value>
    mbSm?: EPV<Value>
    mbMd?: EPV<Value>
    mbLg?: EPV<Value>
    mbXl?: EPV<Value>
    p?: EPV<Value>
    pSm?: EPV<Value>
    pMd?: EPV<Value>
    pLg?: EPV<Value>
    pXl?: EPV<Value>
    px?: EPV<Value>
    pxSm?: EPV<Value>
    pxMd?: EPV<Value>
    pxLg?: EPV<Value>
    pxXl?: EPV<Value>
    py?: EPV<Value>
    pySm?: EPV<Value>
    pyMd?: EPV<Value>
    pyLg?: EPV<Value>
    pyXl?: EPV<Value>
    pl?: EPV<Value>
    plSm?: EPV<Value>
    plMd?: EPV<Value>
    plLg?: EPV<Value>
    plXl?: EPV<Value>
    pr?: EPV<Value>
    prSm?: EPV<Value>
    prMd?: EPV<Value>
    prLg?: EPV<Value>
    prXl?: EPV<Value>
    pt?: EPV<Value>
    ptSm?: EPV<Value>
    ptMd?: EPV<Value>
    ptLg?: EPV<Value>
    ptXl?: EPV<Value>
    pb?: EPV<Value>
    pbSm?: EPV<Value>
    pbMd?: EPV<Value>
    pbLg?: EPV<Value>
    pbXl?: EPV<Value>
}

export default {
    m: (v, t) => `margin:${CSSHelper.setLength(v, t)};`,
    mx: (v, t) => `
        margin-left:${CSSHelper.setLength(v, t)};
        margin-right:${CSSHelper.setLength(v, t)};
    `,
    my: (v, t) => `
        margin-top:${CSSHelper.setLength(v, t)};
        margin-bottom:${CSSHelper.setLength(v, t)};
    `,
    ml: (v, t) => `margin-left:${CSSHelper.setLength(v, t)};`,
    mr: (v, t) => `margin-right:${CSSHelper.setLength(v, t)};`,
    mt: (v, t) => `margin-top:${CSSHelper.setLength(v, t)};`,
    mb: (v, t) => `margin-bottom:${CSSHelper.setLength(v, t)};`,
    p: (v, t) => `padding:${CSSHelper.setLength(v, t)};`,
    px: (v, t) => `
        padding-left:${CSSHelper.setLength(v, t)};
        padding-right:${CSSHelper.setLength(v, t)};
    `,
    py: (v, t) => `
        padding-top:${CSSHelper.setLength(v, t)};
        padding-bottom:${CSSHelper.setLength(v, t)};
    `,
    pl: (v, t) => `padding-left:${CSSHelper.setLength(v, t)};`,
    pr: (v, t) => `padding-right:${CSSHelper.setLength(v, t)};`,
    pt: (v, t) => `padding-top:${CSSHelper.setLength(v, t)};`,
    pb: (v, t) => `padding-bottom:${CSSHelper.setLength(v, t)};`,
}
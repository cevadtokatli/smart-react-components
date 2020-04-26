import {EPV} from "./"

export interface OverflowProps {
    overflow?: EPV<string>
    overflowSm?: EPV<string>
    overflowMd?: EPV<string>
    overflowLg?: EPV<string>
    overflowXl?: EPV<string>
    overflowX?: EPV<string>
    overflowXSm?: EPV<string>
    overflowXMd?: EPV<string>
    overflowXLg?: EPV<string>
    overflowXXl?: EPV<string>
    overflowY?: EPV<string>
    overflowYSm?: EPV<string>
    overflowYMd?: EPV<string>
    overflowYLg?: EPV<string>
    overflowYXl?: EPV<string>
    webkitOverflowScrolling?: EPV<string>
    webkitOverflowScrollingSm?: EPV<string>
    webkitOverflowScrollingMd?: EPV<string>
    webkitOverflowScrollingLg?: EPV<string>
    webkitOverflowScrollingXl?: EPV<string>
}

export default {
    overflow: "overflow",
    overflowX: "overflow-x",
    overflowY: "overflow-y",
    webkitOverflowScrolling: "-webkit-overflow-scrolling"
}
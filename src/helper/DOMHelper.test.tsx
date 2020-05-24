import DOMHelper from "./DOMHelper"
import theme from "../theme"

describe("DOMHelper", () => {
    it("should get breakpoint key by window size", () => {
        expect(DOMHelper.getBreakpointKey({size:"small",sizeSm:"small",sizeMd:"default",sizeLg:null,sizeXl:"large"}, theme)).toEqual("default")
    })

    it("element should be not able to get rendered in the portal", () => {
        expect(DOMHelper.canBeRenderedInPortal(true)).toBe(false)
    })
})
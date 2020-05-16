import TableHelper from "./TableHelper"
import theme from "../theme"

describe("TableHelper", () => {
    it("should get breakpoint value", () => {
        expect(TableHelper.getBreakpointValue([1,2,3,4,5],[1,2,3,4,5],theme)).toEqual({x:4,y:4})
    })
})
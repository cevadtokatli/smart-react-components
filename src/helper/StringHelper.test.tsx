import StringHelper from "./StringHelper"

describe("StringHelper", () => {
    it("should get the rendered number correctly", () => {
        expect(StringHelper.renderNumber(5, 2, "0")).toEqual("05")
    })
})
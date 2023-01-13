import { canBeRenderedInPortal } from './dom'

describe("DOM", () => {
  it("element should not be able to get rendered in the portal", () => {
    expect(canBeRenderedInPortal()).toBe(false)
  })
})

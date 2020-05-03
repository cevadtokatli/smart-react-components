import React from "react"
import {act} from "react-dom/test-utils"
import mountTheme from "../test/mountTheme"
import Option from "./Option"
import useSelectMethods from "./UseSelectMethods"
import Input from "./Input"
  
describe("UseSelectMethods", () => {
    let hook
    let wrapper

    beforeEach(() => {
        const children = [
            <Option key="value-a1" value="value-a1">Value A-1</Option>,
            <Option key="value-b1" value="value-b1">Value B-1</Option>,
            <Option key="value-ab1" value="value-ab1">Value AB-1</Option>
        ]

        const Component = () => {
            hook = useSelectMethods({
                children,
                fill: false,
                shape: "default",
                hover: false,
                disabled: false,
                active: "value",
                setActive: jest.fn(),
                search: true
            })

            return (
                <>
                    <Input value={hook.searchText} setValue={hook.setSearchText} />
                    <div id="item-list">{hook.itemList.value}</div>
                </>
            )
        }

        wrapper = mountTheme(<Component />)

        act(() => {
            wrapper.find("input").simulate("change", {target:{value:"value-a"}})
        })    
    })

    it("should get searchText", () => {
        expect(hook.searchText).toEqual("value-a")
    })

    it("should filter itemList by searchText", () => {
        wrapper.update()
        expect(wrapper.find("#item-list").children()).toHaveLength(2)
    })
})
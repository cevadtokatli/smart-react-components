import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import InputFile from "./InputFile"
import BadgeIcon from "../badge/Icon"
import InputLabel from "./InputLabel"
import InputError from "./InputError"
import InputAddon from "./InputAddon"

describe("<InputFile />", () => {
    let value: File[]

    beforeEach(() => {
        value = [
            new File([""], "notes.txt"),
            new File([""], "image.jpg"),
            new File([""], "video.mp4")
        ]
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<InputFile value={value} label="Label" inputProps={{placeholder:"Placeholder...",multiple:true}} />)
        expect(wrapper).toMatchSnapshot()
    })
    
    it("should call setValue", () => {
        const setValue = jest.fn()
        const wrapper = mountTheme(<InputFile setValue={setValue} />)
        wrapper.find("input").simulate("change")
        expect(setValue).toHaveBeenCalled()
    })

    it("should not call setValue", () => {
        const setValue = jest.fn()
        const wrapper = mountTheme(<InputFile setValue={setValue} inputProps={{disabled:true}} />)
        wrapper.find("input").simulate("change")
        expect(setValue).not.toHaveBeenCalled()
    })

    it("should remove file from the value array", () => {
        const setValue = v => value = v
        const wrapper = mountTheme(<InputFile value={value} setValue={setValue} inputProps={{multiple:true}} />)
        wrapper.find(BadgeIcon).at(0).simulate("click")
        expect(value).toHaveLength(2)
    })

    it("should render label", () => {
        const wrapper = mountTheme(<InputFile label="Label" />)
        expect(wrapper.find(InputLabel).exists()).toBe(true)
    })

    it("should render error", () => {
        const wrapper = mountTheme(<InputFile error="Error" />)
        expect(wrapper.find(InputError).exists()).toBe(true)
    })

    it("should render left addon", () => {
        const wrapper = mountTheme(<InputFile leftAddon="Left Addon" />)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })

    it("should render right addon", () => {
        const wrapper = mountTheme(<InputFile rightAddon="Right Addon" />)
        expect(wrapper.find(InputAddon).exists()).toBe(true)
    })
})
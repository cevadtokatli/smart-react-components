import mountTheme from "./mountTheme"

export default (child, selector) => {
    const wrapper = mountTheme(child)
    return getComputedStyle(wrapper.find(selector).getDOMNode())
}
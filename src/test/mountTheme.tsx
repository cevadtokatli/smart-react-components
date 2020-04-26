import {mount} from "enzyme"
import WrapperTheme from "./WrapperTheme"

export default child => mount(child, {
    wrappingComponent: WrapperTheme
})
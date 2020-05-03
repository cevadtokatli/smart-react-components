import React from "react"
import Props from "./SelectProps"
import DV from "../default-value"
import UseSelectMethods from "./UseSelectMethods"
import UseInputOutput from "./UseInputOutput"
import SelectElement from "./InputElement"
import Input from "./Input"

const Select: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,containerProps=DV.JSX_ELEMENT_PROPS,selectProps=DV.JSX_ELEMENT_PROPS,labelProps=DV.JSX_ELEMENT_PROPS,label,children,optionType="primary",active,setActive,type,fill,border,shape="default",hover=true,error,leftAddon,leftAddonProps=DV.JSX_ELEMENT_PROPS,leftAddonAbsolute,rightAddon,rightAddonProps=DV.JSX_ELEMENT_PROPS,rightAddonAbsolute,search,searchInputProps=DV.JSX_ELEMENT_PROPS}) => {
    const {itemList,searchText,setSearchText} = UseSelectMethods({children,optionType,size,sizeSm,sizeMd,sizeLg,sizeXl,fill,shape,hover,disabled:selectProps.disabled,active,setActive,search}) 
       
    return UseInputOutput({
        element: (
            <SelectElement {...selectProps} size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} border$={border} shape={shape} leftAddon={leftAddon ? true : false} leftAddonAbsolute={leftAddonAbsolute} rightAddon={rightAddon ? true : false} rightAddonAbsolute={rightAddonAbsolute} inputElement={false}>
                {search && <Input {...searchInputProps} value={searchText} setValue={setSearchText} />}
                {itemList.value}
            </SelectElement>
        ),
        containerProps,inputProps:selectProps,labelProps,label,shape,leftAddon,leftAddonProps,leftAddonAbsolute,rightAddon,rightAddonProps,rightAddonAbsolute,error
    })
}

export {default as Props} from "./SelectProps"
export default Select
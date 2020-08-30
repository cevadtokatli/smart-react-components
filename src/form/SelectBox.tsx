import React from "react"
import SelectProps from "./SelectProps"
import {JSXElementProps, JSXChild} from "../props"
import DV from "../default-value"
import useSelectMethods from "./UseSelectMethods"
import FixedBox, {FixedBoxOnRef} from "../fixed-box/FixedBox"
import useInputOutput from "./UseInputOutput"
import SelectElement from "./InputElement"
import SelectFixedBoxElement from "./SelectFixedBoxElement"
import Div from "../element/Div"
import Input from "./Input"

export interface Props extends SelectProps {
    boxProps?: JSXElementProps
    placeholder?: JSXChild
    badgeType?: string
    arrow?: boolean
    minWidth?: number
    boxShadow?: boolean
    transitionClassName?: string
    transitionType?: string
    transitionDuration?: number
    showAnimation?: boolean
    hideAnimation?: boolean
}

const SelectBox: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,containerProps=DV.JSX_ELEMENT_PROPS,selectProps=DV.JSX_ELEMENT_PROPS,boxProps=DV.JSX_ELEMENT_PROPS,labelProps=DV.JSX_ELEMENT_PROPS,label,children,placeholder,optionType="primary",badgeType="primary",arrow=true,active,setActive,type="gray",fill,border,shape="default",hover=true,waveEffect="light",error,leftAddon,leftAddonProps=DV.JSX_ELEMENT_PROPS,leftAddonAbsolute,rightAddon,rightAddonProps=DV.JSX_ELEMENT_PROPS,rightAddonAbsolute,minWidth=300,boxShadow,transitionClassName,transitionType,transitionDuration,showAnimation=true,hideAnimation=true,search,searchInputProps=DV.JSX_ELEMENT_PROPS}) => {
    const {itemList,searchText,setSearchText} = useSelectMethods({size,sizeSm,sizeMd,sizeLg,sizeXl,box:true,placeholder,children,optionType,badgeType,arrow,fill,shape,hover,waveEffect,disabled:selectProps.disabled,active,setActive,closeBox:(() => setStatus(false)),search})
    const [status, setStatus] = React.useState<boolean>(false)
    const fixedBoxOnRef = React.useRef<FixedBoxOnRef>(null)

    React.useEffect(() => {
        if(fixedBoxOnRef.current)
            fixedBoxOnRef.current.setPosition()
    }, [itemList])

    React.useEffect(() => {
        if(!Array.isArray(active))
            setStatus(false)
    }, [active])

    return useInputOutput({
        element: (
            <FixedBox status={status} setStatus={setStatus} minWidth={minWidth} boxShadow={boxShadow} transitionClassName={transitionClassName} transitionType={transitionType} transitionDuration={transitionDuration} showAnimation={showAnimation} hideAnimation={hideAnimation} onRef={args => fixedBoxOnRef.current = args}>
                <SelectElement tabIndex={0} {...selectProps} size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} border$={border} shape={shape} leftAddon={leftAddon ? true : false} leftAddonAbsolute={leftAddonAbsolute} rightAddon={rightAddon ? true : false} rightAddonAbsolute={rightAddonAbsolute} inputElement={false} data-src-placeholder-style={itemList.isPlaceholder} data-src-active={status}>{itemList.active}</SelectElement>
                <SelectFixedBoxElement size={size} sizeSm={sizeSm} sizeMd={sizeMd} sizeLg={sizeLg} sizeXl={sizeXl} {...boxProps} type={type} shape={shape}>
                    <Div height="inherit" minHeight="inherit" maxHeight="inherit">
                        {search && <section><Input {...searchInputProps} value={searchText} setValue={setSearchText} /></section>}
                        {itemList.value}
                    </Div>
                </SelectFixedBoxElement>
            </FixedBox>
        ),
        containerProps,inputProps:selectProps,labelProps,label,shape,leftAddon,leftAddonProps,leftAddonAbsolute,rightAddon,rightAddonProps,rightAddonAbsolute,error
    })
}

export default SelectBox
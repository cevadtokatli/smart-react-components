import React from "react"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, ValueMix, SetValue, JSXChild} from "../props"
import DV from "../default-value"
import useSelectMethods from "../form/UseSelectMethods"
import {FixedBoxOnRef} from "../fixed-box/FixedBox"
import ButtonElement from "./Element"
import Loading from "./Loading"
import WaveEffect from "../wave-effect/WaveEffect"
import FixedBox from "../fixed-box/FixedBox"
import SelectFixedBoxElement from "../form/SelectFixedBoxElement"
import Div from "../element/Div"
import Input from "../form/Input"

export interface Props extends SizeProps {
    buttonProps?: JSXElementProps
    boxProps?: JSXElementProps
    children: JSX.Element[]
    type?: string
    fill?: boolean
    shape?: string
    block?: boolean
    waveEffect?: string
    active: ValueMix
    setActive: SetValue<ValueMix>
    placeholder?: JSXChild
    hover?: boolean
    optionType?: string
    boxShadow?: boolean
    minWidth?: number
    transitionClassName?: string
    transitionType?: string
    transitionDuration?: number
    showAnimation?: boolean
    hideAnimation?: boolean
    loading?: JSX.Element
    loadingStatus?: boolean
    loadingTransitionClassName?: string
    loadingTransitionType?: string
    loadingTransitionDuration?: number 
    loadingTransitionShowAnimation?: boolean
    loadingTransitionHideAnimation?: boolean
    search?: boolean
    searchInputProps?: JSXElementProps
}

const ButtonSelect: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,buttonProps=DV.JSX_ELEMENT_PROPS,boxProps=DV.JSX_ELEMENT_PROPS,children,type="primary",fill,shape="default",block,waveEffect="light",active,setActive,placeholder,hover=true,optionType="primary",boxShadow,minWidth=300,transitionClassName,transitionType,transitionDuration,showAnimation=true,hideAnimation=true,loading,loadingStatus,loadingTransitionClassName="src-button-loading",loadingTransitionType="ease-in-out",loadingTransitionDuration=300,loadingTransitionShowAnimation=true,loadingTransitionHideAnimation=true,search,searchInputProps=DV.JSX_ELEMENT_PROPS}) => {
    const {itemList,searchText,setSearchText} = useSelectMethods({size,sizeSm,sizeMd,sizeLg,sizeXl,box:true,placeholder,optionType,children,fill,shape,hover,disabled:buttonProps.disabled,active,setActive,closeBox:(() => setStatus(false)),search})
    const [status, setStatus] = React.useState<boolean>(false)
    const fixedBoxOnRef = React.useRef<FixedBoxOnRef>(null)

    React.useEffect(() => {
        if(fixedBoxOnRef.current)
            fixedBoxOnRef.current.setPosition()
    }, [itemList])

    const ButtonEl = (
        <ButtonElement tabIndex={0} {...buttonProps} as="div" size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} shape={shape} block={block} loading$={loading ? true : false} data-src-placeholder-style={itemList.isPlaceholder} data-src-active={status}>
            {loading && <Loading element={loading} status={loadingStatus} transitionClassName={loadingTransitionClassName} transitionDuration={loadingTransitionDuration} transitionType={loadingTransitionType} transitionShowAnimation={loadingTransitionShowAnimation} transitionHideAnimation={loadingTransitionHideAnimation} />}
            {itemList.active}
        </ButtonElement>
    )

    const FragmentEl = waveEffect ? <WaveEffect type={waveEffect}>{ButtonEl}</WaveEffect> : ButtonEl

    return (
        <FixedBox status={status} setStatus={setStatus} minWidth={minWidth} boxShadow={boxShadow} transitionClassName={transitionClassName} transitionType={transitionType} transitionDuration={transitionDuration} showAnimation={showAnimation} hideAnimation={hideAnimation} onRef={args => fixedBoxOnRef.current = args}>
            {FragmentEl}
            <SelectFixedBoxElement {...boxProps} size={size} sizeSm={sizeSm} sizeMd={sizeMd} sizeLg={sizeLg} sizeXl={sizeXl} type={type} shape={shape}>
                <Div height="inherit" minHeight="inherit" maxHeight="inherit">
                    {search && <section><Input {...searchInputProps} value={searchText} setValue={setSearchText} /></section>}
                    {itemList.value}
                </Div>
            </SelectFixedBoxElement>
        </FixedBox>
    )
}

export default ButtonSelect
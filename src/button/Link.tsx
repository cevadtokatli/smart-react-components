import React from "react"
import ButtonProps from "./Props"
import LinkProps from "../router/LinkProps"
import DV from "../default-value"
import useLinkMethods from "../router/UseLinkMethods"
import Button from "./Button"

export interface Props extends ButtonProps, LinkProps {

}

const ButtonLink: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,elementProps=DV.JSX_ELEMENT_PROPS,children,type,fill,link=true,border,shape,block,fixedSize,waveEffect="dark",icon,iconPosition,loading,loadingStatus,loadingTransitionClassName,loadingTransitionType,loadingTransitionDuration,loadingTransitionShowAnimation,loadingTransitionHideAnimation,to,path,exact}) => {
    const {click,active,activating} = useLinkMethods({to,path,exact})

    return (
        <Button size={size} sizeSm={sizeSm} sizeMd={sizeMd} sizeLg={sizeLg} sizeXl={sizeXl} type={type} fill={fill} link={link} border={border} shape={shape} block={block} fixedSize={fixedSize} waveEffect={waveEffect} icon={icon} iconPosition={iconPosition} loading={loading} loadingStatus={loadingStatus} loadingTransitionClassName={loadingTransitionClassName} loadingTransitionType={loadingTransitionType} loadingTransitionDuration={loadingTransitionDuration} loadingTransitionShowAnimation={loadingTransitionShowAnimation} loadingTransitionHideAnimation={loadingTransitionHideAnimation}
            elementProps={{...elementProps,href:to,onClick:click,className:`${elementProps.className || ""} ${active ? "active" : ""} ${activating ? "activating" : ""}`}}
        >{children}</Button>
    )
}

export default ButtonLink
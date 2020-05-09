import React from "react"
import Props from "./Props"
import DV from "../default-value"
import IconElement from "./IconElement"
import ButtonElement from "./Element"
import Loading from "./Loading"
import WaveEffect from "../wave-effect/WaveEffect"

const Button: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,elementProps=DV.JSX_ELEMENT_PROPS,children,type,fill,link,shape,block,fixedSize,waveEffect="light",icon,iconPosition="left",loading,loadingStatus,loadingTransitionClassName="src-button-loading",loadingTransitionType="ease-in-out",loadingTransitionDuration=300,loadingTransitionShowAnimation=true,loadingTransitionHideAnimation=true}) => {
    const IconEl = icon ? <IconElement data-src-icon-position={iconPosition}>{icon}</IconElement> : null
     
    const ButtonEl = (
        <ButtonElement {...elementProps} size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} link={link} shape={shape} block={block} fixedSize={fixedSize} loading$={loadingStatus}>
            {loading && <Loading element={loading} status={loadingStatus} transitionClassName={loadingTransitionClassName} transitionDuration={loadingTransitionDuration} transitionType={loadingTransitionType} transitionShowAnimation={loadingTransitionShowAnimation} transitionHideAnimation={loadingTransitionHideAnimation} />}
            {iconPosition == "left" && IconEl}
            {(!loading || typeof children !== "string") ? children : <span>{children}</span>}
            {iconPosition == "right" && IconEl}
        </ButtonElement>
    )

    return waveEffect ? <WaveEffect type={waveEffect}>{ButtonEl}</WaveEffect> : ButtonEl
}

export {default as Props} from "./Props"
export default Button
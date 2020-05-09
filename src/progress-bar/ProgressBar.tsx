import React from "react"
import styled from "styled-components"
import ElementProps from "../element/Props"
import Div from "../element/Div"
import {JSXElementProps} from "../props"
import {Placeholder} from "../types/progress-bar"
import DV from "../default-value"
import DEFAULT_PLACEHOLDER from "../constants/progress-bar/default-placeholder"
import DOMHelper from "../helper/DOMHelper"

const PercentageElement = styled.div`
    position: relative;
    flex: 0 0 auto;
`

const BarElement = styled.div`
    position: absolute;
    overflow: hidden;
    left: 0;
    display: flex;
    align-items: center;
    height: 100%;
`

interface ProgressBarElementProps extends ElementProps {
    type: string
    fill$: boolean
    alt$: boolean
    shape: string
    duration: number
    striped: boolean
    stripedAnimation: boolean
    stripedAnimationDuration: number
}

const ProgressBarElement = styled(Div)<ProgressBarElementProps>(({theme,type,fill$,alt$,shape,duration,striped,stripedAnimation,stripedAnimationDuration,height}) => `
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: ${theme.src.progressBar.radius[shape]};
    background-color: ${fill$ ? theme.src.type[type].progressBar.backgroundFill : theme.src.type[type].progressBar.background};
    color: ${theme.src.type[type].main};
    fill: ${theme.src.type[type].main};

    ${alt$ 
    ? `
        flex: 1 1 auto;
    ` : ""}

    ${BarElement} {
        border-radius: ${theme.src.progressBar.radius[shape]};
        background-color: ${alt$ ? theme.src.type[type].progressBar.backgroundAlt : theme.src.type[type].main};
        color: ${theme.src.type[type].font};
        fill: ${theme.src.type[type].font};
        transition: width ${duration}ms 0s ${theme.src.progressBar.transitionType};
    }

    ${striped
    ? `
        ${stripedAnimation 
        ? `
            @keyframes src-progress-bar-stripes {
                from {
                    background-position: ${height} 0;
                }
                
                to {
                    background-position: 0 0;
                }
            }
        ` : ""}

        &,
        ${BarElement} {
            background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
            background-size: ${height} ${height};

            ${stripedAnimation 
            ? `
                animation: src-progress-bar-stripes ${stripedAnimationDuration}ms 0s ${theme.src.progressBar.stripedAnimationType} infinite;
            ` : ""}
        }
    ` : ""}
`)

export interface Props {
    elementProps?: JSXElementProps
    type?: string
    fill?: boolean
    alt?: boolean
    shape?: string
    duration?: number
    height?: string
    percentage: number
    showPlaceholder?: boolean
    placeholder?: Placeholder
    striped?: boolean
    stripedAnimation?: boolean
    stripedAnimationDuration?: number
}

const ProgressBar: React.FC<Props> = ({elementProps=DV.JSX_ELEMENT_PROPS,type="primary",fill,alt,shape="default",duration=450,height,percentage,showPlaceholder,placeholder=DEFAULT_PLACEHOLDER,striped,stripedAnimation=true,stripedAnimationDuration}) => {
    const getStripedAnimationDuration$ = () => typeof stripedAnimationDuration !== "undefined" ? stripedAnimationDuration : (showPlaceholder ? 400 : 1500)
    const getHeight$ = () => typeof height !== "undefined" ? height : (alt ? "100%" : showPlaceholder ? "16px" : "4px")

    const [stripedAnimationDuration$, setStripedAnimationDuration$] = React.useState<number>(() => getStripedAnimationDuration$())
    const [height$, setHeight$] = React.useState<string>(() => getHeight$())

    const [left, setLeft] = React.useState<number>(() => -1)
    const el = React.useRef<HTMLDivElement>(null)
    const percentageEl = React.useRef<HTMLDivElement>(null)

    const resize = () => setLeft((el.current.offsetWidth / 2) - (percentageEl.current.offsetWidth / 2))
    
    React.useEffect(() => setStripedAnimationDuration$(getStripedAnimationDuration$()), [stripedAnimationDuration, showPlaceholder])

    React.useEffect(() => setHeight$(getHeight$()), [height, showPlaceholder])

    React.useEffect(() => {
        if(showPlaceholder) {
            DOMHelper.addEventListener(window, ["resize"], resize)

            return () => {
                DOMHelper.removeEventListener(window, ["resize"], resize)
            }
        }
    }, [showPlaceholder])

    React.useEffect(() => {
        if(showPlaceholder)
            resize()
    }, [percentage])

    const PercentageEl = showPlaceholder && <PercentageElement style={{left:`${left}px`,visibility:(left > -1 ? "visible" : "hidden")}} ref={percentageEl}>{placeholder.prefix}{percentage}{placeholder.suffix}</PercentageElement>

    return (
        <ProgressBarElement height={height$} {...elementProps} ref={el} type={type} fill$={fill} alt$={alt} shape={shape} striped={striped} duration={duration} stripedAnimation={stripedAnimation} stripedAnimationDuration={stripedAnimationDuration$}>
            {PercentageEl}
            {<BarElement style={{width:`${percentage}%`}}>{!alt && PercentageEl}</BarElement>}
        </ProgressBarElement>
    )
} 

export default ProgressBar
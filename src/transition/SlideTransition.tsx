import React from "react"
import {createGlobalStyle} from "styled-components"
import DOMHelper from "../helper/DOMHelper"
import Transition from "./Transition"

interface GlobalStyleProps {
    id: number
    type: string
    duration: number
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>(({id,type,duration}) => `
    .src-slide-${id} {
        &.src-slide-enter,
        &.src-slide-leave-active {
            overflow: hidden !important;
            box-sizing: border-box !important;
        }

        &.src-slide-enter:not(.src-slide-enter-active),
        &.src-slide-leave-active {
            height: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }

        &.src-slide-enter-active,
        &.src-slide-leave-active {
            transition: ${duration}ms 0s ${type};
            transition-property: height, padding, margin;
        }
    }   
`)

export interface Props {
    children: JSX.Element
    status?: boolean
    display?: boolean
    type?: string
    duration?: number
    beforeShow?: () => Promise<void>
    beforeHide?: () => Promise<void>
    afterShow?: () => void
    afterHide?: () => void
}

const SlideTransition: React.FC<Props> = ({children,status,display,type="ease-in-out",duration=150,beforeShow,beforeHide,afterShow,afterHide}) => {
    const [id] = React.useState<number>(() => new Date().getTime())
    
    const show = (el:HTMLElement): Promise<void> => new Promise(resolve => {
        let className: string = el.className || ""
        let style: string = el.getAttribute("style") || ""
        el.classList.add(`src-slide-${id}`)
        el.style.opacity = "0"
        let height: number = el.offsetHeight

        DOMHelper.requestAnimationFrame.call(window, () => {
            el.classList.add("src-slide-enter")

            DOMHelper.requestAnimationFrame.call(window, () => {
                el.style.opacity = "1"
                el.style.height = `${height}px`
                el.classList.add("src-slide-enter-active")

                DOMHelper.addEventListenerOnce(el, DOMHelper.TRANSITION_END, () => {
                    el.className = className
                    el.setAttribute("style", style)
                    resolve()
                })
            })
        })
    })

    const hide = (el:HTMLElement): Promise<void> => new Promise(resolve => {
        let className: string = el.className || ""
        let style: string = el.getAttribute("style") || ""
        el.classList.add(`src-slide-${id}`)

        DOMHelper.requestAnimationFrame.call(window, () => {
            el.style.height = `${el.offsetHeight}px`

            DOMHelper.requestAnimationFrame.call(window, () => {
                el.classList.add("src-slide-leave-active")

                DOMHelper.addEventListenerOnce(el, DOMHelper.TRANSITION_END, () => {
                    el.className = className
                    el.setAttribute("style", style)
                    resolve()
                })
            })
        })
    })

    return (
        <>
            <GlobalStyle id={id} type={type} duration={duration} />
            <Transition status={status} display={display} beforeShow={beforeShow} beforeHide={beforeHide} show={show} hide={hide} afterShow={afterShow} afterHide={afterHide}>
                {children}
            </Transition>
        </>
    )
}

export default SlideTransition
/// <reference path="../modules/global.d.tsx" />
import React from "react"
import {findDOMNode} from "react-dom"
import {createGlobalStyle} from "styled-components"
import DOMHelper from "../helper/DOMHelper"
import DV from "../default-value"

let id = 0

const getID = () => process.env.NODE_ENV !== "test" ? id++ : 0

if(typeof global !== "undefined")
    global.srcWaveEffectCleanID = () => id = 0

interface GlobalStyleProps {
    id: number
    type: string
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>(({theme,id,type}) => `
    *[data-src-wave-effect="${id}"] {
        position: relative;
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;

        .src-wave-ripple {
            position: absolute;
            width: 100px;
            height: 100px;
            margin-top: -50px;
            margin-left: -50px;
            border-radius: 50%;
            background: ${(theme as any).src.type[type].waveEffect.color};
            pointer-events: none;
            transform: scale(0);
            opacity: 0;
            transition: ${(theme as any).src.waveEffect.transition};
            transition-property: transform, opacity;
        }
    }
`)

export interface Props {
    children: JSX.Element
    type?: string
}

export default class WaveEffect extends React.Component<Props> {
    public static defaultProps = {
        type: "light"
    }

    private active: boolean = false
    private lastRippleEl: HTMLElement = null
    private id: number = getID()

    componentDidMount() {
        const el = findDOMNode(this) as HTMLElement
        if(el)
            el.setAttribute("data-src-wave-effect", this.id.toString())
    }

    addEventListener() {
        DOMHelper.addEventListener(window, ["mousemove"], this.mouseMove)
        DOMHelper.addEventListener(window, ["touchmove"], this.touchMove)
        DOMHelper.addEventListener(window, ["mouseup"], this.mouseUp)
        DOMHelper.addEventListener(window, ["touchend"], this.touchEnd)
    }

    removeEventListener() {
        DOMHelper.removeEventListener(window, ["mousemove"], this.mouseMove)
        DOMHelper.removeEventListener(window, ["touchmove"], this.touchMove)
        DOMHelper.removeEventListener(window, ["mouseup"], this.mouseUp)
        DOMHelper.removeEventListener(window, ["touchend"], this.touchEnd)
    }

    removeRippleElement = (rippleEl:HTMLElement): void => {
        const ignored = rippleEl.offsetWidth
        rippleEl.style.opacity = "0"

        setTimeout(() => {
            const containerEl = findDOMNode(this) as HTMLElement
            containerEl.removeChild(rippleEl)

            if(this.lastRippleEl == rippleEl)
                this.lastRippleEl = null
        }, DV.WAVE_EFFECT_TRANSITION_DURATION)
    }

    mouseDown = (e:MouseEvent&TouchEvent): void => {
        if(DOMHelper.isMobile)
            return
        if(this.props.children.props.onMouseDown)
            this.props.children.props.onMouseDown(e)
        this.start(e)
    }

    touchStart = (e:MouseEvent&TouchEvent): void => {
        if(this.props.children.props.onTouchStart)
            this.props.children.props.onTouchStart(e)
        this.start(e)
    }

    start = (e:MouseEvent&TouchEvent): void => {
        if(e.button == 2)
            return

        if(!this.active) {
            this.active = true
            this.addEventListener()
        }

        const containerEl = findDOMNode(this) as HTMLElement
        const rippleEl = this.lastRippleEl = document.createElement("div")
        const rect = containerEl.getBoundingClientRect()
        const scale = (containerEl.clientWidth / 100) * 3

        let left
        let top
        if(DOMHelper.isMobile) {
            const t = e.touches[0]
            left = (t.pageX - window.pageXOffset) - rect.left
            top =  (t.pageY - window.pageYOffset) - rect.top
        } else {
            left = e.clientX - rect.left
            top = e.clientY - rect.top
        }

        rippleEl.classList.add("src-wave-ripple")
        rippleEl.setAttribute("data-src-end-time", (new Date().getTime() + 275).toString())
        containerEl.appendChild(rippleEl)
        const ignored = rippleEl.offsetWidth

        rippleEl.setAttribute("style", `
            left: ${left}px;
            top: ${top}px;
            transform: scale(${scale});
            opacity: 1;
        `)

        setTimeout(() => {
            if(!this.active || this.lastRippleEl != rippleEl)
                this.removeRippleElement(rippleEl)
        }, 275)
    }

    mouseMove = (e:MouseEvent): void => {
        if(DOMHelper.isMobile)
            return
        if(this.props.children.props.onMouseMove)
            this.props.children.props.onMouseMove(e)
        this.move(e)
    }

    touchMove = (e:MouseEvent): void => {
        if(this.props.children.props.onTouchMove)
            this.props.children.props.onTouchMove(e)
        this.move(e)
    }

    move = (e:MouseEvent): void => {
        if(this.active && this.lastRippleEl) {
            const target = e.target as HTMLElement
            const containerEl = findDOMNode(this) as HTMLElement
            if(target != containerEl && !containerEl.contains(target)) {
                this.active = false
                this.removeEventListener()
                this.removeRippleElement(this.lastRippleEl)
            }
        }
    }

    mouseUp = (e:MouseEvent): void => {
        if(DOMHelper.isMobile)
            return
        if(this.props.children.props.onMouseUp)
            this.props.children.props.onMouseUp(e)
        this.end()
    }

    touchEnd = (e:MouseEvent): void => {
        if(this.props.children.props.onTouchEnd)
            this.props.children.props.onTouchEnd(e)
        this.end()
    }

    end = (): void => {
        if(this.active) {
            this.active = false
            this.removeEventListener()
            
            if(this.lastRippleEl) {
                const date = parseInt(this.lastRippleEl.getAttribute("data-src-end-time"))

                if(date < new Date().getTime())
                    this.removeRippleElement(this.lastRippleEl)
            }
        }
    }

    render() {
        return (
            <>
                <GlobalStyle id={this.id} type={this.props.type} />
                {React.cloneElement(this.props.children, {
                    "data-src-wave-effect": this.id.toString(),
                    onMouseDown: this.mouseDown,
                    onTouchStart: this.touchStart
                })}
            </>
        )
    }
}
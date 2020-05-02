import React from "react"
import {findDOMNode} from "react-dom"
import styled from "styled-components"
import ElementProps from "../element/Props"
import Div from "../element/Div"
import {JSXElementProps, SetValue} from "../props"
import DV from "../default-value"
import DOMHelper from "../helper/DOMHelper"
import CSSTransition from "../transition/CSSTransition"
import Overlay from "../overlay/Overlay"

interface FixedBoxElementProps extends ElementProps {
    boxShadow?: boolean
}

const FixedBoxElement = styled(Div)<FixedBoxElementProps>(({theme,boxShadow,width}) => `
    position: fixed;
    z-index: ${theme.src.zIndex.fixedBox};
    overflow: auto;

    ${boxShadow ? `
        box-shadow: ${theme.src.fixedBox.boxShadow};
    ` : ""}

    @media(max-width:${theme.src.grid.breakpoint.medium-1}px) {
        position: static;
        ${!width ? "width: 100% !important;" : ""}
        height: auto !important;
        max-height: 100% !important;
    }
`)

export interface FixedBoxOnRef {
    setPosition: () => void
}

export interface Props {
    children: [JSX.Element, JSX.Element]
    boxProps?: JSXElementProps
    status: boolean
    setStatus: SetValue<boolean>
    minWidth?: number
    space?: number
    boxShadow?: boolean
    transitionClassName?: string
    transitionType?: string
    transitionDuration?: number
    showAnimation?: boolean
    hideAnimation?: boolean
    onRef?: (args:FixedBoxOnRef) => void
}

export default class FixedBox extends React.Component<Props> {
    private static defaultProps = {
        boxProps: DV.JSX_ELEMENT_PROPS,
        space: 0,
        boxShadow: true,
        transitionClassName: "src-overlay-fixed-box-up",
        transitionDuration: 300,
        showAnimation: true,
        hideAnimation: true
    }

    private box = React.createRef<HTMLDivElement>()

    componentDidMount() {
        const container = findDOMNode(this) as HTMLElement
        DOMHelper.addEventListener(container, ["click"], this.toggle)

        if(this.props.onRef)
            this.props.onRef({setPosition:this.setPosition})
    }

    componentDidUpdate(op) {
        if(op.status != this.props.status) {
            if(this.props.status) {
                this.setPosition()
                DOMHelper.addEventListener(window, ["resize", "scroll"], this.setPosition)
                DOMHelper.addEventListener(window, ["click"], this.detect)
            } else {
                DOMHelper.removeEventListener(window, ["resize", "scroll"], this.setPosition)
                DOMHelper.removeEventListener(window, ["click"], this.detect)
            }
        }
    }

    componentWillUnmount() {
        const container = findDOMNode(this) as HTMLElement
        DOMHelper.removeEventListener(container, ["click"], this.toggle)
    }

    /**
     * Sets the box position.
     */
    setPosition = (): void => {
        const container = findDOMNode(this) as HTMLElement
        if(!(container && this.box.current))
            return

        let crect: DOMRect = container.getBoundingClientRect()
        let brect: DOMRect = this.box.current.getBoundingClientRect()
        let style: string = ""

        // x
        if(!this.props.minWidth) {
            style += `
                left: ${crect.left}px;
                width: ${crect.width}px;
            `
        } else {
            let width: number = Math.max(crect.width, this.props.minWidth)
            style += `width:${width}px;`

            let diffLeft: number = window.innerWidth - (crect.left + width)
            let diffRight: number = crect.left - width

            if(diffLeft >= 0 || diffLeft >= diffRight)
                style += `left:${crect.left}px;`
            else
                style += `left:${crect.left + crect.width - width}px;`
        }

        // y
        let diffTop: number = (crect.top + crect.height) - (brect.height + 1)
        let diffBottom: number = window.innerHeight - (crect.top + crect.height + brect.height + this.props.space)

        if(diffBottom >= 0 || diffBottom >= diffTop) {
            let height: number = diffBottom > 0 ? brect.height : (window.innerHeight - (crect.top + crect.height + this.props.space))
            style += `
                top: ${crect.top + crect.height + this.props.space}px;
                height: ${height}px;
            `
        } else {
            let height: number = diffTop > 0 ? brect.height : crect.top
            style += `
                top: ${(crect.top + crect.height) - (height + 1)}px;
                height: ${height}px;
            `
        }
        
        this.box.current.setAttribute("style", style)  
    }

    /**
     * Closes the box.
     */
    close = (): void => this.props.setStatus(false)

    /**
     * Detects target if it is in the range, if it is not, closes the box.
     * 
     * @param e 
     */
    detect = (e:Event): void => {
        const target = e.target as Node
        const container = findDOMNode(this) as HTMLElement
      
        if(
            this.box.current &&
            e.target != container &&
            !container.contains(target) &&
            e.target != this.box.current &&
            !this.box.current.contains(target)
        )
            this.close()
    }

    /**
     * Toggles element if it is clickable.
     * 
     * @param e 
     */
    toggle = (e:Event): void => {
        const container = findDOMNode(this) as HTMLElement
        if(DOMHelper.checkIfTargetIsClickable(e.target as HTMLElement, container))
            this.props.setStatus(!this.props.status)
    }

    /**
     * Calls the set position method before showing the box element.
     */
    beforeShow = () => new Promise<void>(resolve => {
        this.setPosition()
        resolve()
    })

    render() {
        const FixedBoxEl = <FixedBoxElement {...this.props.boxProps} ref={this.box} boxShadow={this.props.boxShadow}>{this.props.children[1]}</FixedBoxElement>

        return (
            <>
                {this.props.children[0]}
                <CSSTransition status={this.props.status} className={this.props.transitionClassName} type={this.props.transitionType} duration={this.props.transitionDuration} showAnimation={this.props.showAnimation} hideAnimation={this.props.hideAnimation} beforeShow={this.beforeShow}>
                    <Overlay breakpoint="medium" elementProps={{alignItems:"center",alignItemsLg:"initial"}}>{FixedBoxEl}</Overlay>
                </CSSTransition>
            </>
        )
    }
}
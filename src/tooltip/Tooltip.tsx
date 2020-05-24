import React from "react"
import {findDOMNode, createPortal} from "react-dom"
import {SizeProps} from "../props/size-props"
import {JSXElementProps} from "../props"
import {TooltipAttributes} from "../types/tooltip"
import DV from "../default-value"
import DOMHelper from "../helper/DOMHelper"
import TooltipHelper from "../helper/TooltipHelper"
import CSSTransition from "../transition/CSSTransition"
import TooltipElement from "./Element"
import ArrowElement from "./ArrowElement"

export interface Props extends SizeProps {
    children: [JSX.Element, JSX.Element]
    elementProps?: JSXElementProps
    type?: string
    position?: string
    renderInBody?: boolean
    transitionClassName?: string
    transitionType?: string
    transitionDuration?: number
    showAnimation?: boolean
    hideAnimation?: boolean
}

interface State {
    status: boolean
    attrs: TooltipAttributes
}

const DEFAULT_STYLE = {}

export default class Tooltip extends React.Component<Props, State> {
    private static defaultProps = {
        size: "default",
        elementProps: DV.JSX_ELEMENT_PROPS,
        type: "black",
        position: "top",
        renderInBody: true,
        transitionClassName: "src-fade",
        transitionType: "ease-in-out",
        transitionDuration: 300,
        showAnimation: true,
        hideAnimation: true
    }

    private el = React.createRef<HTMLDivElement>()
    private arrowEl = React.createRef<HTMLDivElement>()

    constructor(props) {
        super(props)

        this.state = {
            status: false,
            attrs: {}
        }
    }

    componentDidMount() {
        const containerEl = findDOMNode(this) as HTMLElement
    
        if(!DOMHelper.isMobile) {
            DOMHelper.addEventListener(containerEl, ["mouseover"], this.open)
            DOMHelper.addEventListener(containerEl, ["mouseleave"], this.close)
        } else {
            DOMHelper.addEventListener(document.body, ["click"], this.closeIfNotInRange)
            if(this.state.status)
                DOMHelper.addEventListener(window, ["resize", "scroll"], this.setPosition, true)
        }
            
        DOMHelper.addEventListener(containerEl, ["click"], this.toggle)
    }

    componentDidUpdate(op, os) {
        const ns = this.state

        if(os.status != ns.status && DOMHelper.isMobile) {
            if(ns.status)
                DOMHelper.addEventListener(window, ["resize", "scroll"], this.setPosition, true)
            else
                DOMHelper.removeEventListener(window, ["resize", "scroll"], this.setPosition)
        }
    }

    componentWillUnmount() {
        const containerEl = findDOMNode(this) as HTMLElement

        if(!DOMHelper.isMobile) {
            DOMHelper.removeEventListener(containerEl, ["mouseover"], this.open)
            DOMHelper.removeEventListener(containerEl, ["mouseleave"], this.close)
        } else {
            DOMHelper.removeEventListener(document.body, ["click"], this.closeIfNotInRange)
            DOMHelper.removeEventListener(window, ["resize", "scroll"], this.setPosition)
        }
        DOMHelper.removeEventListener(containerEl, ["click"], this.toggle)
    }

    /**
     * Opens element.
     */
    open = () => {
        if(!this.state.status)
            this.setState({
                ...this.state,
                status: true
            })
    }

    /**
     * Closes element.
     */
    close = () => {
        if(this.state.status)
            this.setState({
                ...this.state,
                status: false
            })
    }

    /**
     * Closes element if target is not in the range.
     */
    closeIfNotInRange = (e:Event) => {
        const containerEl = findDOMNode(this) as HTMLElement

        if(this.state.status && !(e.target == containerEl || containerEl.contains(e.target as HTMLElement)))
            this.setState({
                ...this.state,
                status: false
            })
    }

    /**
     * Toggles element.
     */
    toggle = () => {
        this.setState({
            ...this.state,
            status: !this.state.status
        })
    }

    /**
     * Sets position of the element.
     */
    setPosition = () => {
        if(this.state.status) {
            const containerEl = findDOMNode(this) as HTMLElement
            this.setState({
                ...this.state,
                attrs: TooltipHelper.getAttributes(this.el.current, containerEl, this.props.position, null, this.arrowEl.current)
            })
        }
    }

    /**
     * Calls the set position method before showing the box element.
     */
    beforeShow = () => new Promise<void>(resolve => {
        this.setPosition()
        resolve()
    })

    render() {
        const p = this.props
        const s = this.state

        const Element = (
            <CSSTransition status={s.status} className={p.transitionClassName} type={p.transitionType} duration={p.transitionDuration} showAnimation={p.showAnimation} hideAnimation={p.hideAnimation} beforeShow={this.beforeShow}>
                <TooltipElement {...p.elementProps} style={{...(p.elementProps.style || DEFAULT_STYLE),transform:s.attrs.transform}} ref={this.el} size$={p.size} size$Sm={p.sizeSm} size$Md={p.sizeMd} size$Lg={p.sizeLg} size$Xl={p.sizeXl} type={p.type} arrow={s.attrs.arrow}>
                    {p.children[1]}
                    <ArrowElement zIndex="tooltip" ref={this.arrowEl} style={{transform:s.attrs.arrowTransform}} />
                </TooltipElement>
            </CSSTransition>
        )

        return (
            <>
                {p.children[0]}
                {DOMHelper.canBeRenderedInPortal(p.renderInBody) ? createPortal(Element, document.body) : Element}
            </>
        )
    }
}
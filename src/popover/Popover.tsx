import React from "react"
import {findDOMNode, createPortal} from "react-dom"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, SetValue} from "../props"
import {TooltipAttributes} from "../types/tooltip"
import DV from "../default-value"
import DOMHelper from "../helper/DOMHelper"
import TooltipHelper from "../helper/TooltipHelper"
import PopoverElement from "./Element"
import ArrowElement from "../tooltip/ArrowElement"

export interface Props extends SizeProps {
    children: [JSX.Element, JSX.Element]
    elementProps?: JSXElementProps
    status: boolean
    setStatus: SetValue<boolean>
    type?: string
    position?: string
    dismissible?: boolean
    renderInBody?: boolean
}

interface State {
    attrs: TooltipAttributes
}

const DEFAULT_STYLE = {}

export default class Popover extends React.Component<Props, State> {
    private static defaultProps = {
        size: "default",
        elementProps: DV.JSX_ELEMENT_PROPS,
        type: "white",
        position: "right",
        renderInBody: true
    }

    private el = React.createRef<HTMLDivElement>()
    private arrowEl = React.createRef<HTMLDivElement>()

    constructor(props) {
        super(props)

        this.state = {
            attrs: {}
        }
    }

    componentDidMount() {
        const containerEl = findDOMNode(this) as HTMLElement
        
        if(!this.props.dismissible)
            DOMHelper.addEventListener(containerEl, ["click"], this.toggle)
        else {
            DOMHelper.addEventListener(containerEl, ["click"], this.open)
            if(this.props.status)
                DOMHelper.addEventListener(document.body, ["click"], this.close)
        }

        if(this.props.status)
            DOMHelper.addEventListener(window, ["resize", "scroll"], this.setPosition, true)

        this.setPosition()
    }

    componentDidUpdate(op) {
        const np = this.props

        if(np.status != op.status) {
            if(np.dismissible) {
                if(np.status)
                    DOMHelper.addEventListener(document.body, ["click"], this.close)
                else
                    DOMHelper.removeEventListener(document.body, ["click"], this.close)
            }
        
            if(np.status) {
                DOMHelper.addEventListener(window, ["resize", "scroll"], this.setPosition, true)
                this.setPosition()
            } else
                DOMHelper.removeEventListener(window, ["resize", "scroll"], this.setPosition)
        }
    }

    componentWillUnmount() {
        const containerEl = findDOMNode(this) as HTMLElement

        if(!this.props.dismissible)
            DOMHelper.removeEventListener(containerEl, ["click"], this.toggle)
        else {
            DOMHelper.removeEventListener(containerEl, ["click"], this.open)
            DOMHelper.removeEventListener(document.body, ["click"], this.close)
        }
        
        DOMHelper.removeEventListener(window, ["resize", "scroll"], this.setPosition)
    }

    /**
     * Toggles element.
     */
    toggle = () => this.props.setStatus(!this.props.status)

    /**
     * Open element.
     */
    open = () => {
        if(!this.props.status)
            this.props.setStatus(true)
    }

    /**
     * Closes element if target is not in the container element.
     */
    close = (e:Event) => {
        const containerEl = findDOMNode(this) as HTMLElement
        if(e.target != containerEl && !containerEl.contains(e.target as HTMLElement))
            this.props.setStatus(false)
    }

    /**
     * Sets position of the element.
     */
    setPosition = () => {
        if(this.props.status) {
            const containerEl = findDOMNode(this) as HTMLElement
            const headerEl = this.el.current.querySelector(`.src-popover-header`) as HTMLElement
            this.setState({
                attrs: TooltipHelper.getAttributes(this.el.current, containerEl, this.props.position, headerEl, this.arrowEl.current)
            })
        }
    }

    render() {
        const p = this.props
        const s = this.state

        const Element = (
            <PopoverElement maxWidth="300px" {...p.elementProps} style={{...(p.elementProps.style || DEFAULT_STYLE),transform:s.attrs.transform}} ref={this.el} size$={p.size} size$Sm={p.sizeSm} size$Md={p.sizeMd} size$Lg={p.sizeLg} size$Xl={p.sizeXl} type={p.type} arrow={s.attrs.arrow} isArrowInHeader={s.attrs.isArrowInHeader}>
                {p.children[1]}
                <ArrowElement zIndex="popover" ref={this.arrowEl} style={{transform:s.attrs.arrowTransform}} />
            </PopoverElement>
        )

        return (
            <>
                {p.children[0]}
                {this.props.status && (DOMHelper.canBeRenderedInPortal(p.renderInBody) ? createPortal(Element, document.body) : Element)}
            </>
        )
    }
}
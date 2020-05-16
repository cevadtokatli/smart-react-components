import React from "react"
import {createPortal} from "react-dom"
import styled, {ThemeContext} from "styled-components"
import {JSXElementProps} from "../props"
import Div from "../element/Div"
import ElementProps from "../element/Props"
import DV from "../default-value"
import DOMHelper from "../helper/DOMHelper"
import TableHelper from "../helper/TableHelper"

export interface Props {
    children: JSX.Element
    elementProps?: JSXElementProps
    id?: string
    stickyX?: number
    stickyXSm?: number
    stickyXMd?: number
    stickyXLg?: number
    stickyXXl?: number
    stickyY?: number
    stickyYSm?: number
    stickyYMd?: number
    stickyYLg?: number
    stickyYXl?: number
}

const ContainerElement = styled(Div).attrs<ElementProps>(({maxHeight="100%"}) => ({maxHeight}))<ElementProps>`
    position: relative;
    overflow-x: auto;
`

const Container: React.FC<Props> = ({children,elementProps=DV.JSX_ELEMENT_PROPS,id,stickyX,stickyXSm,stickyXMd,stickyXLg,stickyXXl,stickyY,stickyYSm,stickyYMd,stickyYLg,stickyYXl}) => {
    const theme = React.useContext(ThemeContext).src
    const [srcId] = React.useState<string>(() => `src-${id}`)
    const [style, setStyle] = React.useState<string>("")
    const el = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if(id) {
            DOMHelper.addEventListener(window, ["resize"], resize, true)
            resize()

            return () => {
                DOMHelper.removeEventListener(window, ["resize"], resize, true)
            }
        }
    }, [id])

    /**
     * Sets size style of the table.
     * 
     * @param e
     */
    const resize = (e?:Event): void => {
        if(!e || e.target == window || e.target == el.current) {
            let {x, y} = TableHelper.getBreakpointValue(
                [stickyX,stickyXSm,stickyXMd,stickyXLg,stickyXXl],
                [stickyY,stickyYSm,stickyYMd,stickyYLg,stickyYXl],
                theme
            )

            let styleText: string = ""

            let left: number = 0
            let leftZIndex: number = x + 1
            let xEls: NodeListOf<HTMLElement> = el.current.querySelectorAll("tr > *")
            for(let i=0; i<x; i++) {
                styleText += `#${srcId} > table > * > tr > *:nth-of-type(${i+1}) { left: ${left}px; z-index: ${leftZIndex--}; }`
                left += (xEls[i] as HTMLElement).offsetWidth
            }

            let yEls: NodeListOf<HTMLElement> = el.current.querySelectorAll("thead > tr")
            if(yEls.length > 0) {
                let topZIndex = (yEls[0].childNodes.length + 1) * y
                for(let i=yEls.length-1; i>yEls.length-1-y; i--) {
                    let top = (yEls[i] as HTMLElement).offsetTop
                    styleText += `#${srcId} > table > thead > tr:nth-of-type(${i+1}) > th { top: ${top}px; }`

                    for(let n=0; n<yEls[i].childNodes.length; n++) {
                        styleText += `#${srcId} > table > thead > tr:nth-of-type(${i+1}) > th:nth-of-type(${n+1}) { z-index: ${topZIndex--}; }`
                    }
                }
            }

            setStyle(styleText)
        }
    }

    return (
        <React.Fragment>
            <ContainerElement {...elementProps} id={id ? srcId : null} ref={el}>
                {children}
            </ContainerElement>
            {(typeof window !== "undefined" && id) && createPortal(<style>{style}</style>, document.head)}
        </React.Fragment>
    )
}

export default Container
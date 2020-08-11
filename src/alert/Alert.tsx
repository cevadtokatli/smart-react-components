import React from "react"
import styled from "styled-components"
import ElementProps from "../element/Props"
import {SizeStrictProps} from "../props/size-strict-props"
import Div from "../element/Div"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, JSXChildren} from "../props"
import DV from "../default-value"
import IconElement from "./IconElement"

interface AlertElementProps extends ElementProps, SizeStrictProps {
    type?: string
    fill$: boolean
    icon: boolean
    iconType: string
    iconPosition: string
}

const getCustomKeys = fill => ({
    size: (v, t) => `
        padding: ${t.alert.padding[v].y} ${t.alert.padding[v].x};
        font-size: ${t.alert.fontSize[v]};

        > ${IconElement} {
            ${fill
            ? `
                padding: 0 ${t.alert.padding[v].xHalf};
                margin-top: -${t.alert.padding[v].y};
                margin-bottom: -${t.alert.padding[v].y};

                &[data-src-icon-position="left"] {
                    margin-right: ${t.alert.padding[v].xHalf};
                    margin-left: -${t.alert.padding[v].x};
                }
    
                &[data-src-icon-position="right"] {
                    margin-right: -${t.alert.padding[v].x};
                    margin-left: ${t.alert.padding[v].xHalf};
                }
            `
            : `
                &[data-src-icon-position="left"] {
                    margin-right: ${t.alert.padding[v].xHalf};
                    margin-left: -${t.alert.padding[v].xHalf};
                }

                &[data-src-icon-position="right"] {
                    margin-right: -${t.alert.padding[v].xHalf};
                    margin-left: ${t.alert.padding[v].xHalf};
                }
            `}
        }
    `
})

const AlertElement = styled(Div).attrs<AlertElementProps>(({size="default",type="primary",fill$,iconType,mb="3"}) => ({
    customKeys: getCustomKeys(fill$),
    size,
    type,
    iconType: iconType || type,
    mb
}))<AlertElementProps>(({theme,type,fill$,icon,iconType}) => `
    box-sizing: border-box;
    border: solid 1px;
    border-radius: ${theme.src.alert.radius};
    word-wrap: break-word;
    word-break: break-word;
    font-family: ${theme.src.fontFamily.alert};

    ${fill$
    ? `
        border-color: ${theme.src.type[type].main};
        background: ${theme.src.type[type].main};
        color: ${theme.src.type[type].alert.fontFill};    
        fill: ${theme.src.type[type].alert.fontFill};

        a {
            color: ${theme.src.type[type].alert.fontFill};    
        }

        hr {
            background: ${theme.src.type[type].darkest};
        }
    `
    : `
        border-left-width: 10px;
        border-color: ${theme.src.type[type].alert.border};
        background: ${theme.src.type[type].alert.background};
        color: ${theme.src.type[type].alert.font};   
        fill: ${theme.src.type[type].alert.font}; 

        a {
            color: ${theme.src.type[type].alert.linkFont};
        }

        hr {
            background: ${theme.src.type[type].alert.hr};
        }
    `}
    
    ${icon ? `
        display: flex;

        > ${IconElement} {
            ${fill$ ? `
                background: ${iconType == type ? theme.src.type[iconType].darker : theme.src.type[iconType].main};
                fill: ${theme.src.type[iconType].alert.fontFill};
            ` : `
                fill: ${iconType == type ? theme.src.type[iconType].alert.font : theme.src.type[iconType].main};
            `}
        }

        .src-alert-content {
            flex: 1 1 auto;
        }
    ` : ""}

    > {
        header, h1, h2, h3, h4, h5, h6, p, hr {
            margin-top: 0;
            margin-bottom: ${theme.src.length["3"]};

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    a {
        font-weight: ${theme.src.alert.linkFontWeight};

        &:hover {
            text-decoration: underline;
        }
    }
    
    hr {
        width: 100%;
        height: 1px;
        border: 0;
    }
`)

export interface Props extends SizeProps {
    elementProps?: JSXElementProps
    children: JSXChildren
    type?: string
    fill?: boolean
    icon?: JSX.Element
    iconType?: string
    iconPosition?: string
}

const Alert: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,elementProps=DV.JSX_ELEMENT_PROPS,children,type,fill,icon,iconType,iconPosition="left"}) => {
    const IconEl = icon ? <IconElement data-src-icon-position={iconPosition}>{icon}</IconElement> : null

    return (
        <AlertElement {...elementProps} size={size} sizeSm={sizeSm} sizeMd={sizeMd} sizeLg={sizeLg} sizeXl={sizeXl} type={type} fill$={fill} icon={icon ? true : false} iconType={iconType} iconPosition={iconPosition}>
            {iconPosition == "left" && IconEl}
            {icon ? <div className="src-alert-content">{children}</div> : children}
            {iconPosition == "right" && IconEl}
        </AlertElement>
    )
}

export default Alert
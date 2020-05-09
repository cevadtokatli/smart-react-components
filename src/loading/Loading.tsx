import React from "react"
import styled from "styled-components"
import ElementProps from "../element/Props"
import {SizeProps} from "../props/size-props"
import Svg from "../element/Svg"

export interface Props extends ElementProps, SizeProps {
    type?: string
}

const customKeys = {
    size: (v, t) => `
        width: ${t.loading.size[v]};
        height: ${t.loading.size[v]};
    `
}

export default styled(Svg).attrs<Props>(({size="default",type="primary"}) => ({
    customKeys,
    children: <circle cx="22" cy="22" r="20" strokeWidth="4" />,
    viewBox: "0 0 44 44",
    size,
    type
}))<Props>(({theme,type}) => `
    animation: src-loading-spin-animation ${theme.src.loading.animation} infinite;

    circle {
        fill: none;
        stroke: ${theme.src.type[type].main};
        stroke-dasharray: 1,150;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: src-loading-spin-circle-animation ${theme.src.loading.animation} infinite;
    }

    @keyframes src-loading-spin-animation {
        from {
            transform: rotate(0deg);
        }
    
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes src-loading-spin-circle-animation {
        0% {
            stroke-dasharray: 1,150;
            stroke-dashoffset: 0;
        }
    
        50% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -35;
        }
    
        100% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -124;
        }
    }
`)
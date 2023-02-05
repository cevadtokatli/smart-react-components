import Circle from '@smart-react-components/core/Element/Circle'
import Svg from '@smart-react-components/core/Element/Svg'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import styled from 'styled-components'

interface Props extends
  StyledProps,
  ResponsiveProp<'loadingSize', SizeProp> {
  loadingColor: string
}

export default styled(Svg).attrs<Props>(({ loadingColor }) => ({
  children: <Circle cx="22" cy="22" r="20" stroke={loadingColor} strokeWidth={4} />,
  getLoadingSize: (v, t) => `
    height: ${t.$.size.loading[v]};
    width: ${t.$.size.loading[v]};
  `,
  viewBox: '0 0 44 44',
}))<Props>`
  animation: src-loading-animation 2000ms linear infinite;

  circle {
    animation: src-loading-circle-animation 2000ms linear infinite;
    fill: none;
    stroke-dasharray: 1,150;
    stroke-dashoffset: 0;
    stroke-linecap: round;
  }

  @keyframes src-loading-animation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes src-loading-circle-animation {
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
`

import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import React from 'react'
import styled from 'styled-components'
import { Props as ColorPickerProps } from '../../../context/ColorPickerProps'
import PickerElement from './PickerElement'

interface Props extends StyledProps, ColorPickerProps {
  bgElRef: React.MutableRefObject<HTMLDivElement>
  children: JSX.Element
}

export default styled(PickerElement).attrs<Props>(({ bgElRef, children, value }) => ({
  children: (
    <div ref={bgElRef}>
      <Div
        background="linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))"
      >
        <Div
          background="linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
          boxShadow="0 0 3px rgba(0,0,0,.3) inset"
        >
          {children}
        </Div>
      </Div>
    </div>
  ),
  getColorPickerSize: (v, t) => `
    height: ${t.$.size.colorPicker[v].majorPickerSize};
    width: ${t.$.size.colorPicker[v].majorPickerSize};
  `,
}))<Props>``

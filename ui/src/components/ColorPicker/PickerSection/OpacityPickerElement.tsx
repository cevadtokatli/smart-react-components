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

export default styled(PickerElement).attrs<Props>(({ bgElRef, children }) => ({
  children: (
    <Div
      background="url('{media.opacityBackground}')"
    >
      <Div
        boxShadow="0 0 3px rgba(0,0,0,.3) inset"
        ref={bgElRef}
      >
        {children}
      </Div>
    </Div>
  ),
  getColorPickerSize: (v, t) => `
    height: ${t.$.size.colorPicker[v].majorPickerSize};
    width: ${t.$.size.colorPicker[v].minorPickerWidth};
  `,
}))<Props>``

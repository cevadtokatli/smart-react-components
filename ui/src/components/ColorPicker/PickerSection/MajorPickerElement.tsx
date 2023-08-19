import Div from '@smart-react-components/core/Element/Div'
import React from 'react'
import styled from 'styled-components'
import PickerElement, { Props as PickerElementProps } from './PickerElement'

interface Props extends PickerElementProps {
  bgElRef: React.MutableRefObject<HTMLDivElement>
  children: JSX.Element
}

export default styled(PickerElement).attrs<Props>(({ bgElRef, children, value }) => ({
  children: (
    <div className="src-color-picker-major-picker-bg" ref={bgElRef}>
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

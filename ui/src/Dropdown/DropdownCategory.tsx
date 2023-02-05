import Div from '@smart-react-components/core/Element/Div'
import { ContentElement } from '@smart-react-components/core/types'
import React from 'react'
import { PrivateProps } from './DropdownItem'

export interface Props {
  children: JSX.Element | JSX.Element[]
  label: ContentElement
}

const DropdownCategory: React.FC<Props> = ({ children, hasHover, hasWaveEffect, isOutline, isSoft, label, palette, setStatus, waveEffectPalette }: Props & PrivateProps) => (
  <>
    <Div fontWeight="$fontWeight.dropdownCategory">{label}</Div>
    { (Array.isArray(children) ? children : [children]).map((item, idx) => React.cloneElement(item, {
      key: item.key ?? idx,
      hasHover,
      hasWaveEffect,
      isOutline,
      isSoft,
      palette,
      setStatus,
      waveEffectPalette,
    })) }
  </>
)

export default DropdownCategory

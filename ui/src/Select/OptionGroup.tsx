import Div from '@smart-react-components/core/Element/Div'
import { ContentElement } from '@smart-react-components/core/types'
import React from 'react'
import { PrivateProps } from './Option'

export interface Props {
  children: JSX.Element | JSX.Element[]
  label: ContentElement
}

const OptionGroup: React.FC<Props> = ({ children, active, hasHover, hasWaveEffect, isDisabled, isEmbedded, isOutline, isSoft, label, palette, setActive, waveEffectPalette }: Props & PrivateProps) => (
  <>
    <Div fontWeight="$fontWeight.semibold">{label}</Div>
    { (Array.isArray(children) ? children : [children]).map((item, idx) => React.cloneElement(item, {
      key: item.key ?? idx,
      active,
      hasHover,
      hasWaveEffect,
      isEmbedded,
      isOutline,
      isSoft,
      palette,
      setActive,
      waveEffectPalette,
      ...(isDisabled && { isDisabled }),
    })) }
  </>
)

OptionGroup.displayName = 'OptionGroup'

export default OptionGroup

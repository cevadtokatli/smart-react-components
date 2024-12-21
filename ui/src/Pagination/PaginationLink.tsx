import A from '@smart-react-components/core/Element/A'
import useLink, { LinkProps } from '@smart-react-components/router/hooks/useLink'
import React from 'react'
import WaveEffect from '../WaveEffect'
import { PrivateProps as PaginationItemPrivateProps } from './PaginationItem'
import PaginationItemElement from '../components/Pagination/PaginationItemElement'

export interface Props extends LinkProps {
  isActive?: boolean
}

const PaginationLink: React.FC<Props> = (props: Props & PaginationItemPrivateProps) => {
  const { children, handleOnClick, isActive, to } = useLink({
    children: props.children,
    isDisabled: props.isDisabled,
    isExact: props.isExact,
    onClick: null,
    path: props.path,
    to: props.to,
  })

  const AnchorEl = (
    <A
      {...props.elementProps}
      href={to}
      onClick={handleOnClick}
    >
      {children}
    </A>
  )
  const El = props.hasWaveEffect ? <WaveEffect palette={props.waveEffectPalette}>{AnchorEl}</WaveEffect> : AnchorEl

  return (
    <PaginationItemElement
      isActive={props.isActive ?? isActive}
      isDisabled={props.isDisabled}
      isFixedSize={props.isFixedSize}
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      shape={props.shape}
    >
      {El}
    </PaginationItemElement>
  )
}

PaginationLink.defaultProps = {
  isExact: true,
}

export default PaginationLink

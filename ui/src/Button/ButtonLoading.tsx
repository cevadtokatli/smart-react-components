import { PaletteProp } from '@smart-react-components/core/types'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import React from 'react'
import ButtonLoadingElement from '../components/Button/ButtonLoadingElement'
import Loading from '../Loading'

interface Props {
  children?: JSX.Element
  hasAnimation?: boolean
}

interface PrivateProps {
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  status: boolean
}

const ButtonLoading: React.FC<Props> = ({ children, hasAnimation = true, isOutline, isSoft, palette, status }: Props & PrivateProps) => {
  const getColor = () => `!${palette}.${
    !isSoft
      ? !isOutline ? 'font' : 'main'
      : !isOutline ? 'softFont' : 'soft'
  }`

  return (
    <CSSTransition className="src-button-loading" duration={300} hasHideAnimation={hasAnimation} hasShowAnimation={hasAnimation} status={status}>
      <ButtonLoadingElement hasAnimation={hasAnimation}>
        { children ?? <Loading color={getColor()} /> }
      </ButtonLoadingElement>
    </CSSTransition>
  )
}

ButtonLoading.displayName = 'SRCLoading'

export default ButtonLoading

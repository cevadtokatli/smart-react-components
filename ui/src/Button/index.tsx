import Div from '@smart-react-components/core/Element/Div'
import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import intrinsicStyledProps from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { Nullable } from '@smart-react-components/core/types'
import React from 'react'
import { StyledComponent, ThemeContext } from 'styled-components'
import ButtonAddon from './ButtonAddon'
import ButtonElement from '../components/Button'
import ButtonContent from '../components/Button/ButtonContent'
import useAddons from '../hooks/useAddons'
import { getWaveEffectPalette } from '../util/wave-effect'
import WaveEffect from '../WaveEffect'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import ButtonLoading from './ButtonLoading'
import { ButtonGenericProps, ButtonType } from '../types/button'

export interface Props extends
  ButtonGenericProps,
  ClickEvents {
  as?: string | StyledComponent<any, any>
  type?: ButtonType
}

const Button = React.forwardRef<HTMLElement, Props>((props, forwardRef) => {
  const theme = React.useContext(ThemeContext)

  const { leftAddon, rightAddon } = useAddons({
    Component: ButtonAddon,
    leftAddon: props.leftAddon,
    rightAddon: props.rightAddon,
    props: {
      hasHover: props.hasHover,
      hasWaveEffect: props.hasWaveEffect,
      isOutline: props.isOutline,
      isSoft: props.isSoft,
      palette: props.palette,
      shape: props.shape,
      size: props.size,
      sizeSm: props.sizeSm,
      sizeMd: props.sizeMd,
      sizeLg: props.sizeLg,
      sizeXl: props.sizeXl,
      waveEffectPalette: props.waveEffectPalette,
    },
  })

  const getLoadingEl = () => {
    if (!props.loading) {
      return null
    }

    const loadingProps = {
      isOutline: props.isOutline,
      isSoft: props.isSoft,
      palette: props.palette,
      status: props.isLoading,
    }

    if (props.loading.type?.displayName === 'SRCLoading') {
      return React.cloneElement(props.loading, loadingProps)
    }

    return <ButtonLoading {...loadingProps}>{props.loading}</ButtonLoading>
  }

  const [loadingEl, setLoadingEl] = React.useState<Nullable<JSX.Element>>(() => getLoadingEl())

  useChangeEffect(() => {
    setLoadingEl(getLoadingEl())
  }, [props.loading, props.isLoading])

  const hasButtonContainer = leftAddon?.props?.isSeparated || rightAddon?.props?.isSeparated

  let Element = (
    <ButtonElement
      {...props.elementProps}
      {...((!props.isDisabled && !props.isLoading) && extractElementProps(props, [clickEvents]))}
      {...(!hasButtonContainer && extractElementProps(props, [intrinsicStyledProps]))}
      {...(props.as && { as: props.as })}
      buttonSize={props.size}
      buttonSizeSm={props.sizeSm}
      buttonSizeMd={props.sizeMd}
      buttonSizeLg={props.sizeLg}
      buttonSizeXl={props.sizeXl}
      hasButtonContainer={hasButtonContainer}
      hasHover={props.hasHover}
      hasLeftAddon={!!leftAddon}
      hasRightAddon={!!rightAddon}
      hasSeparatedLeftAddon={!!leftAddon?.props?.isSeparated}
      hasSeparatedRightAddon={!!rightAddon?.props?.isSeparated}
      isBlock={props.isBlock}
      isDisabled={props.isDisabled}
      isFixedSize={props.isFixedSize}
      isLink={props.isLink}
      isLoading={props.isLoading}
      isSoft={props.isSoft}
      isOutline={props.isOutline}
      palette={props.palette}
      ref={forwardRef}
      shape={props.shape}
    >
      { loadingEl && loadingEl }
      { (leftAddon && !leftAddon.props.isSeparated) && leftAddon }
      <ButtonContent>{props.children}</ButtonContent>
      { (rightAddon && !rightAddon.props.isSeparated) && rightAddon }
    </ButtonElement>
  )

  if (props.hasWaveEffect) {
    Element = <WaveEffect palette={getWaveEffectPalette(props.waveEffectPalette, props.palette, props.isSoft, props.isLink, theme.$.vars.isDarkMode)}>{Element}</WaveEffect>
  }

  if (hasButtonContainer) {
    Element = (
      <Div
        {...(extractElementProps(props, [intrinsicStyledProps]))}
        display={props.isBlock ? 'flex' : 'inline-flex'}
      >
        { leftAddon?.props?.isSeparated && leftAddon }
        { Element }
        { rightAddon?.props?.isSeparated && rightAddon }
      </Div>
    )
  }

  return Element
})

Button.defaultProps = {
  elementProps: {},
  hasHover: true,
  hasWaveEffect: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
  type: ButtonType.BUTTON,
}

export default Button

import Div from '@smart-react-components/core/Element/Div'
import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledCoreProps from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import { Theme } from '@smart-react-components/core/theme'
import React from 'react'
import { useTheme } from 'styled-components'
import FormBlockLabel from '../components/Form/FormBlockLabel'
import useAddons from '../hooks/useAddons'
import SelectElement from '../components/Select/SelectElement'
import HiddenInput from '../components/Form/HiddenInput'
import InputWrapper from '../components/Input/InputWrapper'
import { GenericProps } from '../types/form'
import { getInputValue } from '../util/form'
import InputAddon from './SelectAddon'
import { getWaveEffectPalette } from '../util/wave-effect'

export type Props = GenericProps

const Select = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const theme = useTheme() as Theme

  const { leftAddon, rightAddon } = useAddons({
    Component: InputAddon,
    leftAddon: props.leftAddon,
    rightAddon: props.rightAddon,
    props: {
      hasBorder: props.hasBorder,
      isDisabled: props.isDisabled,
      isFocused: false,
      isOutline: props.isOutline,
      isSoft: props.isSoft,
      palette: props.palette,
      shape: props.shape,
      size: props.size,
      sizeSm: props.sizeSm,
      sizeMd: props.sizeMd,
      sizeLg: props.sizeLg,
      sizeXl: props.sizeXl,
    },
  })

  const waveEffectPalette = React.useMemo(() => getWaveEffectPalette(props, theme.$.vars.isDarkMode), [props.waveEffectPalette, props.palette, props.isOutline, props.isSoft, theme.$.vars.isDarkMode])

  return (
    <FormBlockLabel
      {...extractElementProps(props, [intrinsicStyledCoreProps])}
      as="div"
      formSize={props.size}
      formSizeSm={props.sizeSm}
      formSizeMd={props.sizeMd}
      formSizeLg={props.sizeLg}
      formSizeXl={props.sizeXl}
      isBlock={props.isBlock}
      isDisabled={props.isDisabled}
      palette={props.palette}
    >
      { props.label && <span>{props.label}</span> }
      <Div
        display="flex"
        flex="1 1 auto"
      >
        { leftAddon?.props?.isSeparated && leftAddon }
        <InputWrapper
          hasBorder={props.hasBorder}
          hasSeparatedLeftAddon={leftAddon?.props?.isSeparated}
          hasSeparatedRightAddon={rightAddon?.props?.isSeparated}
          isDisabled={props.isDisabled}
          isFocused={false}
          isOutline={props.isOutline}
          isSoft={props.isSoft}
          palette={props.palette}
          shape={props.shape}
        >
          { (leftAddon && !leftAddon?.props?.isSeparated) && leftAddon }
          <SelectElement
            hasLeftAddon={!!leftAddon}
            hasRightAddon={!!rightAddon}
            inputSize={props.size}
            inputSizeSm={props.sizeSm}
            inputSizeMd={props.sizeMd}
            inputSizeLg={props.sizeLg}
            inputSizeXl={props.sizeXl}
            isDisabled={props.isDisabled}
            isFocused={false}
            isOutline={props.isOutline}
            isSoft={props.isSoft}
            palette={props.palette}
          >
            <HiddenInput
              onChange={() => {}}
              ref={forwardRef}
              value={getInputValue(props.active)}
              {...(props.isDisabled && { disabled: true })}
              {...(props.isRequired && { required: true })}
            />
            { (Array.isArray(props.children) ? props.children : [props.children]).map((item, idx) => React.cloneElement(item, {
              key: item.key ?? idx,
              active: props.active,
              cursorKey: 'select',
              hasHover: props.hasHover,
              hasWaveEffect: props.hasWaveEffect,
              isEmbedded: true,
              isOutline: props.isOutline,
              isSoft: props.isSoft,
              palette: props.palette,
              setActive: props.setActive,
              waveEffectPalette,
              ...(props.isDisabled && { isDisabled: true }),
            })) }
          </SelectElement>
          { (rightAddon && !rightAddon?.props?.isSeparated) && rightAddon }
        </InputWrapper>
        { rightAddon?.props?.isSeparated && rightAddon }
      </Div>
    </FormBlockLabel>
  )
})

Select.defaultProps = {
  hasBorder: true,
  hasHover: true,
  hasWaveEffect: true,
  isBlock: true,
  isOutline: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
}

export default Select

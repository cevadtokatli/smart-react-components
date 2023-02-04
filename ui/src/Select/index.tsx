import Div from '@smart-react-components/core/Element/Div'
import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps from '@smart-react-components/core/element-props/intrinsic-styled-props'
import React from 'react'
import FormBlockLabel from '../components/FormBlockLabel'
import useAddons from '../hooks/useAddons'
import SelectElement from './SelectElement'
import HiddenInput from '../components/HiddenInput'
import { GenericProps } from '../types/form'
import { getInputValue } from '../util/form'
import InputAddon from './SelectAddon'

export type Props = GenericProps

const Select = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
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

  return (
    <FormBlockLabel
      {...extractElementProps(props, [intrinsicStyledProps])}
      as="div"
      formSize={props.size}
      formSizeSm={props.sizeSm}
      formSizeMd={props.sizeMd}
      formSizeLg={props.sizeLg}
      formSizeXl={props.sizeXl}
      isBlock={props.isBlock}
      isDisabled={props.isDisabled}
    >
      { props.label && <span>{props.label}</span> }
      <Div
        display="flex"
        flex="1 1 auto"
      >
        { leftAddon && leftAddon }
        <SelectElement
          hasBorder={props.hasBorder}
          hasLeftAddon={!!leftAddon}
          hasRightAddon={!!rightAddon}
          hasSeparatedLeftAddon={leftAddon?.props?.isSeparated}
          hasSeparatedRightAddon={rightAddon?.props?.isSeparated}
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
          shape={props.shape}
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
            hasHover: props.hasHover,
            hasWaveEffect: props.hasWaveEffect,
            isEmbedded: true,
            isOutline: props.isOutline,
            isSoft: props.isSoft,
            palette: props.palette,
            setActive: props.setActive,
            waveEffectPalette: props.waveEffectPalette,
            ...(props.isDisabled && { isDisabled: true }),
          })) }
        </SelectElement>
        { rightAddon && rightAddon }
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
  waveEffectPalette: 'light',
}

export default Select
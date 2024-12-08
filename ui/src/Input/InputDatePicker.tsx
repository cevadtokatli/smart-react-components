import Div from '@smart-react-components/core/Element/Div'
import extractElementProps from '@smart-react-components/core/element-props'
import changeEvents, { ChangeEvents } from '@smart-react-components/core/element-props/change-events'
import focusEvents, { FocusEvents } from '@smart-react-components/core/element-props/focus-events'
import intrinsicStyledCoreProps, { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import keyboardEvents, { KeyboardEvents } from '@smart-react-components/core/element-props/keyboard-events'
import { ContentElement, JSXElementProps, PaletteProp, SetState, ShapeProp, SizeProps } from '@smart-react-components/core/types'
import React from 'react'
import FormBlockLabel from '../components/Form/FormBlockLabel'
import InputElement from '../components/Input/InputElement'
import InputWrapper from '../components/Input/InputWrapper'
import { DatePickerTimeType, DatePickerType } from '../constants/date-picker'
import useAddons from '../hooks/useAddons'
import { applyResponsiveStyledProp } from '../util/props'
import FixedBox from '../FixedBox'
import InputAddon from './InputAddon'
import DatePicker from '../DatePicker'

export { DatePickerType, DatePickerTimeType } from '../constants/date-picker'

export interface Props extends
  IntrinsicStyledCoreProps,
  SizeProps,
  ChangeEvents,
  FocusEvents,
  KeyboardEvents {
  elementProps?: JSXElementProps
  hasBorder?: boolean
  isBlock?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isSoft?: boolean
  label?: string
  leftAddon?: ContentElement
  onCancel?: (e: Event) => void
  onClose?: (e: Event) => void
  onSave?: (e: Event) => void
  palette?: PaletteProp
  pickerType?: DatePickerType
  placeholder?: string
  rightAddon?: ContentElement
  shape?: ShapeProp
  timeType?: DatePickerTimeType
  setValue: SetState<Date>
  value: Date
}

const InputDatePicker = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const ref = React.useRef<HTMLInputElement>(null)

  const [status, setStatus] = React.useState(() => false)

  const { leftAddon, rightAddon } = useAddons({
    Component: InputAddon,
    leftAddon: props.leftAddon,
    rightAddon: props.rightAddon,
    props: {
      cursorKey: 'selectBox',
      hasBorder: props.hasBorder,
      isDisabled: props.isDisabled,
      isFocused: status,
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

  const handleBlur = () => {
    const value = ref.current?.value

    if (value) {
      props.setValue(new Date(value))
    } else {
      props.setValue(null)
    }
  }

  React.useEffect(() => {
    ref.current.value = props.value?.toDateString() ?? ''
  }, [props.value])

  return (
    <FormBlockLabel
      {...extractElementProps(props, [intrinsicStyledCoreProps])}
      cursorKey="selectBox"
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
          <FixedBox
            elementProps={{
              ...applyResponsiveStyledProp(props, 'size', 'width', v => `$size.colorPicker.${v}.width`),
              background: '$color.dynamic.background',
              borderRadius: '$radius.colorPicker',
              boxShadow: '0 0 10px 1px {color.dynamic.shadow}',
              height: ['auto', true],
            }}
            maxWidth={-1}
            minWidth={-1}
            setStatus={setStatus}
            status={status}
          >
            <InputElement
              {...(!props.isDisabled && extractElementProps(props, [changeEvents, focusEvents, keyboardEvents]))}
              {...(!props.isDisabled && {
                onBlur: handleBlur,
              })}
              {...(props.isDisabled && { disabled: true })}
              {...(props.isReadOnly && { readOnly: true })}
              {...(props.isRequired && { required: true })}
              {...(typeof props.placeholder !== 'undefined' && { placeholder: props.placeholder })}
              defaultValue={props.value?.toDateString() ?? ''}
              hasLeftAddon={!!leftAddon}
              hasRightAddon={!!rightAddon}
              inputSize={props.size}
              inputSizeSm={props.sizeSm}
              inputSizeMd={props.sizeMd}
              inputSizeLg={props.sizeLg}
              inputSizeXl={props.sizeXl}
              isDisabled={props.isDisabled}
              isFocused={status}
              isOutline={props.isOutline}
              isSoft={props.isSoft}
              palette={props.palette}
              ref={forwardRef ?? ref}
            />
            <DatePicker
              {...applyResponsiveStyledProp(props, 'size', 'size', v => v)}
              hasCloseIcon
              onClose={() => setStatus(false)}
              isSoft={props.isSoft}
              palette={props.palette}
              pickerType={props.pickerType}
              timeType={props.timeType}
              setValue={props.setValue}
              value={props.value}
            />
          </FixedBox>
          { (rightAddon && !rightAddon?.props?.isSeparated) && rightAddon }
        </InputWrapper>
        { rightAddon?.props?.isSeparated && rightAddon }
      </Div>
    </FormBlockLabel>
  )
})

InputDatePicker.defaultProps = {
  hasBorder: true,
  isOutline: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
}

export default InputDatePicker

import Div from '@smart-react-components/core/Element/Div'
import { GenericProps } from '../types/form'
import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledCoreProps from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { Theme } from '@smart-react-components/core/theme'
import { ContentElement, JSXElementProps } from '@smart-react-components/core/types'
import React from 'react'
import { useTheme } from 'styled-components'
import Badge from '../Badge'
import BadgeIcon from '../Badge/BadgeIcon'
import BadgeList from '../Badge/BadgeList'
import FormBlockLabel from '../components/Form/FormBlockLabel'
import HiddenInput from '../components/Form/HiddenInput'
import InputWrapper from '../components/Input/InputWrapper'
import Dropdown from '../Dropdown'
import DropdownArrowIcon from '../Dropdown/DropdownArrowIcon'
import DropdownListElement from '../components/Dropdown/DropdownListElement'
import useAddons from '../hooks/useAddons'
import useSelectBoxItemList from '../hooks/useSelectBoxItemList'
import CloseIcon from '../icons/Close'
import InputElement from '../components/Input/InputElement'
import InputPlaceholder from '../components/Input/InputPlaceholder'
import useSelectBoxHover from '../hooks/useSelectBoxHover'
import { FormValue } from '../types'
import { getInputValue } from '../util/form'
import { applyResponsiveStyledProp } from '../util/props'
import { getWaveEffectPalette } from '../util/wave-effect'
import InputAddon from './SelectAddon'

export interface Props extends GenericProps {
  dropdownArrowIconElementProps?: JSXElementProps
  placeholder?: string
}

const SelectBox = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const theme = useTheme() as Theme

  const formEl = React.useRef<HTMLDivElement>(null)

  const { itemList } = useSelectBoxItemList({ children: props.children })

  const handleBadgeClick = value => props.setActive((props.active as FormValue[]).filter(i => i !== value))

  const content = React.useMemo<ContentElement>(() => {
    if (
      typeof props.active === 'undefined'
      || props.active === null
      || (Array.isArray(props.active) && props.active.length === 0)
      || (props.active === '' && !itemList[''])
    ) {
      return <InputPlaceholder>{props.placeholder}</InputPlaceholder>
    }

    if (!Array.isArray(props.active)) {
      return <div>{itemList[String(props.active)]?.children}</div>
    }

    return (
      <BadgeList
        palette={props.palette}
        isSoft={props.isSoft}
        shape={props.shape}
        size={props.size}
        sizeSm={props.sizeSm}
        sizeMd={props.sizeMd}
        sizeLg={props.sizeLg}
        sizeXl={props.sizeXl}
      >
        {
          props.active
            .map(item => item)
            .sort((a, b) => itemList[String(a)].idx < itemList[String(b)].idx ? -1 : 1)
            .map(item => (
              <Badge key={String(item)} elementProps={{ 'data-src-not-clickable': true }}>
                <BadgeIcon onClick={() => handleBadgeClick(item)}>
                  <CloseIcon />
                </BadgeIcon>
                {itemList[String(item)].children}
              </Badge>
            ))
        }
      </BadgeList>
    )
  }, [props.active, props.placeholder, itemList])

  const [dropdownStatus, setDropdownStatus] = React.useState(false)

  const waveEffectPalette = React.useMemo(() => getWaveEffectPalette(props, theme.$.vars.isDarkMode), [props.waveEffectPalette, props.palette, props.isOutline, props.isSoft, theme.$.vars.isDarkMode])

  const { hovered, setHovered } = useSelectBoxHover({
    active: props.active,
    children: Array.isArray(props.children) ? props.children : [props.children],
    dropdownStatus,
    hasHover: props.hasHover,
    isDisabled: props.isDisabled,
    setActive: props.setActive,
    setDropdownStatus,
  })

  useChangeEffect(() => {
    const event = new Event('src.fixedBox.setPosition')
    formEl.current.dispatchEvent(event)
  }, [content])

  const { leftAddon, rightAddon } = useAddons({
    Component: InputAddon,
    leftAddon: props.leftAddon,
    rightAddon: props.rightAddon,
    props: {
      cursorKey: 'selectBox',
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

  const handleOptionClick = active => {
    props.setActive(active)

    if (!Array.isArray(active)) {
      setDropdownStatus(false)
    }
  }

  return (
    <Dropdown
      elementProps={props.elementProps}
      status={dropdownStatus}
      setStatus={setDropdownStatus}
    >
      <FormBlockLabel
        {...extractElementProps(props, [intrinsicStyledCoreProps])}
        as="div"
        cursorKey="selectBox"
        formSize={props.size}
        formSizeSm={props.sizeSm}
        formSizeMd={props.sizeMd}
        formSizeLg={props.sizeLg}
        formSizeXl={props.sizeXl}
        isBlock={props.isBlock}
        isDisabled={props.isDisabled}
        ref={formEl}
      >
        { props.label && <span>{props.label}</span> }
        <Div
          display="flex"
          flex="1 1 auto"
        >
          { leftAddon?.props?.isSeparated && leftAddon }
          <InputWrapper
            cursor="$cursor.selectBox"
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
            <InputElement
              hasLeftAddon={!!leftAddon}
              hasRightAddon={!!rightAddon}
              inputSize={props.size}
              inputSizeSm={props.sizeSm}
              inputSizeMd={props.sizeMd}
              inputSizeLg={props.sizeLg}
              inputSizeXl={props.sizeXl}
              isDisabled={props.isDisabled}
              isFocused={false}
              isInput={false}
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
              { content }
              <DropdownArrowIcon
                fill="currentcolor"
                {...applyResponsiveStyledProp(props, 'size', 'iconSize', v => `$size.icon.${v}`)}
                {...props.dropdownArrowIconElementProps}
              />
            </InputElement>
            { (rightAddon && !rightAddon?.props?.isSeparated) && rightAddon }
          </InputWrapper>
          { rightAddon?.props?.isSeparated && rightAddon }
        </Div>
      </FormBlockLabel>
      <DropdownListElement
        dropdownListSize={props.size}
        dropdownListSizeSm={props.sizeSm}
        dropdownListSizeMd={props.sizeMd}
        dropdownListSizeLg={props.sizeLg}
        dropdownListSizeXl={props.sizeXl}
        isOutline={props.isOutline}
        isSoft={props.isSoft}
        palette={props.palette}
      >
        { (Array.isArray(props.children) ? props.children : [props.children]).map((item, idx) => item && React.cloneElement(item, {
          key: item.key ?? idx,
          active: props.active,
          cursorKey: 'selectBox',
          hasHover: false,
          hasWaveEffect: props.hasWaveEffect,
          hovered,
          isEmbedded: false,
          isOutline: props.isOutline,
          isSoft: props.isSoft,
          palette: props.palette,
          setActive: handleOptionClick,
          setHovered: props.hasHover ? setHovered : null,
          waveEffectPalette,
          ...(props.isDisabled && { isDisabled: true }),
        })) }
      </DropdownListElement>
    </Dropdown>
  )
})

SelectBox.defaultProps = {
  dropdownArrowIconElementProps: {},
  elementProps: {},
  hasBorder: true,
  hasHover: true,
  hasWaveEffect: true,
  isBlock: true,
  isOutline: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
}

export default SelectBox

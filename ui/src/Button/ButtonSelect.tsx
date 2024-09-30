import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, SetState } from '@smart-react-components/core/types'
import React from 'react'
import Button from './'
import DropdownArrowIcon from '../Dropdown/DropdownArrowIcon'
import Dropdown from '../Dropdown'
import DropdownListElement from '../components/Dropdown/DropdownListElement'
import useSelectBoxItemList from '../hooks/useSelectBoxItemList'
import { FormValue } from '../types'
import { ButtonGenericProps } from '../types/button'
import useSelectBoxHover from '../hooks/useSelectBoxHover'

interface Props extends ButtonGenericProps<JSX.Element> {
  active: FormValue | FormValue[]
  hasHover?: boolean
  placeholder?: string
  setActive: SetState<FormValue | FormValue[]>
}

const ButtonSelect = React.forwardRef<HTMLDivElement, Props>((props, forwardRef) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const { itemList } = useSelectBoxItemList({ children: props.children })

  const getContent = () => {
    if (
      typeof props.active === 'undefined'
      || props.active === null
      || (props.active as FormValue[]).length === 0
    ) {
      return props.placeholder
    }

    if (!Array.isArray(props.active)) {
      return itemList[String(props.active)]?.children
    }

    return (
      <span>
        { props.active
          .sort((a, b) => itemList[String(a)].idx < itemList[String(b)].idx ? -1 : 1)
          .map((item, idx) => (
            <React.Fragment key={String(item)}>
              <span>{itemList[String(item)].children}</span>
              { idx + 1 < (props.active as FormValue[]).length ? ', ' : '' }
            </React.Fragment>
          ))
        }
      </span>
    )
  }

  const [content, setContent] = React.useState<ContentElement>(() => getContent())
  const [dropdownStatus, setDropdownStatus] = React.useState(false)

  useChangeEffect(() => {
    setContent(getContent())
  }, [props.active, props.placeholder, itemList])

  useChangeEffect(() => {
    const event = new Event('src.fixedBox.setPosition');
    ((forwardRef ?? ref) as React.MutableRefObject<HTMLDivElement>).current.dispatchEvent(event)
  }, [content])

  const { hovered, setHovered } = useSelectBoxHover({
    active: props.active,
    children: Array.isArray(props.children) ? props.children : [props.children],
    dropdownStatus,
    hasHover: props.hasHover,
    setActive: props.setActive,
    setDropdownStatus,
  })

  const handleOptionClick = active => {
    props.setActive(active)

    if (!Array.isArray(active)) {
      setDropdownStatus(false)
    }
  }

  return (
    <Dropdown
      status={dropdownStatus}
      setStatus={setDropdownStatus}
    >
      <Button
        {...props}
        as="div"
        ref={forwardRef ?? ref}
      >
        <span>{content}</span>
        <DropdownArrowIcon />
      </Button>
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
        { (Array.isArray(props.children) ? props.children : [props.children]).map((item, idx) => React.cloneElement(item, {
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
          waveEffectPalette: props.waveEffectPalette,
          ...(props.isDisabled && { isDisabled: true }),
        })) }
      </DropdownListElement>
    </Dropdown>
  )
})

ButtonSelect.defaultProps = {
  hasHover: true,
  hasWaveEffect: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
  waveEffectPalette: 'light',
}

export default ButtonSelect

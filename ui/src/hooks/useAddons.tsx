import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, Nullable } from '@smart-react-components/core/types'
import React from 'react'
import { OrderPosition } from '../types'

interface Props {
  Component: React.ElementType
  leftAddon: Nullable<ContentElement>
  rightAddon: Nullable<ContentElement>
  props: {
    [key: string]: any
  }
}

interface Return {
  leftAddon: Nullable<JSX.Element>
  rightAddon: Nullable<JSX.Element>
}

const useAddons = ({ Component, leftAddon, rightAddon, props }: Props): Return => {
  const generateAddonEl = (item, position) => {
    if (!item) {
      return null
    }

    if (item?.type?.displayName === 'SRCAddon') {
      return React.cloneElement(item, {
        ...props,
        ...(item as JSX.Element).props,
        position,
      })
    }

    return (
      <Component {...props} position={position}>
        {item}
      </Component>
    )
  }

  const [leftAddonEl, setLeftAddonEl] = React.useState(() => generateAddonEl(leftAddon, OrderPosition.LEFT))
  const [rightAddonEl, setRightAddonEl] = React.useState(() => generateAddonEl(rightAddon, OrderPosition.RIGHT))

  useChangeEffect(() => {
    setLeftAddonEl(generateAddonEl(leftAddon, OrderPosition.LEFT))
  }, [leftAddon, props.isDisabled, props.isFocused])

  useChangeEffect(() => {
    setRightAddonEl(generateAddonEl(rightAddon, OrderPosition.RIGHT))
  }, [rightAddon, props.isDisabled, props.isFocused])

  return {
    leftAddon: leftAddonEl,
    rightAddon: rightAddonEl,
  }
}

export default useAddons

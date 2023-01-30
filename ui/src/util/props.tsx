import { ContentElement } from '@smart-react-components/core/types'
import React from 'react'
import { StyledComponent } from 'styled-components'
import { OrderPosition } from '../types'

/**
 * Extracts icon elements out of children.
 *
 * @params children - children prop given to the component.
 * @params Content - The component that wraps all children except for icons.
 * @params props - props given to the icon component.
 */
export const extractIconsOutOfChildren = (children: ContentElement | ContentElement[], Content: StyledComponent<'div', any>, props: object) => {
  if (!Array.isArray(children)) {
    return {
      children: <Content>{children}</Content>,
      hasIconLeft: false,
      hasIconRight: false,
    }
  }

  let iconLeft = null
  let iconRight = null
  const content = []

  for (let idx = 0; idx < children.length; idx++) {
    const item = children[idx]
    const itemJSX = item as JSX.Element

    if (idx === 0 && itemJSX.type?.displayName === 'SRCIcon') {
      iconLeft = React.cloneElement(itemJSX, {
        ...props,
        iconPosition: OrderPosition.LEFT,
      })
      continue
    }

    if (idx === children.length - 1 && itemJSX.type?.displayName === 'SRCIcon') {
      iconRight = React.cloneElement(itemJSX, {
        ...props,
        iconPosition: OrderPosition.RIGHT,
      })
      continue
    }

    content.push(typeof item === 'string' ? item : React.cloneElement(itemJSX, { key: itemJSX.key ?? idx }))
  }

  return {
    children: (
      <>
        { iconLeft && iconLeft }
        <Content>{content}</Content>
        { iconRight && iconRight }
      </>
    ),
    hasIconLeft: !!iconLeft,
    hasIconRight: !!iconRight,
  }
}

/**
 * Returns reverse value of the order position.
 * If value is left, returns right.
 * If value is right, returns left.
 */
export const getReverseOrderPosition = (value: OrderPosition) => value ^ (OrderPosition.LEFT | OrderPosition.RIGHT)

import Div from '@smart-react-components/core/Element/Div'
import React from 'react'
import { extractIconsOutOfChildren } from './props'

describe('props', () => {
  it('should extract icons out of children', () => {
    const Icon = () => <svg />
    Icon.displayName = 'SRCIcon'
    const { children, hasIconLeft, hasIconRight } = extractIconsOutOfChildren(
      [
        <Icon />,
        <div />,
        <div />,
        <div />,
      ],
      Div,
      {}
    )

    expect(children.props.children[0].type.displayName).toEqual('SRCIcon')
    expect(children.props.children[1].props.children.length).toEqual(3)
    expect(hasIconLeft).toBeTruthy()
    expect(children.props.children[2]).toBeFalsy()
    expect(hasIconRight).toBeFalsy()
  })
})

import {ThemedStyledFunction} from "styled-components"
import backgroundPropsKeys, {BackgroundProps} from "../props/background-props"
import borderPropsKeys, {BorderProps} from "../props/border-props"
import dimensionPropsKeys, {DimensionProps} from "../props/dimension-props"
import displayPropsKeys, {DisplayProps} from "../props/display-props"
import flexPropsKeys, {FlexProps} from "../props/flex-props"
import fontPropsKeys, {FontProps} from "../props/font-props"
import gridPropsKeys, {GridProps} from "../props/grid-props"
import overflowPropsKeys, {OverflowProps} from "../props/overflow-props"
import positionPropsKeys, {PositionProps} from "../props/position-props"
import spacePropsKeys, {SpaceProps} from "../props/space-props"
import svgPropsKeys, {SvgProps} from "../props/svg-props"
import textPropsKeys, {TextProps} from "../props/text-props"
import {Keys} from "../props"
import CSSHelper from "../helper/CSSHelper"

export interface Props extends BackgroundProps, BorderProps, DimensionProps, DisplayProps, FlexProps, FontProps, GridProps, OverflowProps, PositionProps, SpaceProps, SvgProps, TextProps {
    as?: string|ThemedStyledFunction<any, any, any, any>
    elementKeys?: Keys
    customKeys?: Keys
}

const elementKeys = Object.assign(
    {},
    backgroundPropsKeys,
    borderPropsKeys,
    dimensionPropsKeys,
    displayPropsKeys,
    flexPropsKeys,
    fontPropsKeys,
    gridPropsKeys,
    overflowPropsKeys,
    positionPropsKeys,
    spacePropsKeys,
    svgPropsKeys,
    textPropsKeys
)

const customKeys = {}

export const attrs = {
    elementKeys,
    customKeys
}

export const css = props => Object.keys(props).map(key => CSSHelper.getCSSByProps(props, key))
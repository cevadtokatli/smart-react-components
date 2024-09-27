import Section from '@smart-react-components/core/Element/Section'
import { Theme } from '@smart-react-components/core/theme'
import { SetState } from '@smart-react-components/core/types'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import React from 'react'
import { useTheme } from 'styled-components'
import { ColorPickerFormat } from '../../../ColorPicker'
import { defaultPaletteColors } from '../../../constants/color-picker'
import ColorPickerProps from '../../../context/ColorPickerProps'
import ArrowMultipleDownIcon from '../../../icons/ArrowMultipleDown'
import { applyResponsiveStyledProp } from '../../../util/props'
import PaletteList from './PaletteList'

interface Props {
  canAddColorToPalette: boolean
  format: ColorPickerFormat
  paletteColors?: string[]
  setPaletteColors?: SetState<string[]>
}

const PaletteSection: React.FC<Props> = ({ canAddColorToPalette, format, paletteColors, setPaletteColors }) => {
  const theme = useTheme() as Theme

  const { colorPickerSize, colorPickerSizeSm, colorPickerSizeMd, colorPickerSizeLg, colorPickerSizeXl, isDisabled } = React.useContext(ColorPickerProps)
  const [localPaletteColors, setLocalPaletteColors] = React.useState<string[]>(() => defaultPaletteColors)
  const [status, setStatus] = React.useState<boolean>(() => false)

  return (
    <>
      <Section>
        <ArrowMultipleDownIcon
          {...applyResponsiveStyledProp({ colorPickerSize, colorPickerSizeSm, colorPickerSizeMd, colorPickerSizeLg, colorPickerSizeXl }, 'colorPickerSize', 'iconSize', v => `$size.icon.${v}`)}
          display="block"
          fill={theme.$.vars.isDarkMode ? '$color.gray600' : '$color.gray500'}
          margin="auto"
          {...(!isDisabled && { onClick: () => setStatus(!status) })}
        />
      </Section>
      <CSSTransition className="src-fade" duration={150} status={status}>
        <PaletteList
          canAddColorToPalette={canAddColorToPalette}
          format={format}
          paletteColors={paletteColors ?? localPaletteColors}
          setPaletteColors={setPaletteColors ?? setLocalPaletteColors}
        />
      </CSSTransition>
    </>
  )
}

export default PaletteSection

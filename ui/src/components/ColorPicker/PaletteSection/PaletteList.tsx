import Hr from '@smart-react-components/core/Element/Hr'
import Ul from '@smart-react-components/core/Element/Ul'
import { Theme } from '@smart-react-components/core/theme'
import { PaletteProp, SetState } from '@smart-react-components/core/types'
import { getColor } from '@smart-react-components/core/util/color'
import React from 'react'
import { useTheme } from 'styled-components'
import { ColorPickerFormat } from '../../../ColorPicker'
import ColorPickerProps from '../../../context/ColorPickerProps'
import Add from '../../../icons/Add'
import { convertColor, isEqual } from '../../../util/color-picker'
import { applyResponsiveStyledProps } from '../../../util/props'
import PaletteItemElement from './PaletteItemElement'
import PaletteListContainerElement from './PaletteListContainerElement'

interface Props {
  canAddColorToPalette: boolean
  format: ColorPickerFormat
  palette: PaletteProp
  paletteColors: string[]
  setPaletteColors: SetState<string[]>
}

const PaletteList: React.FC<Props> = ({ canAddColorToPalette, format, palette, paletteColors, setPaletteColors }) => {
  const theme = useTheme() as Theme

  const { colorPickerSize, colorPickerSizeSm, colorPickerSizeMd, colorPickerSizeLg, colorPickerSizeXl, isDisabled, updateValue, value } = React.useContext(ColorPickerProps)

  const handleAddItemClick = () => {
    if (value && !paletteColors.find(item => isEqual(getColor(item), value))) {
      setPaletteColors([...paletteColors, convertColor(value, format)])
    }
  }

  return (
    <PaletteListContainerElement>
      <Hr
        {...applyResponsiveStyledProps({ colorPickerSize, colorPickerSizeSm, colorPickerSizeMd, colorPickerSizeLg, colorPickerSizeXl }, 'colorPickerSize', {
          marginLeft: v => `-$size.colorPicker.${v}.space`,
          width: v => `calc(100% + calc({size.colorPicker.${v}.space} * 2))`,
        })}
        background={theme.$.vars.isDarkMode ? '$color.gray800' : '$color.gray400'}
        backgroundClip="content-box"
        border="none"
        boxSizing="content-box"
        height={2}
      />
      <Ul
        {...applyResponsiveStyledProps({ colorPickerSize, colorPickerSizeSm, colorPickerSizeMd, colorPickerSizeLg, colorPickerSizeXl }, 'colorPickerSize', {
          marginLeft: v => `-$size.colorPicker.${v}.space`,
          marginTop: v => `-$size.colorPicker.${v}.space`,
          paddingTop: v => `$size.colorPicker.${v}.space`,
        })}
        display="flex"
        flexWrap="wrap"
        listStyle="none"
      >
        { canAddColorToPalette && (
          <PaletteItemElement
            border="solid 1px"
            colorPickerSize={colorPickerSize}
            colorPickerSizeSm={colorPickerSizeSm}
            colorPickerSizeMd={colorPickerSizeMd}
            colorPickerSizeLg={colorPickerSizeLg}
            colorPickerSizeXl={colorPickerSizeXl}
            palette={palette}
            isDisabled={isDisabled}
            {...(!isDisabled && { onClick: handleAddItemClick })}
          >
            <Add />
          </PaletteItemElement>
        )}
        { paletteColors.map(item => (
          <PaletteItemElement
            backgroundImage="url('{media.opacityBackground}')"
            colorPickerSize={colorPickerSize}
            colorPickerSizeSm={colorPickerSizeSm}
            colorPickerSizeMd={colorPickerSizeMd}
            colorPickerSizeLg={colorPickerSizeLg}
            colorPickerSizeXl={colorPickerSizeXl}
            key={item}
            isDisabled={isDisabled}
            palette={palette}
            {...(!isDisabled && { onClick: () => updateValue(item) })}
          >
            <div
              style={{ background: item }}
            />
          </PaletteItemElement>
        )) }
      </Ul>
    </PaletteListContainerElement>
  )
}

export default PaletteList

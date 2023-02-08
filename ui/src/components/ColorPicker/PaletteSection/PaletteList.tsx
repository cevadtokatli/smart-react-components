import Hr from '@smart-react-components/core/Element/Hr'
import Ul from '@smart-react-components/core/Element/Ul'
import { SetState } from '@smart-react-components/core/types'
import { getColor } from '@smart-react-components/core/util/color'
import React from 'react'
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
  paletteColors: string[]
  setPaletteColors: SetState<string[]>
}

const PaletteList: React.FC<Props> = ({ canAddColorToPalette, format, paletteColors, setPaletteColors }) => {
  const { colorPickerSize, colorPickerSizeSm, colorPickerSizeMd, colorPickerSizeLg, colorPickerSizeXl, updateValue, value } = React.useContext(ColorPickerProps)

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
        background="$color.gray400"
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
            onClick={handleAddItemClick}
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
            onClick={() => updateValue(item)}
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

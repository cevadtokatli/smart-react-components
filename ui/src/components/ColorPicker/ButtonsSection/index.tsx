import Section from '@smart-react-components/core/Element/Section'
import { Theme } from '@smart-react-components/core/theme'
import { PaletteProp } from '@smart-react-components/core/types'
import React from 'react'
import { ThemeContext } from 'styled-components'
import Button from '../../../Button'
import ButtonList from '../../../Button/ButtonList'
import ColorPickerProps from '../../../context/ColorPickerProps'
import SaveIcon from '../../../icons/Save'
import CancelIcon from '../../../icons/Cancel'
import { applyResponsiveStyledProp } from '../../../util/props'

interface Props {
  isSoft: boolean
  cancelLabel?: string
  saveLabel?: string
  onCancel: (e: Event) => void
  onSave: (e: Event) => void
  palette: PaletteProp
}

const ButtonsSection: React.FC<Props> = ({ cancelLabel, saveLabel, isSoft, onCancel, onSave, palette }) => {
  const { colorPickerSize, colorPickerSizeSm, colorPickerSizeMd, colorPickerSizeLg, colorPickerSizeXl, isDisabled } = React.useContext(ColorPickerProps)
  const theme = React.useContext<Theme>(ThemeContext)

  return (
    <Section>
      <ButtonList
        hasSpace={false}
        isBlock
        isSoft={isSoft}
        palette={palette}
        size={colorPickerSize}
        sizeSm={colorPickerSizeSm}
        sizeMd={colorPickerSizeMd}
        sizeLg={colorPickerSizeLg}
        sizeXl={colorPickerSizeXl}
      >
        <Button
          {...applyResponsiveStyledProp({ colorPickerSize, colorPickerSizeSm, colorPickerSizeMd, colorPickerSizeLg, colorPickerSizeXl }, 'colorPickerSize', 'marginRight', v => `$size.colorPicker.${v}.space`)}
          isDisabled={isDisabled}
          onClick={e => onSave(e as any)}
        >
          <SaveIcon />
          <span>{saveLabel ?? theme.$.i18n.save}</span>
        </Button>
        <Button
          isDisabled={isDisabled}
          onClick={e => onCancel(e as any)}
        >
          <CancelIcon />
          <span>{cancelLabel ?? theme.$.i18n.cancel}</span>
        </Button>
      </ButtonList>
    </Section>
  )
}

export default ButtonsSection

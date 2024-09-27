import { Theme } from '@smart-react-components/core/theme'
import { PaletteProp } from '@smart-react-components/core/types'
import React from 'react'
import { useTheme } from 'styled-components'
import Button from '../../Button'
import ButtonList from '../../Button/ButtonList'

export interface Props {
  isSoft: boolean
  palette: PaletteProp
  onCancel: (e: Event) => void
  onSave: (e: Event) => void
}

const DatePickerButtons: React.FC<Props> = ({ isSoft, palette, onCancel, onSave }) => {
  const theme = useTheme() as Theme

  return (
    <ButtonList
      elementProps={{
        justifyContent: 'flex-end',
      }}
      hasSpace={false}
      isLink
      isSoft={isSoft}
      palette={palette}
    >
      <Button onClick={e => onCancel?.(e as any)}>{ theme.$.i18n.cancel }</Button>
      <Button onClick={e => onSave?.(e as any)}>{ theme.$.i18n.ok }</Button>
    </ButtonList>
  )
}

export default DatePickerButtons

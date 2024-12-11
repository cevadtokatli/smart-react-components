import Li from '@smart-react-components/core/Element/Li'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends StyledProps, ResponsiveProp<'datePickerSize', SizeProp> {
  palette: PaletteProp
  isActive: boolean
  isNotCurrentDate: boolean
  isSoft: boolean
}

export default styled(Li).attrs<Props>({
  getDatePickerSize: (v, t) => `
    height: ${t.$.size.datePicker[v].itemSize};
    margin: ${t.$.size.datePicker[v].itemSpace} ${t.$.size.datePicker[v].itemSpace};
    width: ${t.$.size.datePicker[v].itemSize};
  `,
})<Props>(({ theme, palette, isActive, isNotCurrentDate, isSoft }) => `
  align-items: center;
  border-radius: ${theme.$.radius.datePickerItem};
  display: flex;
  cursor: default;
  justify-content: center;

  ${isActive
    ? `
      font-weight: ${theme.$.fontWeight.datePicker};

      ${isSoft
        ? `
          background: ${theme.$.palette[palette].datePicker?.soft?.date?.active?.background ?? theme.$.palette[palette].soft};
          color: ${theme.$.palette[palette].datePicker?.soft?.date?.active?.font ?? theme.$.palette[palette].softFont};
        `
        : `
          background: ${theme.$.palette[palette].datePicker?.date?.active?.background ?? theme.$.palette[palette].main};
          color: ${theme.$.palette[palette].datePicker?.date?.active?.background ?? theme.$.palette[palette].font}; 
        `
      }
    `
    : `
      ${isNotCurrentDate
        ? `
          color: ${!isSoft ? (theme.$.palette[palette].datePicker?.date?.icon ?? theme.$.color.gray600) : (theme.$.palette[palette].datePicker?.soft?.date?.icon ?? theme.$.color.gray600)};
        `
        : `
          color: ${!isSoft ? (theme.$.palette[palette].datePicker?.date?.font ?? theme.$.color.dynamic.font) : (theme.$.palette[palette].datePicker?.soft?.date?.font ?? theme.$.color.dynamic.font)};
          font-weight: ${theme.$.fontWeight.datePicker};
        `
      }
    `
  }
`)

import Section from '@smart-react-components/core/Element/Section'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends StyledProps, ResponsiveProp<'datePickerSize', SizeProp> {
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Section).attrs<Props>({
  getDatePickerSize: (v, t) => `
    height: ${t.$.size.datePicker[v].bodyHeight};

    > div > * {
      margin: ${t.$.size.datePicker[v].timeSpace};
      width: ${t.$.size.datePicker[v].timeSize};
    }

    input {
      font-size: ${t.$.size.datePicker[v].timeInputFontSize};
      height: ${t.$.size.datePicker[v].timeSize};
      width: ${t.$.size.datePicker[v].timeSize};
    }

    svg {
      width: ${t.$.size.datePicker[v].timeArrowSize};
    }
  `,
})<Props>(({ theme, isSoft, palette }) => `
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > div,
  > div > div {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  input {
    border: solid 1px;
    border-radius: ${theme.$.radius.datePicker};
    text-align: center;

    ${!isSoft
      ? `
        background: ${theme.$.palette[palette].datePicker?.time?.background ?? theme.$.palette[palette].main};
        border-color: ${theme.$.palette[palette].datePicker?.time?.border ?? theme.$.palette[palette].dynamic};
        color: ${theme.$.palette[palette].datePicker?.time?.font ?? theme.$.palette[palette].font};

        &:active,
        &:focus {
          background: ${theme.$.palette[palette].datePicker?.time?.active?.background ?? theme.$.palette[palette].dark};
          border-color: ${theme.$.palette[palette].datePicker?.time?.active?.border ?? theme.$.palette[palette].dynamicer};
          color: ${theme.$.palette[palette].datePicker?.time?.active?.font ?? theme.$.palette[palette].font};
        }
      `
      : `
        background: ${theme.$.palette[palette].datePicker?.soft?.time?.background ?? theme.$.palette[palette].soft};
        border-color: ${theme.$.palette[palette].datePicker?.soft?.time?.border ?? theme.$.palette[palette].softDynamic};
        color: ${theme.$.palette[palette].datePicker?.soft?.time?.font ?? theme.$.palette[palette].softFont};

        &:active,
        &:focus {
          background: ${theme.$.palette[palette].datePicker?.soft?.time?.active?.background ?? theme.$.palette[palette].softDynamic};
          border-color: ${theme.$.palette[palette].datePicker?.soft?.time?.active?.border ?? theme.$.palette[palette].softDynamicer};
          color: ${theme.$.palette[palette].datePicker?.soft?.time?.active?.font ?? theme.$.palette[palette].softFont};
        }
      `
    }

    &:active,
    &:focus {
      outline: 0;
    }
  }

  svg {
    fill: ${!isSoft ? (theme.$.palette[palette].datePicker?.time?.icon ?? theme.$.color.gray600) : (theme.$.palette[palette].datePicker?.soft?.time?.icon ?? theme.$.color.gray600)};
  }
`)

import Header from '@smart-react-components/core/Element/Header'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends StyledProps, ResponsiveProp<'datePickerSize', SizeProp> {
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Header).attrs<Props>({
  getDatePickerSize: (v, t) => `
    padding-bottom: ${t.$.size.datePicker[v].space.x};

    > div:first-child {
      cursor: default;
      font-weight: ${t.$.fontWeight.datePicker};
      padding-left: ${t.$.size.datePicker[v].headerSpace.x};
    }

    > div:last-child {
      > div {
        height: ${t.$.size.datePicker[v].iconSize};
        margin: 0 ${t.$.size.datePicker[v].itemWeekSpace.x};
        width: ${t.$.size.datePicker[v].itemWeekSize};

        svg {
          width: ${t.$.size.datePicker[v].iconSize};
        }
      }
    }
  `,
})<Props>(({ theme, isSoft, palette }) => `
  align-items: center;
  display: flex;
  justify-content: space-between;
  user-select: none;

  > span {
    font-weight: ${theme.$.fontWeight.datePicker};
  }

  > div {
    align-items: center;
    display: flex;

    > div {
      align-items: center;
      display: flex;
      justify-content: center;

      svg {
        fill: ${!isSoft ? (theme.$.palette[palette].datePicker?.date?.icon ?? theme.$.color.gray600) : (theme.$.palette[palette].datePicker?.soft?.date?.icon ?? theme.$.color.gray600)};
      }
    }
  }
`)

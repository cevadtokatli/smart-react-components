import Header from '@smart-react-components/core/Element/Header'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

export interface Props extends StyledProps, ResponsiveProp<'datePickerSize', SizeProp> {
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Header).attrs<Props>({
  getDatePickerSize: (v, t) => `
    padding: ${t.$.size.datePicker[v].headerSpace.y} ${t.$.size.datePicker[v].space.x};

    > span {
      padding-left: ${t.$.size.datePicker[v].headerSpace.x};
    }

    > div {
      > div {
        height: ${t.$.size.datePicker[v].iconSize};
        margin: 0 ${t.$.size.datePicker[v].itemWeekSpace.x};
        width: ${t.$.size.datePicker[v].itemWeekSize};

        > svg {
          width: ${t.$.size.datePicker[v].iconSize};
        }
      }
    }
  `,
})<Props>(({ isSoft, palette, theme }) => `
  align-items: center;
  border-top-left-radius: ${theme.$.radius.datePicker};
  border-top-right-radius: ${theme.$.radius.datePicker};
  display: flex;
  justify-content: space-between;

  ${!isSoft
    ? `
      background: ${theme.$.palette[palette].main};
      color: ${theme.$.palette[palette].font};
    `
    : `
      background: ${theme.$.palette[palette].soft};
      color: ${theme.$.palette[palette].softFont};
    `
  }

  > div {
    align-items: center;
    display: flex;
    justify-content: flex-end;

    > div {
      display: flex;
      justify-content: center;
      position: relative;

      > svg {
        fill: ${!isSoft ? theme.$.palette[palette].darker : theme.$.palette[palette].softDarker};
        position: absolute;
        transition: 150ms ease-in-out;

        &:hover {
          fill: ${!isSoft ? theme.$.palette[palette].darkest : theme.$.palette[palette].softDarkest};
        }

        &.src-fade-show {
          opacity: 0;
        }

        &.src-fade-show-active {
          opacity: 1;
        }

        &.src-fade-hide {
          opacity: 1;
        }

        &.src-fade-hide-active {
          opacity: 0;
        }
      }
    }
  }
`)

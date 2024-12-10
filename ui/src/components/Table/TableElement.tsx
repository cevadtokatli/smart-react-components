import Table from '@smart-react-components/core/Element/Table'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, ShapeProp, SizeProp, TableStripedOrientation } from '@smart-react-components/core/types'
import styled from 'styled-components'

export interface Props extends
  StyledProps,
  Partial<ResponsiveProp<'tableSize', SizeProp>> {
  hasBorderX: boolean
  hasBorderY: boolean
  hasHeadBackground: boolean
  hasHover: boolean
  isBlock: boolean
  isSoft: boolean
  isStriped: boolean
  palette: PaletteProp
  shape: ShapeProp
  stripedOrientation: TableStripedOrientation
}

export default styled(Table).attrs<Props>({
  getTableSize: (v, t) => `
    font-size: ${t.$.size.table[v].fontSize};

    > * > tr > * {
      padding: ${t.$.size.table[v].padding.y} ${t.$.size.table[v].padding.x};
    }

    > thead {
      font-size: ${t.$.size.table[v].headFontSize};
    }
  `,
})<Props>(({ theme, hasBorderX, hasBorderY, hasHeadBackground, hasHover, isBlock, isSoft, isStriped, palette, shape, stripedOrientation }) => `
  border-collapse: separate;
  border-spacing: 0;
  empty-cells: hide;
  font-family: ${theme.$.fontFamily.table};

  > thead {
    font-family: ${theme.$.fontFamily.tableHead};
    font-weight: ${theme.$.fontWeight.tableHead};
  }

  ${isBlock
    ? `
      width: 100%;
    `
    : ''
  }

  > * > tr > * {
    border: solid 0;
    box-sizing: border-box;
    fill: currentcolor;

    ${hasBorderX
      ? `
        border-right-width: ${theme.$.length.table.border};

        &:first-child {
          border-left-width: ${theme.$.length.table.border};
        }
      `
      : ''
    }

    ${hasBorderY
      ? `
        border-bottom-width: ${theme.$.length.table.border};
      `
      : ''
    }
  }

  ${hasBorderY
    ? `
      > thead > tr > * {
        border-bottom-width: ${theme.$.length.table.headBorder};
      }

      > *:first-child > tr:first-child > * {
        border-top-width: ${theme.$.length.table.border};
      }
    `
    : ''
  }

  > *:first-child > tr:first-child > * {
    border-top-left-radius: ${theme.$.radius.table[shape]};
    border-top-right-radius: ${theme.$.radius.table[shape]};
  }

  > *:last-child > tr:last-child > * {
    border-bottom-left-radius: ${theme.$.radius.table[shape]};
    border-bottom-right-radius: ${theme.$.radius.table[shape]};
  }

  ${!isSoft
    ? `
      > * > tr > * {
        background: ${theme.$.palette[palette].table?.odd?.background ?? theme.$.palette[palette].background};
        border-color: ${theme.$.palette[palette].table?.odd?.border ?? theme.$.palette[palette].dynamicest};
        color: ${theme.$.palette[palette].table?.odd?.font ?? theme.$.palette[palette].font};
      }

      ${hasHeadBackground
        ? `
          > thead > tr > * {
            background: ${theme.$.palette[palette].table?.even?.background ?? theme.$.palette[palette].dynamic};
            border-color: ${theme.$.palette[palette].table?.even?.border ?? theme.$.palette[palette].dynamicest};
            color: ${theme.$.palette[palette].table?.even?.font ?? theme.$.palette[palette].font};
          }
        `
        : ''
      }

      ${isStriped
        ? `
          > tbody > tr:nth-child(${stripedOrientation}) > * {
            background: ${theme.$.palette[palette].table?.even?.background ?? theme.$.palette[palette].dynamic};
            border-color: ${theme.$.palette[palette].table?.even?.border ?? theme.$.palette[palette].dynamicest};
            color: ${theme.$.palette[palette].table?.even?.font ?? theme.$.palette[palette].font};
          }
        `
        : ''
      }

      ${hasHover
        ? `
          > tbody > tr {
            > * {
              transition: background 150ms 0s ease-in-out;
            }

            &:hover > * {
              background: ${theme.$.palette[palette].table?.odd?.hover?.background ?? theme.$.palette[palette].dynamicer};
              border-color: ${theme.$.palette[palette].table?.odd?.hover?.border ?? theme.$.palette[palette].dynamicest};
              color: ${theme.$.palette[palette].table?.odd?.hover?.font ?? theme.$.palette[palette].font};
            }

            ${(isStriped && theme.$.palette[palette].table?.even?.hover?.background)
              ? `
                > tbody > tr:nth-child(${stripedOrientation}) > * {
                  background: ${theme.$.palette[palette].table?.even?.hover?.background ?? theme.$.palette[palette].dynamicer};
                  border-color: ${theme.$.palette[palette].table?.even?.hover?.border ?? theme.$.palette[palette].dynamicest};
                  color: ${theme.$.palette[palette].table?.even?.hover?.font ?? theme.$.palette[palette].font};
                }
              `
              : ''
            }
          }
        `
        : ''
      }
    `
    : `
      > * > tr > * {
        background: ${theme.$.palette[palette].table?.odd?.soft?.background ?? theme.$.palette[palette].softBackground};
        border-color: ${theme.$.palette[palette].table?.odd?.soft?.border ?? theme.$.palette[palette].softDynamicest};
        color: ${theme.$.palette[palette].table?.odd?.soft?.font ?? theme.$.palette[palette].softFont};
      }

      ${hasHeadBackground
        ? `
          > thead > tr > * {
            background: ${theme.$.palette[palette].table.even?.soft?.background ?? theme.$.palette[palette].softDynamic};
            border-color: ${theme.$.palette[palette].table.even?.soft?.border ?? theme.$.palette[palette].softDynamicest};
            color: ${theme.$.palette[palette].table.even?.soft?.font ?? theme.$.palette[palette].softFont};
          }
        `
        : ''
      }

      ${isStriped
        ? `
          > tbody > tr:nth-child(${stripedOrientation}) > * {
            background: ${theme.$.palette[palette].table?.even?.soft?.background ?? theme.$.palette[palette].softDynamic};
            border-color: ${theme.$.palette[palette].table?.even?.soft?.border ?? theme.$.palette[palette].softDynamicest};
            color: ${theme.$.palette[palette].table?.even?.soft?.font ?? theme.$.palette[palette].softFont};
          }
        `
        : ''
      }

      ${hasHover
        ? `
          > tbody > tr {
            > * {
              transition: background 150ms 0s ease-in-out;
            }

            &:hover > * {
              background: ${theme.$.palette[palette].table?.odd?.soft?.hover?.background ?? theme.$.palette[palette].softDynamicer};
              border-color: ${theme.$.palette[palette].table?.odd?.soft?.hover?.border ?? theme.$.palette[palette].softDynamicest};
              color: ${theme.$.palette[palette].table?.odd?.soft?.hover?.font ?? theme.$.palette[palette].softFont};
            }

            ${(isStriped && theme.$.palette[palette].table?.even?.hover?.background)
              ? `
                > tbody > tr:nth-child(${stripedOrientation}) > * {
                  background: ${theme.$.palette[palette].table?.even?.soft?.hover?.background ?? theme.$.palette[palette].softDynamicer};
                  border-color: ${theme.$.palette[palette].table?.even?.soft?.hover?.border ?? theme.$.palette[palette].softDynamicest};
                  color: ${theme.$.palette[palette].table?.even?.hover?.soft?.font ?? theme.$.palette[palette].softFont};
                }
              `
              : ''
            }
          }
        `
        : ''
      }
    `
  }
`)

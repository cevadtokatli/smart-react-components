import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { Position } from '../types'
import { toCSSValue } from '../util/css'
import BadgeIconElement from './BadgeIcon/BadgeIconElement'

export const Content = styled.div`
  border: solid 1px;
  flex: 0 1 auto;
`

interface Props extends
  StyledProps,
  ResponsiveProp<'badgeSize', SizeProp> {
  badgePosition: Position
  hasIconLeft: boolean
  hasIconRight: boolean
  hasSpace: boolean
  isAbsolute: boolean
  isClickable: boolean
  isFixedSize: boolean
  isOutline: boolean
  isSoft: boolean
  offset: number
  palette: PaletteProp
  shape: ShapeProp
}

export default styled(Div).attrs<Props>(({ hasIconLeft, hasIconRight, hasSpace, isFixedSize }) => ({
  getBadgeSize: (v, t) => `
    ${hasSpace
      ? `
        margin: ${t.$.size.badge[v].margin.y} ${t.$.size.badge[v].margin.x};    
      `
      : ''
    }

    ${Content} {
      font-size: ${t.$.size.badge[v].fontSize};

      ${!isFixedSize
        ? `
          padding: ${t.$.size.badge[v].padding.y} ${t.$.size.badge[v].padding.x};

          ${hasIconLeft
            ? `
              padding-left: ${toCSSValue(t.$.size.badge[v].padding.x)(v => v / 2)};
            `
            : ''
          }

          ${hasIconRight
            ? `
              padding-right: ${toCSSValue(t.$.size.badge[v].padding.x)(v => v / 2)};  
            `
            : ''
          }
        `
        : `
          height: ${t.$.size.badge[v].fixedSize};
          width: ${t.$.size.badge[v].fixedSize};
        `
      }
    }

    ${BadgeIconElement} {
      padding: 0 ${toCSSValue(t.$.size.badge[v].padding.x)(value => value / 2)};
    }

    svg {
      height: ${t.$.size.badge[v].iconSize};
      width: ${t.$.size.badge[v].iconSize};
    }

    i {
      font-size: ${t.$.size.badge[v].iconSize};
    }
  `,
}))<Props>(({ theme, badgePosition, hasIconLeft, hasIconRight, isAbsolute, isClickable, isFixedSize, isOutline, isSoft, offset, palette, shape }: Props) => `
  display: inline-flex;
  font-family: ${theme.$.fontFamily.badge};
  word-break: break-word;
  word-wrap: break-word;

  ${Content} {
    border-color: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};  
    border-radius: ${(isFixedSize && shape === 'rounded') ? '100%' : theme.$.radius.badge[shape]};
  }

  ${!isOutline
    ? `  
      ${Content} {
        ${!isSoft
          ? `
            background: ${theme.$.palette[palette].main};
            color: ${theme.$.palette[palette].font};
            fill: ${theme.$.palette[palette].font};
          `
          : `
            background: ${theme.$.palette[palette].soft};
            color: ${theme.$.palette[palette].softFont};
            fill: ${theme.$.palette[palette].softFont};
          `
        }
      }

      ${isClickable
        ? `
          &:active {
            ${!isSoft
              ? `
                ${Content} {
                  background: ${theme.$.palette[palette].dynamicer};
                  border-color: ${theme.$.palette[palette].dynamicer};
                }

                ${BadgeIconElement} {
                  background: ${theme.$.palette[palette].dynamicest};
                  border-color: ${theme.$.palette[palette].dynamicest};  
                }
              `
              : `
                ${Content} {
                  background: ${theme.$.palette[palette].softDarker};
                  border-color: ${theme.$.palette[palette].softDarker};
                }

                ${BadgeIconElement} {
                  background: ${theme.$.palette[palette].softDarkest};
                  border-color: ${theme.$.palette[palette].softDarkest};
                }
              `
            }
          }
        `
        : ''
      }
    `
    : `
      ${Content} {
        ${!isSoft
          ? `
            color: ${theme.$.palette[palette].main};
            fill: ${theme.$.palette[palette].main};
          `
          : `
            color: ${theme.$.palette[palette].soft};
            fill: ${theme.$.palette[palette].soft};
          `
        }
      }

      ${isClickable
        ? `
          &:active {
            ${!isSoft
              ? `
                ${Content} {
                  background: ${theme.$.palette[palette].main};
                  color: ${theme.$.palette[palette].font};
                  fill: ${theme.$.palette[palette].font};
                }

                ${BadgeIconElement} {
                  background: ${theme.$.palette[palette].dynamicer};
                  color: ${theme.$.palette[palette].font};
                  fill: ${theme.$.palette[palette].font}; 
                }
              `
              : `
                ${Content} {
                  background: ${theme.$.palette[palette].soft};
                  color: ${theme.$.palette[palette].softFont};
                  fill: ${theme.$.palette[palette].softFont};
                }

                ${BadgeIconElement} {
                  background: ${theme.$.palette[palette].softDarker};
                  color: ${theme.$.palette[palette].softFont};
                  fill: ${theme.$.palette[palette].softFont};
                }
              `
            }
          }
        `
        : ''
      }
    `
  }

  ${Content} {
    ${isFixedSize
      ? `
        align-items: center;
        display: inline-flex;
        justify-content: center;
      `
      : ''
    }

    ${hasIconLeft
      ? `
        border-left: 0;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      `
      : ''
    }
  
    ${hasIconRight
      ? `
        border-right: 0;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      `
      : ''
    }
  }

  ${isClickable
    ? `
      cursor: default;
      user-select: none;
    `
    : ''
  }

  ${isAbsolute
    ? `
      position: absolute;
      ${Position[badgePosition].toLowerCase()}: ${offset}px;
    `
    : ''
  }
`)

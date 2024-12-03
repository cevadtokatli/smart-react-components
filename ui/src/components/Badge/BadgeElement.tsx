import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'

interface Props extends
  StyledProps,
  ResponsiveProp<'badgeSize', SizeProp> {
  hasIconLeft: boolean
  hasIconRight: boolean
  hasSpace: boolean
  isClickable: boolean
  isFixedSize: boolean
  isOutline: boolean
  isSoft: boolean
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

    .src-badge-content {
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

    .src-badge-icon {
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
}))<Props>(({ theme, hasIconLeft, hasIconRight, isClickable, isFixedSize, isOutline, isSoft, palette, shape }: Props) => `
  display: inline-flex;
  font-family: ${theme.$.fontFamily.badge};
  word-break: break-word;
  word-wrap: break-word;

  .src-badge-content {
    border-radius: ${(isFixedSize && shape === 'rounded') ? '100%' : theme.$.radius.badge[shape]};
  }

  ${isSoft
    ? `
      font-weight: ${theme.$.fontWeight.bold};
    `
    : ''
  }

  ${!isOutline
    ? `  
      .src-badge-content {
        ${!isSoft
          ? `
            background: ${theme.$.palette[palette].badge?.background ?? theme.$.palette[palette].main};
            border-color: ${theme.$.palette[palette].badge?.border ?? theme.$.palette[palette].main};
            color: ${theme.$.palette[palette].badge?.font ?? theme.$.palette[palette].font};
            fill: ${theme.$.palette[palette].badge?.font ?? theme.$.palette[palette].font};
          `
          : `
            background: ${theme.$.palette[palette].soft};
            border-color: ${theme.$.palette[palette].soft};
            color: ${theme.$.palette[palette].softFont};
            fill: ${theme.$.palette[palette].softFont};
          `
        }
      }

      ${isClickable
        ? `
          cursor: ${theme.$.cursor.badgeClickable};

          &:active {
            ${!isSoft
              ? `
                .src-badge-content {
                  background: ${theme.$.palette[palette].dynamicer};
                  border-color: ${theme.$.palette[palette].dynamicer};
                }

                .src-badge-icon {
                  background: ${theme.$.palette[palette].dynamicest};
                  border-color: ${theme.$.palette[palette].dynamicest};
                }
              `
              : `
                .src-badge-content {
                  background: ${theme.$.palette[palette].softDynamicer};
                  border-color: ${theme.$.palette[palette].softDynamicer};
                }

                .src-badge-icon {
                  background: ${theme.$.palette[palette].softDynamicest};
                  border-color: ${theme.$.palette[palette].softDynamicest};
                }
              `
            }
          }
        `
        : ''
      }
    `
    : `
      .src-badge-content {
        ${!isSoft
          ? `
            border-color: ${theme.$.palette[palette].badge?.outline?.border ?? theme.$.palette[palette].main};
            color: ${theme.$.palette[palette].badge?.outline?.font ?? theme.$.palette[palette].main};
            fill: ${theme.$.palette[palette].badge?.outline?.font ?? theme.$.palette[palette].main};
          `
          : `
            border-color: ${theme.$.palette[palette].soft};
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
               .src-badge-content {
                  background: ${theme.$.palette[palette].main};
                  color: ${theme.$.palette[palette].font};
                  fill: ${theme.$.palette[palette].font};
                }

                .src-badge-icon {
                  background: ${theme.$.palette[palette].dynamicer};
                  color: ${theme.$.palette[palette].font};
                  fill: ${theme.$.palette[palette].font}; 
                }
              `
              : `
               .src-badge-content {
                  background: ${theme.$.palette[palette].soft};
                  color: ${theme.$.palette[palette].softFont};
                  fill: ${theme.$.palette[palette].softFont};
                }

                .src-badge-icon {
                  background: ${theme.$.palette[palette].softDynamicer};
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

  .src-badge-content {
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
`)

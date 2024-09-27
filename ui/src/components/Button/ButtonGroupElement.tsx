import styled from 'styled-components'
import ButtonElement from './ButtonElement'
import ButtonAddonElement from './ButtonAddonElement'
import ButtonContent from './ButtonContent'
import ButtonListElement, { Props } from './ButtonListElement'

export default styled(ButtonListElement)<Props>(({ theme, shape }: Props) => `
  align-items: stretch;
  border-radius: ${theme.$.radius.button[shape]};
  flex-wrap: nowrap;
  overflow: hidden;

  > * {
    &,
    ${ButtonElement},
    ${ButtonAddonElement},
    ${ButtonContent} {
      border-radius: 0;
    }

    &:not(:last-child) {
      ${ButtonElement},
      ${ButtonAddonElement},
      ${ButtonContent} {
        border-right: 0;
      }
    }

    &:focus {
      box-shadow: none;
    }
  }
`)

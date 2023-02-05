import styled from 'styled-components'
import ButtonElement from './ButtonElement'
import ButtonAddonElement from './ButtonAddonElement'
import ButtonContent from './ButtonContent'
import ButtonListElement, { Props } from './ButtonListElement'

export default styled(ButtonListElement)<Props>`
  align-items: stretch;
  flex-wrap: nowrap;

  > * {
    :not(:first-child) {
      &,
      ${ButtonElement},
      ${ButtonAddonElement},
      ${ButtonContent} {
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    :not(:last-child) {
      &,
      ${ButtonElement},
      ${ButtonAddonElement},
      ${ButtonContent} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &:focus {
      box-shadow: none;
    }
  }
`

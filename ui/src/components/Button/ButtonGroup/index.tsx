import styled from 'styled-components'
import Button from '../'
import ButtonAddon from '../ButtonAddon'
import ButtonContent from '../ButtonContent'
import ButtonList, { Props } from '../ButtonList'

export default styled(ButtonList)<Props>`
  align-items: stretch;
  flex-wrap: nowrap;

  > * {
    :not(:first-child) {
      &,
      ${Button},
      ${ButtonAddon},
      ${ButtonContent} {
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    :not(:last-child) {
      &,
      ${Button},
      ${ButtonAddon},
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

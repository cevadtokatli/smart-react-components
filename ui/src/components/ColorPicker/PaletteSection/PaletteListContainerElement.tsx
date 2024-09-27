import Section from '@smart-react-components/core/Element/Section'
import styled from 'styled-components'

export default styled(Section)`
  &.src-fade-show {
    opacity: 0;
  }

  &.src-fade-hide {
    opacity: 1;
  }

  &.src-fade-show-active {
    transition: opacity 150ms 0s ease-in-out;
    opacity: 1;
  }

  &.src-fade-hide-active {
    transition: opacity 150ms 0s ease-in-out;
    opacity: 0;
  }
`

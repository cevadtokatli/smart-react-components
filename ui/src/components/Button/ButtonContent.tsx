import styled from 'styled-components'

export default styled.span.attrs({
  className: 'src-button-content',
})`
  align-items: center;
  border: solid 1px;
  box-sizing: border-box;
  display: flex;
  fill: currentcolor;
  flex: 1 1 auto;
  transition: 300ms 0s ease-in-out;
  transition-property: background, border, color, fill;
  word-break: break-word;
  word-wrap: break-word;
`

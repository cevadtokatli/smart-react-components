import styled from 'styled-components'
import InputElement, { Props } from '../Input/InputElement'
import { toCSSValue } from '../util/css'

export default styled(InputElement).attrs<Props>({
  as: 'div',
  getInputSize: (v, t) => `
    font-size: ${t.$.size.input[v].fontSize};

    > div {
      margin: ${toCSSValue(t.$.size.input[v].padding.y)(v => v / 2)} ${toCSSValue(t.$.size.input[v].padding.x)(v => v / 2)};
      padding: ${toCSSValue(t.$.size.input[v].padding.y)(v => v / 2)} ${toCSSValue(t.$.size.input[v].padding.x)(v => v / 2)};
    }
  `,
  isInput: false,
})<Props>``

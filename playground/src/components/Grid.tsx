import { Column, Container, Row } from '@smart-react-components/ui'
import React from 'react'

export const Col = () => (
  <Container>
    <Row>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} paddingVertical="$length.3" background="!primary" border="solid 1px !primary.darkest" color="white" textAlign="center">Column 1</Column>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} paddingVertical="$length.3" background="!primary" border="solid 1px !primary.darkest" color="white" textAlign="center">Column 2</Column>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} paddingVertical="$length.3" background="!primary" border="solid 1px !primary.darkest" color="white" textAlign="center">Column 3</Column>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} paddingVertical="$length.3" background="!primary" border="solid 1px !primary.darkest" color="white" textAlign="center">Column 4</Column>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} paddingVertical="$length.3" background="!primary" border="solid 1px !primary.darkest" color="white" textAlign="center">Column 5</Column>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} paddingVertical="$length.3" background="!primary" border="solid 1px !primary.darkest" color="white" textAlign="center">Column 6</Column>
    </Row>
  </Container>
)

export const Pos = () => (
  <Container>
    <Row>
      <Column col={12} colSm={3} paddingVertical="$length.3" background="!secondary" border="solid 1px !secondary.darkest" color="white" textAlign="center">Column 1</Column>
      <Column col={12} colSm={3} pos={0} posSm={2} paddingVertical="$length.3" background="!secondary" border="solid 1px !secondary.darkest" color="white" textAlign="center">Column 2</Column>
      <Column col={12} colSm={3} pos={0} posSm={1} paddingVertical="$length.3" background="!secondary" border="solid 1px !secondary.darkest" color="white" textAlign="center">Column 3</Column>
 </Row>
  </Container>
)

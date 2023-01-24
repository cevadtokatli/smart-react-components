import { Radio, RadioGroup } from '@smart-react-components/ui'
import { Position } from '@smart-react-components/ui/Form/Radio'
import React from 'react'

export const Palette = () => {
  const [active, setActive] = React.useState(() => 'primary')

  return (
    <RadioGroup active={active} setActive={setActive}>
      <Radio value="primary">Primary</Radio>
      <Radio value="secondary" palette="secondary">Secondary</Radio>
      <Radio value="success" palette="success">Success</Radio>
      <Radio value="danger" palette="danger">Danger</Radio>
      <Radio value="warning" palette="warning">Warning</Radio>
      <Radio value="info" palette="info">Info</Radio>
      <Radio value="dynamic" palette="dynamic">Dynamic</Radio>
      <Radio value="!dynamic" palette="!dynamic">!Dynamic</Radio>
    </RadioGroup>
  )
}

export const Soft = () => {
  const [active, setActive] = React.useState(() => 'primary')

  return (
    <RadioGroup active={active} setActive={setActive}>
      <Radio value="primary" isSoft>Primary</Radio>
      <Radio value="secondary" palette="secondary" isSoft>Secondary</Radio>
      <Radio value="success" palette="success" isSoft>Success</Radio>
      <Radio value="danger" palette="danger" isSoft>Danger</Radio>
      <Radio value="warning" palette="warning" isSoft>Warning</Radio>
      <Radio value="info" palette="info" isSoft>Info</Radio>
      <Radio value="dynamic" palette="dynamic" isSoft>Dynamic</Radio>
      <Radio value="!dynamic" palette="!dynamic" isSoft>!Dynamic</Radio>
    </RadioGroup>
  )
}

export const Outline = () => {
  const [active, setActive] = React.useState(() => 'primary')

  return (
    <RadioGroup active={active} setActive={setActive}>
      <Radio value="primary" isOutline>Primary</Radio>
      <Radio value="secondary" palette="secondary" isOutline>Secondary</Radio>
      <Radio value="success" palette="success" isOutline>Success</Radio>
      <Radio value="danger" palette="danger" isOutline>Danger</Radio>
      <Radio value="warning" palette="warning" isOutline>Warning</Radio>
      <Radio value="info" palette="info" isOutline>Info</Radio>
      <Radio value="dynamic" palette="dynamic" isOutline>Dynamic</Radio>
      <Radio value="!dynamic" palette="!dynamic" isOutline>!Dynamic</Radio>
    </RadioGroup>
  )
}

export const OutlineSoft = () => {
  const [active, setActive] = React.useState(() => 'primary')

  return (
    <RadioGroup active={active} setActive={setActive}>
      <Radio value="primary" isOutline isSoft>Primary</Radio>
      <Radio value="secondary" palette="secondary" isOutline isSoft>Secondary</Radio>
      <Radio value="success" palette="success" isOutline isSoft>Success</Radio>
      <Radio value="danger" palette="danger" isOutline isSoft>Danger</Radio>
      <Radio value="warning" palette="warning" isOutline isSoft>Warning</Radio>
      <Radio value="info" palette="info" isOutline isSoft>Info</Radio>
      <Radio value="dynamic" palette="dynamic" isOutline isSoft>Dynamic</Radio>
      <Radio value="!dynamic" palette="!dynamic" isOutline isSoft>!Dynamic</Radio>
    </RadioGroup>
  )
}

export const Size = () => {
  const [active, setActive] = React.useState(() => 'medium')

  return (
    <RadioGroup active={active} setActive={setActive}>
      <Radio value="small" size="small">Small</Radio>
      <Radio value="medium">Medium</Radio>
      <Radio value="large" size="large">Large</Radio>
    </RadioGroup>
  )
}

export const Block = () => {
  const [active, setActive] = React.useState(() => 'item-')

  return (
    <RadioGroup active={active} setActive={setActive} isBlock>
      <Radio value="item-1">Item 1</Radio>
      <Radio value="item-2">Item 2</Radio>
      <Radio value="item-3">Item 3</Radio>
    </RadioGroup>
  )
}
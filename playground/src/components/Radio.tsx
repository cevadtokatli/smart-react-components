import { Radio, RadioGroup } from '@smart-react-components/ui'
import React from 'react'

export const Palette = () => {
  const [active, setActive] = React.useState(() => 'primary')

  return (
    <RadioGroup active={active} setActive={setActive}>
      <Radio value="primary" label="Primary" />
      <Radio value="secondary" palette="secondary" label="Secondary" />
      <Radio value="success" palette="success" label="Success" />
      <Radio value="danger" palette="danger" label="Danger" />
      <Radio value="warning" palette="warning" label="Warning" />
      <Radio value="info" palette="info" label="Info" />
      <Radio value="dynamic" palette="dynamic" label="Dynamic" />
      <Radio value="!dynamic" palette="!dynamic" label="!Dynamic" />
    </RadioGroup>
  )
}

export const Soft = () => {
  const [active, setActive] = React.useState(() => 'primary')

  return (
    <RadioGroup active={active} setActive={setActive}>
      <Radio value="primary" label="Primary" isSoft />
      <Radio value="secondary" palette="secondary" label="Secondary" isSoft />
      <Radio value="success" palette="success" label="Success" isSoft />
      <Radio value="danger" palette="danger" label="Danger" isSoft />
      <Radio value="warning" palette="warning" label="Warning" isSoft />
      <Radio value="info" palette="info" label="Info" isSoft />
      <Radio value="dynamic" palette="dynamic" label="Dynamic" isSoft />
      <Radio value="!dynamic" palette="!dynamic" label="!Dynamic" isSoft />
    </RadioGroup>
  )
}

export const Outline = () => {
  const [active, setActive] = React.useState(() => 'primary')

  return (
    <RadioGroup active={active} setActive={setActive}>
      <Radio value="primary" label="Primary" isOutline />
      <Radio value="secondary" palette="secondary" label="Secondary" isOutline />
      <Radio value="success" palette="success" label="Success" isOutline />
      <Radio value="danger" palette="danger" label="Danger" isOutline />
      <Radio value="warning" palette="warning" label="Warning" isOutline />
      <Radio value="info" palette="info" label="Info" isOutline />
      <Radio value="dynamic" palette="dynamic" label="Dynamic" isOutline />
      <Radio value="!dynamic" palette="!dynamic" label="!Dynamic" isOutline />
    </RadioGroup>
  )
}

export const OutlineSoft = () => {
  const [active, setActive] = React.useState(() => 'primary')

  return (
    <RadioGroup active={active} setActive={setActive}>
      <Radio value="primary" label="Primary" isOutline isSoft />
      <Radio value="secondary" palette="secondary" label="Secondary" isOutline isSoft />
      <Radio value="success" palette="success" label="Success" isOutline isSoft />
      <Radio value="danger" palette="danger" label="Danger" isOutline isSoft />
      <Radio value="warning" palette="warning" label="Warning" isOutline isSoft />
      <Radio value="info" palette="info" label="Info" isOutline isSoft />
      <Radio value="dynamic" palette="dynamic" label="Dynamic" isOutline isSoft />
      <Radio value="!dynamic" palette="!dynamic" label="!Dynamic" isOutline isSoft />
    </RadioGroup>
  )
}

export const Size = () => {
  const [active, setActive] = React.useState(() => 'medium')

  return (
    <RadioGroup active={active} setActive={setActive}>
      <Radio value="small" size="small" label="Small" />
      <Radio value="medium" label="Medium" />
      <Radio value="large" size="large" label="Large" />
    </RadioGroup>
  )
}

export const Block = () => {
  const [active, setActive] = React.useState(() => 'item-')

  return (
    <RadioGroup active={active} setActive={setActive} isBlock>
      <Radio value="item-1" label="Item 1" />
      <Radio value="item-2" label="Item 2" />
      <Radio value="item-3" label="Item 3" />
    </RadioGroup>
  )
}
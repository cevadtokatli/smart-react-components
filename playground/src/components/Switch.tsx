import { Switch, SwitchGroup } from '@smart-react-components/ui'
import React from 'react'

export const Palette = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch value="primary" label="Primary" />
      <Switch value="secondary" palette="secondary" label="Secondary" />
      <Switch value="success" palette="success" label="Success" />
      <Switch value="danger" palette="danger" label="Danger" />
      <Switch value="warning" palette="warning" label="Warning" />
      <Switch value="info" palette="info" label="Info" />
      <Switch value="dynamic" palette="dynamic" label="Dynamic" />
      <Switch value="!dynamic" palette="!dynamic" label="!Dynamic" />
    </SwitchGroup>
  )
}

export const Soft = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch value="primary" label="Primary" isOutline />
      <Switch value="secondary" palette="secondary" label="Secondary" isOutline />
      <Switch value="success" palette="success" label="Success" isOutline />
      <Switch value="danger" palette="danger" label="Danger" isOutline />
      <Switch value="warning" palette="warning" label="Warning" isOutline />
      <Switch value="info" palette="info" label="Info" isOutline />
      <Switch value="dynamic" palette="dynamic" label="Dynamic" isOutline />
      <Switch value="!dynamic" palette="!dynamic" label="!Dynamic" isOutline />
    </SwitchGroup>
  )
}

export const Outline = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch value="primary" label="Primary" isOutline />
      <Switch value="secondary" palette="secondary" label="Secondary" isOutline />
      <Switch value="success" palette="success" label="Success" isOutline />
      <Switch value="danger" palette="danger" label="Danger" isOutline />
      <Switch value="warning" palette="warning" label="Warning" isOutline />
      <Switch value="info" palette="info" label="Info" isOutline />
      <Switch value="dynamic" palette="dynamic" label="Dynamic" isOutline />
      <Switch value="!dynamic" palette="!dynamic" label="!Dynamic" isOutline />
    </SwitchGroup>
  )
}

export const OutlineSoft = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch value="primary" label="Primary" isOutline isSoft />
      <Switch value="secondary" palette="secondary" label="Secondary" isOutline isSoft />
      <Switch value="success" palette="success" label="Success" isOutline isSoft />
      <Switch value="danger" palette="danger" label="Danger" isOutline isSoft />
      <Switch value="warning" palette="warning" label="Warning" isOutline isSoft />
      <Switch value="info" palette="info" label="Info" isOutline isSoft />
      <Switch value="dynamic" palette="dynamic" label="Dynamic" isOutline isSoft />
      <Switch value="!dynamic" palette="!dynamic" label="!Dynamic" isOutline isSoft />
    </SwitchGroup>
  )
}

export const Size = () => {
  const [active, setActive] = React.useState(() => ['medium'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch value="small" size="small" label="Small" />
      <Switch value="medium" label="Medium" />
      <Switch value="large" size="large" label="Large" />
    </SwitchGroup>
  )
}

export const Block = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <SwitchGroup active={active} setActive={setActive} isBlock isRequired>
      <Switch value="item-1" label="Item 1" />
      <Switch value="item-2" label="Item 2" />
      <Switch value="item-3" label="Item 3" />
    </SwitchGroup>
  )
}

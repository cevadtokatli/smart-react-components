import { Switch, SwitchGroup } from '@smart-react-components/ui'
import React from 'react'

export const Palette = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch value="primary">Primary</Switch>
      <Switch value="secondary" palette="secondary">Secondary</Switch>
      <Switch value="success" palette="success">Success</Switch>
      <Switch value="danger" palette="danger">Danger</Switch>
      <Switch value="warning" palette="warning">Warning</Switch>
      <Switch value="info" palette="info">Info</Switch>
      <Switch value="dynamic" palette="dynamic">Dynamic</Switch>
      <Switch value="!dynamic" palette="!dynamic">!Dynamic</Switch>
    </SwitchGroup>
  )
}

export const Soft = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch value="primary" isSoft>Primary</Switch>
      <Switch value="secondary" palette="secondary" isSoft>Secondary</Switch>
      <Switch value="success" palette="success" isSoft>Success</Switch>
      <Switch value="danger" palette="danger" isSoft>Danger</Switch>
      <Switch value="warning" palette="warning" isSoft>Warning</Switch>
      <Switch value="info" palette="info" isSoft>Info</Switch>
      <Switch value="dynamic" palette="dynamic" isSoft>Dynamic</Switch>
      <Switch value="!dynamic" palette="!dynamic" isSoft>!Dynamic</Switch>
    </SwitchGroup>
  )
}

export const Outline = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch value="primary" isOutline>Primary</Switch>
      <Switch value="secondary" palette="secondary" isOutline>Secondary</Switch>
      <Switch value="success" palette="success" isOutline>Success</Switch>
      <Switch value="danger" palette="danger" isOutline>Danger</Switch>
      <Switch value="warning" palette="warning" isOutline>Warning</Switch>
      <Switch value="info" palette="info" isOutline>Info</Switch>
      <Switch value="dynamic" palette="dynamic" isOutline>Dynamic</Switch>
      <Switch value="!dynamic" palette="!dynamic" isOutline>!Dynamic</Switch>
    </SwitchGroup>
  )
}

export const OutlineSoft = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch value="primary" isOutline isSoft>Primary</Switch>
      <Switch value="secondary" palette="secondary" isOutline isSoft>Secondary</Switch>
      <Switch value="success" palette="success" isOutline isSoft>Success</Switch>
      <Switch value="danger" palette="danger" isOutline isSoft>Danger</Switch>
      <Switch value="warning" palette="warning" isOutline isSoft>Warning</Switch>
      <Switch value="info" palette="info" isOutline isSoft>Info</Switch>
      <Switch value="dynamic" palette="dynamic" isOutline isSoft>Dynamic</Switch>
      <Switch value="!dynamic" palette="!dynamic" isOutline isSoft>!Dynamic</Switch>
    </SwitchGroup>
  )
}

export const Size = () => {
  const [active, setActive] = React.useState(() => ['medium'])

  return (
    <SwitchGroup active={active} setActive={setActive}>
      <Switch value="small" size="small">Small</Switch>
      <Switch value="medium">Medium</Switch>
      <Switch value="large" size="large">Large</Switch>
    </SwitchGroup>
  )
}

export const Block = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <SwitchGroup active={active} setActive={setActive} isBlock isRequired>
      <Switch value="item-1">Item 1</Switch>
      <Switch value="item-2" isOutline>Item 2</Switch>
      <Switch value="item-3" isSoft>Item 3</Switch>
    </SwitchGroup>
  )
}

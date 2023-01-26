import { Checkbox, CheckboxGroup } from '@smart-react-components/ui'
import { Position } from '@smart-react-components/ui/Form/Checkbox'
import React from 'react'

export const Palette = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="primary">Primary</Checkbox>
      <Checkbox value="secondary" palette="secondary">Secondary</Checkbox>
      <Checkbox value="success" palette="success">Success</Checkbox>
      <Checkbox value="danger" palette="danger">Danger</Checkbox>
      <Checkbox value="warning" palette="warning">Warning</Checkbox>
      <Checkbox value="info" palette="info">Info</Checkbox>
      <Checkbox value="dynamic" palette="dynamic">Dynamic</Checkbox>
      <Checkbox value="!dynamic" palette="!dynamic">!Dynamic</Checkbox>
    </CheckboxGroup>
  )
}

export const Soft = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="primary" isSoft>Primary</Checkbox>
      <Checkbox value="secondary" palette="secondary" isSoft>Secondary</Checkbox>
      <Checkbox value="success" palette="success" isSoft>Success</Checkbox>
      <Checkbox value="danger" palette="danger" isSoft>Danger</Checkbox>
      <Checkbox value="warning" palette="warning" isSoft>Warning</Checkbox>
      <Checkbox value="info" palette="info" isSoft>Info</Checkbox>
      <Checkbox value="dynamic" palette="dynamic" isSoft>Dynamic</Checkbox>
      <Checkbox value="!dynamic" palette="!dynamic" isSoft>!Dynamic</Checkbox>
    </CheckboxGroup>
  )
}

export const Outline = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="primary" isOutline>Primary</Checkbox>
      <Checkbox value="secondary" palette="secondary" isOutline>Secondary</Checkbox>
      <Checkbox value="success" palette="success" isOutline>Success</Checkbox>
      <Checkbox value="danger" palette="danger" isOutline>Danger</Checkbox>
      <Checkbox value="warning" palette="warning" isOutline>Warning</Checkbox>
      <Checkbox value="info" palette="info" isOutline>Info</Checkbox>
      <Checkbox value="dynamic" palette="dynamic" isOutline>Dynamic</Checkbox>
      <Checkbox value="!dynamic" palette="!dynamic" isOutline>!Dynamic</Checkbox>
    </CheckboxGroup>
  )
}

export const OutlineSoft = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="primary" isOutline isSoft>Primary</Checkbox>
      <Checkbox value="secondary" palette="secondary" isOutline isSoft>Secondary</Checkbox>
      <Checkbox value="success" palette="success" isOutline isSoft>Success</Checkbox>
      <Checkbox value="danger" palette="danger" isOutline isSoft>Danger</Checkbox>
      <Checkbox value="warning" palette="warning" isOutline isSoft>Warning</Checkbox>
      <Checkbox value="info" palette="info" isOutline isSoft>Info</Checkbox>
      <Checkbox value="dynamic" palette="dynamic" isOutline isSoft>Dynamic</Checkbox>
      <Checkbox value="!dynamic" palette="!dynamic" isOutline isSoft>!Dynamic</Checkbox>
    </CheckboxGroup>
  )
}

export const Size = () => {
  const [active, setActive] = React.useState(() => ['medium'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="small" size="small">Small</Checkbox>
      <Checkbox value="medium">Medium</Checkbox>
      <Checkbox value="large" size="large">Large</Checkbox>
    </CheckboxGroup>
  )
}

export const Shape = () => {
  const [active, setActive] = React.useState(() => ['rectangle'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="rectangle">Rectangle</Checkbox>
      <Checkbox value="rounded" shape="rounded">Rounded</Checkbox>
    </CheckboxGroup>
  )
}

export const Block = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <CheckboxGroup active={active} setActive={setActive} isBlock isRequired>
      <Checkbox value="item-1">Item 1</Checkbox>
      <Checkbox value="item-2" isOutline>Item 2</Checkbox>
      <Checkbox value="item-3" isSoft>Item 3</Checkbox>
    </CheckboxGroup>
  )
}

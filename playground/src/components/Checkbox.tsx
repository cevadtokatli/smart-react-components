import { Checkbox, CheckboxGroup } from '@smart-react-components/ui'
import React from 'react'

export const Palette = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="primary" label="Primary" />
      <Checkbox value="secondary" palette="secondary" label="Secondary" />
      <Checkbox value="success" palette="success" label="Success" />
      <Checkbox value="danger" palette="danger" label="Danger" />
      <Checkbox value="warning" palette="warning" label="Warning" />
      <Checkbox value="info" palette="info" label="Info" />
      <Checkbox value="dynamic" palette="dynamic" label="Dynamic" />
      <Checkbox value="!dynamic" palette="!dynamic" label="!Dynamic" />
    </CheckboxGroup>
  )
}

export const Soft = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="primary" label="Primary" isSoft />
      <Checkbox value="secondary" palette="secondary" label="Secondary" isSoft />
      <Checkbox value="success" palette="success" label="Success" isSoft />
      <Checkbox value="danger" palette="danger" label="Danger" isSoft />
      <Checkbox value="warning" palette="warning" label="Warning" isSoft />
      <Checkbox value="info" palette="info" label="Info" isSoft />
      <Checkbox value="dynamic" palette="dynamic" label="Dynamic" isSoft />
      <Checkbox value="!dynamic" palette="!dynamic" label="!Dynamic" isSoft />
    </CheckboxGroup>
  )
}

export const Outline = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="primary" label="Primary" isOutline />
      <Checkbox value="secondary" palette="secondary" label="Secondary" isOutline />
      <Checkbox value="success" palette="success" label="Success" isOutline />
      <Checkbox value="danger" palette="danger" label="Danger" isOutline />
      <Checkbox value="warning" palette="warning" label="Warning" isOutline />
      <Checkbox value="info" palette="info" label="Info" isOutline />
      <Checkbox value="dynamic" palette="dynamic" label="Dynamic" isOutline />
      <Checkbox value="!dynamic" palette="!dynamic" label="!Dynamic" isOutline />
    </CheckboxGroup>
  )
}

export const OutlineSoft = () => {
  const [active, setActive] = React.useState(() => ['primary'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="primary" label="Primary" isOutline isSoft />
      <Checkbox value="secondary" palette="secondary" label="Secondary" isOutline isSoft />
      <Checkbox value="success" palette="success" label="Success" isOutline isSoft />
      <Checkbox value="danger" palette="danger" label="Danger" isOutline isSoft />
      <Checkbox value="warning" palette="warning" label="Warning" isOutline isSoft />
      <Checkbox value="info" palette="info" label="Info" isOutline isSoft />
      <Checkbox value="dynamic" palette="dynamic" label="Dynamic" isOutline isSoft />
      <Checkbox value="!dynamic" palette="!dynamic" label="!Dynamic" isOutline isSoft />
    </CheckboxGroup>
  )
}

export const Size = () => {
  const [active, setActive] = React.useState(() => ['medium'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="small" size="small" label="Small" />
      <Checkbox value="medium" label="Medium" />
      <Checkbox value="large" size="large" label="Large" />
    </CheckboxGroup>
  )
}

export const Shape = () => {
  const [active, setActive] = React.useState(() => ['rectangle'])

  return (
    <CheckboxGroup active={active} setActive={setActive}>
      <Checkbox value="rectangle" label="Rectangle" />
      <Checkbox value="rounded" shape="rounded" label="Rounded" />
    </CheckboxGroup>
  )
}

export const Block = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <CheckboxGroup active={active} setActive={setActive} isBlock isRequired>
      <Checkbox value="item-1" label="Item 1" />
      <Checkbox value="item-2" label="Item 2" />
      <Checkbox value="item-3" label="Item 3" />
    </CheckboxGroup>
  )
}

import { Input } from "@smart-react-components/ui"
import InputAddon, { Position } from '@smart-react-components/ui/Input/InputAddon'
import React from 'react'

export const Palette = () => {
  const [value, setValue] = React.useState('')

  return (
    <>
      <Input placeholder="Primary" value={value} setValue={setValue}>Primary</Input>
      <Input palette="secondary" placeholder="Secondary">Secondary</Input>
      <Input palette="success" placeholder="Success">Success</Input>
      <Input palette="danger" placeholder="Danger">Danger</Input>
      <Input palette="warning" placeholder="Warning">Warning</Input>
      <Input palette="info" placeholder="Info">Info</Input>
      <Input palette="dynamic" placeholder="Dynamic">Dynamic</Input>
      <Input palette="!dynamic" placeholder="!Dynamic">!Dynamic</Input>
    </>
  )
}

export const Soft = () => (
  <>
    <Input isSoft>Primary</Input>
    <Input palette="secondary" isSoft>Secondary</Input>
    <Input palette="success" isSoft>Success</Input>
    <Input palette="danger" isSoft>Danger</Input>
    <Input palette="warning" isSoft>Warning</Input>
    <Input palette="info" isSoft>Info</Input>
    <Input palette="dynamic" isSoft>Dynamic</Input>
    <Input palette="!dynamic" isSoft>!Dynamic</Input>
  </>
)

export const Outline = () => (
  <>
    <Input isOutline={false} placeholder="Primary">Primary</Input>
    <Input palette="secondary" isOutline={false} placeholder="Secondary">Secondary</Input>
    <Input palette="success" isOutline={false} placeholder="Success">Success</Input>
    <Input palette="danger" isOutline={false} placeholder="Danger">Danger</Input>
    <Input palette="warning" isOutline={false} placeholder="Warning">Warning</Input>
    <Input palette="info" isOutline={false} placeholder="Info">Info</Input>
    <Input palette="dynamic" isOutline={false} placeholder="Dynamic">Dynamic</Input>
    <Input palette="!dynamic" isOutline={false} placeholder="!Dynamic">!Dynamic</Input>
  </>
)

export const OutlineSoft = () => (
  <>
    <Input isOutline={false} isSoft placeholder="Primary">Primary</Input>
    <Input palette="secondary" isOutline={false} isSoft placeholder="Secondary">Secondary</Input>
    <Input palette="success" isOutline={false} isSoft placeholder="Success">Success</Input>
    <Input palette="danger" isOutline={false} isSoft placeholder="Danger">Danger</Input>
    <Input palette="warning" isOutline={false} isSoft placeholder="Warning">Warning</Input>
    <Input palette="info" isOutline={false} isSoft placeholder="Info">Info</Input>
    <Input palette="dynamic" isOutline={false} isSoft placeholder="Dynamic">Dynamic</Input>
    <Input palette="!dynamic" isOutline={false} isSoft placeholder="!Dynamic">!Dynamic</Input>
  </>
)

export const Size = () => (
  <>
    <Input size="small">Small</Input>
    <Input>Medium</Input>
    <Input size="large">Large</Input>
  </>
)

export const Shape = () => (
  <>
    <Input shape="rectangle">Rectangle</Input>
    <Input shape="rounded">Rounded</Input>
  </>
)
import { Input } from "@smart-react-components/ui"
import React from 'react'

export const Palette = () => {
  const [value, setValue] = React.useState('')

  return (
    <>
      <Input placeholder="Primary" value={value} setValue={setValue} label="Primary" />
      <Input palette="secondary" placeholder="Secondary" label="Secondary" />
      <Input palette="success" placeholder="Success" label="Success" />
      <Input palette="danger" placeholder="Danger" label="Danger" />
      <Input palette="warning" placeholder="Warning" label="Warning" />
      <Input palette="info" placeholder="Info" label="Info" />
      <Input palette="dynamic" placeholder="Dynamic" label="Dynamic" />
      <Input palette="!dynamic" placeholder="!Dynamic" label="!Dynamic" />
    </>
  )
}

export const Soft = () => (
  <>
    <Input placeholder="Primary" label="Primary" isSoft />
    <Input palette="secondary" placeholder="Secondary" label="Secondary" isSoft />
    <Input palette="success" placeholder="Success" label="Success" isSoft />
    <Input palette="danger" placeholder="Danger" label="Danger" isSoft />
    <Input palette="warning" placeholder="Warning" label="Warning" isSoft />
    <Input palette="info" placeholder="Info" label="Info" isSoft />
    <Input palette="dynamic" placeholder="Dynamic" label="Dynamic" isSoft />
    <Input palette="!dynamic" placeholder="!Dynamic" label="!Dynamic" isSoft />
  </>
)

export const Outline = () => (
  <>
    <Input placeholder="Primary" label="Primary" isOutline={false} />
    <Input palette="secondary" placeholder="Secondary" label="Secondary" isOutline={false} />
    <Input palette="success" placeholder="Success" label="Success" isOutline={false} />
    <Input palette="danger" placeholder="Danger" label="Danger" isOutline={false} />
    <Input palette="warning" placeholder="Warning" label="Warning" isOutline={false} />
    <Input palette="info" placeholder="Info" label="Info" isOutline={false} />
    <Input palette="dynamic" placeholder="Dynamic" label="Dynamic" isOutline={false} />
    <Input palette="!dynamic" placeholder="!Dynamic" label="!Dynamic" isOutline={false} />
  </>
)

export const OutlineSoft = () => (
  <>
    <Input placeholder="Primary" label="Primary" isSoft isOutline={false} />
    <Input palette="secondary" placeholder="Secondary" label="Secondary" isSoft isOutline={false} />
    <Input palette="success" placeholder="Success" label="Success" isSoft isOutline={false} />
    <Input palette="danger" placeholder="Danger" label="Danger" isSoft isOutline={false} />
    <Input palette="warning" placeholder="Warning" label="Warning" isSoft isOutline={false} />
    <Input palette="info" placeholder="Info" label="Info" isSoft isOutline={false} />
    <Input palette="dynamic" placeholder="Dynamic" label="Dynamic" isSoft isOutline={false} />
    <Input palette="!dynamic" placeholder="!Dynamic" label="!Dynamic" isSoft isOutline={false} />
  </>
)

export const Size = () => (
  <>
    <Input size="small" label="Small" />
    <Input label="Medium" />
    <Input size="large" label="Large" />
  </>
)

export const Shape = () => (
  <>
    <Input shape="rectangle" label="Rectangle" />
    <Input shape="rounded" label="Rounded" />
  </>
)
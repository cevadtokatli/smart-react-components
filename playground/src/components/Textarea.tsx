import { Textarea } from "@smart-react-components/ui"
import React from 'react'

export const Palette = () => {
  const [value, setValue] = React.useState('')
  const xx = React.useRef(null)
  
  return (
    <>
      <Textarea placeholder="Primary" value={value} setValue={setValue} label="Primary" ref={xx} />
      <Textarea palette="secondary" placeholder="Secondary" label="Secondary" />
      <Textarea palette="success" placeholder="Success" label="Success" />
      <Textarea palette="danger" placeholder="Danger" label="Danger" />
      <Textarea palette="warning" placeholder="Warning" label="Warning" />
      <Textarea palette="info" placeholder="Info" label="Info" />
      <Textarea palette="dynamic" placeholder="Dynamic" label="Dynamic" />
      <Textarea palette="!dynamic" placeholder="!Dynamic" label="!Dynamic" />
    </>
  )
}

export const Soft = () => (
  <>
    <Textarea placeholder="Primary" label="Primary" isSoft />
    <Textarea palette="secondary" placeholder="Secondary" label="Secondary" isSoft />
    <Textarea palette="success" placeholder="Success" label="Success" isSoft />
    <Textarea palette="danger" placeholder="Danger" label="Danger" isSoft />
    <Textarea palette="warning" placeholder="Warning" label="Warning" isSoft />
    <Textarea palette="info" placeholder="Info" label="Info" isSoft />
    <Textarea palette="dynamic" placeholder="Dynamic" label="Dynamic" isSoft />
    <Textarea palette="!dynamic" placeholder="!Dynamic" label="!Dynamic" isSoft />
  </>
)

export const Outline = () => (
  <>
    <Textarea placeholder="Primary" label="Primary" isOutline={false} />
    <Textarea palette="secondary" placeholder="Secondary" label="Secondary" isOutline={false} />
    <Textarea palette="success" placeholder="Success" label="Success" isOutline={false} />
    <Textarea palette="danger" placeholder="Danger" label="Danger" isOutline={false} />
    <Textarea palette="warning" placeholder="Warning" label="Warning" isOutline={false} />
    <Textarea palette="info" placeholder="Info" label="Info" isOutline={false} />
    <Textarea palette="dynamic" placeholder="Dynamic" label="Dynamic" isOutline={false} />
    <Textarea palette="!dynamic" placeholder="!Dynamic" label="!Dynamic" isOutline={false} />
  </>
)

export const OutlineSoft = () => (
  <>
    <Textarea placeholder="Primary" label="Primary" isSoft isOutline={false} />
    <Textarea palette="secondary" placeholder="Secondary" label="Secondary" isSoft isOutline={false} />
    <Textarea palette="success" placeholder="Success" label="Success" isSoft isOutline={false} />
    <Textarea palette="danger" placeholder="Danger" label="Danger" isSoft isOutline={false} />
    <Textarea palette="warning" placeholder="Warning" label="Warning" isSoft isOutline={false} />
    <Textarea palette="info" placeholder="Info" label="Info" isSoft isOutline={false} />
    <Textarea palette="dynamic" placeholder="Dynamic" label="Dynamic" isSoft isOutline={false} />
    <Textarea palette="!dynamic" placeholder="!Dynamic" label="!Dynamic" isSoft isOutline={false} />
  </>
)

export const Size = () => (
  <>
    <Textarea size="small" label="Small" />
    <Textarea label="Medium" />
    <Textarea size="large" label="Large" />
  </>
)

export const Shape = () => (
  <>
    <Textarea shape="rectangle" label="Rectangle" />
    <Textarea shape="rounded" label="Rounded" />
  </>
)
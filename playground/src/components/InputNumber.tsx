import { InputNumber } from "@smart-react-components/ui"
import React, { useState } from "react"

export const Palette = () => {
  const [val, setVal] = useState(1)

  return (
    <>
      <InputNumber value={val} setValue={setVal} label="Primary" max={20} min={0} />
      <InputNumber palette="secondary" label="Secondary" />
      <InputNumber palette="success" label="Success" />
      <InputNumber palette="danger" label="Danger" />
      <InputNumber palette="warning" label="Warning" />
      <InputNumber palette="info" label="Info" />
      <InputNumber palette="dynamic" label="Dynamic" />
      <InputNumber palette="!dynamic" label="!Dynamic" />
    </>
  )
}

export const Soft = () => (
  <>
    <InputNumber label="Primary" isSoft />
    <InputNumber palette="secondary" label="Secondary" isSoft />
    <InputNumber palette="success" label="Success" isSoft />
    <InputNumber palette="danger" label="Danger" isSoft />
    <InputNumber palette="warning" label="Warning" isSoft />
    <InputNumber palette="info" label="Info" isSoft />
    <InputNumber palette="dynamic" label="Dynamic" isSoft />
    <InputNumber palette="!dynamic" label="!Dynamic" isSoft />
  </>
)

export const Outline = () => (
  <>
    <InputNumber label="Primary" isOutline={false} />
    <InputNumber palette="secondary" label="Secondary" isOutline={false} />
    <InputNumber palette="success" label="Success" isOutline={false} />
    <InputNumber palette="danger" label="Danger" isOutline={false} />
    <InputNumber palette="warning" label="Warning" isOutline={false} />
    <InputNumber palette="info" label="Info" isOutline={false} />
    <InputNumber palette="dynamic" label="Dynamic" isOutline={false} />
    <InputNumber palette="!dynamic" label="!Dynamic" isOutline={false} />
  </>
)

export const OutlineSoft = () => (
  <>
    <InputNumber label="Primary" isSoft isOutline={false} />
    <InputNumber palette="secondary" label="Secondary" isSoft isOutline={false} />
    <InputNumber palette="success" label="Success" isSoft isOutline={false} />
    <InputNumber palette="danger" label="Danger" isSoft isOutline={false} />
    <InputNumber palette="warning" label="Warning" isSoft isOutline={false} />
    <InputNumber palette="info" label="Info" isSoft isOutline={false} />
    <InputNumber palette="dynamic" label="Dynamic" isSoft isOutline={false} />
    <InputNumber palette="!dynamic" label="!Dynamic" isSoft isOutline={false} />
  </>
)

export const Size = () => (
  <>
    <InputNumber size="small" label="Small" />
    <InputNumber label="Medium" />
    <InputNumber size="large" label="Large" />
  </>
)

export const Shape = () => (
  <>
    <InputNumber shape="rectangle" label="Rectangle" />
    <InputNumber shape="rounded" label="Rounded" />
  </>
)

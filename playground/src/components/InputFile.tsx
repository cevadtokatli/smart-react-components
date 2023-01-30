import { Input, InputFile } from "@smart-react-components/ui"
import React from 'react'

export const Palette = () => {
  const [value, setValue] = React.useState<File[]>(() => [])

  return (
    <>
      <form>
        <InputFile placeholder="Primary" value={value} setValue={setValue} label="Primary" isRequired />
        <button>Submit</button>
      </form>

      <InputFile palette="secondary" value={value} setValue={setValue} placeholder="Secondary" label="Secondary" />
      <InputFile palette="success" value={value} setValue={setValue} placeholder="Success" label="Success" />
      <InputFile palette="danger" value={value} setValue={setValue} placeholder="Danger" label="Danger" />
      <InputFile palette="warning" value={value} setValue={setValue} placeholder="Warning" label="Warning" />
      <InputFile palette="info" value={value} setValue={setValue} placeholder="Info" label="Info" />
      <InputFile palette="dynamic" value={value} setValue={setValue} placeholder="Dynamic" label="Dynamic" />
      <InputFile palette="!dynamic" value={value} setValue={setValue} placeholder="!Dynamic" label="!Dynamic" />
    </>
  )
}

export const Soft = () => {
  const [value, setValue] = React.useState<File[]>(() => [])

  return (
    <>
      <InputFile placeholder="Primary" value={value} setValue={setValue} label="Primary" isSoft />
      <InputFile palette="secondary" value={value} setValue={setValue} placeholder="Secondary" label="Secondary" isSoft />
      <InputFile palette="success" value={value} setValue={setValue} placeholder="Success" label="Success" isSoft />
      <InputFile palette="danger" value={value} setValue={setValue} placeholder="Danger" label="Danger" isSoft />
      <InputFile palette="warning" value={value} setValue={setValue} placeholder="Warning" label="Warning" isSoft />
      <InputFile palette="info" value={value} setValue={setValue} placeholder="Info" label="Info" isSoft />
      <InputFile palette="dynamic" value={value} setValue={setValue} placeholder="Dynamic" label="Dynamic" isSoft />
      <InputFile palette="!dynamic" value={value} setValue={setValue} placeholder="!Dynamic" label="!Dynamic" isSoft />
    </>
  )
}

export const Outline = () => {
  const [value, setValue] = React.useState<File[]>(() => [])

  return (
    <>
      <InputFile placeholder="Primary" value={value} setValue={setValue} label="Primary" isOutline={false} />
      <InputFile palette="secondary" value={value} setValue={setValue} placeholder="Secondary" label="Secondary" isOutline={false} />
      <InputFile palette="success" value={value} setValue={setValue} placeholder="Success" label="Success" isOutline={false} />
      <InputFile palette="danger" value={value} setValue={setValue} placeholder="Danger" label="Danger" isOutline={false} />
      <InputFile palette="warning" value={value} setValue={setValue} placeholder="Warning" label="Warning" isOutline={false} />
      <InputFile palette="info" value={value} setValue={setValue} placeholder="Info" label="Info" isOutline={false} />
      <InputFile palette="dynamic" value={value} setValue={setValue} placeholder="Dynamic" label="Dynamic" isOutline={false} />
      <InputFile palette="!dynamic" value={value} setValue={setValue} placeholder="!Dynamic" label="!Dynamic" isOutline={false} />
    </>
  )
}

export const OutlineSoft = () => {
  const [value, setValue] = React.useState<File[]>(() => [])

  return (
    <>
      <InputFile placeholder="Primary" value={value} setValue={setValue} label="Primary" isSoft isOutline={false} />
      <InputFile palette="secondary" value={value} setValue={setValue} placeholder="Secondary" label="Secondary" isSoft isOutline={false} />
      <InputFile palette="success" value={value} setValue={setValue} placeholder="Success" label="Success" isSoft isOutline={false} />
      <InputFile palette="danger" value={value} setValue={setValue} placeholder="Danger" label="Danger" isSoft isOutline={false} />
      <InputFile palette="warning" value={value} setValue={setValue} placeholder="Warning" label="Warning" isSoft isOutline={false} />
      <InputFile palette="info" value={value} setValue={setValue} placeholder="Info" label="Info" isSoft isOutline={false} />
      <InputFile palette="dynamic" value={value} setValue={setValue} placeholder="Dynamic" label="Dynamic" isSoft isOutline={false} />
      <InputFile palette="!dynamic" value={value} setValue={setValue} placeholder="!Dynamic" label="!Dynamic" isSoft isOutline={false} />
    </>
  )
}

export const Size = () => {
  const [value, setValue] = React.useState<File[]>(() => [])

  return (
    <>
      <InputFile size="small" label="Small" value={value} setValue={setValue} />
      <InputFile label="Medium" value={value} setValue={setValue} />
      <InputFile size="large" label="Large" value={value} setValue={setValue} />
    </>
  )
}

export const Shape = () => {
  const [value, setValue] = React.useState<File[]>(() => [])

  return (
    <>
      <InputFile shape="rectangle" label="Rectangle" value={value} setValue={setValue} />
      <InputFile shape="rounded" label="Rounded" value={value} setValue={setValue} />
    </>
  )
}

import SelectBox from "@smart-react-components/ui/Select/SelectBox"
import Option from "@smart-react-components/ui/Select/Option"
import OptionGroup from "@smart-react-components/ui/Select/OptionGroup"
import React from 'react'

export const Palette = () => {
  const [active, setActive] = React.useState(() => null)

  return (
    <>
      <SelectBox active={active} setActive={setActive} placeholder="Label">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="secondary" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="success" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="danger" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="warning" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="info" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="dynamic" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="!dynamic" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
    </>
  )
}

export const Soft = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <SelectBox active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="secondary" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="success" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="danger" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="warning" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="info" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="dynamic" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="!dynamic" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
    </>
  )
}

export const Outline = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <SelectBox active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="secondary" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="success" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="danger" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="warning" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="info" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="dynamic" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="!dynamic" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
    </>
  )
}

export const SoftOutline = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <SelectBox active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="secondary" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="success" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="danger" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="warning" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="info" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="dynamic" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox palette="!dynamic" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
    </>
  )
}

export const Size = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <SelectBox active={active} setActive={setActive} size="small" label="Small">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox active={active} setActive={setActive} label="Medium">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox active={active} setActive={setActive} size="large" label="Large">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
    </>
  )
}

export const Shape = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <SelectBox active={active} setActive={setActive} label="Rectangle">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
      <SelectBox active={active} setActive={setActive} label="Rounded" shape="rounded">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </SelectBox>
    </>
  )
}

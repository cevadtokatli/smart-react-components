import Select from "@smart-react-components/ui/Select"
import Option from "@smart-react-components/ui/Select/Option"
import OptionGroup from "@smart-react-components/ui/Select/OptionGroup"
import React from 'react'

export const Palette = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <form>
      <Select active={active} setActive={setActive} isRequired>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <button>butotn</button>
      </form>
      <Select palette="secondary" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="success" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="danger" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="warning" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="info" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="dynamic" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="!dynamic" active={active} setActive={setActive}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
    </>
  )
}

export const Soft = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <Select active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="secondary" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="success" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="danger" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="warning" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="info" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="dynamic" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="!dynamic" active={active} setActive={setActive} isSoft>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
    </>
  )
}

export const Outline = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <Select active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="secondary" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="success" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="danger" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="warning" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="info" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="dynamic" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="!dynamic" active={active} setActive={setActive} isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
    </>
  )
}

export const SoftOutline = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <Select active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="secondary" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="success" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="danger" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="warning" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="info" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="dynamic" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select palette="!dynamic" active={active} setActive={setActive} isSoft isOutline={false}>
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
    </>
  )
}

export const Size = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <Select active={active} setActive={setActive} size="small" label="Small">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select active={active} setActive={setActive} label="Medium">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select active={active} setActive={setActive} size="large" label="Large">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
    </>
  )
}

export const Shape = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <Select active={active} setActive={setActive} label="Rectangle">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
      <Select active={active} setActive={setActive} label="Rounded" shape="rounded">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </Select>
    </>
  )
}

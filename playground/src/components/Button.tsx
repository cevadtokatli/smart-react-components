//import { ButtonIcon, ButtonList } from '@smart-react-components/ui'
import { Div } from '@smart-react-components/core'
import { Option, OptionGroup } from '@smart-react-components/ui'
import CloseIcon from '@smart-react-components/ui/Alert/AlertCloseIcon'
import Button from '@smart-react-components/ui/Button'
import ButtonLink from '@smart-react-components/ui/Button/ButtonLink'
import ButtonSelect from '@smart-react-components/ui/Button/ButtonSelect'
import React from 'react'

export const Palette = () => (
  <Div display="flex">
    <Button marginRight="$length.3" marginBottom="$length.3">Primary</Button>
    <Button palette="secondary" marginRight="$length.3" marginBottom="$length.3">Secondary</Button>
    <Button palette="success" marginRight="$length.3" marginBottom="$length.3">Success</Button>
    <Button palette="danger" marginRight="$length.3" marginBottom="$length.3">Danger</Button>
    <Button palette="warning" marginRight="$length.3" marginBottom="$length.3">Warning</Button>
    <Button palette="info" marginRight="$length.3" marginBottom="$length.3">Info</Button>
    <Button palette="dynamic" marginRight="$length.3" marginBottom="$length.3">Dynamic</Button>
    <Button palette="!dynamic" marginRight="$length.3" marginBottom="$length.3">!Dynamic</Button>
  </Div>
)

export const Soft = () => (
  <Div display="flex">
    <Button isSoft marginRight="$length.3" marginBottom="$length.3">Primary</Button>
    <Button palette="secondary" isSoft marginRight="$length.3" marginBottom="$length.3">Secondary</Button>
    <Button palette="success" isSoft marginRight="$length.3" marginBottom="$length.3">Success</Button>
    <Button palette="danger" isSoft marginRight="$length.3" marginBottom="$length.3">Danger</Button>
    <Button palette="warning" isSoft marginRight="$length.3" marginBottom="$length.3">Warning</Button>
    <Button palette="info" isSoft marginRight="$length.3" marginBottom="$length.3">Info</Button>
    <Button palette="dynamic" isSoft marginRight="$length.3" marginBottom="$length.3">Dynamic</Button>
    <Button palette="!dynamic" isSoft marginRight="$length.3" marginBottom="$length.3">!Dynamic</Button>
  </Div>
)

export const Outline = () => (
  <Div display="flex">
    <Button isOutline marginRight="$length.3" marginBottom="$length.3">Primary</Button>
    <Button palette="secondary" isOutline marginRight="$length.3" marginBottom="$length.3">Secondary</Button>
    <Button palette="success" isOutline marginRight="$length.3" marginBottom="$length.3">Success</Button>
    <Button palette="danger" isOutline marginRight="$length.3" marginBottom="$length.3">Danger</Button>
    <Button palette="warning" isOutline marginRight="$length.3" marginBottom="$length.3">Warning</Button>
    <Button palette="info" isOutline marginRight="$length.3" marginBottom="$length.3">Info</Button>
    <Button palette="dynamic" isOutline marginRight="$length.3" marginBottom="$length.3">Dynamic</Button>
    <Button palette="!dynamic" isOutline marginRight="$length.3" marginBottom="$length.3">!Dynamic</Button>
  </Div>
)

export const OutlineSoft = () => (
  <Div display="flex">
    <Button isOutline isSoft marginRight="$length.3" marginBottom="$length.3">Primary</Button>
    <Button palette="secondary" isOutline isSoft marginRight="$length.3" marginBottom="$length.3">Secondary</Button>
    <Button palette="success" isOutline isSoft marginRight="$length.3" marginBottom="$length.3">Success</Button>
    <Button palette="danger" isOutline isSoft marginRight="$length.3" marginBottom="$length.3">Danger</Button>
    <Button palette="warning" isOutline isSoft marginRight="$length.3" marginBottom="$length.3">Warning</Button>
    <Button palette="info" isOutline isSoft marginRight="$length.3" marginBottom="$length.3">Info</Button>
    <Button palette="dynamic" isOutline isSoft marginRight="$length.3" marginBottom="$length.3">Dynamic</Button>
    <Button palette="!dynamic" isOutline isSoft marginRight="$length.3" marginBottom="$length.3">!Dynamic</Button>
  </Div>
)

export const Link = () => (
  <Div display="flex">
    <Button isLink marginRight="$length.3" marginBottom="$length.3">Primary</Button>
    <Button palette="secondary" isLink marginRight="$length.3" marginBottom="$length.3">Secondary</Button>
    <Button palette="success" isLink marginRight="$length.3" marginBottom="$length.3">Success</Button>
    <Button palette="danger" isLink marginRight="$length.3" marginBottom="$length.3">Danger</Button>
    <Button palette="warning" isLink marginRight="$length.3" marginBottom="$length.3">Warning</Button>
    <Button palette="info" isLink marginRight="$length.3" marginBottom="$length.3">Info</Button>
    <Button palette="dynamic" isLink marginRight="$length.3" marginBottom="$length.3">Dynamic</Button>
    <Button palette="!dynamic" isLink marginRight="$length.3" marginBottom="$length.3">!Dynamic</Button>
  </Div>
)

export const Shape = () => (
  <Div display="flex">
    <Button marginRight="$length.3" marginBottom="$length.3">Rectangle</Button>
    <Button shape="rounded" marginRight="$length.3" marginBottom="$length.3">Rounded</Button>
  </Div>
)

export const Size = () => (
  <Div display="flex" alignItems="flex-start">
    <Button size="small" marginRight="$length.3" marginBottom="$length.3">Small</Button>
    <Button marginRight="$length.3" marginBottom="$length.3">Medium</Button>
    <Button size="large" marginRight="$length.3" marginBottom="$length.3">Large</Button>
    <Button isBlock>Block</Button>
  </Div>
)

export const Circle = () => (
  <Div>
    <Button isFixedSize shape="rounded" marginRight="$length.3" marginBottom="$length.3">1</Button>
  </Div>
)

export const ButtonLinkC = () => (
  <Div>
    <ButtonLink to="/primary" marginRight="$length.3" marginBottom="$length.3">Primary</ButtonLink>
    <ButtonLink to="/secondary" palette="secondary" marginRight="$length.3" marginBottom="$length.3">Secondary</ButtonLink>
    <ButtonLink to="/success" palette="success" marginRight="$length.3" marginBottom="$length.3">Success</ButtonLink>
    <ButtonLink to="/danger" palette="danger" marginRight="$length.3" marginBottom="$length.3">Danger</ButtonLink>
    <ButtonLink to="/warning" palette="warning" marginRight="$length.3" marginBottom="$length.3">Warning</ButtonLink>
    <ButtonLink to="/info" palette="info" marginRight="$length.3" marginBottom="$length.3">Info</ButtonLink>
    <ButtonLink to="/dynamic" palette="dynamic" marginRight="$length.3" marginBottom="$length.3">Dynamic</ButtonLink>
    <ButtonLink to="/!dynamic" palette="!dynamic" marginRight="$length.3" marginBottom="$length.3">!Dynamic</ButtonLink>
  </Div>
)

export const ButtonSelectC = () => {
  const [active, setActive] = React.useState(() => [])

  return (
    <>
      <ButtonSelect active={active} setActive={setActive} placeholder="Primary">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </ButtonSelect>
      <ButtonSelect palette="secondary" active={active} setActive={setActive} placeholder="Secondary">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </ButtonSelect>
      <ButtonSelect palette="success" active={active} setActive={setActive} placeholder="Success">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </ButtonSelect>
      <ButtonSelect palette="danger" active={active} setActive={setActive} placeholder="Danger">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </ButtonSelect>
      <ButtonSelect palette="warning" active={active} setActive={setActive} placeholder="Warning">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </ButtonSelect>
      <ButtonSelect palette="info" active={active} setActive={setActive} placeholder="Info">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </ButtonSelect>
      <ButtonSelect palette="dynamic" active={active} setActive={setActive} placeholder="Dynamic">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </ButtonSelect>
      <ButtonSelect palette="!dynamic" active={active} setActive={setActive} placeholder="!Dynamic">
        <OptionGroup label="Category">
          <Option value="item-1">Item 1</Option>
          <Option value="item-2">Item 2</Option>
          <Option value="item-3">Item 3</Option>
        </OptionGroup>
      </ButtonSelect>
    </>
  )
}
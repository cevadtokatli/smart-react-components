import React from 'react'
import Dropdown from '@smart-react-components/ui/Dropdown'
import DropdownList from '@smart-react-components/ui/Dropdown/DropdownList'
import DropdownItem from '@smart-react-components/ui/Dropdown/DropdownItem'
import DropdownCategory from '@smart-react-components/ui/Dropdown/DropdownCategory'
import { DropdownArrowIcon } from '@smart-react-components/ui'

export const children = [
  <DropdownCategory key="cat">Category</DropdownCategory>,
  <DropdownItem key="item-1">Item 1</DropdownItem>,
  <DropdownItem key="item-2">Item 2</DropdownItem>,
  <DropdownItem key="item-3">Item 3</DropdownItem>,
]

export const Palette = () => (
  <>
    <Dropdown>
      <button>Primary</button>
      <DropdownList>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Secondary</button>
      <DropdownList palette="secondary">{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Success</button>
      <DropdownList palette="success">{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Danger</button>
      <DropdownList palette="danger">{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Warning</button>
      <DropdownList palette="warning">{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Info</button>
      <DropdownList palette="info">{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Dynamic</button>
      <DropdownList palette="dynamic">{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>!Dynamic</button>
      <DropdownList palette="!dynamic">{children}</DropdownList>
    </Dropdown>
  </>
)

export const Filled = () => (
  <>
    <Dropdown>
      <button>Primary</button>
      <DropdownList isFilled>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Secondary</button>
      <DropdownList palette="secondary" isFilled>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Success</button>
      <DropdownList palette="success" isFilled>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Danger</button>
      <DropdownList palette="danger" isFilled>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Warning</button>
      <DropdownList palette="warning" isFilled>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Info</button>
      <DropdownList palette="info" isFilled>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Dynamic</button>
      <DropdownList palette="dynamic" isFilled>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>!Dynamic</button>
      <DropdownList palette="!dynamic" isFilled>{children}</DropdownList>
    </Dropdown>
  </>
)

export const Soft = () => (
  <>
    <Dropdown>
      <button>Primary</button>
      <DropdownList isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Secondary</button>
      <DropdownList palette="secondary" isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Success</button>
      <DropdownList palette="success" isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Danger</button>
      <DropdownList palette="danger" isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Warning</button>
      <DropdownList palette="warning" isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Info</button>
      <DropdownList palette="info" isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Dynamic</button>
      <DropdownList palette="dynamic" isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>!Dynamic</button>
      <DropdownList palette="!dynamic" isSoft>{children}</DropdownList>
    </Dropdown>
  </>
)

export const SoftFilled = () => (
  <>
    <Dropdown>
      <button>Primary</button>
      <DropdownList isFilled isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Secondary</button>
      <DropdownList palette="secondary" isFilled isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Success</button>
      <DropdownList palette="success" isFilled isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Danger</button>
      <DropdownList palette="danger" isFilled isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Warning</button>
      <DropdownList palette="warning" isFilled isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Info</button>
      <DropdownList palette="info" isFilled isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Dynamic</button>
      <DropdownList palette="dynamic" isFilled isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>!Dynamic</button>
      <DropdownList palette="!dynamic" isFilled isSoft>{children}</DropdownList>
    </Dropdown>
  </>
)

export const Size = () => (
  <>
    <Dropdown>
      <button>Small</button>
      <DropdownList size="small">{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <div>Medium <DropdownArrowIcon height={14} width={14} /></div>
      <DropdownList>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Large</button>
      <DropdownList size="large">{children}</DropdownList>
    </Dropdown>
  </>
)

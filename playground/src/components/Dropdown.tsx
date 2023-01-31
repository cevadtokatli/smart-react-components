import React from 'react'
import Dropdown from '@smart-react-components/ui/Dropdown'
import DropdownList from '@smart-react-components/ui/Dropdown/DropdownList'
import DropdownItem from '@smart-react-components/ui/Dropdown/DropdownItem'
import DropdownCategory from '@smart-react-components/ui/Dropdown/DropdownCategory'
import { DropdownArrowIcon } from '@smart-react-components/ui'

export const children = (
  <DropdownCategory label="Category">
    <DropdownItem key="item-1">Item 1</DropdownItem>
    <DropdownItem key="item-2">Item 2</DropdownItem>
    <DropdownItem key="item-3">Item 3</DropdownItem>
  </DropdownCategory>
)

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

export const Outline = () => (
  <>
    <Dropdown>
      <button>Primary</button>
      <DropdownList isOutline={false}>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Secondary</button>
      <DropdownList palette="secondary" isOutline={false}>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Success</button>
      <DropdownList palette="success" isOutline={false}>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Danger</button>
      <DropdownList palette="danger" isOutline={false}>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Warning</button>
      <DropdownList palette="warning" isOutline={false}>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Info</button>
      <DropdownList palette="info" isOutline={false}>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Dynamic</button>
      <DropdownList palette="dynamic" isOutline={false}>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>!Dynamic</button>
      <DropdownList palette="!dynamic" isOutline={false}>{children}</DropdownList>
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

export const SoftOutline = () => (
  <>
    <Dropdown>
      <button>Primary</button>
      <DropdownList isOutline={false} isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Secondary</button>
      <DropdownList palette="secondary" isOutline={false} isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Success</button>
      <DropdownList palette="success" isOutline={false} isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Danger</button>
      <DropdownList palette="danger" isOutline={false} isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Warning</button>
      <DropdownList palette="warning" isOutline={false} isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Info</button>
      <DropdownList palette="info" isOutline={false} isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>Dynamic</button>
      <DropdownList palette="dynamic" isOutline={false} isSoft>{children}</DropdownList>
    </Dropdown>
    <Dropdown>
      <button>!Dynamic</button>
      <DropdownList palette="!dynamic" isOutline={false} isSoft>{children}</DropdownList>
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

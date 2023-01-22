import { BadgeIcon, BadgeList } from '@smart-react-components/ui'
import CloseIcon from '@smart-react-components/ui/Alert/AlertCloseIcon'
import Badge from '@smart-react-components/ui/Badge'
import React from 'react'

export const Palette = () => (
  <BadgeList>
    <Badge>Primary</Badge>
    <Badge palette="secondary">Secondary</Badge>
    <Badge palette="success">Success</Badge>
    <Badge palette="danger">Danger</Badge>
    <Badge palette="warning">Warning</Badge>
    <Badge palette="info">Info</Badge>
    <Badge palette="dynamic">Dynamic</Badge>
    <Badge palette="!dynamic">!Dynamic</Badge>
  </BadgeList>
)

export const Soft = () => (
  <BadgeList>
    <Badge isSoft>Primary</Badge>
    <Badge palette="secondary" isSoft>Secondary</Badge>
    <Badge palette="success" isSoft>Success</Badge>
    <Badge palette="danger" isSoft>Danger</Badge>
    <Badge palette="warning" isSoft>Warning</Badge>
    <Badge palette="info" isSoft>Info</Badge>
    <Badge palette="dynamic" isSoft>Dynamic</Badge>
    <Badge palette="!dynamic" isSoft>!Dynamic</Badge>
  </BadgeList>
)

export const Outline = () => (
  <BadgeList>
    <Badge isOutline>Primary</Badge>
    <Badge palette="secondary" isOutline>Secondary</Badge>
    <Badge palette="success" isOutline>Success</Badge>
    <Badge palette="danger" isOutline>Danger</Badge>
    <Badge palette="warning" isOutline>Warning</Badge>
    <Badge palette="info" isOutline>Info</Badge>
    <Badge palette="dynamic" isOutline>Dynamic</Badge>
    <Badge palette="!dynamic" isOutline>!Dynamic</Badge>
  </BadgeList>
)

export const OutlineSoft = () => (
  <BadgeList>
    <Badge isOutline isSoft>Primary</Badge>
    <Badge palette="secondary" isOutline isSoft>Secondary</Badge>
    <Badge palette="success" isOutline isSoft>Success</Badge>
    <Badge palette="danger" isOutline isSoft>Danger</Badge>
    <Badge palette="warning" isOutline isSoft>Warning</Badge>
    <Badge palette="info" isOutline isSoft>Info</Badge>
    <Badge palette="dynamic" isOutline isSoft>Dynamic</Badge>
    <Badge palette="!dynamic" isOutline isSoft>!Dynamic</Badge>
  </BadgeList>
)

export const Shape = () => (
  <BadgeList>
    <Badge>Rectangle</Badge>
    <Badge shape="rounded">Rounded</Badge>
  </BadgeList>
)

export const Size = () => (
  <>
    <Badge size="small">Small</Badge>
    <Badge>Medium</Badge>
    <Badge size="large">Large</Badge>
  </>
)

export const Icon = () => (
  <>
    <Badge onClick={() => {}}>
      <BadgeIcon><CloseIcon /></BadgeIcon>
      <span>Content</span>
    </Badge>
  </>
)

export const Circle = () => (
  <>
    <Badge isFixedSize shape="rounded">1</Badge>
  </>
)

import { PaginationLink, PaginationList, PaginationNextIcon, PaginationPrevIcon } from '@smart-react-components/ui'
import React from 'react'

export const Palette = () => (
  <>
    <PaginationList>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="secondary">
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="success">
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="danger">
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="warning">
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="info">
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="dynamic">
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="!dynamic">
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
  </>
)

export const Soft = () => (
  <>
    <PaginationList isSoft>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="secondary" isSoft>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="success" isSoft>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="danger" isSoft>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="warning" isSoft>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="info" isSoft>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="dynamic" isSoft>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="!dynamic" isSoft>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
  </>
)

export const Outline = () => (
  <>
    <PaginationList isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="secondary" isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="success" isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="danger" isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="warning" isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="info" isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="dynamic" isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="!dynamic" isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
  </>
)

export const OutlineSoft = () => (
  <>
    <PaginationList isSoft isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="secondary" isSoft isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="success" isSoft isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="danger" isSoft isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="warning" isSoft isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="info" isSoft isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="dynamic" isSoft isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
    <PaginationList palette="!dynamic" isSoft isOutline>
      <PaginationLink to="/1">1</PaginationLink>
      <PaginationLink to="/2">2</PaginationLink>
      <PaginationLink to="/3">3</PaginationLink>
    </PaginationList>
  </>
)

export const Shape = () => (
  <PaginationList shape="rounded" isFixedSize>
    <PaginationLink to="/1"><PaginationPrevIcon /></PaginationLink>
    <PaginationLink to="/1">1</PaginationLink>
    <PaginationLink to="/2">2</PaginationLink>
    <PaginationLink to="/3">3</PaginationLink>
    <PaginationLink to="/3"><PaginationNextIcon /></PaginationLink>
  </PaginationList>
)

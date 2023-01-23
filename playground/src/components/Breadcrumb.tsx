import BreadcrumbList from '@smart-react-components/ui/Breadcrumb/BreadcrumbList'
import { BreadcrumbLink } from '@smart-react-components/ui'
import React from 'react'

export const Palette = () => (
  <>
    <BreadcrumbList marginBottom="$length.3">
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="secondary">
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="success">
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="danger">
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="warning">
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="info">
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="dynamic">
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="!dynamic">
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
  </>
)

export const Outline = () => (
  <>
    <BreadcrumbList marginBottom="$length.3" isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="secondary" isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="success" isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="danger" isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="warning" isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="info" isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="dynamic" isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="!dynamic" isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
  </>
)

export const Soft = () => (
  <>
    <BreadcrumbList marginBottom="$length.3" isSoft>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="secondary" isSoft>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="success" isSoft>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="danger" isSoft>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="warning" isSoft>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="info" isSoft>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="dynamic" isSoft>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="!dynamic" isSoft>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
  </>
)

export const SoftOutline = () => (
  <>
    <BreadcrumbList marginBottom="$length.3" isSoft isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="secondary" isSoft isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="success" isSoft isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="danger" isSoft isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="warning" isSoft isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="info" isSoft isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="dynamic" isSoft isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" palette="!dynamic" isSoft isOutline>
      <BreadcrumbLink isDisabled to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
  </>
)

export const Shape = () => (
  <>
    <BreadcrumbList marginBottom="$length.3">
      <BreadcrumbLink to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
    <BreadcrumbList marginBottom="$length.3" shape="rounded">
      <BreadcrumbLink to="/">Home</BreadcrumbLink>
      <BreadcrumbLink to="/section">Section</BreadcrumbLink>
      <BreadcrumbLink to="/section/item">Item</BreadcrumbLink>
    </BreadcrumbList>
  </>
)
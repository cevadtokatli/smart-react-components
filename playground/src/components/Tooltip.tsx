import React from 'react'
import { Div } from "@smart-react-components/core"
import { Tooltip } from "@smart-react-components/ui"
import { Position, TriggerInteraction } from '@smart-react-components/ui/Tooltip'

export const Palette = () => (
  <Div>
    <Tooltip triggerInteraction={TriggerInteraction.CLICK}>
      <button>!Dynamic</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="dynamic">
      <button>Dynamic</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="primary" position={Position.LEFT}>
      <button>Primay</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="secondary">
      <button>Secondary</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="success">
      <button>Success</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="danger">
      <button>Danger</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="warning">
      <button>Warning</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="info">
      <button>Info</button>
      <span>Tooltip</span>
    </Tooltip>
  </Div>
)

export const Soft = () => (
  <Div>
    <Tooltip isSoft triggerInteraction={TriggerInteraction.CLICK}>
      <button>!Dynamic</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="dynamic">
      <button>Dynamic</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="primary" position={Position.LEFT}>
      <button>Primay</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="secondary">
      <button>Secondary</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="success">
      <button>Success</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="danger">
      <button>Danger</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="warning">
      <button>Warning</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="info">
      <button>Info</button>
      <span>Tooltip</span>
    </Tooltip>
  </Div>
)

export const Size = () => (
  <Div>
    <Tooltip size="small">
      <button>Small</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip>
      <button>Medium</button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip size="large">
      <button>Large</button>
      <span>Tooltip</span>
    </Tooltip>
  </Div>
)

import { Div } from '@smart-react-components/core'
import Popover from '@smart-react-components/ui/Popover'
import { Position } from '@smart-react-components/ui/types'
import React from 'react'

export const Palette = () => (
  <Div marginTop={125}>
    <Popover position={Position.TOP} space={0}>
      <button style={{ marginLeft: 20 }}>Dynamic</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="!dynamic" position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>!Dynamic</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="primary" position={Position.RIGHT} space={0}>
      <button style={{ marginLeft: 20 }}>Primary</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="secondary" position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>Secondary</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="success" position={Position.LEFT} space={0}>
      <button style={{ marginLeft: 20 }}>Success</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="danger" position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>Danger</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="warning" position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>Warning</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="info" position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>Info</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
  </Div>
)

export const Soft = () => (
  <Div marginTop={125}>
    <Popover isSoft position={Position.TOP} space={0}>
      <button style={{ marginLeft: 20 }}>Dynamic</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="!dynamic" isSoft position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>!Dynamic</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="primary" isSoft position={Position.RIGHT} space={0}>
      <button style={{ marginLeft: 20 }}>Primary</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="secondary" isSoft position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>Secondary</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="success" isSoft position={Position.LEFT} space={0}>
      <button style={{ marginLeft: 20 }}>Success</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="danger" isSoft position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>Danger</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="warning" isSoft position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>Warning</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover palette="info" isSoft position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>Info</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
  </Div>
)

export const Size = () => (
  <Div marginTop={125}>
    <Popover size="small" position={Position.TOP} space={0}>
      <button style={{ marginLeft: 20 }}>Dynamic</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover position={Position.RIGHT} space={5}>
      <button style={{ marginLeft: 20 }}>!Dynamic</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
    <Popover size="large" position={Position.RIGHT} space={0}>
      <button style={{ marginLeft: 20 }}>Primary</button>
      <span>Header</span>
      <div>Popover</div>
    </Popover>
  </Div>
)

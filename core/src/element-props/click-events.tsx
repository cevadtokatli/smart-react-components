import mouseClickEvents, { MouseClickEvents } from './mouse-click-events'
import touchClickEvents, { TouchClickEvents } from './touch-click-events'

export interface ClickEvents extends MouseClickEvents, TouchClickEvents {}

const clickEvents = [...mouseClickEvents, ...touchClickEvents]

export default clickEvents

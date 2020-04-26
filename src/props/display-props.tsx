import {EPV} from "./"

export interface DisplayProps {
    display?: EPV<string>
    displaySm?: EPV<string>
    displayMd?: EPV<string>
    displayLg?: EPV<string>
    displayXl?: EPV<string>    
    visibility?: EPV<string>
    visibilitySm?: EPV<string>
    visibilityMd?: EPV<string>
    visibilityLg?: EPV<string>
    visibilityXl?: EPV<string>
    pointerEvents?: EPV<string>
    pointerEventsSm?: EPV<string>
    pointerEventsMd?: EPV<string>
    pointerEventsLg?: EPV<string>
    pointerEventsXl?: EPV<string>
    cursor?: EPV<string>
    cursorSm?: EPV<string>
    cursorMd?: EPV<string>
    cursorLg?: EPV<string>
    cursorXl?: EPV<string>
}

export default {
    display: "display",
    visibility: "visibility",
    pointerEvents: "pointer-events",
    cursor: "cursor"
}
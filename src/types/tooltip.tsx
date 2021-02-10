export interface TooltipAttributes {
    arrow?: string
    transform?: string,
    arrowTransform?: string,
    isArrowInHeader?: boolean
}

export interface TooltipPositionResult {
    position: string
    status: boolean
    overflow: number
    transform?: string,
    arrowTransform?: string,
    isArrowInHeader: boolean
}
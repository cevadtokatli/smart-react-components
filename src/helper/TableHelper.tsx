import {Theme} from "../theme"

export default class TableHelper {
    /**
     * Compares two breakpoints and returns the first defined one respectively.
     * 
     * @param a 
     * @param b 
     */
    private static compareBreakpoints(a:number, b:number): number {
        return typeof a !== "undefined" ? a : b
    }

    /**
     * Gets the breakpoint value according to the given breakpoints and the window size.
     * Breakpoints are given as an array from small to large - [xs, sm, md, lg, xl]
     * 
     * @param x$ 
     * @param y$
     * @param theme
     */
    static getBreakpointValue(x$:number[], y$:number[], theme:Theme): {x:number,y:number} {
        let x, y
        let width = window.innerWidth
        if(width > theme.grid.breakpoint.xlarge) {
            x = this.compareBreakpoints(x, x$[4])
            y = this.compareBreakpoints(y, y$[4])
        }
        if(width > theme.grid.breakpoint.large) {
            x = this.compareBreakpoints(x, x$[3])
            y = this.compareBreakpoints(y, y$[3])
        }
        if(width > theme.grid.breakpoint.medium) {
            x = this.compareBreakpoints(x, x$[2])
            y = this.compareBreakpoints(y, y$[2])
        }
        if(width > theme.grid.breakpoint.small) {
            x = this.compareBreakpoints(x, x$[1])
            y = this.compareBreakpoints(y, y$[1])
        }
        x = this.compareBreakpoints(x, x$[0])
        y = this.compareBreakpoints(y, y$[0])

        return {x,y}
    }
}
import {EPV, Value} from "./"
import CSSHelper from "../helper/CSSHelper"

export interface GridProps {
    grid?: EPV<string>
    gridSm?: EPV<string>
    gridMd?: EPV<string>
    gridLg?: EPV<string>
    gridXl?: EPV<string>
    gridArea?: EPV<Value>
    gridAreaSm?: EPV<Value>
    gridAreaMd?: EPV<Value>
    gridAreaLg?: EPV<Value>
    gridAreaXl?: EPV<Value>
    gridAutoColumns?: EPV<Value>
    gridAutoColumnsSm?: EPV<Value>
    gridAutoColumnsMd?: EPV<Value>
    gridAutoColumnsLg?: EPV<Value>
    gridAutoColumnsXl?: EPV<Value>
    gridAutoFlow?: EPV<string>
    gridAutoFlowSm?: EPV<string>
    gridAutoFlowMd?: EPV<string>
    gridAutoFlowLg?: EPV<string>
    gridAutoFlowXl?: EPV<string>
    gridAutoRows?: EPV<Value>
    gridAutoRowsSm?: EPV<Value>
    gridAutoRowsMd?: EPV<Value>
    gridAutoRowsLg?: EPV<Value>
    gridAutoRowsXl?: EPV<Value>
    gridColumn?: EPV<Value>
    gridColumnSm?: EPV<Value>
    gridColumnMd?: EPV<Value>
    gridColumnLg?: EPV<Value>
    gridColumnXl?: EPV<Value>
    gridColumnEnd?: EPV<Value>
    gridColumnEndSm?: EPV<Value>
    gridColumnEndMd?: EPV<Value>
    gridColumnEndLg?: EPV<Value>
    gridColumnEndXl?: EPV<Value>
    gridColumnGap?: EPV<Value>
    gridColumnGapSm?: EPV<Value>
    gridColumnGapMd?: EPV<Value>
    gridColumnGapLg?: EPV<Value>
    gridColumnGapXl?: EPV<Value>
    gridColumnStart?: EPV<Value>
    gridColumnStartSm?: EPV<Value>
    gridColumnStartMd?: EPV<Value>
    gridColumnStartLg?: EPV<Value>
    gridColumnStartXl?: EPV<Value>
    gridGap?: EPV<Value>
    gridGapSm?: EPV<Value>
    gridGapMd?: EPV<Value>
    gridGapLg?: EPV<Value>
    gridGapXl?: EPV<Value>
    gridRow?: EPV<Value>
    gridRowSm?: EPV<Value>
    gridRowMd?: EPV<Value>
    gridRowLg?: EPV<Value>
    gridRowXl?: EPV<Value>
    gridRowEnd?: EPV<Value>
    gridRowEndSm?: EPV<Value>
    gridRowEndMd?: EPV<Value>
    gridRowEndLg?: EPV<Value>
    gridRowEndXl?: EPV<Value>
    gridRowGap?: EPV<Value>
    gridRowGapSm?: EPV<Value>
    gridRowGapMd?: EPV<Value>
    gridRowGapLg?: EPV<Value>
    gridRowGapXl?: EPV<Value>
    gridRowStart?: EPV<Value>
    gridRowStartSm?: EPV<Value>
    gridRowStartMd?: EPV<Value>
    gridRowStartLg?: EPV<Value>
    gridRowStartXl?: EPV<Value>
    gridTemplate?: EPV<string>
    gridTemplateSm?: EPV<string>
    gridTemplateMd?: EPV<string>
    gridTemplateLg?: EPV<string>
    gridTemplateXl?: EPV<string>
    gridTemplateAreas?: EPV<string>
    gridTemplateAreasSm?: EPV<string>
    gridTemplateAreasMd?: EPV<string>
    gridTemplateAreasLg?: EPV<string>
    gridTemplateAreasXl?: EPV<string>
    gridTemplateColumns?: EPV<Value>
    gridTemplateColumnsSm?: EPV<Value>
    gridTemplateColumnsMd?: EPV<Value>
    gridTemplateColumnsLg?: EPV<Value>
    gridTemplateColumnsXl?: EPV<Value>
    gridTemplateRows?: EPV<Value>
    gridTemplateRowsSm?: EPV<Value>
    gridTemplateRowsMd?: EPV<Value>
    gridTemplateRowsLg?: EPV<Value>
    gridTemplateRowsXl?: EPV<Value>
}

export default {
    grid: "grid",
    gridArea: "grid-area",
    gridAutoColumns: v => `grid-auto-columns:${CSSHelper.setValue(v)};`,
    gridAutoFlow: "grid-auto-flow",
    gridAutoRows: "grid-auto-rows",
    gridColumn: "grid-column",
    gridColumnEnd: "grid-column-end",
    gridColumnGap: v => `grid-column-gap:${CSSHelper.setValue(v)};`,
    gridColumnStart: "grid-column-start",
    gridGap: v => `grid-gap:${CSSHelper.setValue(v)};`,
    gridRow: "grid-row",
    gridRowEnd: "grid-row-end",
    gridRowGap: v => `grid-row-gap:${CSSHelper.setValue(v)};`,
    gridRowStart: "grid-row-start",
    gridTemplate: "grid-template",
    gridTemplateAreas: "grid-template-areas",
    gridTemplateColumns: v => `grid-template-columns:${CSSHelper.setValue(v)};`,
    gridTemplateRows: v => `grid-template-rows:${CSSHelper.setValue(v)};`
}
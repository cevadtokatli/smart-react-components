type PropertyValue<T> = 'inherit' | 'initial' | 'revert' | 'unset' | T | (string & {})
export type Property<T = void> = PropertyValue<T> | [PropertyValue<T>, boolean]

namespace Props {
  type BasicColors = 'aqua' | 'black' | 'blue' | 'fuchsia' | 'gray' | 'green' | 'grey' | 'lime' | 'maroon' | 'navy' | 'olive' | 'purple' | 'red' | 'silver' | 'teal' | 'white' | 'yellow'
  type ExtendedColors = 'aliceblue' | 'antiquewhite' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'blanchedalmond' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'greenyellow' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'limegreen' | 'linen' | 'magenta' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'oldlace' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'rebeccapurple' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'whitesmoke' | 'yellowgreen'
  type Gradient = 'linear-gradient()' | 'radial-gradient()' | 'repeating-linear-gradient()' | 'repeating-radial-gradient()'
  type SystemColors = 'ActiveBorder' | 'ActiveCaption' | 'AppWorkspace' | 'Background' | 'ButtonFace' | 'ButtonHighlight' | 'ButtonShadow' | 'ButtonText' | 'CaptionText' | 'GrayText' | 'Highlight' | 'HighlightText' | 'InactiveBorder' | 'InactiveCaption' | 'InactiveCaptionText' | 'InfoBackground' | 'InfoText' | 'Menu' | 'MenuText' | 'Scrollbar' | 'ThreeDDarkShadow' | 'ThreeDFace' | 'ThreeDHighlight' | 'ThreeDLightShadow' | 'ThreeDShadow' | 'Window' | 'WindowFrame' | 'WindowText'

  export type BaselinePosition = 'baseline'
  export type BasicShape = 'circle()' | 'ellipse()' | 'inset()' | 'none' | 'polygon()'
  export type BgSize = number | 'auto' | 'contain' | 'cover'
  export type BlendMode = 'color' | 'color-burn' | 'color-dodge' | 'darken' | 'difference' | 'exclusion' | 'hard-light' | 'hue' | 'lighten' | 'luminosity' | 'multiply' | 'normal' | 'overlay' | 'saturation' | 'screen' | 'soft-light'
  export type Box = 'border-box' | 'content-box' | 'padding-box'
  export type Color = BasicColors | ExtendedColors | SystemColors | 'currentColor' | 'currentcolor' | 'transparent'
  export type ContentDistribution = 'space-around' | 'space-between' | 'space-evenly' | 'stretch'
  export type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'
  export type GeometryBox = ShapeBox | 'fill-box' | 'stroke-box' | 'view-box'
  export type Image = Url | Gradient
  export type LineStyle = 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'inset' | 'none' | 'outset' | 'ridge' | 'solid'
  export type LineWidth = number | 'medium' | 'thick' | 'thin'
  export type Position = number | 'bottom' | 'center' | 'left' | 'right' | 'top'
  export type RepeatStyle = 'no-round' | 'repeat' | 'repeat-x' | 'repeat-y' | 'round' | 'space'
  export type SelfPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'self-end' | 'self-start' | 'start'
  export type ShapeBox = Box | 'margin-box'
  export type Url = 'url()'
  export type TimingFunction = 'cubic-bezier()' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'linear' | 'step-end' | 'step-start' | 'steps()'
  export type TrackSize = number | 'auto' | 'max-content' | 'min-content' | 'minmax()' | 'none' | 'repat()'
}

type AccentColor = Props.Color | 'auto'
type AlignContent = Props.BaselinePosition | Props.ContentDistribution | Props.ContentPosition | 'normal'
type AlignItems = Props.BaselinePosition | Props.SelfPosition | 'normal' | 'stretch'
export type AlignSelf = Props.BaselinePosition | Props.SelfPosition | 'auto' | 'normal' | 'stretch'
type AlignmentBaseline = 'alphabetic' | 'baseline' | 'central' | 'ideographic' | 'mathematical' | 'middle' | 'text-bottom' | 'text-top'
type Animation = number | 'auto' | 'none'
type AnimationDelay = number
type AnimationDirection = 'alternate' | 'alternate-reverse' | 'normal' | 'reverse'
type AnimationDuration = number
type AnimationFillMode = 'backwards' | 'both' | 'forwards' | 'none'
type AnimationIterationCount = number | 'infinite'
type AnimationName = 'auto' | 'none'
type AnimationPlayState = 'paused' | 'running'
type AnimationTimingFunction = Props.TimingFunction
type Appearance = 'auto' | 'button' | 'checkbox' | 'desktop' | 'dialogue' | 'document' | 'field' | 'hyperlink' | 'icon' | 'inherit' | 'initial' | 'menu' | 'menu-item' | 'menubar' | 'none' | 'outline-tree' | 'password' | 'push-button' | 'radio-button' | 'range' | 'signature' | 'tab' | 'tooltip' | 'window' | 'workspace'
type AspectRatio = number | 'auto'
type BackfaceVisibility = 'hidden' | 'visible'
type Background = BackgroundAttachment | BackgroundBlendMode | BackgroundClip | BackgroundColor | BackgroundImage | BackgroundOrigin | BackgroundPosition | BackgroundRepeat
type BackgroundAttachment = 'fixed' | 'local' | 'scroll'
type BackgroundBlendMode = Props.BlendMode
type BackgroundClip = Props.Box
type BackgroundColor = Props.Color
type BackgroundImage = Props.Image | 'none'
type BackgroundOrigin = Props.Box
type BackgroundPosition = Props.Position
type BackgroundPositionX = number | 'center' | 'left' | 'right'
type BackgroundPositionY = number | 'bottom' | 'center' | 'top'
type BackgroundRepeat = Props.RepeatStyle
type BackgroundRepeatAxis = 'no-repeat' | 'repeat'
type BackgroundSize = Props.BgSize
type BaselineShift = number | 'baseline' | 'sub' | 'super'
type Border = BorderColor | BorderStyle | BorderWidth
type BorderCollapse = 'collapse' | 'separate'
type BorderColor = Props.Color
type BorderImage = BorderImageOutset | BorderImageRepeat | BorderImageSlice | BorderImageSource | BorderImageWidth
type BorderImageOutset = number
type BorderImageRepeat = 'repeat' | 'round' | 'space' | 'stretch'
type BorderImageSlice = number | 'fill'
type BorderImageSource = Props.Image | 'none'
type BorderImageWidth = number
type BorderRadius = number
type BorderSpacing = number
type BorderStyle = Props.LineStyle
type BorderWidth = Props.LineWidth
type BoxDecorationBreak = 'clone' | 'slice'
type BoxShadow = 'none'
type BoxSizing = 'border-box' | 'content-box'
type Break = 'all' | 'always' | 'auto' | 'avoid' | 'avoid-column' | 'avoid-page' | 'avoid-region' | 'column' | 'left' | 'page' | 'recto' | 'region' | 'right' | 'verso'
type BreakInside = 'auto' | 'avoid' | 'avoid-column' | 'avoid-page' | 'avoid-region'
type CaptionSide = 'bottom' | 'top'
type Caret = CaretColor | CaretShape
type CaretColor = Props.Color | 'auto'
type CaretShape = 'auto' | 'bar' | 'block' | 'underscore'
type Clear = 'both' | 'left' | 'right' | 'none'
type Clip = 'auto' | 'rect()'
type ClipPath = Props.BasicShape | Props.GeometryBox | 'none'
type ClipRule = 'evenodd' | 'nonzero'
type Color = Props.Color
type ColorAdjust = 'economy' | 'exact'
type ColorInterpolation = 'auto' | 'linearrgb' | 'linearRGB' | 'srgb' | 'sRGB'
type ColorScheme = 'dark' | 'light' | 'normal'
type ColumnCount = number | 'auto'
type ColumnFill = 'auto' | 'balance'
type ColumnRule = ColumnRuleColor | ColumnRuleStyle | ColumnRuleWidth
type ColumnRuleColor = Props.Color
type ColumnRuleStyle = Props.LineStyle
type ColumnRuleWidth = Props.LineWidth
type ColumnSpan = 'all' | 'none'
type ColumnWidth = number | 'auto'
type Columns = ColumnCount | ColumnWidth
type Contain = 'block-size' | 'content' | 'inline-size' | 'layout' | 'none' | 'paint' | 'size' | 'strict' | 'style'
type ContainIntrinsicSize = number | 'auto' | 'none'
type ContentVisibility = 'auto' | 'hidden' | 'visible'
type Counter = number | 'auto' | 'none'
type Cursor = 'alias' | 'all-scroll' | 'auto' | 'cell' | 'col-resize' | 'context-menu' | 'copy' | 'crosshair' | 'default' | 'e-resize' | 'ew-resize' | 'grab' | 'grabbing' | 'help' | 'move' | 'n-resize' | 'ne-resize' | 'nesw-resize' | 'no-drop' | 'none' | 'not-allowed' | 'ns-resize' | 'nw-resize' | 'nwse-resize' | 'pointer' | 'progress' | 'row-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'text' | 'vertical-text' | 'w-resize' | 'wait' | 'zoom-in' | 'zoom-out'
type Dimension = number | 'auto'
type Direction = 'ltr' | 'rtl'
type Display = 'block' | 'contents' | 'flex' | 'flow-root' | 'grid' | 'inline' | 'inline-block' | 'inline-flex' | 'inline-grid' | 'inline-table' | 'list-item' | 'none' | 'run-in' | 'table' | 'table-caption' | 'table-cell' | 'table-column' | 'table-column-group' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group'
type DominantBaseline = 'alphabetic' | 'auto' | 'central' | 'hanging' | 'ideographic' | 'mathematical' | 'middle' | 'text-bottom' | 'text-top'
type Elevation = 'above' | 'below' | 'higher' | 'level' | 'lower'
type EmptyCells = 'hide' | 'show'
type Fill = Props.Url | Color
type FillOpacity = number
type FillRule = 'evenodd' | 'nonzero'
type Filter = Props.Url | 'blur()' | 'brightness()' | 'contrast()' | 'drop-shadow()' | 'grayscale()' | 'hue-rotate()' | 'invert()' | 'none' | 'opacity()' | 'saturate()' | 'sepia()'
export type Flex = FlexBasis | FlexGrow | FlexShrink | 'none'
export type FlexBasis = number | 'auto'
type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse'
type FlexFlow = FlexDirection | FlexWrap
export type FlexGrow = number
export type FlexShrink = number
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'
type Float = 'inline-end' | 'inline-start' | 'left' | 'right' | 'none'
type FloodColor = Color
type FloodOpacity = number
type Font = number | 'caption' | 'icon' | 'menu' | 'message-box' | 'small-caption' | 'status-bar'
type FontFamily = 'auto' | 'cursive' | 'emoji' | 'fangsong' | 'fantasy' | 'math' | 'monospace' | 'none' | 'sans-serif' | 'serif' | 'system-ui' | 'ui-monospace' | 'ui-rounded' | 'ui-sans-serif' | 'ui-serif'
type FontFeatureSettings = 'normal'
type FontKerning = 'auto' | 'normal' | 'none'
type FontLanguageOverride = 'normal'
type FontOpticalSizing = 'auto' | 'none'
type FontSize = number | 'large' | 'larger' | 'medium' | 'small' | 'smaller' | 'x-large' | 'x-small' | 'xx-large' | 'xx-small'
type FontSizeAdjust = number | 'none'
type FontStretch = number | 'condensed' | 'expanded' | 'extra-condensed' | 'extra-expanded' | 'normal' | 'semi-condensed' | 'semi-expanded' | 'ultra-condensed' | 'ultra-expanded'
type FontStyle = 'italic' | 'normal' | 'oblique'
type FontSynthesis = 'none' | 'small-caps' | 'style' | 'weight'
type FontVariant = FontVariantCaps | FontVariantEastAsian | FontVariantLigatures | FontVariantNumeric
type FontVariantCaps = 'all-petite-caps' | 'all-small-caps' | 'normal' | 'petite-caps' | 'small-caps' | 'titling-caps' | 'unicase'
type FontVariantEastAsian = 'full-width' | 'jis04' | 'jis78' | 'jis83' | 'jis90' | 'normal' | 'proportional-width' | 'ruby' | 'simplified' | 'traditional'
type FontVariantLigatures = 'common-ligatures' | 'contextual' | 'discretionary-ligatures' | 'historical-ligatures' | 'no-common-ligatures' | 'no-contextual' | 'no-discretionary-ligatures' | 'no-historical-ligatures' | 'none' | 'normal'
type FontVariantNumeric = 'diagonal-fractions' | 'lining-nums' | 'normal' | 'oldstyle-nums' | 'ordinal' | 'proportional-nums' | 'slashed-zero' | 'stacked-fractions' | 'tabular-nums'
type FontVariantPosition = 'normal' | 'sub' | 'super'
type FontVariationSettings = 'normal'
type FontWeight = number | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'bold' | 'bolder' | 'lighter' | 'normal'
type ForcedColorAdjust = 'auto' | 'none'
type Gap = number | 'normal'
type GlyphOrientationVertical = number | 'auto'
type Grid = GridAutoColumns | GridAutoRows | GridTemplate | GridTemplateColumns | GridTemplateRows
type GridArea = number | 'auto' | 'none'
type GridAutoColumns = Props.TrackSize
type GridAutoFlow = 'column' | 'dense' | 'row'
type GridAutoRows = Props.TrackSize
type GridLine = number | 'auto' | 'normal' | 'none'
type GridTemplate = 'none'
type GridTemplateColumns = Props.TrackSize
type GridTemplateRows = Props.TrackSize
type HangingPunctuation = 'allow-end' | 'first' | 'force-end' | 'last' | 'none'
type Hyphens = 'auto' | 'manual' | 'none'
type ImageOrientation = 'none'
type ImageRendering = 'auto' | 'optimizequality' | 'optimizespeed' | 'pixelated'
type ImageResolution = 'from-image'
type InitialLetter = number | 'drop' | 'normal' | 'raise'
type InlineSize = Size
type Inset = Dimension
type Isolation = 'auto' | 'isolate'
type JustifyContent = Props.ContentDistribution | Props.ContentPosition | 'left' | 'right' | 'normal'
type JustifyItems = Props.BaselinePosition | Props.SelfPosition | 'left' | 'legacy' | 'right' | 'normal' | 'stretch'
type JustifySelf = Props.BaselinePosition | Props.SelfPosition | 'auto' | 'left' | 'right' | 'normal' | 'stretch'
type LetterSpacing = number | 'normal'
type LightingColor = Color
type LineBreak = 'anywhere' | 'auto' | 'loose' | 'normal' | 'strict'
type LineClamp = number | 'auto' | 'none'
type LineHeight = number | 'normal'
type LineHeightStep = number | 'none'
type ListStyle = ListStyleImage | ListStylePosition | ListStyleType
type ListStyleImage = Props.Url | 'none'
type ListStylePosition = 'inside' | 'outside'
type ListStyleType = 'armenian' | 'circle' | 'decimal' | 'decimal-leading-zero' | 'disc' | 'georgian' | 'lower-alpha' | 'lower-greek' | 'lower-latin' | 'lower-roman' | 'none' | 'square' | 'upper-alpha' | 'upper-latin' | 'upper-roman'
export type Margin = number | 'auto'
type Marker = Props.Url | 'none'
type Mask = MaskClip | MaskComposite | MaskReference | MaskMode | MaskOrigin | MaskPosition | MaskRepeat | MaskType
type MaskBorder = MaskBorderMode | MaskBorderOutset | MaskBorderRepeat | MaskBorderSlice | MaskBorderSource | MaskBorderWidth
type MaskBorderMode = 'alpha' | 'luminance'
type MaskBorderOutset = number
type MaskBorderRepeat = 'repeat' | 'round' | 'space' | 'stretch'
type MaskBorderSlice = number
type MaskBorderSource = 'none'
type MaskBorderWidth = Dimension
type MaskClip = Props.GeometryBox | 'no-clip'
type MaskComposite = 'add' | 'exclude' | 'intersect' | 'subtract'
type MaskReference = Props.Image
type MaskMode = 'alpha' | 'luminance' | 'match-source'
type MaskOrigin = Props.GeometryBox
type MaskPosition = Props.Position
type MaskRepeat = Props.RepeatStyle
type MaskType = 'alpha' | 'luminance'
type MaxLines = number | 'none'
type MixBlendMode = Props.BlendMode
type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
type ObjectPosition = Props.Position
type Offset = OffsetAnchor | OffsetDistance | OffsetPath | 'none'
type OffsetAnchor = Props.Position | 'auto'
type OffsetDistance = number
type OffsetPath = Props.BasicShape | Props.Url | 'path()' | 'ray()'
type OffsetPosition = Props.Position | 'auto'
type OffsetRotate = 'auto' | 'reverse'
type Opacity = number
export type Order = number
type Orphans = number
type Outline = OutlineColor | OutlineStyle | OutlineWidth
type OutlineColor = Props.Color | 'invert'
type OutlineOffset = number
type OutlineStyle = Props.LineStyle | 'auto'
type OutlineWidth = Props.LineWidth
type Overflow = 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible'
type OverflowAnchor = 'auto' | 'none'
type OverflowClipMargin = number
type OverflowWrap = 'anywhere' | 'break-word' | 'none'
type OverscrollBehavior = 'auto' | 'contain' | 'none'
type Padding = number
type PageBreak = 'always' | 'auto' | 'avoid' | 'left' | 'right'
type PageBreakInside = 'auto' | 'avoid'
type Perspective = number | 'none'
type PerspectiveOrigin = Props.Position
type PlaceContent = AlignContent | JustifyContent
type PlaceItems = AlignItems | JustifyItems
type PlaceSelf = AlignSelf | JustifySelf
type PointerEvents = 'all' | 'auto' | 'bounding-box' | 'fill' | 'none' | 'painted' | 'stroke' | 'visible' | 'visiblefill' | 'visiblepainted' | 'visiblestroke'
type Position = 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
type Quotes = 'auto' | 'none'
export type Resize = 'block' | 'both' | 'horizontal' | 'inline' | 'none' | 'vertical'
type RubyAlign = 'center' | 'space-around' | 'space-between' | 'start'
type RubyMerge = 'auto' | 'merge' | 'separate'
type RubyPosition = 'alternate' | 'inter-character' | 'over' | 'under'
type ScrollBehavior = 'auto' | 'smooth'
type ScrollMargin = number
type ScrollPadding = Dimension
type ScrollSnapAlign = 'center' | 'end' | 'none' | 'start'
type ScrollSnapStop = 'always' | 'normal'
type ScrollSnapType = 'block' | 'both' | 'inline' | 'mandatory' | 'none' | 'proximity' | 'x' | 'y'
type ScrollbarColor = Color | 'auto'
type ScrollbarGutter = 'always' | 'auto' | 'both' | 'force' | 'stable'
type ScrollbarWidth = 'auto' | 'none' | 'thin'
type ShapeImageThreshold = number
type ShapeMargin = number
type ShapeOutside = Props.BasicShape | Props.ShapeBox | Props.Image | 'none'
export type Size = number | 'auto' | 'fit-content' | 'max-content' | 'min-content'
type Speak = 'digits' | 'literal-punctuation' | 'no-punctuation' | 'none' | 'normal' | 'spell-out'
type Stroke = Props.Url | Color
type StrokeDasharray = number | 'none'
type StrokeDashoffset = number
type StrokeLinecap = 'butt' | 'round' | 'square'
type StrokeLinejoin = 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'
type StrokeMiterlimit = number
type StrokeOpacity = number
type StrokeWidth = number
type TabSize = number
type TableLayout = 'auto' | 'fixed'
type TextAlign = 'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start'
type TextAlignLast = TextAlign | 'auto'
type TextCombineUpright = number | 'all' | 'none'
type TextDecoration = TextDecorationColor | TextDecorationLine | TextDecorationStyle | TextDecorationThickness
type TextDecorationColor = Color
type TextDecorationLine = 'blink' | 'grammar-error' | 'line-through' | 'none' | 'overline' | 'spelling-error' | 'underline'
type TextDecorationSkipInk = 'all' | 'auto' | 'none'
type TextDecorationStyle = 'dashed' | 'dotted' | 'double' | 'solid' | 'wavy'
type TextDecorationThickness = number | 'auto' | 'from-font'
type TextEmphasis = TextEmphasisColor | TextEmphasisStyle
type TextEmphasisColor = Color
type TextEmphasisPosition = 'left' | 'right' | 'over' | 'under'
type TextEmphasisStyle = 'circle' | 'dot' | 'double-circle' | 'filled' | 'none' | 'open' | 'sesame' | 'triangle'
type TextIndent = number
type TextJustify = 'auto' | 'inter-character' | 'inter-word' | 'none'
type TextOrientation = 'mixed' | 'sideways' | 'sideways-right' | 'upright'
type TextOverflow = 'clip' | 'ellipsis'
type TextShadow = Color | number | 'none'
type TextTransform = 'capitalize' | 'lowercase' | 'none' | 'uppercase'
type TextUnderlineOffset = number | 'auto'
type TextUnderlinePosition = 'auto' | 'from-font' | 'left' | 'right' | 'under'
type Transform = 'matrix()' | 'matrix3d()' | 'none' | 'perspective()' | 'rotate()' | 'rotate3d()' | 'rotateX()' | 'rotateY()' | 'rotateZ()' | 'scale()' | 'scale3d()' | 'scaleX()' | 'scaleY()' | 'skew()' | 'skewX()' | 'skewY()' | 'translate()' | 'translate3d()' | 'translateX()' | 'translateY()' | 'translateZ()'
type TransformBox = 'border-box' | 'content-box' | 'fill-box' | 'stroke-box' | 'view-box'
type TransformOrigin = Props.Position
type TransformStyle = 'flat' | 'preserve-3d'
type Transition = TransitionDelay | TransitionDuration | TransitionProperty | TransitionTimingFunction
type TransitionDelay = number
type TransitionDuration = number
type TransitionProperty = 'all' | 'none'
type TransitionTimingFunction = Props.TimingFunction
type UnicodeBidi = 'bidi-override' | 'embed' | 'normal' | 'plaintext' | 'isolate' | 'isolate-override'
type UserSelect = 'all' | 'auto' | 'contain' | 'element' | 'none' | 'text'
type VerticalAlign = BaselineShift | 'bottom' | 'middle' | 'text-bottom' | 'text-top' | 'top'
type Visibility = 'collapse' | 'hidden' | 'visible'
type WhiteSpace = 'break-space' | 'pre' | 'pre-line' | 'pre-wrap' | 'normal' | 'nowrap'
type Widows = number
type WillChange = 'auto'
type WordBreak = 'break-all' | 'break-word' | 'keep-all' | 'none'
type WordSpacing = number | 'normal'
type WordWrap = 'anywhere' | 'break-word' | 'normal'
type WritingMode = 'horizontal-tb' | 'sideways-lr' | 'sideways-rl' | 'vertical-lr' | 'vertical-rl'
type ZIndex = number | 'auto'

export default interface CSSProperties {
  accentColor?: Property<AccentColor>
  alignContent?: Property<AlignContent>
  alignItems?: Property<AlignItems>
  alignSelf?: Property<AlignSelf>
  alignmentBaseline?: Property<AlignmentBaseline>
  all?: Property
  animation?: Property<Animation>
  animationDelay?: Property<AnimationDelay>
  animationDirection?: Property<AnimationDirection>
  animationDuration?: Property<AnimationDuration>
  animationFillMode?: Property<AnimationFillMode>
  animationIterationCount?: Property<AnimationIterationCount>
  animationName?: Property<AnimationName>
  animationPlayState?: Property<AnimationPlayState>
  animationTimingFunction?: Property<AnimationTimingFunction>
  appearance?: Property<Appearance>
  aspectRadio?: Property<AspectRatio>
  backfaceVisibility?: Property<BackfaceVisibility>
  background?: Property<Background>
  backgroundAttachment?: Property<BackgroundAttachment>
  backgroundBlendMode?: Property<BackgroundBlendMode>
  backgroundClip?: Property<BackgroundClip>
  backgroundColor?: Property<BackgroundColor>
  backgroundImage?: Property<BackgroundImage>
  backgroundOrigin?: Property<BackgroundOrigin>
  backgroundPosition?: Property<BackgroundPosition>
  backgroundPositionX?: Property<BackgroundPositionX>
  backgroundPositionY?: Property<BackgroundPositionY>
  backgroundRepeat?: Property<BackgroundRepeat>
  backgroundRepeatX?: Property<BackgroundRepeatAxis>
  backgroundRepeatY?: Property<BackgroundRepeatAxis>
  backgroundSize?: Property<BackgroundSize>
  baselineShift?: Property<BaselineShift>
  blockSize?: Property<Size>
  border?: Property<Border>
  borderBlock?: Property<Border>
  borderBlockColor?: Property<BorderColor>
  borderBlockEnd?: Property<Border>
  borderBlockEndColor?: Property<BorderColor>
  borderBlockEndStyle?: Property<BorderStyle>
  borderBlockEndWidth?: Property<BorderWidth>
  borderBlockStart?: Property<Border>
  borderBlockStartColor?: Property<BorderColor>
  borderBlockStartStyle?: Property<BorderStyle>
  borderBlockStartWidth?: Property<BorderWidth>
  borderBlockStyle?: Property<BorderStyle>
  borderBlockWidth?: Property<BorderWidth>
  borderBottom?: Property<Border>
  borderBottomColor?: Property<BorderColor>
  borderBottomLeftRadius?: Property<BorderRadius>
  borderBottomRadius?: Property<BorderRadius>
  borderBottomRightRadius?: Property<BorderRadius>
  borderBottomStyle?: Property<BorderStyle>
  borderBottomWidth?: Property<BorderWidth>
  borderCollapse?: Property<BorderCollapse>
  borderColor?: Property<BorderColor>
  borderEndEndRadius?: Property<BorderRadius>
  borderEndStartRadius?: Property<BorderRadius>
  borderImage?: Property<BorderImage>
  borderImageOutset?: Property<BorderImageOutset>
  borderImageRepeat?: Property<BorderImageRepeat>
  borderImageSlice?: Property<BorderImageSlice>
  borderImageSource?: Property<BorderImageSource>
  borderImageWidth?: Property<BorderImageWidth>
  borderInline?: Property<Border>
  borderInlineColor?: Property<BorderColor>
  borderInlineEnd?: Property<Border>
  borderInlineEndColor?: Property<BorderColor>
  borderInlineEndStyle?: Property<BorderStyle>
  borderInlineEndWidth?: Property<BorderWidth>
  borderInlineStart?: Property<Border>
  borderInlineStartColor?: Property<BorderColor>
  borderInlineStartStyle?: Property<BorderStyle>
  borderInlineStartWidth?: Property<BorderWidth>
  borderInlineStyle?: Property<BorderStyle>
  borderInlineWidth?: Property<BorderWidth>
  borderLeft?: Property<Border>
  borderLeftBottomRadius?: Property<BorderRadius>
  borderLeftColor?: Property<BorderColor>
  borderLeftRadius?: Property<BorderRadius>
  borderLeftStyle?: Property<BorderStyle>
  borderLeftTopRadius?: Property<BorderRadius>
  borderLeftWidth?: Property<BorderWidth>
  borderRadius?: Property<BorderRadius>
  borderRight?: Property<Border>
  borderRightBottomRadius?: Property<BorderRadius>
  borderRightColor?: Property<BorderColor>
  borderRightRadius?: Property<BorderRadius>
  borderRightStyle?: Property<BorderStyle>
  borderRightTopRadius?: Property<BorderRadius>
  borderRightWidth?: Property<BorderWidth>
  borderSpacing?: Property<BorderSpacing>
  borderStartEndRadius?: Property<BorderRadius>
  borderStartStartRadius?: Property<BorderRadius>
  borderStyle?: Property<BorderStyle>
  borderTop?: Property<Border>
  borderTopColor?: Property<BorderColor>
  borderTopLeftRadius?: Property<BorderRadius>
  borderTopRadius?: Property<BorderRadius>
  borderTopRightRadius?: Property<BorderRadius>
  borderTopStyle?: Property<BorderStyle>
  borderTopWidth?: Property<BorderWidth>
  borderWidth?: Property<BorderWidth>
  bottom?: Property<Dimension>
  boxDecorationBreak?: Property<BoxDecorationBreak>
  boxShadow?: Property<BoxShadow>
  boxSizing?: Property<BoxSizing>
  breakAfter?: Property<Break>
  breakBefore?: Property<Break>
  breakInside?: Property<BreakInside>
  captionSide?: Property<CaptionSide>
  caret?: Property<Caret>
  caretColor?: Property<CaretColor>
  caretShape?: Property<CaretShape>
  clear?: Property<Clear>
  clip?: Property<Clip>
  clipPath?: Property<ClipPath>
  clipRule?: Property<ClipRule>
  color?: Property<Color>
  colorAdjust?: Property<ColorAdjust>
  colorInterpolation?: Property<ColorInterpolation>
  colorInterpolationFilters?: Property<ColorInterpolation>
  colorScheme?: Property<ColorScheme>
  columnCount?: Property<ColumnCount>
  columnFill?: Property<ColumnFill>
  columnGap?: Property<Gap>
  columnRule?: Property<ColumnRule>
  columnRuleColor?: Property<ColumnRuleColor>
  columnRuleStyle?: Property<ColumnRuleStyle>
  columnRuleWidth?: Property<ColumnRuleWidth>
  columnSpan?: Property<ColumnSpan>
  columnWidth?: Property<ColumnWidth>
  columns?: Property<Columns>
  contain?: Property<Contain>
  containIntrinsicSize?: Property<ContainIntrinsicSize>
  content?: Property
  contentVisibility?: Property<ContentVisibility>
  counterIncrement?: Property<Counter>
  counterReset?: Property<Counter>
  counterSet?: Property<Counter>
  cursor?: Property<Cursor>
  direction?: Property<Direction>
  display?: Property<Display>
  dominantBaseline?: Property<DominantBaseline>
  elevation?: Property<Elevation>
  emptyCells?: Property<EmptyCells>
  fill?: Property<Fill>
  fillOpacity?: Property<FillOpacity>
  fillRule?: Property<FillRule>
  filter?: Property<Filter>
  flex?: Property<Flex>
  flexBasis?: Property<FlexBasis>
  flexDirection?: Property<FlexDirection>
  flexFlow?: Property<FlexFlow>
  flexGrow?: Property<FlexGrow>
  flexShrink?: Property<FlexShrink>
  flexWrap?: Property<FlexWrap>
  float?: Property<Float>
  floodColor?: Property<FloodColor>
  floodOpacity?: Property<FloodOpacity>
  font?: Property<Font>
  fontFamily?: Property<FontFamily>
  fontFeatureSettings?: Property<FontFeatureSettings>
  fontKerning?: Property<FontKerning>
  fontLanguageOverride?: Property<FontLanguageOverride>
  fontOpticalSizing?: Property<FontOpticalSizing>
  fontSize?: Property<FontSize>
  fontSizeAdjust?: Property<FontSizeAdjust>
  fontStretch?: Property<FontStretch>
  fontStyle?: Property<FontStyle>
  fontSynthesis?: Property<FontSynthesis>
  fontVariant?: Property<FontVariant>
  fontVariantCaps?: Property<FontVariantCaps>
  fontVariantEastAsian?: Property<FontVariantEastAsian>
  fontVariantLigatures?: Property<FontVariantLigatures>
  fontVariantNumeric?: Property<FontVariantNumeric>
  fontVariantPosition?: Property<FontVariantPosition>
  fontVariantionSettings?: Property<FontVariationSettings>
  fontWeight?: Property<FontWeight>
  forcedColorAdjust?: Property<ForcedColorAdjust>
  gap?: Property<Gap>
  glyphOrientationVertical?: Property<GlyphOrientationVertical>
  grid?: Property<Grid>
  gridArea?: Property<GridArea>
  gridAutoColumns?: Property<GridAutoColumns>
  gridAutoFlow?: Property<GridAutoFlow>
  gridAutoRows?: Property<GridAutoRows>
  gridColumn?: Property<GridLine>
  gridColumnEnd?: Property<GridLine>
  gridColumnGap?: Property<Gap>
  gridColumnStart?: Property<GridLine>
  gridGap?: Property<Gap>
  gridRow?: Property<GridLine>
  gridRowEnd?: Property<GridLine>
  gridRowGap?: Property<Gap>
  gridRowStart?: Property<GridLine>
  gridTemplate?: Property<GridTemplate>
  gridTemplateAreas?: Property<GridTemplate>
  gridTemplateColumns?: Property<GridTemplateColumns>
  gridTemplateRows?: Property<GridTemplateRows>
  hangingPunctuation?: Property<HangingPunctuation>
  height?: Property<Size>
  hyphens?: Property<Hyphens>
  imageOrientation?: Property<ImageOrientation>
  imageRendering?: Property<ImageRendering>
  imageResolution?: Property<ImageResolution>
  initialLetter?: Property<InitialLetter>
  inlineSize?: Property<InlineSize>
  inset?: Property<Inset>
  insetBlock?: Property<Inset>
  insetBlockEnd?: Property<Inset>
  insetBlockStart?: Property<Inset>
  insetInline?: Property<Inset>
  insetInlineEnd?: Property<Inset>
  insetInlineStart?: Property<Inset>
  isolation?: Property<Isolation>
  justifyContent?: Property<JustifyContent>
  justifyItems?: Property<JustifyItems>
  justifySelf?: Property<JustifySelf>
  left?: Property<Dimension>
  letterSpacing?: Property<LetterSpacing>
  lightingColor?: Property<LightingColor>
  lineBreak?: Property<LineBreak>
  lineClamp?: Property<LineClamp>
  lineHeight?: Property<LineHeight>
  lineHeightStep?: Property<LineHeightStep>
  listStyle?: Property<ListStyle>
  listStyleImage?: Property
  listStylePosition?: Property
  listStyleType?: Property
  margin?: Property<Margin>
  marginBlock?: Property<Margin>
  marginBlockEnd?: Property<Margin>
  marginBlockStart?: Property<Margin>
  marginBottom?: Property<Margin>
  marginHorizontal?: Property<Margin>
  marginInline?: Property<Margin>
  marginInlineEnd?: Property<Margin>
  marginInlineStart?: Property<Margin>
  marginLeft?: Property<Margin>
  marginRight?: Property<Margin>
  marginTop?: Property<Margin>
  marginVertical?: Property<Margin>
  marker?: Property<Marker>
  markerEnd?: Property<Marker>
  markerMid?: Property<Marker>
  markerStart?: Property<Marker>
  mask?: Property<Mask>
  maskBorder?: Property<MaskBorder>
  maskBorderMode?: Property<MaskBorderMode>
  maskBorderOutset?: Property<MaskBorderOutset>
  maskBorderRepeat?: Property<MaskBorderRepeat>
  maskBorderSlice?: Property<MaskBorderSlice>
  maskBorderSource?: Property<MaskBorderSource>
  maskBorderWidth?: Property<MaskBorderWidth>
  maskClip?: Property<MaskClip>
  maskComposite?: Property<MaskComposite>
  maskMode?: Property<MaskMode>
  maskOrigin?: Property<MaskOrigin>
  maskPosition?: Property<MaskPosition>
  maskReference?: Property<MaskReference>
  maskRepeat?: Property<MaskRepeat>
  maskSize?: Property<BackgroundSize>
  maskType?: Property<MaskType>
  maxBlockSize?: Property<Size>
  maxHeight?: Property<Size>
  maxInlineSize?: Property<Size>
  maxLines?: Property<MaxLines>
  maxWidth?: Property<Size>
  minBlockSize?: Property<Size>
  minHeight?: Property<Size>
  minInlineSize?: Property<Size>
  minWidth?: Property<Size>
  mixBlendMode?: Property<MixBlendMode>
  objectFit?: Property<ObjectFit>
  objectPosition?: Property<ObjectPosition>
  offset?: Property<Offset>
  offsetAnchor?: Property<OffsetAnchor>
  offsetDistance?: Property<OffsetDistance>
  offsetPath?: Property<OffsetPath>
  offsetPosition?: Property<OffsetPosition>
  offsetRotate?: Property<OffsetRotate>
  opacity?: Property<Opacity>
  order?: Property<Order>
  orphans?: Property<Orphans>
  outline?: Property<Outline>
  outlineColor?: Property<OutlineColor>
  outlineOffset?: Property<OutlineOffset>
  outlineStyle?: Property<OutlineStyle>
  outlineWidth?: Property<OutlineWidth>
  overflow?: Property<Overflow>
  overflowAnchor?: Property<OverflowAnchor>
  overflowBlock?: Property<Overflow>
  overflowClipMargin?: Property<OverflowClipMargin>
  overflowInline?: Property<Overflow>
  overflowWrap?: Property<OverflowWrap>
  overflowX?: Property<Overflow>
  overflowY?: Property<Overflow>
  overscrollBehavior?: Property<OverscrollBehavior>
  overscrollBehaviorBlock?: Property<OverscrollBehavior>
  overscrollBehaviorInline?: Property<OverscrollBehavior>
  overscrollBehaviorX?: Property<OverscrollBehavior>
  overscrollBehaviorY?: Property<OverscrollBehavior>
  padding?: Property<Padding>
  paddingBlock?: Property<Padding>
  paddingBlockEnd?: Property<Padding>
  paddingBlockStart?: Property<Padding>
  paddingBottom?: Property<Padding>
  paddingHorizontal?: Property<Padding>
  paddingInline?: Property<Padding>
  paddingInlineEnd?: Property<Padding>
  paddingInlineStart?: Property<Padding>
  paddingLeft?: Property<Padding>
  paddingRight?: Property<Padding>
  paddingTop?: Property<Padding>
  paddingVertical?: Property<Padding>
  pageBreakAfter?: Property<PageBreak>
  pageBreakBefore?: Property<PageBreak>
  pageBreakInside?: Property<PageBreakInside>
  perspective?: Property<Perspective>
  perspectiveOrigin?: Property<PerspectiveOrigin>
  placeContent?: Property<PlaceContent>
  placeItems?: Property<PlaceItems>
  placeSelf?: Property<PlaceSelf>
  pointerEvents?: Property<PointerEvents>
  position?: Property<Position>
  quotes?: Property<Quotes>
  resize?: Property<Resize>
  right?: Property<Dimension>
  rowGap?: Property<Gap>
  rubyAlign?: Property<RubyAlign>
  rubyMerge?: Property<RubyMerge>
  rubyPosition?: Property<RubyPosition>
  scrollBehavior?: Property<ScrollBehavior>
  scrollMargin?: Property<ScrollMargin>
  scrollMarginBlock?: Property<ScrollMargin>
  scrollMarginBlockEnd?: Property<ScrollMargin>
  scrollMarginBlockStart?: Property<ScrollMargin>
  scrollMarginBottom?: Property<ScrollMargin>
  scrollMarginInline?: Property<ScrollMargin>
  scrollMarginInlineEnd?: Property<ScrollMargin>
  scrollMarginInlineStart?: Property<ScrollMargin>
  scrollMarginLeft?: Property<ScrollMargin>
  scrollMarginRight?: Property<ScrollMargin>
  scrollMarginTop?: Property<ScrollMargin>
  scrollPadding?: Property<ScrollPadding>
  scrollPaddingBlock?: Property<ScrollPadding>
  scrollPaddingBlockEnd?: Property<ScrollPadding>
  scrollPaddingBlockStart?: Property<ScrollPadding>
  scrollPaddingBottom?: Property<ScrollPadding>
  scrollPaddingInline?: Property<ScrollPadding>
  scrollPaddingInlineEnd?: Property<ScrollPadding>
  scrollPaddingInlineStart?: Property<ScrollPadding>
  scrollPaddingLeft?: Property<ScrollPadding>
  scrollPaddingRight?: Property<ScrollPadding>
  scrollPaddingTop?: Property<ScrollPadding>
  scrollSnapAlign?: Property<ScrollSnapAlign>
  scrollSnapStop?: Property<ScrollSnapStop>
  scrollSnapType?: Property<ScrollSnapType>
  scrollbarColor?: Property<ScrollbarColor>
  scrollbarGutter?: Property<ScrollbarGutter>
  scrollbarWidth?: Property<ScrollbarWidth>
  shapeImageThreshold?: Property<ShapeImageThreshold>
  shapeMargin?: Property<ShapeMargin>
  shapeOutside?: Property<ShapeOutside>
  speak?: Property<Speak>
  stroke?: Property<Stroke>
  strokeDasharray?: Property<StrokeDasharray>
  strokeDashoffset?: Property<StrokeDashoffset>
  strokeLinecap?: Property<StrokeLinecap>
  strokeLinejoin?: Property<StrokeLinejoin>
  strokeMiterlimit?: Property<StrokeMiterlimit>
  strokeOpacity?: Property<StrokeOpacity>
  strokeWidth?: Property<StrokeWidth>
  tabSize?: Property<TabSize>
  tableLayout?: Property<TableLayout>
  textAlign?: Property<TextAlign>
  textAlignLast?: Property<TextAlignLast>
  textCombineUpright?: Property<TextCombineUpright>
  textDecoration?: Property<TextDecoration>
  textDecorationColor?: Property<TextDecorationColor>
  textDecorationLine?: Property<TextDecorationLine>
  textDecorationSkipInk?: Property<TextDecorationSkipInk>
  textDecorationStyle?: Property<TextDecorationStyle>
  textDecorationThickness?: Property<TextDecorationThickness>
  textEmphasis?: Property<TextEmphasis>
  textEmphasisColor?: Property<TextEmphasisColor>
  textEmphasisPosition?: Property<TextEmphasisPosition>
  textEmphasisStyle?: Property<TextEmphasisStyle>
  textIndent?: Property<TextIndent>
  textJustify?: Property<TextJustify>
  textOrientation?: Property<TextOrientation>
  textOverflow?: Property<TextOverflow>
  textShadow?: Property<TextShadow>
  textTransform?: Property<TextTransform>
  textUnderlineOffset?: Property<TextUnderlineOffset>
  textUnderlinePosition?: Property<TextUnderlinePosition>
  top?: Property<Dimension>
  transform?: Property<Transform>
  transformBox?: Property<TransformBox>
  transformOrigin?: Property<TransformOrigin>
  transformStyle?: Property<TransformStyle>
  transition?: Property<Transition>
  transitionDelay?: Property<TransitionDelay>
  transitionDuration?: Property<TransitionDuration>
  transitionProperty?: Property<TransitionProperty>
  transitionTimingFunction?: Property<TransitionTimingFunction>
  unicodeBidi?: Property<UnicodeBidi>
  userSelect?: Property<UserSelect>
  verticalAlign?: Property<VerticalAlign>
  visibility?: Property<Visibility>
  webkitPrintColorAdjust?: Property<ColorAdjust>
  webkitTapHighlightColor?: Property<Color>
  whiteSpace?: Property<WhiteSpace>
  widows?: Property<Widows>
  width?: Property<Size>
  willChange?: Property<WillChange>
  wordBreak?: Property<WordBreak>
  wordSpacing?: Property<WordSpacing>
  wordWrap?: Property<WordWrap>
  writingMode?: Property<WritingMode>
  zIndex?: Property<ZIndex>
}

export const utilityMap = {
	// ---- Spacing -----------------------------------------
	p: "padding", //chai-p-20 => padding: 20px
	pt: "paddingTop", //chai-pt-20 => padding-top: 20px
	pb: "paddingBottom", //chai-pb-20 => padding-bottom: 20px
	pl: "paddingLeft", //chai-pl-20 => padding-left: 20px
	pr: "paddingRight", //chai-pr-20 => padding-right: 20px
	px: "paddingInline", //chai-px-20 => padding-inline-start: 20px
	py: "paddingBlock", //chai-py-20 => padding-block-start: 20px
	m: "margin", //chai-m-20 => margin: 20px
	mt: "marginTop", //chai-mt-20 => margin-top: 20px
	mb: "marginBottom", //chai-mb-20 => margin-bottom: 20px
	ml: "marginLeft", //chai-ml-20 => margin-left: 20px
	mr: "marginRight", //chai-mr-20 => margin-right: 20px
	gap: "gap", //chai-gap-20 => gap: 20px
	rowgap: "rowGap", //chai-rowgap-20 => row-gap: 20px
	colgap: "columnGap", //chai-colgap-20 => column-gap: 20px

	// ---- Layout -----------------------------------------
	d: "display", //chai-d-flex => display: flex
	flex: "flex", //chai-flex-1 => flex: 1
	dir: "flexDirection", //chai-dir-row => flex-direction: row
	justify: "justifyContent", //chai-justify-center => justify-content: center
	items: "alignItems", //chai-items-center => align-items: center
	self: "alignSelf", //chai-self-center => align-self: center
	content: "alignContent", //chai-content-center => align-content: center
	wrap: "flexWrap", //chai-wrap => flex-wrap: wrap
	grow: "flexGrow", //chai-grow-1 => flex-grow: 1
	shrink: "flexShrink", //chai-shrink-1 => flex-shrink: 1
	basis: "flexBasis", //chai-basis-0 => flex-basis: 0
	order: "order", //chai-order-0 => order: 0

	// Grid
	cols: "gridTemplateColumns", //chai-cols-3 => grid-template-columns: repeat(3, minmax(0, 1fr))
	rows: "gridTemplateRows", //chai-rows-3 => grid-template-rows: repeat(3, minmax(0, 1fr))
	colspan: "gridColumn", //chai-colspan-2 => grid-column: span 2
	rowspan: "gridRow", //chai-rowspan-2 => grid-row: span 2
	placeitems: "placeItems", //chai-placeitems-center => place-items: center
	placecontent: "placeContent", //chai-placecontent-center => place-content: center

	// ---- Positioning -----------------------------------------
	pos: "position", //chai-pos-absolute => position: absolute
	top: "top", //chai-top-10 => top: 10px
	right: "right", //chai-right-10 => right: 10px
	bottom: "bottom", //chai-bottom-10 => bottom: 10px
	left: "left", //chai-left-10 => left: 10px
	z: "zIndex", //chai-z-10 => z-index: 10
	inset: "inset", //chai-inset-10 => inset: 10px

	// ---- Sizing -----------------------------------------
	w: "width", //chai-w-20 => width: 20px
	h: "height", //chai-h-20 => height: 20px
	minw: "minWidth", //chai-minw-20 => min-width: 20px
	minh: "minHeight", //chai-minh-20 => min-height: 20px
	maxw: "maxWidth", //chai-maxw-20 => max-width: 20px
	maxh: "maxHeight", //chai-maxh-20 => max-height: 20px

	// ---- Typography -----------------------------------------
	text: "color", //chai-text-blue => color: blue
	font: "fontSize", //chai-font-16 => font-size: 16px
	weight: "fontWeight", //chai-weight-bold => font-weight: bold
	align: "textAlign", //chai-align-center => text-align: center
	family: "fontFamily", //chai-family-sans => font-family: sans-serif
	leading: "lineHeight", //chai-leading-5 => line-height: 1.25
	tracking: "letterSpacing", //chai-tracking-wider => letter-spacing: 0.05em
	indent: "textIndent", //chai-indent-4 => text-indent: 1rem
	whitespace: "whiteSpace", //chai-whitespace-pre => white-space: pre
	decoration: "textDecoration", //chai-decoration-underline => text-decoration: underline
	transform: "textTransform", //chai-transform-uppercase => text-transform: uppercase
	overflow: "overflow", //chai-overflow-hidden => overflow: hidden
	overflowx: "overflowX", //chai-overflowx-hidden => overflow-x: hidden
	overflowy: "overflowY", //chai-overflowy-hidden => overflow-y: hidden
	truncate: "textOverflow", //chai-truncate-ellipsis => text-overflow: ellipsis
	liststyle: "listStyleType", //chai-liststyle-disc => list-style-type: disc
	valign: "verticalAlign", //chai-valign-middle => vertical-align: middle

	// ---- Visuals -----------------------------------------
	bg: "backgroundColor", //chai-bg-red => background-color: red
	bgsize: "backgroundSize", //chai-bgsize-cover => background-size: cover
	bgpos: "backgroundPosition", //chai-bgpos-center => background-position: center
	rounded: "borderRadius", //chai-rounded-50 => border-radius: 50px

	border: "border", //chai-border-1px-solid => border: 1px solid
	bordert: "borderTop", //chai-bordert-1px-solid => border-top: 1px solid
	borderr: "borderRight", //chai-borderr-1px-solid => border-right: 1px solid
	borderb: "borderBottom", //chai-borderb-1px-solid => border-bottom: 1px solid
	borderl: "borderLeft", //chai-borderl-1px-solid => border-left: 1px solid
	bordercolor: "borderColor", //chai-bordercolor-blue => border-color: blue
	borderstyle: "borderStyle", //chai-borderstyle-solid => border-style: solid
	borderw: "borderWidth", //chai-borderw-2 => border-width: 0.125rem
	outline: "outline", //chai-outline-none => outline: none
	outlineoffset: "outlineOffset", //chai-outlineoffset-2 => outline-offset: 2px
	shadow: "boxShadow", //chai-shadow-md => box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
	textshadow: "textShadow", //chai-textshadow-md => text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
	opacity: "opacity", //chai-opacity-0.5 => opacity: 0.5
	cursor: "cursor", //chai-cursor-pointer => cursor: pointer
	pointerevents: "pointerEvents", //chai-pointerevents-none => pointer-events: none
	userselect: "userSelect", //chai-userselect-none => user-select: none
	resize: "resize", //chai-resize-none => resize: none
	overflow: "overflow", //chai-overflow-hidden => overflow: hidden
	overflowx: "overflowX", //chai-overflowx-hidden => overflow-x: hidden
	overflowy: "overflowY", //chai-overflowy-hidden => overflow-y: hidden

	// ---- Transforms -----------------------------------------
	scale: "scale", //chai-scale-1 => scale: 1
	rotate: "rotate", //chai-rotate-45 => rotate: 45deg
	translate: "translate", //chai-translate-2 => translateX: 0.5rem
	skew: "skew", //chai-skew-12 => skewX: 12deg
	origin: "transformOrigin", //chai-origin-center => transform-origin: center
	perspective: "perspective", //chai-perspective-100 => perspective: 100px

	// ---- SVG -----------------------------------------
	fill: "fill", //chai-fill-red => fill: red
	stroke: "stroke", //chai-stroke-blue => stroke: blue
	strokew: "strokeWidth", //chai-strokew-2 => stroke-width: 2px
	strokeLinecap: "strokeLinecap", //chai-strokeLinecap-round => stroke-linecap: round
	strokeLinejoin: "strokeLinejoin", //chai-strokejoin-bevel => stroke-linejoin: bevel

	// ---- Misc -----------------------------------------
	appearance: "appearance", //chai-appearance-none => appearance: none
	visibility: "visibility", //chai-visibility-hidden => visibility: hidden
	float: "float", //chai-float-left => float: left
	clear: "clear", //chai-clear-left => clear: left
	col: "columns", //chai-col-3 => columns: 3
	colwidth: "columnWidth", //chai-colwidth-200 => column-width: 200px
	colcount: "columnCount", //chai-colcount-3 => column-count: 3
	colgap2: "columnGap", //chai-colgap2-10 => column-gap: 10px
	colrule: "columnRule", //chai-colrule-2-solid => column-rule: 2px solid
	aspect: "aspectRatio", //chai-aspect-16/9 => aspect-ratio: 16/9
	objectfit: "objectFit", //chai-objectfit-cover => object-fit: cover
	objectpos: "objectPosition", //chai-objectpos-center => object-position: center
	clip: "clipPath", //chai-clip-rect(0,0,100px,100px) => clip-path: rect(0,0,100px,100px)
	content2: "content", //chai-content2-"Hello" => content: "Hello"
	caretcolor: "caretColor", //chai-caretcolor-blue => caret-color: blue
	accentcolor: "accentColor", //chai-accentcolor-green => accent-color: green
	scrollbehavior: "scrollBehavior", //chai-scrollbehavior-smooth => scroll-behavior: smooth
	scrollsnap: "scrollSnapType", //chai-scrollsnap-mandatory => scroll-snap-type: mandatory
	scrollsnapstop: "scrollSnapStop", //chai-scrollsnapstop-normal => scroll-snap-stop: normal
	scrollalign: "scrollSnapAlign", //chai-scrollalign-start => scroll-snap-align: start
	tabsize: "tabSize", //chai-tabsize-4 => tab-size: 4
	tocol: "color", // alias for readability
	print: "printColorAdjust", //chai-print-gray => print-color-adjust: exact
};

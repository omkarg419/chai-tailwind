import { utilityMap } from "./styles.js";

const PRESETS = {
	shadow: {
		none: "none",
		sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
		md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
		lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
		xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
		"2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
		inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
	},
	rounded: {
		none: "0px",
		sm: "2px",
		md: "6px",
		lg: "8px",
		xl: "12px",
		"2xl": "16px",
		"3xl": "24px",
		full: "9999px",
	},

	cols: {
		none: "none",
		auto: "auto",
	},
	rows: {
		none: "none",
		auto: "auto",
	},
};

const TRANSFORMS = {
	cols: (v) => `repeat(${v}, minmax(0, 1fr))`, // chai-cols-3    → repeat(3, minmax(0, 1fr))
	rows: (v) => `repeat(${v}, minmax(0, 1fr))`, // chai-rows-3    → repeat(3, minmax(0, 1fr))
	colspan: (v) => `span ${v}`, // chai-colspan-2 → span 2
	rowspan: (v) => `span ${v}`, // chai-rowspan-2 → span 2
};

// PARSER
export function parseClassName(className) {
	// Safety check: Only process classes starting with chai-
	if (!className.startsWith("chai-")) return null;

	// Remove 'chai-' and split the rest
	// Example: "chai-p-20" -> ["p", "20"]
	const parts = className.slice(5).split("-");
	const key = parts[0];
	const rawValue = parts.slice(1).join("-");

	const property = utilityMap[key];
	if (!property) return null;

	// PRESETS
	// chai-shadow-md → boxShadow: "0 4px 6px ..."
	// chai-rounded-full → borderRadius: "9999px"
	if (PRESETS[key]?.[rawValue] !== undefined) {
		return { property, value: PRESETS[key][rawValue] };
	}

	// TRANSFORMS
	// chai-cols-3    → gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
	// chai-colspan-2 → gridColumn: "span 2"
	if (TRANSFORMS[key]) {
		return { property, value: TRANSFORMS[key](rawValue) };
	}

	// Pure number → px
	// chai-p-20 → padding: "20px"
	if (!isNaN(rawValue) && rawValue.trim() !== "") {
		return { property, value: `${rawValue}px` };
	}

	//  Raw string → restore spaces
	// chai-border-1px-solid-red → border: "1px solid red"
	return { property, value: rawValue.replace(/-/g, " ") };
}

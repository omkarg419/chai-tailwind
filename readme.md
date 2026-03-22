# ☕ ChaiTailwind

## What is ChaiTailwind?

ChaiTailwind is a **3-file, zero-dependency, runtime CSS utility library**. It scans your DOM on load, reads every `chai-*` class, parses it into a CSS property + value pair, and applies it as inline style — all in the browser, with no build pipeline.

Think of it as Tailwind CSS — but without PostCSS, without a compiler, without a config file. Drop in one script import and start writing classes.

```
styles.js   →  maps class keys to CSS property names
parser.js   →  resolves values via 4 priority rules
index.js    →  queries DOM + applies el.style[prop] = value
```

---

## 🚀 Links

- **NPM Package:** [chai-tailwind on npmjs.com](https://www.npmjs.com/package/chai-tailwind-omkar419)
- **Live Demo:** [View Project Demo]()
- **GitHub Repository:** [omkarg419/chai-tailwind](https://github.com/omkarg419/chai-tailwind)

---

## Installation

### Via npm

```bash
npm i chai-tailwind-omkar419
```

### Via CDN (no install needed)

```html
<!-- Just import it. ChaiTailwind runs automatically. -->
<script
	type="module"
	src="https://cdn.jsdelivr.net/npm/chai-tailwind-omkar419/src/index.js"
></script>
```

---

## Usage

### 1. With a bundler (Vite, Webpack, Rollup)

```js
// main.js — importing is all you need. It runs automatically.
import "chaitailwind";
```

That's it. The moment the import executes in a browser environment (`window` is defined), `initChai()` is called for you. No event listener needed.

If you want **manual control** over when styles are applied, use the named export instead:

```js
import { initChai } from "chaitailwind";

// Call it yourself whenever you're ready
initChai();
```

```html
<!-- index.html -->
<div
	class="chai-d-flex chai-items-center chai-gap-16 chai-p-24 chai-bg-#1c1917 chai-rounded-xl chai-shadow-lg"
>
	<h1 class="chai-font-32 chai-weight-800 chai-text-#f59e0b">ChaiTailwind</h1>
	<p class="chai-font-16 chai-text-#78716c chai-leading-1.6">
		Zero config styling.
	</p>
</div>
```

---

### 2. In plain HTML (no bundler)

```html
<!DOCTYPE html>
<html>
	<head>
		<title>My App</title>
		<!-- Import at the end of <head> or <body> — it auto-runs on import -->
		<script
			type="module"
			src="https://cdn.jsdelivr.net/npm/chaitailwind/dist/index.js"
		></script>
	</head>
	<body>
		<div
			class="chai-d-flex chai-dir-column chai-items-center chai-py-80 chai-gap-24"
		>
			<h1 class="chai-font-48 chai-weight-700 chai-text-#111">Hello World</h1>
			<button
				class="chai-px-32 chai-py-14 chai-bg-#f59e0b chai-rounded-lg chai-cursor-pointer chai-weight-700"
			>
				Click Me
			</button>
		</div>
	</body>
</html>
```

> **Tip:** Place the `<script>` tag **before** your HTML content (in `<head>`) or ensure it runs **after** the DOM is painted. Since the script auto-fires on import, the DOM must already exist when the module executes. The safest pattern is to put it at the **end of `<body>`**.

---

## Class Syntax

Every class follows the pattern:

```
chai-{key}-{value}
```

| Part    | Example              | Meaning                    |
| ------- | -------------------- | -------------------------- |
| `chai-` | prefix               | Identifies library classes |
| `key`   | `p`, `shadow`        | Maps to a CSS property     |
| `value` | `20`, `md`, `center` | The value to apply         |

---

## Parse Priority

ChaiTailwind resolves values in this exact order:

```
① PRESETS     chai-shadow-md     →  "0 4px 6px -1px rgba(0,0,0,0.1), ..."
② TRANSFORMS  chai-cols-3        →  "repeat(3, minmax(0, 1fr))"
③ NUMBER→px   chai-p-20          →  "20px"
④ RAW STRING  chai-cursor-pointer →  "pointer"
```

---

## Utility Reference

### Spacing

| Class            | CSS Output             |
| ---------------- | ---------------------- |
| `chai-p-20`      | `padding: 20px`        |
| `chai-pt-10`     | `padding-top: 10px`    |
| `chai-px-16`     | `padding-inline: 16px` |
| `chai-py-32`     | `padding-block: 32px`  |
| `chai-m-auto`    | `margin: auto`         |
| `chai-mt-8`      | `margin-top: 8px`      |
| `chai-mx-16`     | `margin-inline: 16px`  |
| `chai-gap-24`    | `gap: 24px`            |
| `chai-rowgap-12` | `row-gap: 12px`        |

---

### Layout — Flexbox

| Class                  | CSS Output                       |
| ---------------------- | -------------------------------- |
| `chai-d-flex`          | `display: flex`                  |
| `chai-d-grid`          | `display: grid`                  |
| `chai-d-none`          | `display: none`                  |
| `chai-dir-row`         | `flex-direction: row`            |
| `chai-dir-column`      | `flex-direction: column`         |
| `chai-justify-center`  | `justify-content: center`        |
| `chai-justify-between` | `justify-content: space-between` |
| `chai-items-center`    | `align-items: center`            |
| `chai-items-start`     | `align-items: flex-start`        |
| `chai-wrap-wrap`       | `flex-wrap: wrap`                |
| `chai-grow-1`          | `flex-grow: 1`                   |
| `chai-flex-1`          | `flex: 1`                        |

---

### Layout — Grid _(TRANSFORM rules)_

| Class                    | CSS Output                                         |
| ------------------------ | -------------------------------------------------- |
| `chai-cols-3`            | `grid-template-columns: repeat(3, minmax(0, 1fr))` |
| `chai-cols-4`            | `grid-template-columns: repeat(4, minmax(0, 1fr))` |
| `chai-cols-none`         | `grid-template-columns: none`                      |
| `chai-rows-2`            | `grid-template-rows: repeat(2, minmax(0, 1fr))`    |
| `chai-colspan-2`         | `grid-column: span 2`                              |
| `chai-rowspan-3`         | `grid-row: span 3`                                 |
| `chai-placeitems-center` | `place-items: center`                              |

---

### Sizing

| Class             | CSS Output          |
| ----------------- | ------------------- |
| `chai-w-100`      | `width: 100px`      |
| `chai-h-200`      | `height: 200px`     |
| `chai-w-100%`     | `width: 100%`       |
| `chai-maxw-1200`  | `max-width: 1200px` |
| `chai-minh-100vh` | `min-height: 100vh` |

---

### Typography

| Class                       | CSS Output                   |
| --------------------------- | ---------------------------- |
| `chai-font-16`              | `font-size: 16px`            |
| `chai-font-1.5rem`          | `font-size: 1.5rem`          |
| `chai-weight-700`           | `font-weight: 700`           |
| `chai-weight-bold`          | `font-weight: bold`          |
| `chai-text-#fff`            | `color: #fff`                |
| `chai-text-red`             | `color: red`                 |
| `chai-align-center`         | `text-align: center`         |
| `chai-leading-1.6`          | `line-height: 1.6`           |
| `chai-tracking-0.05em`      | `letter-spacing: 0.05em`     |
| `chai-transform-uppercase`  | `text-transform: uppercase`  |
| `chai-decoration-underline` | `text-decoration: underline` |
| `chai-family-monospace`     | `font-family: monospace`     |

---

### Visuals & Backgrounds

| Class                 | CSS Output                    |
| --------------------- | ----------------------------- |
| `chai-bg-#1c1917`     | `background-color: #1c1917`   |
| `chai-bg-blue`        | `background-color: blue`      |
| `chai-bgsize-cover`   | `background-size: cover`      |
| `chai-bgpos-center`   | `background-position: center` |
| `chai-opacity-0.5`    | `opacity: 0.5`                |
| `chai-cursor-pointer` | `cursor: pointer`             |

---

### Shadows _(PRESET tokens)_

| Class                                   | CSS Output                                          |
| --------------------------------------- | --------------------------------------------------- |
| `chai-shadow-none`                      | `box-shadow: none`                                  |
| `chai-shadow-sm`                        | `box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05)`          |
| `chai-shadow-md`                        | `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), ...`   |
| `chai-shadow-lg`                        | `box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), ...` |
| `chai-shadow-xl`                        | `box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), ...` |
| `chai-shadow-2xl`                       | `box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25)`    |
| `chai-shadow-inner`                     | `box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06)`    |
| `chai-shadow-0-4px-8px-rgba(0,0,0,0.3)` | custom raw shadow                                   |

---

### Border Radius _(PRESET tokens)_

| Class               | CSS Output                          |
| ------------------- | ----------------------------------- |
| `chai-rounded-none` | `border-radius: 0px`                |
| `chai-rounded-sm`   | `border-radius: 2px`                |
| `chai-rounded-md`   | `border-radius: 6px`                |
| `chai-rounded-lg`   | `border-radius: 8px`                |
| `chai-rounded-xl`   | `border-radius: 12px`               |
| `chai-rounded-2xl`  | `border-radius: 16px`               |
| `chai-rounded-3xl`  | `border-radius: 24px`               |
| `chai-rounded-full` | `border-radius: 9999px`             |
| `chai-rounded-50`   | `border-radius: 50px` (number rule) |

---

### Borders

| Class                          | CSS Output                    |
| ------------------------------ | ----------------------------- |
| `chai-border-1px-solid-red`    | `border: 1px solid red`       |
| `chai-bordert-2px-dashed-#ccc` | `border-top: 2px dashed #ccc` |
| `chai-bordercolor-blue`        | `border-color: blue`          |
| `chai-borderstyle-solid`       | `border-style: solid`         |
| `chai-borderw-2`               | `border-width: 2px`           |
| `chai-outline-none`            | `outline: none`               |

---

### Positioning

| Class               | CSS Output           |
| ------------------- | -------------------- |
| `chai-pos-absolute` | `position: absolute` |
| `chai-pos-relative` | `position: relative` |
| `chai-pos-fixed`    | `position: fixed`    |
| `chai-top-0`        | `top: 0px`           |
| `chai-right-16`     | `right: 16px`        |
| `chai-z-10`         | `z-index: 10`        |
| `chai-inset-0`      | `inset: 0px`         |

---

### Transforms

| Class                | CSS Output                 |
| -------------------- | -------------------------- |
| `chai-scale-1.05`    | `scale: 1.05`              |
| `chai-rotate-45`     | `rotate: 45`               |
| `chai-origin-center` | `transform-origin: center` |

---

### Overflow & Misc

| Class                        | CSS Output                |
| ---------------------------- | ------------------------- |
| `chai-overflow-hidden`       | `overflow: hidden`        |
| `chai-overflowx-auto`        | `overflow-x: auto`        |
| `chai-truncate-ellipsis`     | `text-overflow: ellipsis` |
| `chai-whitespace-nowrap`     | `white-space: nowrap`     |
| `chai-userselect-none`       | `user-select: none`       |
| `chai-pointerevents-none`    | `pointer-events: none`    |
| `chai-resize-none`           | `resize: none`            |
| `chai-visibility-hidden`     | `visibility: hidden`      |
| `chai-appearance-none`       | `appearance: none`        |
| `chai-scrollbehavior-smooth` | `scroll-behavior: smooth` |
| `chai-aspect-16/9`           | `aspect-ratio: 16/9`      |
| `chai-objectfit-cover`       | `object-fit: cover`       |

---

## How It Works Internally

```
Your HTML class                 parser.js               browser
─────────────────────────────────────────────────────────────────
chai-shadow-md      →  PRESET lookup       →  boxShadow: "0 4px..."
chai-cols-3         →  TRANSFORM function  →  gridTemplateColumns: "repeat(3,...)"
chai-p-20           →  number + "px"       →  padding: "20px"
chai-cursor-pointer →  raw string          →  cursor: "pointer"
```

**Three source files, one idea:**

| File        | Responsibility                                            |
| ----------- | --------------------------------------------------------- |
| `styles.js` | Maps `key → CSS property name`                            |
| `parser.js` | Resolves `rawValue → CSS value` via 4 priority rules      |
| `index.js`  | Queries DOM, calls parser, applies `el.style[prop] = val` |

---

## API

### Auto-run behavior

`index.js` checks `typeof window !== "undefined"` at the module level and calls `initChai()` automatically when it detects a browser environment. This means:

```js
import "chaitailwind"; // ← styles applied immediately, no extra code needed
```

This works perfectly for **plain HTML + script tag** and **bundler entry points** where the DOM is already rendered before the import runs.

---

## Real-World Examples

### Card Component

```html
<div
	class="chai-d-flex chai-dir-column chai-gap-12
            chai-p-24 chai-bg-#1c1917
            chai-rounded-xl chai-shadow-lg
            chai-w-320"
>
	<div
		class="chai-font-12 chai-text-#f59e0b chai-transform-uppercase chai-tracking-0.1em"
	>
		Featured
	</div>

	<h2 class="chai-font-22 chai-weight-700 chai-text-#fafaf9 chai-leading-1.3">
		Card Title
	</h2>

	<p class="chai-font-14 chai-text-#78716c chai-leading-1.7">
		Card description goes here. Style it fast.
	</p>

	<button
		class="chai-px-20 chai-py-10 chai-bg-#f59e0b
                 chai-rounded-lg chai-weight-700
                 chai-font-14 chai-cursor-pointer"
	>
		Learn More
	</button>
</div>
```

---

### Navbar

```html
<nav
	class="chai-d-flex chai-items-center chai-justify-between
            chai-px-32 chai-py-16
            chai-pos-fixed chai-top-0 chai-w-100%
            chai-bg-#0c0a09 chai-z-100
            chai-border-1px-solid-#292524"
>
	<span class="chai-font-18 chai-weight-800 chai-text-#fff"> MyApp </span>

	<div class="chai-d-flex chai-gap-32 chai-items-center">
		<a class="chai-text-#78716c chai-font-14 chai-cursor-pointer">Home</a>
		<a class="chai-text-#78716c chai-font-14 chai-cursor-pointer">Docs</a>
		<button
			class="chai-px-20 chai-py-8 chai-bg-#f59e0b
                   chai-rounded-lg chai-weight-700 chai-font-14"
		>
			Get Started
		</button>
	</div>
</nav>
```

---

### Grid Layout

```html
<div class="chai-d-grid chai-cols-3 chai-gap-24 chai-p-32">
	<div
		class="chai-colspan-2 chai-bg-#1c1917 chai-rounded-xl chai-p-32 chai-shadow-md"
	>
		Wide card (spans 2 columns)
	</div>

	<div class="chai-bg-#1c1917 chai-rounded-xl chai-p-32 chai-shadow-md">
		Regular card
	</div>

	<div class="chai-bg-#1c1917 chai-rounded-xl chai-p-32 chai-shadow-md">
		Regular card
	</div>

	<div
		class="chai-colspan-2 chai-bg-#1c1917 chai-rounded-xl chai-p-32 chai-shadow-md"
	>
		Wide card again
	</div>
</div>
```

---

<div align="center">
 
Made with ☕ and zero npm installs.
 
**[⬆ Back to top](#-chaitailwind)**
 
</div>

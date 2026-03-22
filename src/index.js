import { parseClassName } from "./parser.js";

export function initChai() {
	const elements = document.querySelectorAll('[class*="chai-"]');

	elements.forEach((el) => {
		el.classList.forEach((className) => {
			const result = parseClassName(className);

			if (result) {
				el.style[result.property] = result.value;
			}
		});
	});
}

export { initChai };
export default initChai;

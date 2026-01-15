import ElementSelector from './ElementSelector';
import ElementSelectorList from './ElementSelectorList';

export default class CssSelector {
	constructor(options) {
		const me = this;

		// defaults
		this.ignoredTags = ['font', 'b', 'i', 's'];
		this.parent = document;
		this.ignoredClassBase = false;
		this.enableResultStripping = true;
		this.enableSmartTableSelector = false;
		this.ignoredClasses = [];
		// Matching mode: 'strict', 'tag-classes', 'tag-only'
		this.matchingMode = 'tag-classes';
		this.query = function (selector) {
			return this.parent.querySelectorAll(selector);
		};

		// overrides defaults with options
		for (const i in options) {
			this[i] = options[i];
		}

		// jquery parent selector fix
		if (this.query === window.jQuery) {
			this.query = function (selector) {
				return jQuery(me.parent).find(selector);
			};
		}
	}

	mergeElementSelectors(newSelectors) {
		if (newSelectors.length < 1) {
			throw 'No selectors specified';
		} else if (newSelectors.length === 1) {
			return newSelectors[0];
		}

		// check selector total count
		const elementCountInSelector = newSelectors[0].length;
		for (let i = 0; i < newSelectors.length; i++) {
			const selector = newSelectors[i];
			if (selector.length !== elementCountInSelector) {
				throw 'Invalid element count in selector';
			}
		}

		// merge selectors
		const resultingElements = newSelectors[0];
		for (let i = 1; i < newSelectors.length; i++) {
			const mergeElements = newSelectors[i];

			for (let j = 0; j < elementCountInSelector; j++) {
				resultingElements[j].merge(mergeElements[j]);
			}
		}
		return resultingElements;
	}

	stripSelector(selectors) {
		const cssSelector = selectors.getCssSelector();
		const baseSelectedElements = this.query(cssSelector);

		const compareElements = function (elements) {
			if (baseSelectedElements.length !== elements.length) {
				return false;
			}

			for (let j = 0; j < baseSelectedElements.length; j++) {
				if ([].indexOf.call(elements, baseSelectedElements[j]) === -1) {
					return false;
				}
			}
			return true;
		};
		// strip indexes
		for (let i = 0; i < selectors.length; i++) {
			const selector = selectors[i];
			if (selector.index !== null) {
				const { index } = selector;
				selector.index = null;
				const cssSelector1 = selectors.getCssSelector();
				const newSelectedElements = this.query(cssSelector1);
				// if results doesn't match then undo changes
				if (!compareElements(newSelectedElements)) {
					selector.index = index;
				}
			}
		}

		// strip isDirectChild
		for (let i = 0; i < selectors.length; i++) {
			const selector = selectors[i];
			if (selector.isDirectChild === true) {
				selector.isDirectChild = false;
				const cssSeletor2 = selectors.getCssSelector();
				const newSelectedElements = this.query(cssSeletor2);
				// if results doesn't match then undo changes
				if (!compareElements(newSelectedElements)) {
					selector.isDirectChild = true;
				}
			}
		}

		// strip ids
		for (let i = 0; i < selectors.length; i++) {
			const selector = selectors[i];
			if (selector.id !== null) {
				const { id } = selector;
				selector.id = null;
				const cssSeletor3 = selectors.getCssSelector();
				const newSelectedElements = this.query(cssSeletor3);
				// if results doesn't match then undo changes
				if (!compareElements(newSelectedElements)) {
					selector.id = id;
				}
			}
		}

		// strip classes
		for (let i = 0; i < selectors.length; i++) {
			const selector = selectors[i];
			if (selector.classes.length !== 0) {
				for (let j = selector.classes.length - 1; j > 0; j--) {
					const cclass = selector.classes[j];
					selector.classes.splice(j, 1);
					const cssSeletor4 = selectors.getCssSelector();
					const newSelectedElements = this.query(cssSeletor4);
					// if results doesn't match then undo changes
					if (!compareElements(newSelectedElements)) {
						selector.classes.splice(j, 0, cclass);
					}
				}
			}
		}

		// strip tags
		for (let i = selectors.length - 1; i > 0; i--) {
			const selector = selectors[i];
			selectors.splice(i, 1);
			const cssSeletor5 = selectors.getCssSelector();
			const newSelectedElements = this.query(cssSeletor5);
			// if results doesn't match then undo changes
			if (!compareElements(newSelectedElements)) {
				selectors.splice(i, 0, selector);
			}
		}

		return selectors;
	}

	getElementSelectors(elements, top) {
		const elementSelectors = [];

		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			const elementSelector = this.getElementSelector(element, top);
			elementSelectors.push(elementSelector);
		}

		return elementSelectors;
	}

	getElementSelector(element, top) {
		const elementSelectorList = new ElementSelectorList(this);
		while (true) {
			if (element === this.parent) {
				break;
			} else if (element === undefined || element === this.parent) {
				throw 'element is not a child of the given parent';
			}
			if (this.isIgnoredTag(element.tagName)) {
				element = element.parentNode;
				continue;
			}
			if (top > 0) {
				top--;
				element = element.parentNode;
				continue;
			}

			const selector = new ElementSelector(element, this.ignoredClasses);
			// document does not have a tagName
			if (
				element.parentNode === this.parent ||
				this.isIgnoredTag(element.parentNode.tagName)
			) {
				selector.isDirectChild = false;
			}

			elementSelectorList.push(selector);
			element = element.parentNode;
		}

		return elementSelectorList;
	}

	/**
	 * Find common classes between multiple elements
	 * @param elements Array of DOM elements
	 * @returns Array of common class names
	 */
	findCommonClasses(elements) {
		if (!elements || elements.length === 0) return [];

		// Get classes from first element
		let commonClasses = Array.from(elements[0].classList || []).filter(
			cls => !this.ignoredClasses.includes(cls)
		);

		// Intersect with classes from other elements
		for (let i = 1; i < elements.length; i++) {
			const elementClasses = Array.from(elements[i].classList || []).filter(
				cls => !this.ignoredClasses.includes(cls)
			);
			commonClasses = commonClasses.filter(cls => elementClasses.includes(cls));
		}

		return commonClasses;
	}

	/**
	 * Find common attributes between multiple elements
	 * @param elements Array of DOM elements
	 * @returns Object with common attribute key-value pairs
	 */
	findCommonAttributes(elements) {
		if (!elements || elements.length === 0) return {};

		const attributesToCheck = ['data-type', 'data-id', 'role', 'itemprop', 'itemtype'];
		const commonAttrs = {};

		for (const attr of attributesToCheck) {
			const firstValue = elements[0].getAttribute(attr);
			if (firstValue) {
				const allHaveSame = elements.every(el => el.getAttribute(attr) === firstValue);
				if (allHaveSame) {
					commonAttrs[attr] = firstValue;
				}
			}
		}

		return commonAttrs;
	}

	/**
	 * Compares whether two elements are similar based on matching mode.
	 * - strict: all parent elements must be the same type
	 * - tag-classes: same tag and at least one common class (or same tag if no classes)
	 * - tag-only: only compare tag names
	 * @param element1
	 * @param element2
	 */
	checkSimilarElements(element1, element2) {
		// tag-only mode: just compare tag names
		if (this.matchingMode === 'tag-only') {
			return element1.tagName === element2.tagName;
		}

		// tag-classes mode: same tag and common classes
		if (this.matchingMode === 'tag-classes') {
			if (element1.tagName !== element2.tagName) {
				return false;
			}

			// If both have no classes, they're similar
			const classes1 = Array.from(element1.classList || []).filter(
				cls => !this.ignoredClasses.includes(cls)
			);
			const classes2 = Array.from(element2.classList || []).filter(
				cls => !this.ignoredClasses.includes(cls)
			);

			if (classes1.length === 0 && classes2.length === 0) {
				return true;
			}

			// If they have at least one common class, they're similar
			const hasCommonClass = classes1.some(cls => classes2.includes(cls));
			return hasCommonClass || classes1.length === 0 || classes2.length === 0;
		}

		// strict mode: original behavior - all parents must match
		while (true) {
			if (element1.tagName !== element2.tagName) {
				return false;
			}
			if (element1 === element2) {
				return true;
			}

			// stop at body tag
			if (
				element1 === undefined ||
				element1.tagName === 'body' ||
				element1.tagName === 'BODY'
			) {
				return false;
			}
			if (
				element2 === undefined ||
				element2.tagName === 'body' ||
				element2.tagName === 'BODY'
			) {
				return false;
			}

			element1 = element1.parentNode;
			element2 = element2.parentNode;
		}
	}

	/**
	 * Groups elements into groups if the emelents are not similar
	 * @param elements
	 */
	getElementGroups(elements) {
		// first elment is in the first group
		// @TODO maybe i dont need this?
		const groups = [[elements[0]]];

		for (let i = 1; i < elements.length; i++) {
			const elementNew = elements[i];
			let addedToGroup = false;
			for (let j = 0; j < groups.length; j++) {
				const group = groups[j];
				const elementGroup = group[0];
				if (this.checkSimilarElements(elementNew, elementGroup)) {
					group.push(elementNew);
					addedToGroup = true;
					break;
				}
			}

			// add new group
			if (!addedToGroup) {
				groups.push([elementNew]);
			}
		}

		return groups;
	}

	/**
	 * Build a smart CSS selector based on common properties
	 * @param elements Array of elements
	 * @returns CSS selector string
	 */
	buildSmartSelector(elements) {
		if (!elements || elements.length === 0) return '';

		const tag = elements[0].tagName.toLowerCase();
		const commonClasses = this.findCommonClasses(elements);
		const commonAttrs = this.findCommonAttributes(elements);

		let selector = tag;

		// Add common classes
		if (commonClasses.length > 0) {
			selector += '.' + commonClasses.join('.');
		}

		// Add common attributes
		for (const [attr, value] of Object.entries(commonAttrs)) {
			selector += `[${attr}="${value}"]`;
		}

		return selector;
	}

	getCssSelector(elements, top) {
		top = top || 0;

		const { enableSmartTableSelector } = this;
		if (elements.length > 1) {
			this.enableSmartTableSelector = false;
		}

		// group elements into similarity groups
		const elementGroups = this.getElementGroups(elements);

		let resultCSSSelector;

		// For non-strict modes with multiple groups, try to build smart selectors
		if (this.matchingMode !== 'strict' && elementGroups.length > 1) {
			const groupSelectors = [];

			for (let i = 0; i < elementGroups.length; i++) {
				const groupElements = elementGroups[i];
				const smartSelector = this.buildSmartSelector(groupElements);
				groupSelectors.push(smartSelector);
			}

			resultCSSSelector = groupSelectors.join(', ');
		} else if (this.allowMultipleSelectors) {
			const groupSelectors = [];

			for (let i = 0; i < elementGroups.length; i++) {
				const groupElements = elementGroups[i];

				const elementSelectors = this.getElementSelectors(groupElements, top);
				let resultSelector = this.mergeElementSelectors(elementSelectors);
				if (this.enableResultStripping) {
					resultSelector = this.stripSelector(resultSelector);
				}

				groupSelectors.push(resultSelector.getCssSelector());
			}

			resultCSSSelector = groupSelectors.join(', ');
		} else {
			if (elementGroups.length !== 1) {
				throw 'found multiple element groups, but allowMultipleSelectors disabled';
			}

			const elementSelectors = this.getElementSelectors(elements, top);
			let resultSelector = this.mergeElementSelectors(elementSelectors);
			if (this.enableResultStripping) {
				resultSelector = this.stripSelector(resultSelector);
			}

			resultCSSSelector = resultSelector.getCssSelector();
		}

		this.enableSmartTableSelector = enableSmartTableSelector;

		// strip down selector
		return resultCSSSelector;
	}

	isIgnoredTag(tag) {
		return this.ignoredTags.indexOf(tag.toLowerCase()) !== -1;
	}
}

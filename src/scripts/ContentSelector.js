import * as browser from 'webextension-polyfill';
import CssSelector from '../libs/css-selector/lib/CssSelector';
import ElementQuery from './ElementQuery';
import Translator from './Translator';

export default class ContentSelector {
	/**
	 * @param options.parentCSSSelector	Elements can be only selected within this element
	 * @param options.allowedElements	Elements that can only be selected
	 * @constructor
	 */
	constructor(options) {
		// deferred response
		this.deferredCSSSelectorResponse = $.Deferred();

		this.allowedElements = options.allowedElements;
		this.parentCSSSelector = options.parentCSSSelector.trim();
		this.alert =
			options.alert ||
			function (txt) {
				alert(txt);
			};

		if (this.parentCSSSelector) {
			this.parent = $(this.parentCSSSelector)[0];

			//  handle situation when parent selector not found
			if (this.parent === undefined) {
				this.deferredCSSSelectorResponse.reject('parent selector not found');
				this.alert('Parent element not found!');
			}
		} else {
			this.parent = $('body')[0];
		}
	}

	/**
	 * get css selector selected by the user
	 */
	getCSSSelector(request) {
		if (this.deferredCSSSelectorResponse.state() !== 'rejected') {
			// elements that are selected by the user
			this.selectedElements = [];
			// element selected from top
			this.top = 0;

			// initialize css selector with default mode (tag-classes allows flexible matching)
			this.initCssSelector(true, 'tag-classes');
			this.initGUI();
		}

		return this.deferredCSSSelectorResponse.promise();
	}

	getCurrentCSSSelector() {
		if (this.selectedElements && this.selectedElements.length > 0) {
			let cssSelector;

			// handle special case when parent is selected
			if (this.isParentSelected()) {
				if (this.selectedElements.length === 1) {
					cssSelector = '_parent_';
				} else if (this.matchingMode !== 'strict') {
					// In flexible modes, allow parent with other elements
					const selectedElements = this.selectedElements.slice();
					selectedElements.splice(selectedElements.indexOf(this.parent), 1);
					cssSelector = `_parent_, ${this.cssSelector.getCssSelector(
						selectedElements,
						this.top
					)}`;
				} else {
					// will trigger error where multiple selections are not allowed
					cssSelector = this.cssSelector.getCssSelector(this.selectedElements, this.top);
				}
			} else {
				cssSelector = this.cssSelector.getCssSelector(this.selectedElements, this.top);
			}

			return cssSelector;
		}
		return '';
	}

	isParentSelected() {
		return this.selectedElements.indexOf(this.parent) !== -1;
	}

	/**
	 * initialize or reconfigure css selector class
	 * @param allowMultipleSelectors
	 * @param matchingMode - 'strict', 'tag-classes', or 'tag-only'
	 */
	initCssSelector(allowMultipleSelectors, matchingMode) {
		this.matchingMode = matchingMode || this.matchingMode || 'tag-classes';
		this.cssSelector = new CssSelector({
			enableSmartTableSelector: true,
			parent: this.parent,
			allowMultipleSelectors,
			matchingMode: this.matchingMode,
			ignoredClasses: [
				'-sitemap-select-item-selected',
				'-sitemap-select-item-hover',
				'-sitemap-parent',
				'-web-scraper-img-on-top',
				'-web-scraper-selection-active',
			],
			query: jQuery,
		});
	}

	previewSelector(elementCSSSelector) {
		if (this.deferredCSSSelectorResponse.state() !== 'rejected') {
			this.highlightParent();
			$(ElementQuery(elementCSSSelector, this.parent)).addClass(
				'-sitemap-select-item-selected'
			);
			this.deferredCSSSelectorResponse.resolve();
		}

		return this.deferredCSSSelectorResponse.promise();
	}

	async initGUI() {
		this.highlightParent();

		// all elements except toolbar
		this.$allElements = $(
			`${this.allowedElements}:not(#-selector-toolbar):not(#-selector-toolbar *)`,
			this.parent
		);
		// allow selecting parent also
		if (this.parent !== document.body) {
			this.$allElements.push(this.parent);
		}

		this.bindElementHighlight();
		this.bindElementSelection();
		this.bindKeyboardSelectionManipulations();
		await this.attachToolbar();
		this.bindMatchingModeDropdown();
		this.bindMoveImagesToTop();
		Translator.translatePage();
	}

	bindElementSelection() {
		// Use a single document-level listener with capture:true to intercept events
		// before the website's JavaScript can handle them
		// Using mousedown instead of click - harder for frameworks to intercept
		const allElementsArray = this.$allElements.toArray();

		this._documentClickHandler = e => {
			// Find the most specific allowed element that was clicked
			let targetElement = e.target;
			let selectedElement = null;

			// Walk up the DOM tree to find if clicked element or any parent is in our allowed list
			while (targetElement && targetElement !== document) {
				if (allElementsArray.indexOf(targetElement) !== -1) {
					selectedElement = targetElement;
					break; // Take the most specific (deepest) match
				}
				targetElement = targetElement.parentNode;
			}

			if (selectedElement) {
				if (this.selectedElements.indexOf(selectedElement) === -1) {
					this.selectedElements.push(selectedElement);
				}
				this.highlightSelectedElements();

				// Stop the event from reaching the website's handlers
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				return false;
			}
		};

		// Use mousedown - it fires before click and is harder to intercept
		document.addEventListener('mousedown', this._documentClickHandler, true);
	}

	/**
	 * Add to select elements the element that is under the mouse
	 */
	selectMouseOverElement() {
		const element = this.mouseOverElement;
		if (element) {
			this.selectedElements.push(element);
			this.highlightSelectedElements();
		}
	}

	bindElementHighlight() {
		$(this.$allElements)
			.bind(
				'mouseover.elementSelector',
				function (e) {
					// allow event bubbling for other event listeners but not for web scraper.
					if (e.target !== e.currentTarget) {
						return;
					}

					const element = e.currentTarget;
					this.mouseOverElement = element;
					$(element).addClass('-sitemap-select-item-hover');
				}.bind(this)
			)
			.bind(
				'mouseout.elementSelector',
				function (e) {
					// allow event bubbling for other event listeners but not for web scraper.
					if (e.target !== e.currentTarget) {
						return;
					}

					const element = e.currentTarget;
					this.mouseOverElement = null;
					$(element).removeClass('-sitemap-select-item-hover');
				}.bind(this)
			);
	}

	bindMoveImagesToTop() {
		$('body').addClass('-web-scraper-selection-active');

		// do this only when selecting images
		if (this.allowedElements === 'img') {
			$('img')
				.filter(function (i, element) {
					return $(element).css('position') === 'static';
				})
				.addClass('-web-scraper-img-on-top');
		}
	}

	unbindMoveImagesToTop() {
		$('body.-web-scraper-selection-active').removeClass('-web-scraper-selection-active');
		$('img.-web-scraper-img-on-top').removeClass('-web-scraper-img-on-top');
	}

	selectChild() {
		this.top--;
		if (this.top < 0) {
			this.top = 0;
		}
	}

	selectParent() {
		this.top++;
	}

	// User with keyboard arrows can select child or paret elements of selected elements.
	bindKeyboardSelectionManipulations() {
		// check for focus
		let lastFocusStatus;
		this.keyPressFocusInterval = setInterval(function () {
			const focus = document.hasFocus();
			if (focus === lastFocusStatus) return;
			lastFocusStatus = focus;

			$('#-selector-toolbar .key-button').toggleClass('hide', !focus);
			$('#-selector-toolbar .key-events').toggleClass('hide', focus);
		}, 200);

		// Using up/down arrows user can select elements from top of the
		// selected element
		$(document).bind(
			'keydown.selectionManipulation',
			function (event) {
				// select child C
				if (event.keyCode === 67) {
					this.animateClickedKey($('#-selector-toolbar .key-button-child'));
					this.selectChild();
				}
				// select parent P
				else if (event.keyCode === 80) {
					this.animateClickedKey($('#-selector-toolbar .key-button-parent'));
					this.selectParent();
				}
				// select element
				else if (event.keyCode === 83) {
					this.animateClickedKey($('#-selector-toolbar .key-button-select'));
					this.selectMouseOverElement();
				}

				this.highlightSelectedElements();
			}.bind(this)
		);
	}

	animateClickedKey(element) {
		$(element).removeClass('clicked').removeClass('clicked-animation');
		setTimeout(function () {
			$(element).addClass('clicked');
			setTimeout(function () {
				$(element).addClass('clicked-animation');
			}, 100);
		}, 1);
	}

	highlightSelectedElements() {
		try {
			const resultCssSelector = this.getCurrentCSSSelector();

			$('body #-selector-toolbar .selector').text(resultCssSelector);
			// highlight selected elements
			$('.-sitemap-select-item-selected').removeClass('-sitemap-select-item-selected');
			$(ElementQuery(resultCssSelector, this.parent)).addClass(
				'-sitemap-select-item-selected'
			);
		} catch (err) {
			if (err === 'found multiple element groups, but allowMultipleSelectors disabled') {
				console.log(
					'Multiple element groups detected. Switch to "Tag + Classes" or "Tag Only" mode for flexible matching.'
				);
				// In strict mode, remove the incompatible element
				this.selectedElements.pop();
				this.highlightSelectedElements();
			}
		}
	}

	/**
	 * Bind the matching mode dropdown to update the CSS selector
	 */
	bindMatchingModeDropdown() {
		$('#-selector-toolbar [name=matchingMode]').change(
			function (e) {
				const matchingMode = $(e.currentTarget).val();
				this.initCssSelector(matchingMode !== 'strict', matchingMode);
				this.highlightSelectedElements();
			}.bind(this)
		);
	}

	/**
	 * Unbind the matching mode dropdown
	 */
	unbindMatchingModeDropdown() {
		$('#-selector-toolbar [name=matchingMode]').unbind('change');
	}

	async attachToolbar() {
		const toolbarUrl = browser.runtime.getURL('content_script/AttachedToolbar.html');
		const toolbarFile = await fetch(toolbarUrl);
		const $toolbar = await toolbarFile.text();
		$('body').append($toolbar);
		$('body #-selector-toolbar .done-selecting-button').click(() => this.selectionFinished());
	}

	highlightParent() {
		// do not highlight parent if its the body
		if (!$(this.parent).is('body') && !$(this.parent).is('#webpage')) {
			$(this.parent).addClass('-sitemap-parent');
		}
	}

	unbindElementSelection() {
		// Remove document-level mousedown listener
		if (this._documentClickHandler) {
			document.removeEventListener('mousedown', this._documentClickHandler, true);
			this._documentClickHandler = null;
		}
		// Fallback: also try jQuery unbind for backwards compatibility
		$(this.$allElements).unbind('click.elementSelector');
		// remove highlighted element classes
		this.unbindElementSelectionHighlight();
	}

	unbindElementSelectionHighlight() {
		$('.-sitemap-select-item-selected').removeClass('-sitemap-select-item-selected');
		$('.-sitemap-parent').removeClass('-sitemap-parent');
	}

	unbindElementHighlight() {
		$(this.$allElements).unbind('mouseover.elementSelector').unbind('mouseout.elementSelector');
	}

	unbindKeyboardSelectionMaipulatios() {
		$(document).unbind('keydown.selectionManipulation');
		clearInterval(this.keyPressFocusInterval);
	}

	removeToolbar() {
		$('body #-selector-toolbar a').unbind('click');
		$('#-selector-toolbar').remove();
	}

	/**
	 * Remove toolbar and unbind events
	 */
	removeGUI() {
		this.unbindElementSelection();
		this.unbindElementHighlight();
		this.unbindKeyboardSelectionMaipulatios();
		this.unbindMatchingModeDropdown();
		this.unbindMoveImagesToTop();
		this.removeToolbar();
	}

	selectionFinished() {
		const resultCssSelector = this.getCurrentCSSSelector();

		this.deferredCSSSelectorResponse.resolve({
			CSSSelector: resultCssSelector,
		});
	}
}

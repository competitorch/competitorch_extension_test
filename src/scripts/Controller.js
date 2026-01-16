import * as $ from 'jquery';
import * as ich from 'icanhaz/ICanHaz';
import * as browser from 'webextension-polyfill';
import * as renderjson from 'renderjson/renderjson';
import * as Papa from 'papaparse';
import 'sugar';
import 'jquery-highlight/jquery.highlight';
import 'jquery-searcher/dist/jquery.searcher.min';
import 'jquery-flexdatalist/jquery.flexdatalist';
import '../libs/jquery.bootstrapvalidator/bootstrapValidator';
import getContentScript from './ContentScript';
import Sitemap from './Sitemap';
import SelectorGraphv2 from './SelectorGraphv2';
import SelectorList from './SelectorList';
import SelectorTable from './Selector/SelectorTable';
import Model from './Model';
import Translator from './Translator';
import urlToSitemapName from '../libs/urlToSitemapName';
import SitemapSpecMigrationManager from './SitemapSpecMigration/Manager';
import Torch, { PreActionTypes } from './Torch';

export const SITEMAP_ID_REGEXP = /^[a-z][a-z0-9_\$\(\)\+\-]+$/;
const sitemapTemplate = require('../sitemaps_templates/sitemapTemplate.json');

export default class SitemapController {
	constructor(store, templateDir) {
		this.store = store;
		this.templateDir = templateDir;
		this.contentScript = getContentScript('DevTools');
		this.selectorTypes = [
			{
				type: 'SelectorAutodetect',
			},
			{
				type: 'SelectorText',
			},
			{
				type: 'ConstantValue',
			},
			{
				type: 'SelectorInputValue',
			},
			{
				type: 'SelectorLink',
			},
			{
				type: 'SelectorPopupLink',
			},
			{
				type: 'SelectorImage',
			},
			{
				type: 'SelectorDocument',
			},
			{
				type: 'SelectorTable',
			},
			{
				type: 'SelectorElementAttribute',
			},
			{
				type: 'SelectorElementStyle',
			},
			{
				type: 'SelectorPageURL',
			},
			{
				type: 'SelectorHTML',
			},
			{
				type: 'SelectorElement',
			},
			{
				type: 'SelectorElementScroll',
			},
			{
				type: 'SelectorElementClick',
			},
			{
				type: 'SelectorGroup',
			},
		];
		this.selectorTypes = this.selectorTypes.map(typeObj => {
			return { ...typeObj, title: Translator.getTranslationByKey(typeObj.type) };
		});

		this.jsonRenderer = renderjson
			.set_icons('+', '-')
			.set_show_to_level('all')
			.set_max_string_length(80)
			.set_replacer((key, value) => {
				if (typeof value === 'string') {
					return value
						.replace(/(\r\n|\n|\r)/gm, ' ')
						.replace(/\s+/g, ' ')
						.trim();
				}
				return value;
			})
			.set_sort_objects(true);
		return this.init();
	}

	control(controls) {
		const controller = this;
		// eslint-disable-next-line guard-for-in
		for (const selector in controls) {
			for (const event in controls[selector]) {
				$(document).on(
					event,
					selector,
					(function (selector, event) {
						return function () {
							const continueBubbling = controls[selector][event].call(
								controller,
								this
							);
							if (continueBubbling !== true) {
								return false;
							}
						};
					})(selector, event)
				);
			}
		}
	}

	/**
	 * Loads templates for ICanHaz
	 */
	async loadTemplates() {
		const templateIds = [
			'Viewport',
			'ProjectList',
			'ProjectListItem',
			'SitemapList',
			'SitemapListItem',
			'SitemapCreate',
			'SitemapImport',
			'SitemapXMLImport',
			'SitemapExport',
			'SitemapBrowseData',
			'SitemapScrapeConfig',
			'SitemapExportData',
			'SitemapEditMetadata',
			'SelectorList',
			'SelectorListItem',
			'SelectorEdit',
			'SelectorEditTableColumn',
			'SitemapSelectorGraph',
			'DataPreview',
			'ItemCard',
			'ActionConfirm',
			'ErrorDevToolsPage',
			'AuthorizationPage',
			'TorchList',
			'TorchCreate',
		];

		return Promise.all(
			templateIds.map(templateId => {
				return $.get(`${this.templateDir + templateId}.html`)
					.promise()
					.then(template => {
						ich.addTemplate(templateId, template);
					});
			})
		);
	}

	async init() {
		await this.loadTemplates();
		// currently viewed objects
		this.clearState();

		// render main viewport
		ich.Viewport().appendTo('body');

		// Initialize target tab indicator
		this.initTargetTabIndicator();

		// cancel all form submits
		$('form').bind('submit', () => {
			return false;
		});

		this.control({
			'#target-tab-selector': {
				change: this.onTargetTabSelectorChange,
			},
			'#test-connection-btn': {
				click: this.testTargetTabConnection,
			},
			'#refresh-tabs-btn': {
				click: this.refreshAvailableTabs,
			},
			'#sitemapFiles': {
				change: this.readBlob,
			},
			'#copyTextButton': {
				click: this.copySitemapToClipboard,
			},
			'#sitemaps-nav-button': {
				click: this.showSitemaps,
			},
			'#projects-nav-button': {
				click: this.showProjects,
			},
			'#create-sitemap-create-nav-button': {
				click: this.showCreateSitemap,
			},
			'#create-sitemap-import-nav-button': {
				click: this.showImportSitemapPanel,
			},
			'#sitemap-template-create-nav-button': {
				click: this.showTemplateSitemapPanel,
			},
			'#sitemap-xml-import-nav-button': {
				click: this.showXMLSitemapImportPanel,
			},
			'#fetch-xml-sitemap': {
				click: this.fetchXMLSitemap,
			},
			'#select-all-urls': {
				click: this.selectAllXMLUrls,
			},
			'#deselect-all-urls': {
				click: this.deselectAllXMLUrls,
			},
			'#create-sitemap-from-xml': {
				click: this.createSitemapFromXML,
			},
			'#sitemap-export-nav-button': {
				click: this.showSitemapExportPanel,
			},
			'#sitemap-export-data-nav-button': {
				click: this.showSitemapExportDataPanel,
			},
			'.delete_selector_submit': {
				click: this.confirmDeleteSelector,
			},
			'.update_selector_submit': {
				click: this.confirmDeleteChildSelectors,
			},
			'#modal-save-child-selectors': {
				click: this.confirmSaveChildSelectors,
			},
			'.delete_sitemap_submit': {
				click: this.confirmDeleteSitemap,
			},
			'.copy_sitemap_submit': {
				click: this.confirmCopySitemap,
			},
			'#submit-create-sitemap': {
				click: this.createSitemap,
			},
			'#submit-import-sitemap': {
				click: this.importSitemap,
			},
			'#sitemap-edit-metadata-nav-button': {
				click: this.editSitemapMetadata,
			},
			'#sitemap-selector-list-nav-button': {
				click: this.showSitemapSelectorList,
			},
			'#sitemap-selector-graph-nav-button': {
				click: this.showSitemapSelectorGraph,
			},
			'#sitemap-torch-nav-button': {
				click: this.showTorchList,
			},
			'#sitemap-browse-nav-button': {
				click: this.browseSitemapData,
			},
			// Torch controls
			'#create-new-torch, #create-first-torch': {
				click: this.showTorchCreate,
			},
			'.torch-card button[action=edit-torch]': {
				click: this.editTorch,
			},
			'.torch-card button[action=clone-torch]': {
				click: this.cloneTorch,
			},
			'.torch-card button[action=delete-torch]': {
				click: this.deleteTorch,
			},
			'.torch-card button[action=run-torch]': {
				click: this.runTorch,
			},
			'#torch-cancel': {
				click: this.cancelTorchEdit,
			},
			'#torch-save': {
				click: this.saveTorch,
			},
			'#torch-next': {
				click: this.torchWizardNext,
			},
			'#torch-prev': {
				click: this.torchWizardPrev,
			},
			'#add-preaction': {
				click: this.addPreAction,
			},
			'.remove-preaction': {
				click: this.removePreAction,
			},
			'#add-column': {
				click: this.addTorchColumn,
			},
			'.remove-column': {
				click: this.removeTorchColumn,
			},
			'.toggle-column-advanced': {
				click: this.toggleColumnAdvanced,
			},
			'#refresh-preview': {
				click: this.refreshTorchPreview,
			},
			'.select-preaction-element': {
				click: this.selectPreActionElement,
			},
			'.select-column-element': {
				click: this.selectColumnElement,
			},
			'button#submit-edit-sitemap': {
				click: this.editSitemapMetadataSave,
			},
			'form [name=sitemapType]': {
				change: this.sitemapTypeChanged,
			},
			'#edit-sitemap-metadata-form': {
				submit: () => false,
			},
			'#sitemaps tr td:nth-of-type(1)': {
				click: this.editSitemap,
			},
			'#projects tr td': {
				click: this.editProject,
			},
			'#sitemaps button[action=delete-sitemap]': {
				click: this.deleteSitemap,
			},
			'#sitemaps button[action=create-copy-sitemap]': {
				click: this.copySitemap,
			},
			'#sitemap-scrape-nav-button': {
				click: this.showScrapeSitemapConfigPanel,
			},
			'#submit-scrape-sitemap-form': {
				submit: () => false,
			},
			'#submit-scrape-sitemap': {
				click: this.scrapeSitemap,
			},
			'#sitemaps button[action=browse-sitemap-data]': {
				click: this.sitemapListBrowseSitemapData,
			},
			// @TODO move to tr
			'#selector-tree tbody tr': {
				click: this.showChildSelectors,
			},
			'#selector-tree .breadcrumb a': {
				click: this.treeNavigationShowSitemapSelectorList,
			},
			'#selector-tree tr button[action=edit-selector]': {
				click: this.editSelector,
			},
			'#edit-selector select[name=type]': {
				change: () => this.selectorTypeChanged(true),
			},
			'#edit-selector button[action=save-selector]': {
				click: this.saveSelector,
			},
			'#edit-selector button[action=cancel-selector-editing]': {
				click: this.cancelSelectorEditing,
			},
			'#edit-selector #selectorId': {
				'change:flexdatalist': this.updateCurrentlyEditedSelectorInParentsList,
			},
			'#selector-tree button[action=add-selector]': {
				click: this.addSelector,
			},
			'#selector-tree tr button[action=delete-selector]': {
				click: this.deleteSelector,
			},
			'#selector-tree tr button[action=preview-selector]': {
				click: this.previewSelectorFromSelectorTree,
			},
			'#selector-tree tr button[action=data-preview-selector]': {
				click: this.previewSelectorDataFromSelectorTree,
			},
			'#edit-selector button[action=select-selector]': {
				click: this.selectSelector,
			},
			'#edit-selector button[action=select-table-header-row-selector]': {
				click: this.selectTableHeaderRowSelector,
			},
			'#edit-selector button[action=refresh-header-row-selector]': {
				click: this.refreshTableColumns,
			},
			'#edit-selector button[action=select-table-data-row-selector]': {
				click: this.selectTableDataRowSelector,
			},
			'#edit-selector button[action=preview-selector]': {
				click: this.previewSelector,
			},
			'#edit-selector button[action=preview-click-or-scroll-element-selector]': {
				click: this.previewClickOrScrollElementSelector,
			},
			'#edit-selector button[action=preview-table-row-selector]': {
				click: this.previewTableRowSelector,
			},
			'#edit-selector button[action=preview-selector-data]': {
				click: this.previewSelectorDataFromSelectorEditing,
			},
			'#data-export-form .data-export-control': {
				input: this.sitemapExportDataFormChanged,
			},
			'#data-export-generate-file': {
				click: this.sitemapExportData,
			},
			'#logout-nav-button': {
				click: this.logOutButtonInit,
			},
			'#auth_form': {
				submit: this.authorizationSubmitButtonInit,
			},
		});
		if (this.store.supportAuth) {
			browser.runtime.onMessage.addListener(request => {
				if (request.authError || request.authStatusChanged) {
					$('#confirm-action-modal').remove();
					$('.modal-backdrop').remove();
					return this.showAuthPage();
				}
				return false;
			});
			await this.showAuthPage();
		} else {
			$(`#projects-nav-button`).hide();
			await this.showSitemaps();
		}
	}

	clearState() {
		$('.open').removeClass('open');
		this.state = {
			// sitemap that is currently open
			currentSitemap: null,
			// selector ids that are shown in the navigation
			editSitemapBreadcumbsSelectors: null,
			currentParentSelectorId: null,
			currentSelector: null,
		};
	}

	setStateEditSitemap(sitemap) {
		this.state.currentSitemap = sitemap;
		this.state.editSitemapBreadcumbsSelectors = [sitemap.rootSelector];
		this.state.currentParentSelectorId = sitemap.rootSelector;
	}

	setActiveNavigationButton(navigationId) {
		$('.nav .active').removeClass('active');
		$(`#${navigationId}-nav-button`).closest('li').addClass('active');

		if (navigationId.match(/^sitemap-/)) {
			const navButton = $('#sitemap-nav-button');
			navButton.removeClass('disabled');
			navButton.closest('li').addClass('active');
			$('#navbar-active-sitemap-id').text(`(${this.state.currentSitemap._id})`);
		} else if (navigationId.match(/^projects/)) {
			$('#sitemaps-nav-button span#navbar-active-project-id').text(``);
			$('#navbar-active-sitemap-id').text('');
		} else {
			$('#sitemap-nav-button').addClass('disabled');
			$('#navbar-active-sitemap-id').text('');
		}

		if (navigationId.match(/^create-sitemap-/)) {
			$('#create-sitemap-nav-button').closest('li').addClass('active');
		}
	}

	/**
	 * Returns bootstrapValidator object for current form in viewport
	 */
	getFormValidator(selector = '#viewport form') {
		return $(selector).data('bootstrapValidator');
	}

	/**
	 * Returns whether current form in the viewport is valid
	 * @returns {Boolean}
	 */
	isValidForm(selector = '#viewport form') {
		const validator = this.getFormValidator(selector);
		// validate method calls submit which is not needed in this case.
		for (const field in validator.options.fields) {
			validator.validateField(field);
		}

		return validator.isValid();
	}

	/**
	 * Add validation to sitemap creation or editing form
	 */

	initSitemapValidation() {
		$('#viewport form').bootstrapValidator({
			fields: {
				_id: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey('sitemapid_empty_message'),
						},
						stringLength: {
							min: 3,
							message: Translator.getTranslationByKey('sitemapid_short_message'),
						},
						regexp: {
							regexp: SITEMAP_ID_REGEXP,
							message: Translator.getTranslationByKey('sitemapid_invalid_char'),
						},
						// placeholder for sitemap id existance validation
						callback: {
							message: Translator.getTranslationByKey('sitemapid_repeated_id'),
							callback() {
								return true;
							},
						},
					},
				},
				startUrls: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey('sitemapurl_empty_message'),
						},
						callback: {
							message: Translator.getTranslationByKey('sitemapurl_invalid_message'),
							callback(value) {
								return Sitemap.validateStartUrls(value.split(','));
							},
						},
					},
				},
				urlPattern: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey(
								'sitemap_url_pattern_empty_message'
							),
						},
						callback: {
							message: Translator.getTranslationByKey(
								'sitemap_url_pattern_invalid_message'
							),
							callback: Sitemap.validateUrlPattern,
						},
					},
				},
				model: {
					validators: {
						callback: {
							callback(value) {
								if (!value) {
									return {
										message: Translator.getTranslationByKey(
											'sitemapmodel_empty_message'
										),
										valid: true,
									};
								}
								try {
									return Model.validateModel(JSON.parse(value));
								} catch (e) {
									return {
										valid: false,
										message: Translator.getTranslationByKey(
											'sitemapjson_invalid_message'
										),
									};
								}
							},
						},
					},
				},
			},
		});
	}

	showCreateSitemap() {
		this.setActiveNavigationButton('create-sitemap-create');
		const sitemapForm = ich.SitemapCreate();
		$('#viewport').html(sitemapForm);
		this.initSitemapValidation();
		Translator.translatePage();
		this.sitemapTypeChanged();
		return true;
	}

	sitemapTypeChanged() {
		const $form = $('#viewport form');
		const validator = this.getFormValidator();
		const type = $form.find('[name=sitemapType]').val();
		if (type === 'full') {
			$form.find('.start-url-block').show();
			$form.find('.url-pattern-block').hide();
			validator.resetField('startUrls');
		} else {
			$form.find('.start-url-block').hide();
			$form.find('.url-pattern-block').show();
			validator.resetField('urlPattern');
		}
	}

	initCopySitemapValidation() {
		$('#confirm-action-modal').bootstrapValidator({
			fields: {
				modal_confirm_action_input_copy_sitemap: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey('sitemapid_empty_message'),
						},
						stringLength: {
							min: 3,
							message: Translator.getTranslationByKey('sitemapid_short_message'),
						},
						regexp: {
							regexp: SITEMAP_ID_REGEXP,
							message: Translator.getTranslationByKey('sitemapid_invalid_char'),
						},
						callback: {
							message: Translator.getTranslationByKey('sitemapid_repeated_id'),
							callback(value, validator) {
								return true;
							},
						},
					},
				},
			},
		});
	}

	initImportSitemapValidation() {
		$('#viewport form').bootstrapValidator({
			fields: {
				_id: {
					validators: {
						stringLength: {
							min: 3,
							message: Translator.getTranslationByKey('sitemapid_short_message'),
						},
						regexp: {
							regexp: SITEMAP_ID_REGEXP,
							message: Translator.getTranslationByKey('sitemapid_invalid_char'),
						},
						// placeholder for sitemap id existance validation
						callback: {
							message: Translator.getTranslationByKey('sitemapid_repeated_id'),
							callback(value, validator) {
								validator.revalidateField('sitemapJSON');
								return true;
							},
						},
					},
				},
				sitemapJSON: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey('sitemapjson_empty_message'),
						},
						callback: {
							message: Translator.getTranslationByKey('sitemapjson_invalid_message'),
							callback(value, validator) {
								try {
									validator.updateStatus('_id', 'NOT_VALIDATED', 'callback');
									const sitemap = JSON.parse(value);

									const renameId = $('#viewport form [name="_id"]').val();
									if (!renameId) {
										if (!sitemap.hasOwnProperty('_id')) {
											return {
												valid: false,
												message:
													Translator.getTranslationByKey(
														'sitemapid_empty_message'
													),
											};
										}
										if (sitemap._id.length < 3) {
											return {
												valid: false,
												message:
													Translator.getTranslationByKey(
														'sitemapid_short_message'
													),
											};
										}
										if (!sitemap._id.match(SITEMAP_ID_REGEXP)) {
											return {
												valid: false,
												message:
													Translator.getTranslationByKey(
														'sitemapid_invalid_char'
													),
											};
										}
									}
									// check sitemapSpecificationVersion not newer than plugin version
									if (sitemap.hasOwnProperty('sitemapSpecificationVersion')) {
										const versionOfSitemap =
											sitemap.sitemapSpecificationVersion;
										if (
											versionOfSitemap >
											SitemapSpecMigrationManager.currentVersion()
										) {
											return {
												valid: false,
												message: Translator.getTranslationByKey(
													'sitemap_invalid_specificationVersion'
												),
											};
										}
									}
									// check for start urls or url pattern
									if (
										Object.hasOwn(sitemap, 'startUrls') &&
										Object.hasOwn(sitemap, 'urlPattern')
									) {
										return {
											valid: false,
											message: Translator.getTranslationByKey(
												'sitemap_either_start_urls_and_pattern'
											),
										};
									}
									if (Object.hasOwn(sitemap, 'startUrls')) {
										if (!Sitemap.validateStartUrls(sitemap.startUrls)) {
											return {
												valid: false,
												message: Translator.getTranslationByKey(
													'sitemapurl_invalid_message'
												),
											};
										}
									} else if (Object.hasOwn(sitemap, 'urlPattern')) {
										if (!Sitemap.validateUrlPattern(sitemap.urlPattern)) {
											return {
												valid: false,
												message: Translator.getTranslationByKey(
													'sitemap_url_pattern_invalid_message'
												),
											};
										}
									} else {
										return {
											valid: false,
											message: Translator.getTranslationByKey(
												'sitemap_either_start_urls_and_pattern'
											),
										};
									}

									const result = Model.validateModel(sitemap.model);
									if (!result.valid) {
										return result;
									}
								} catch (e) {
									return {
										valid: false,
										message: Translator.getTranslationByKey(
											'sitemapjson_invalid_message'
										),
									};
								}
								return {
									message:
										Translator.getTranslationByKey('sitemap_valid_message'),
									valid: true,
								};
							},
						},
					},
				},
			},
		});
	}

	readBlob() {
		const { files } = $('#sitemapFiles')[0];
		if (!files.length) {
			alert(Translator.getTranslationByKey('selecting_file_error'));
			return;
		}
		const file = files[0];
		const validator = this.getFormValidator();
		const blob = file.slice(0, file.size);
		blob.text().then(text => {
			$('#sitemapJSON').val(text);
			validator.revalidateField('_id');
			validator.revalidateField('sitemapJSON');
		});
		return true;
	}

	showImportSitemapPanel() {
		this.setActiveNavigationButton('create-sitemap-import');
		const sitemapForm = ich.SitemapImport();
		$('#viewport').html(sitemapForm);
		this.initImportSitemapValidation();
		Translator.translatePage();
		return true;
	}

	async showTemplateSitemapPanel() {
		this.showImportSitemapPanel();
		const tabs = await browser.tabs.query({ active: true, lastFocusedWindow: true });
		// Filter out extension pages
		const extensionUrl = browser.runtime.getURL('');
		const currentTab = tabs.find(tab => !tab.url.startsWith(extensionUrl)) || tabs[0];
		if (currentTab && currentTab.url) {
			document.getElementById('edit_sitemap_id').value = urlToSitemapName(currentTab.url);
			sitemapTemplate.startUrls = [currentTab.url];
			$('#sitemapJSON').text(JSON.stringify(sitemapTemplate));
		}
		return true;
	}

	showXMLSitemapImportPanel() {
		this.setActiveNavigationButton('create-sitemap-import');
		const $xmlImportForm = ich.SitemapXMLImport();
		$('#viewport').html($xmlImportForm);
		Translator.translatePage();
		return true;
	}

	async fetchXMLSitemap() {
		const sitemapUrl = $('#xml-sitemap-url').val();
		const regexFilter = $('#url-regex-filter').val();

		if (!sitemapUrl) {
			$('#xml-import-error').text('Please enter a sitemap URL').removeClass('hidden');
			return;
		}

		// Show loading, hide results and error
		$('#xml-import-loading').removeClass('hidden');
		$('#xml-sitemap-results').addClass('hidden');
		$('#xml-import-error').addClass('hidden');

		try {
			// Fetch the sitemap XML via background script to avoid CORS
			const response = await browser.runtime.sendMessage({
				fetchXMLSitemap: true,
				url: sitemapUrl,
			});

			if (response.error) {
				throw new Error(response.error);
			}

			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(response.xml, 'text/xml');

			// Check for parsing errors
			const parseError = xmlDoc.querySelector('parsererror');
			if (parseError) {
				throw new Error('Invalid XML format');
			}

			// Extract URLs from sitemap
			let urls = [];
			const urlElements = xmlDoc.querySelectorAll('url > loc');
			urlElements.forEach(el => {
				urls.push(el.textContent.trim());
			});

			// Also check for sitemap index (nested sitemaps)
			const sitemapElements = xmlDoc.querySelectorAll('sitemap > loc');
			if (sitemapElements.length > 0 && urls.length === 0) {
				$('#xml-import-error')
					.text(
						'This is a sitemap index. Please use one of the individual sitemap URLs listed in it.'
					)
					.removeClass('hidden');
				$('#xml-import-loading').addClass('hidden');
				return;
			}

			// Apply regex filter if provided
			if (regexFilter) {
				try {
					const regex = new RegExp(regexFilter, 'i');
					urls = urls.filter(url => regex.test(url));
				} catch (e) {
					throw new Error('Invalid regex pattern: ' + e.message);
				}
			}

			if (urls.length === 0) {
				$('#xml-import-error')
					.text('No URLs found matching the criteria')
					.removeClass('hidden');
				$('#xml-import-loading').addClass('hidden');
				return;
			}

			// Display results
			$('#xml-url-count').text(urls.length);
			const $urlList = $('#xml-url-list');
			$urlList.empty();

			urls.forEach((url, index) => {
				const $item = $(`
					<div class="url-checkbox-item">
						<label>
							<input type="checkbox" class="xml-url-checkbox" value="${url}" checked>
							${url}
						</label>
					</div>
				`);
				$urlList.append($item);
			});

			// Generate suggested sitemap ID from URL
			const suggestedId = urlToSitemapName(sitemapUrl);
			$('#new-sitemap-id').val(suggestedId);

			$('#xml-sitemap-results').removeClass('hidden');
		} catch (error) {
			$('#xml-import-error')
				.text('Error: ' + error.message)
				.removeClass('hidden');
		} finally {
			$('#xml-import-loading').addClass('hidden');
		}
	}

	selectAllXMLUrls() {
		$('.xml-url-checkbox').prop('checked', true);
	}

	deselectAllXMLUrls() {
		$('.xml-url-checkbox').prop('checked', false);
	}

	async createSitemapFromXML() {
		const sitemapId = $('#new-sitemap-id').val();

		if (!sitemapId) {
			$('#xml-import-error').text('Please enter a sitemap ID').removeClass('hidden');
			return;
		}

		// Validate sitemap ID
		if (!sitemapId.match(SITEMAP_ID_REGEXP)) {
			$('#xml-import-error')
				.text('Invalid sitemap ID. Use lowercase letters, numbers, and underscores.')
				.removeClass('hidden');
			return;
		}

		// Get selected URLs
		const selectedUrls = [];
		$('.xml-url-checkbox:checked').each(function () {
			selectedUrls.push($(this).val());
		});

		if (selectedUrls.length === 0) {
			$('#xml-import-error').text('Please select at least one URL').removeClass('hidden');
			return;
		}

		// Check if sitemap exists
		const sitemapExists = await this.store.sitemapExists(sitemapId, this.getCurrentProjectId());
		if (sitemapExists) {
			$('#xml-import-error')
				.text('A sitemap with this ID already exists')
				.removeClass('hidden');
			return;
		}

		// Create the sitemap
		let sitemap = new Sitemap(sitemapId, selectedUrls, undefined, undefined, []);
		sitemap = await this.store.createSitemap(sitemap, this.getCurrentProjectId());
		this._editSitemap(sitemap);
	}

	showSitemapExportPanel() {
		this.setActiveNavigationButton('sitemap-export');
		const sitemap = this.state.currentSitemap;
		const sitemapJSON = sitemap.exportSitemap();

		const sitemapExportForm = ich.SitemapExport({
			sitemapJSON,
		});

		const blob = new Blob([sitemapJSON], { type: 'text/json' });

		$('#viewport').html(sitemapExportForm);
		Translator.translatePage();
		const downloadButton = $('#download-button');
		downloadButton.attr('href', window.URL.createObjectURL(blob));
		downloadButton.attr('download', `${sitemap._id}.json`);

		return true;
	}

	copySitemapToClipboard() {
		const copyText = document.getElementById('sitemap-area');
		const range = document.createRange();
		range.selectNode(copyText);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
	}

	async showAuthPage() {
		$('.nav').hide();
		const isAuthorized = await this.store.isAuthorized();
		if (isAuthorized) {
			$('#user-name').text(isAuthorized.data.name);
			Translator.translatePage();
			await this.showProjects();
		} else {
			this.storeStandName = await this.store.getStandName();
			const $authorizationPage = ich.AuthorizationPage({ standName: this.storeStandName });
			$('#viewport').html($authorizationPage);
			this.authorizationFormInit();
			Translator.translatePage();
		}
	}

	authorizationFormInit() {
		// Sync storage settings
		$('body').on('click', '#password-checkbox', function () {
			if ($(this).is(':checked')) {
				$('#userPassword').attr('type', 'text');
			} else {
				$('#userPassword').attr('type', 'password');
			}
		});
	}

	async authorizationSubmitButtonInit() {
		const credential = {
			username: $('#userLogin').val(),
			password: $('#userPassword').val(),
		};

		const authStatus = await this.store.authorize(credential);

		if (authStatus.authStatus.success) {
			const authData = await this.store.isAuthorized();
			$('#user-name').show().text(authData.data.name);
			$('#logout-nav-button').show();
			await this.showProjects();
		} else if (!authStatus.authStatus.success) {
			$('.alert')
				.attr('id', 'error')
				.text(
					Translator.getTranslationByKey('options_auth_error_updating') +
						authStatus.authStatus.message
				)
				.show();
			Translator.translatePage();
		}
	}

	async logOutButtonInit() {
		await this.store.logOut().finally(async () => await this.showAuthPage());
	}

	async showProjects() {
		this.clearState();
		this.setActiveNavigationButton('projects');

		$(`#sitemaps-nav-button`).prop('disabled', true);
		$('#create-sitemap-nav-button').prop('disabled', true);

		const projects = await this.store.getAllProjects();
		const $projectListPanel = ich.ProjectList();

		$('.nav').show();
		if (this.store.supportAuth) {
			$('#auth_nav').css('display', 'block');
		} else {
			$('#auth_nav').css('display', 'none');
		}
		projects.forEach(project => {
			const $project = ich.ProjectListItem(project);
			$project.data('project', project);
			$projectListPanel.find('tbody').append($project);
		});
		$('#viewport').html($projectListPanel);
		Translator.translatePage();

		$('table').searcher({
			inputSelector: '#searchbar',
			toggle: (item, containsText) => {
				$(item).unhighlight();
				$(item).toggle(containsText);
				$(item).highlight($('#searchbar').val());
			},
		});
		$('#searchbar').attr(
			'placeholder',
			Translator.getTranslationByKey('searchbar_placeholder_message_for_projects')
		);
	}

	getCurrentProjectId() {
		return $(`#sitemaps-nav-button`).attr('projectid');
	}

	async showSitemaps(projectId, projectTitle) {
		this.clearState();

		if (typeof projectId === 'string') {
			$('#sitemaps-nav-button span#navbar-active-project-id').text(`(${projectTitle})`);
			$(`#sitemaps-nav-button`).attr('projectid', projectId);
		} else {
			projectId = this.getCurrentProjectId();
		}

		const sitemaps = await this.store.getAllSitemaps(projectId);

		const $sitemapListPanel = ich.SitemapList();

		this.setActiveNavigationButton('sitemaps');
		$(`#sitemaps-nav-button`).prop('disabled', false);

		if (!sitemaps) {
			$('#sitemaps').hide();
			$('#viewport').html(
				'<div class="container"><div data-i18n="get_sitemap_error"></div></div>'
			);
			Translator.translatePage();
		} else {
			$('.nav').show();
			if (this.store.supportAuth) {
				$('#auth_nav').css('display', 'block');
			} else {
				$('#auth_nav').css('display', 'none');
			}
			sitemaps.forEach(sitemap => {
				const $sitemap = ich.SitemapListItem(sitemap);
				$sitemap.data('sitemap', sitemap);
				$sitemapListPanel.find('tbody').append($sitemap);
			});
			$('#create-sitemap-nav-button').prop('disabled', false);
			$('#viewport').html($sitemapListPanel);
			Translator.translatePage();
		}
		$('table').searcher({
			inputSelector: '#searchbar',
			textSelector: 'td:not(td.actions)',
			toggle: (item, containsText) => {
				$(item).unhighlight();
				$(item).toggle(containsText);
				$(item)
					.find('td:not(.actions)')
					.each(function () {
						$(this).highlight($('#searchbar').val());
					});
			},
		});
		$('#searchbar').attr(
			'placeholder',
			Translator.getTranslationByKey('searchbar_placeholder_message_for_sitemaps')
		);
	}

	getSitemapFromMetadataForm() {
		const metadata = {};
		const $form = $('#viewport form');
		metadata.id = $form.find('input[name=_id]').val();
		const sitemapType = $form.find('[name=sitemapType]').val();
		if (sitemapType === 'full') {
			metadata.startUrls = $form
				.find('.input-start-url')
				.val()
				.split(',')
				.map(item => item.trim());
		} else {
			metadata.urlPattern = $form.find('.input-url-pattern').val();
		}
		const modelStr = $form.find('.input-model').val();
		if (modelStr) {
			metadata.model = JSON.parse(modelStr);
		}
		return metadata;
	}

	async createSitemap() {
		// cancel submit if invalid form

		if (!this.isValidForm()) {
			return false;
		}
		const sitemapData = this.getSitemapFromMetadataForm();
		// check whether sitemap with this id already exist
		const sitemapExists = await this.store.sitemapExists(
			sitemapData.id,
			this.getCurrentProjectId()
		);
		if (sitemapExists) {
			const validator = this.getFormValidator();
			validator.updateStatus('_id', 'INVALID', 'callback');
		} else {
			let sitemap = new Sitemap(
				sitemapData.id,
				sitemapData.startUrls,
				sitemapData.urlPattern,
				sitemapData.model,
				[]
			);
			sitemap = await this.store.createSitemap(sitemap, this.getCurrentProjectId());
			this._editSitemap(sitemap);
		}
	}

	async importSitemap() {
		// cancel submit if invalid form

		if (!this.isValidForm()) {
			return false;
		}
		// load data from form
		const sitemapJSON = $('[name=sitemapJSON]').val();
		const sitemapObj = JSON.parse(sitemapJSON);

		const id = $('input[name=_id]').val() || sitemapObj._id;

		// check whether sitemap with this id already exist
		const sitemapExists = await this.store.sitemapExists(id, this.getCurrentProjectId());
		if (sitemapExists) {
			const validator = this.getFormValidator();
			validator.updateStatus('_id', 'INVALID', 'callback');
		} else {
			let sitemap = Sitemap.sitemapFromObj(sitemapObj);
			sitemap._id = id;
			sitemap = await this.store.createSitemap(sitemap, this.getCurrentProjectId());
			this._editSitemap(sitemap);
		}
	}

	editSitemapMetadata() {
		this.setActiveNavigationButton('sitemap-edit-metadata');

		const sitemap = this.state.currentSitemap.clone();
		if (sitemap.model) {
			sitemap.model = sitemap.model.toString();
		}
		const $sitemapMetadataForm = ich.SitemapEditMetadata(sitemap);
		$('#viewport').html($sitemapMetadataForm);
		this.initSitemapValidation();
		Translator.translatePage();

		const $sitemapTypeGroup = $('#viewport form .sitemap-type');
		$sitemapTypeGroup.find('[name=sitemapType]').val(sitemap.urlPattern ? 'partial' : 'full');
		this.sitemapTypeChanged();
		if (this.store.storageType === 'StoreTalismanApi') {
			$sitemapTypeGroup.hide();
		}
		return true;
	}

	async editSitemapMetadataSave() {
		const sitemap = this.state.currentSitemap;
		const sitemapData = this.getSitemapFromMetadataForm();

		// cancel submit if invalid form
		if (!this.isValidForm()) {
			return false;
		}

		// check whether sitemap with this id already exist
		const sitemapExists = await this.store.sitemapExists(
			sitemapData.id,
			this.getCurrentProjectId()
		);

		if (sitemap._id !== sitemapData.id && sitemapExists) {
			const validator = this.getFormValidator();
			validator.updateStatus('_id', 'INVALID', 'callback');
			return false;
		}

		const previousSitemapId = sitemap._id;
		sitemap._id = sitemapData.id;
		sitemap.startUrls = sitemapData.startUrls;
		sitemap.urlPattern = sitemapData.urlPattern;
		sitemap.model = new Model(sitemapData.model);
		await this.store.saveSitemap(sitemap, previousSitemapId, this.getCurrentProjectId());
		this.showSitemapSelectorList();
	}

	async editProject(td) {
		const project = $(td).parent().data('project');
		return await this.showSitemaps(project.id, project.title);
	}

	/**
	 * Callback when sitemap edit button is clicked in sitemap grid
	 */
	editSitemap(td) {
		const sitemap = $(td).parent().data('sitemap');
		this._editSitemap(sitemap);
	}

	_editSitemap(sitemap) {
		this.setStateEditSitemap(sitemap);
		this.setActiveNavigationButton('sitemap');
		this.showSitemapSelectorList();
	}

	showSitemapSelectorList() {
		this.setActiveNavigationButton('sitemap-selector-list');

		const sitemap = this.state.currentSitemap;
		const parentSelectors = this.state.editSitemapBreadcumbsSelectors;
		const parentSelectorId = this.state.currentParentSelectorId.uuid;

		const $selectorListPanel = ich.SelectorList({
			parentSelectors,
		});
		const selectors = sitemap.getDirectChildSelectors(parentSelectorId);
		selectors.forEach(selector => {
			const selectorType = this.selectorTypes.find(selType => selType.type === selector.type);
			const parentUuids = new Set(selector.parentSelectors);
			const parentIds = [sitemap.rootSelector, ...sitemap.selectors]
				.filter(({ uuid }) => parentUuids.has(uuid))
				.map(({ id }) => id);
			const $selector = ich.SelectorListItem({
				...selector,
				parentSelectors: parentIds,
				title: selectorType.title,
			});
			$selector.data('selector', selector);
			$selectorListPanel.find('tbody').append($selector);
		});
		$('#viewport').html($selectorListPanel);
		Translator.translatePage();
		return true;
	}

	showSitemapSelectorGraph() {
		this.setActiveNavigationButton('sitemap-selector-graph');
		const sitemap = this.state.currentSitemap;
		const $selectorGraphPanel = ich.SitemapSelectorGraph();
		$('#viewport').html($selectorGraphPanel);
		const graphDiv = $('#selector-graph')[0];
		const graph = new SelectorGraphv2(sitemap);
		graph.draw(graphDiv, $(document).width(), 200);
		return true;
	}

	// ==================== TORCH METHODS ====================

	showTorchList() {
		this.setActiveNavigationButton('sitemap-torch');
		const sitemap = this.state.currentSitemap;

		// Prepare torch data for template
		const torchesData = sitemap.torches.map(torch => ({
			...torch.toJSON(),
			preActionsCount: torch.preActions.length,
			columnsCount: torch.columns.length,
		}));

		const $torchListPanel = ich.TorchList({ torches: torchesData });
		$('#viewport').html($torchListPanel);
		Translator.translatePage();
		return true;
	}

	showTorchCreate() {
		this.state.currentTorch = null;
		this.state.torchWizardStep = 1;
		this._renderTorchWizard();
	}

	editTorch(button) {
		const $card = $(button).closest('.torch-card');
		const torchId = $card.data('torch-id');
		const torch = this.state.currentSitemap.getTorch(torchId);

		if (torch) {
			this.state.currentTorch = torch;
			this.state.torchWizardStep = 1;
			this._renderTorchWizard(true);
		}
	}

	cloneTorch(button) {
		const $card = $(button).closest('.torch-card');
		const torchId = $card.data('torch-id');
		const torch = this.state.currentSitemap.getTorch(torchId);

		if (torch) {
			const clonedTorch = torch.clone();
			this.state.currentSitemap.addTorch(clonedTorch.toJSON());
			this._saveSitemapAndRefreshTorchList();
		}
	}

	deleteTorch(button) {
		const $card = $(button).closest('.torch-card');
		const torchId = $card.data('torch-id');

		if (confirm('Are you sure you want to delete this torch?')) {
			this.state.currentSitemap.deleteTorch(torchId);
			this._saveSitemapAndRefreshTorchList();
		}
	}

	runTorch(button) {
		const $card = $(button).closest('.torch-card');
		const torchId = $card.data('torch-id');
		// TODO: Implement torch execution
		console.log('Running torch:', torchId);
		alert('Torch execution will be implemented in a future update.');
	}

	cancelTorchEdit() {
		this.state.currentTorch = null;
		this.showTorchList();
	}

	saveTorch() {
		const torchData = this._collectTorchFormData();
		const validation = new Torch(torchData).validate();

		if (!validation.valid) {
			alert(validation.errors.map(e => e.message).join('\n'));
			return;
		}

		if (this.state.currentTorch) {
			// Update existing torch
			this.state.currentSitemap.updateTorch(this.state.currentTorch.id, torchData);
		} else {
			// Create new torch
			this.state.currentSitemap.addTorch(torchData);
		}

		this._saveSitemapAndRefreshTorchList();
	}

	torchWizardNext() {
		if (this.state.torchWizardStep === 1) {
			this.state.torchWizardStep = 2;
			this._updateTorchWizardStep();
		}
	}

	torchWizardPrev() {
		if (this.state.torchWizardStep === 2) {
			this.state.torchWizardStep = 1;
			this._updateTorchWizardStep();
		}
	}

	addPreAction() {
		const $container = $('#preactions-container');
		const index = $container.find('.preaction-item').length;
		const $newItem = this._createPreActionItem(index, {
			type: PreActionTypes.WAIT,
			selector: '',
			value: '2000',
			repeat: 1,
			delay: 0,
		});
		$container.append($newItem);
	}

	removePreAction(button) {
		$(button).closest('.preaction-item').remove();
		this._reindexPreActions();
	}

	addTorchColumn() {
		const $container = $('#columns-container');
		const $newItem = this._createColumnItem({
			id: 'col_' + Date.now().toString(36),
			name: '',
			selector: '',
			attribute: 'text',
			multiple: false,
		});
		$container.append($newItem);
	}

	removeTorchColumn(button) {
		$(button).closest('.column-item').remove();
	}

	toggleColumnAdvanced(button) {
		const $column = $(button).closest('.column-item');
		$column.find('.column-advanced').toggleClass('hidden');
	}

	async refreshTorchPreview() {
		const columns = this._collectColumnsData();

		if (columns.length === 0) {
			$('#preview-body').html('<tr><td colspan="100%">No columns defined</td></tr>');
			$('#preview-status').text('');
			return;
		}

		// Build preview header
		const $header = $('#preview-header');
		$header.empty();
		columns.forEach(col => {
			$header.append($('<th>').text(col.name || 'Unnamed'));
		});

		$('#preview-status').text('Loading preview...');

		try {
			// Get data from current page
			const data = await this.contentScript.getColumnPreviewData(columns);

			const $body = $('#preview-body');
			$body.empty();

			if (data && data.length > 0) {
				data.slice(0, 10).forEach(row => {
					const $tr = $('<tr>');
					columns.forEach(col => {
						const value = row[col.name] || '';
						$tr.append($('<td>').text(Array.isArray(value) ? value.join(', ') : value));
					});
					$body.append($tr);
				});
				$('#preview-status').text(
					`Showing ${Math.min(data.length, 10)} of ${data.length} rows`
				);
			} else {
				$body.html('<tr><td colspan="100%">No data found. Check your selectors.</td></tr>');
				$('#preview-status').text('');
			}
		} catch (error) {
			console.error('Preview error:', error);
			$('#preview-body').html('<tr><td colspan="100%">Error loading preview</td></tr>');
			$('#preview-status').text('Error: ' + error.message);
		}
	}

	async selectPreActionElement(button) {
		const $input = $(button).closest('.preaction-selector-group').find('.preaction-selector');
		await this._selectElementForInput($input);
	}

	async selectColumnElement(button) {
		const $input = $(button).closest('.column-selector-group').find('.column-selector');
		await this._selectElementForInput($input);
	}

	async _selectElementForInput($input) {
		try {
			const selector = await this.contentScript.selectElement();
			if (selector) {
				$input.val(selector);
			}
		} catch (error) {
			console.error('Element selection error:', error);
		}
	}

	_renderTorchWizard(isEdit = false) {
		const torch = this.state.currentTorch || new Torch({ name: '' });

		const templateData = {
			name: torch.name || '',
			description: torch.description || '',
		};

		const $panel = ich.TorchCreate(templateData);
		$('#viewport').html($panel);

		// Update title if editing
		if (isEdit) {
			$('.torch-title-text').attr('data-i18n', 'torch_edit_title').text('Edit Torch');
		}

		// Populate pre-actions
		const $preactionsContainer = $('#preactions-container');
		torch.preActions.forEach((action, index) => {
			$preactionsContainer.append(this._createPreActionItem(index, action.toJSON()));
		});

		// Populate columns
		const $columnsContainer = $('#columns-container');
		torch.columns.forEach(col => {
			$columnsContainer.append(this._createColumnItem(col.toJSON()));
		});

		Translator.translatePage();
		this._updateTorchWizardStep();
	}

	_updateTorchWizardStep() {
		const step = this.state.torchWizardStep;

		// Update step indicators
		$('.wizard-step').removeClass('active completed');
		$('.wizard-step[data-step="1"]').addClass(
			step > 1 ? 'completed' : step === 1 ? 'active' : ''
		);
		$('.wizard-step[data-step="2"]').addClass(step === 2 ? 'active' : '');

		// Show/hide panels
		$('#step-preactions').toggleClass('hidden', step !== 1);
		$('#step-columns').toggleClass('hidden', step !== 2);

		// Update navigation buttons
		$('#torch-prev').toggleClass('hidden', step === 1);
		$('#torch-next').toggleClass('hidden', step === 2);
		$('#torch-save').toggleClass('hidden', step !== 2);

		// Auto-refresh preview on step 2
		if (step === 2) {
			this.refreshTorchPreview();
		}
	}

	_createPreActionItem(index, data) {
		return $(`
			<div class="preaction-item" data-index="${index}">
				<div class="preaction-handle">
					<span class="glyphicon glyphicon-menu-hamburger"></span>
				</div>
				<div class="preaction-content">
					<div class="preaction-row">
						<select class="form-control preaction-type" name="preaction-type">
							<option value="click_one" ${data.type === 'click_one' ? 'selected' : ''}>Click Element</option>
							<option value="click_all" ${data.type === 'click_all' ? 'selected' : ''}>Click All</option>
							<option value="load_more" ${data.type === 'load_more' ? 'selected' : ''}>Load More</option>
							<option value="scroll" ${data.type === 'scroll' ? 'selected' : ''}>Scroll</option>
							<option value="wait" ${data.type === 'wait' ? 'selected' : ''}>Wait</option>
							<option value="hover" ${data.type === 'hover' ? 'selected' : ''}>Hover</option>
						</select>
						<div class="input-group preaction-selector-group">
							<input type="text" class="form-control preaction-selector"
								name="preaction-selector" value="${data.selector || ''}"
								placeholder="CSS selector">
							<span class="input-group-btn">
								<button type="button" class="btn btn-default select-preaction-element">
									<span class="glyphicon glyphicon-screenshot"></span>
								</button>
							</span>
						</div>
					</div>
					<div class="preaction-row preaction-options">
						<div class="preaction-option">
							<label>Value:</label>
							<input type="text" class="form-control preaction-value"
								name="preaction-value" value="${data.value || ''}" placeholder="e.g., 2000ms">
						</div>
						<div class="preaction-option">
							<label>Repeat:</label>
							<input type="number" class="form-control preaction-repeat"
								name="preaction-repeat" value="${data.repeat || 1}" min="1">
						</div>
						<div class="preaction-option">
							<label>Delay:</label>
							<input type="text" class="form-control preaction-delay"
								name="preaction-delay" value="${data.delay || 0}" placeholder="0ms">
						</div>
					</div>
				</div>
				<div class="preaction-actions">
					<button type="button" class="btn btn-link btn-sm remove-preaction" title="Remove">
						<span class="glyphicon glyphicon-trash"></span>
					</button>
				</div>
			</div>
		`);
	}

	_createColumnItem(data) {
		return $(`
			<div class="column-item" data-id="${data.id}">
				<div class="column-handle">
					<span class="glyphicon glyphicon-menu-hamburger"></span>
				</div>
				<div class="column-content">
					<div class="column-row">
						<input type="text" class="form-control column-name"
							name="column-name" value="${data.name || ''}" placeholder="Column name" required>
						<div class="input-group column-selector-group">
							<input type="text" class="form-control column-selector"
								name="column-selector" value="${data.selector || ''}"
								placeholder="CSS selector" required>
							<span class="input-group-btn">
								<button type="button" class="btn btn-default select-column-element">
									<span class="glyphicon glyphicon-screenshot"></span>
								</button>
							</span>
						</div>
					</div>
					<div class="column-row column-options">
						<select class="form-control column-attribute" name="column-attribute">
							<option value="text" ${data.attribute === 'text' ? 'selected' : ''}>Text content</option>
							<option value="href" ${data.attribute === 'href' ? 'selected' : ''}>Link (href)</option>
							<option value="src" ${data.attribute === 'src' ? 'selected' : ''}>Image (src)</option>
							<option value="html" ${data.attribute === 'html' ? 'selected' : ''}>Inner HTML</option>
							<option value="outerHtml" ${data.attribute === 'outerHtml' ? 'selected' : ''}>Outer HTML</option>
						</select>
						<label class="checkbox-inline">
							<input type="checkbox" class="column-multiple" name="column-multiple"
								${data.multiple ? 'checked' : ''}>
							<span>Multiple</span>
						</label>
					</div>
					<div class="column-row column-advanced hidden">
						<input type="text" class="form-control column-regex"
							name="column-regex" value="${data.regex || ''}" placeholder="Regex pattern (optional)">
						<input type="text" class="form-control column-transform"
							name="column-transform" value="${data.transform || ''}" placeholder="Transform (optional)">
					</div>
				</div>
				<div class="column-actions">
					<button type="button" class="btn btn-link btn-sm toggle-column-advanced" title="Advanced">
						<span class="glyphicon glyphicon-cog"></span>
					</button>
					<button type="button" class="btn btn-link btn-sm remove-column" title="Remove">
						<span class="glyphicon glyphicon-trash"></span>
					</button>
				</div>
			</div>
		`);
	}

	_reindexPreActions() {
		$('#preactions-container .preaction-item').each(function (i) {
			$(this).attr('data-index', i);
		});
	}

	_collectTorchFormData() {
		return {
			id: this.state.currentTorch?.id,
			name: $('#torch-name').val().trim(),
			description: $('#torch-description').val().trim(),
			preActions: this._collectPreActionsData(),
			columns: this._collectColumnsData(),
		};
	}

	_collectPreActionsData() {
		const preActions = [];
		$('#preactions-container .preaction-item').each(function () {
			preActions.push({
				type: $(this).find('.preaction-type').val(),
				selector: $(this).find('.preaction-selector').val().trim(),
				value: $(this).find('.preaction-value').val().trim(),
				repeat: parseInt($(this).find('.preaction-repeat').val()) || 1,
				delay: parseInt($(this).find('.preaction-delay').val()) || 0,
				enabled: true,
			});
		});
		return preActions;
	}

	_collectColumnsData() {
		const columns = [];
		$('#columns-container .column-item').each(function () {
			columns.push({
				id: $(this).data('id'),
				name: $(this).find('.column-name').val().trim(),
				selector: $(this).find('.column-selector').val().trim(),
				attribute: $(this).find('.column-attribute').val(),
				multiple: $(this).find('.column-multiple').is(':checked'),
				regex: $(this).find('.column-regex').val().trim(),
				transform: $(this).find('.column-transform').val().trim(),
				enabled: true,
			});
		});
		return columns;
	}

	async _saveSitemapAndRefreshTorchList() {
		try {
			await this.store.saveSitemap(this.state.currentSitemap);
			this.showTorchList();
		} catch (error) {
			console.error('Error saving sitemap:', error);
			alert('Error saving: ' + error.message);
		}
	}

	// ==================== END TORCH METHODS ====================

	showChildSelectors(tr) {
		const selector = $(tr).data('selector');
		const parentSelectors = this.state.editSitemapBreadcumbsSelectors;
		this.state.currentParentSelectorId = { uuid: selector.uuid, id: selector.id };
		parentSelectors.push(selector);

		this.showSitemapSelectorList();
	}

	treeNavigationShowSitemapSelectorList(button) {
		const parentSelectors = this.state.editSitemapBreadcumbsSelectors;
		const controller = this;
		$('#selector-tree .breadcrumb li a').each(function (i, parentSelectorButton) {
			if (parentSelectorButton === button) {
				parentSelectors.splice(i + 1);
				controller.state.currentParentSelectorId = parentSelectors[i];
			}
		});
		this.showSitemapSelectorList();
	}

	initSelectorValidation() {
		const selectorsList = this.state.currentSitemap.selectors;
		return $('#viewport form').bootstrapValidator({
			fields: {
				id: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey('selectorid_empty_message'),
						},
						stringLength: {
							min: 3,
							message: Translator.getTranslationByKey('selectorid_short_message'),
						},
						regexp: {
							regexp: /^[^_].*$/,
							message: Translator.getTranslationByKey('selectorid_underscore'),
						},
					},
				},
				selector: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey('selector_empty_message'),
						},
					},
				},
				regex: {
					validators: {
						callback: {
							message: Translator.getTranslationByKey(
								'regex_regular_expressions_error_message'
							),
							callback(value, validator) {
								// allow no regex
								if (!value) {
									return true;
								}

								try {
									const matches = ''.match(new RegExp(value));
									return !(matches !== null && matches[0] === '');
								} catch (e) {
									return false;
								}
							},
						},
					},
				},
				regexgroup: {
					validators: {
						callback: {
							message: Translator.getTranslationByKey(
								'regex_group_numeric_error_message'
							),
							callback(value, validator) {
								if (value === '') {
									return true;
								}
								return !isNaN(value);
							},
						},
					},
				},
				clickElementSelector: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey('selector_click_empty_message'),
						},
					},
				},
				tableHeaderRowSelector: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey(
								'selector_header_empty_message'
							),
						},
					},
				},
				tableDataRowSelector: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey(
								'selector_data_row_empty_message'
							),
						},
					},
				},
				delay: {
					validators: {
						numeric: {
							message: Translator.getTranslationByKey('delay_numeric_message'),
						},
					},
				},
				paginationLimit: {
					validators: {
						numeric: {
							message: Translator.getTranslationByKey(
								'pagination_limit_numeric_message'
							),
						},
						callback: {
							message: Translator.getTranslationByKey(
								'pagination_limit_small_message'
							),
							callback(value, validator) {
								if (!value) {
									return true;
								}
								return value >= 1;
							},
						},
					},
				},
				mergeIntoList: {
					validators: {
						callback: {
							message: Translator.getTranslationByKey(
								'some_child_can_create_new_jobs_error_message'
							),
							callback: (value, validator) => {
								const sitemap = this.getCurrentlyEditedSelectorSitemap();
								const selector = this.getCurrentlyEditedSelector();
								return (
									!selector.mergeIntoList ||
									!sitemap
										.getAllSelectors(selector.uuid)
										.some(child => child.canCreateNewJobs())
								);
							},
						},
					},
				},
				parentSelectors: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey(
								'parent_selector_empty_message'
							),
						},
						callback: {
							message: 'parent_selector_callback_error',
							callback: function (value, validator) {
								const sitemap = this.getCurrentlyEditedSelectorSitemap();
								const newSelector = this.getCurrentlyEditedSelector();

								if (
									newSelector.parentSelectors.length === 1 &&
									newSelector.parentSelectors[0] === newSelector.uuid
								) {
									return {
										valid: false,
										message: Translator.getTranslationByKey(
											'parent_selector_self_citation'
										),
									};
								}
								if (sitemap.selectors.hasRecursiveElementSelectors()) {
									return {
										valid: false,
										message: Translator.getTranslationByKey(
											'handle_recursive_error_message'
										),
									};
								}
								if (newSelector.canCreateNewJobs()) {
									function someParentElementHasMergeIntoListEnabled(
										parentSelectorIds
									) {
										// this assumes there are no recursive element selectors
										for (const selectorId of parentSelectorIds) {
											if (selectorId === sitemap.rootSelector.uuid) {
												continue;
											}
											const selector = sitemap.getSelectorByUid(selectorId);
											if (selector.willReturnElements()) {
												if (selector.mergeIntoList) {
													return true;
												}
												if (
													someParentElementHasMergeIntoListEnabled(
														selector.parentSelectors
													)
												) {
													return true;
												}
											}
										}
										return false;
									}

									if (
										someParentElementHasMergeIntoListEnabled(
											newSelector.parentSelectors
										)
									) {
										return {
											valid: false,
											message: Translator.getTranslationByKey(
												'some_parent_has_merge_into_list_error_message'
											),
										};
									}
								}

								return true;
							}.bind(this),
						},
					},
				},
			},
		});
	}

	editSelector(button) {
		const selector = $(button).closest('tr').data('selector');
		this._editSelector(selector);
	}

	updateCurrentlyEditedSelectorInParentsList() {
		const selector = this.getCurrentlyEditedSelector();
		const selectorId =
			selector.id ||
			Translator.getTranslationByKey('selector_edit_current_selector_placeholder');
		$('.currently-edited').val(selector.uuid).text(`${selectorId} - ${selector.uuid}`);
	}

	_editSelector(selector) {
		const sitemap = this.state.currentSitemap;
		const selectorIds = sitemap.getPossibleParentSelectorIds();

		const $editSelectorForm = ich.SelectorEdit({
			selector,
			selectorIds,
			uuid: selector.uuid,
			selectorTypes: this.selectorTypes,
		});
		$('#viewport').html($editSelectorForm);

		$('#selectorId').flexdatalist({
			init: this.initSelectorValidation(),
			textProperty: '{fieldName}',
			valueProperty: 'fieldName',
			data: [...sitemap.model, { entity: '', field: '', fieldName: selector.id }],
			searchIn: ['entity', 'field'],
			visibleProperties: ['entity', 'field'],
			groupBy: 'entity',
			searchContain: true,
			noResultsText: '',
			minLength: 1,
			// Disable cache since our data is an array, and we don't make remote requests.
			// Note that when enabled, this might lead to errors creating new selectors when sitemap name
			//  contains 'global' or 'flex0', because Flexdatalist will try to parse localStorage keys set by PouchDB.
			cache: false,
		});

		// mark initially opened selector as currently edited
		$('#edit-selector #parentSelectors option').each((_, element) => {
			if ($(element).val() === selector.uuid) {
				$(element).addClass('currently-edited');
			}
		});

		// set clickType
		if (selector.clickType) {
			$editSelectorForm.find('[name=clickType]').val(selector.clickType);
		}

		// set clickElementUniquenessType
		if (selector.clickElementUniquenessType) {
			$editSelectorForm
				.find('[name=clickElementUniquenessType]')
				.val(selector.clickElementUniquenessType);
		}

		// handle selects seperately
		$editSelectorForm.find('[name=type]').val(selector.type);
		selector.parentSelectors.forEach(parentSelectorId => {
			$editSelectorForm
				.find(`#parentSelectors [value='${parentSelectorId}']`)
				.attr('selected', 'selected');
		});

		this.state.currentSelector = selector;
		this.selectorTypeChanged(false);
		Translator.translatePage();
	}

	selectorTypeChanged(changeTrigger) {
		// add this selector to possible parent selector
		const selector = this.getCurrentlyEditedSelector();
		const features = selector.getFeatures();
		$('#edit-selector .feature').hide();
		features.forEach(function (feature) {
			$(`#edit-selector .feature-${feature}`).show();
		});

		if (changeTrigger && selector.type === 'SelectorLink') {
			$('#edit-selector [name=extractAttribute]').val('href');
		}

		if (selector.canHaveChildSelectors()) {
			if ($('#edit-selector #parentSelectors .currently-edited').length === 0) {
				const $option = $('<option class="currently-edited"></option>');
				$('#edit-selector #parentSelectors').append($option);
				this.updateCurrentlyEditedSelectorInParentsList();
			}
		}
		// remove if type doesn't allow to have child selectors
		else {
			$('#edit-selector #parentSelectors .currently-edited').remove();
		}
	}

	async saveSelector(button) {
		const sitemap = this.state.currentSitemap;
		const selectorUuid = this.state.currentSelector.uuid;
		const selector = sitemap.getSelectorByUid(selectorUuid) || this.state.currentSelector;
		const newSelector = this.getCurrentlyEditedSelector();
		const validator = this.getFormValidator();
		validator.revalidateField('id');
		if (!this.isValidForm()) {
			return false;
		}
		// cancel possible element selection
		try {
			await this.contentScript.removeCurrentContentSelector();
		} catch (err) {
			console.error(err);
		}
		if (selector.type !== newSelector.type) {
			const children = sitemap.selectors.filter(selectorFromList =>
				selectorFromList.parentSelectors.includes(selector.uuid)
			);
			if (children.length > 0) {
				this.initConfirmActionPanel({ action: 'update_selector' });
				if (newSelector.canHaveChildSelectors()) {
					const saveSelectorsBtn = $('<button/>', {
						class: 'btn btn-primary',
						id: 'modal-save-child-selectors',
						text: Translator.getTranslationByKey(
							'modal_confirm_action_submit_update_save_selector'
						),
					});
					$('.modal-footer').append(saveSelectorsBtn);
					$('#modal-title').text(
						Translator.getTranslationByKey(
							'modal_confirm_action_title_update_selector_can_have_child'
						)
					);
				}
				this.displayChildrenInModalWindow(children);
				$('#modal-message').show();
				return true;
			}
		}

		await this.updateSelector();
	}

	displayChildrenInModalWindow(children) {
		$('#modal-child-count').text(children.length);
		$('#modal-message').after('<ul id="list-deleted-children"></ul>');
		children.forEach(child => {
			const $child = $('<li></li>');
			$child.text(`#${child.uuid} ${child.id}`);
			$('#list-deleted-children').append($child);
		});
	}

	async updateSelector(saveChildrenForNewType = false) {
		const sitemap = this.state.currentSitemap;
		const selectorUuid = this.state.currentSelector.uuid;
		const selector = sitemap.getSelectorByUid(selectorUuid) || this.state.currentSelector;
		const newSelector = this.getCurrentlyEditedSelector();
		try {
			sitemap.updateSelector(selector, newSelector, saveChildrenForNewType);
			await this.store.saveSitemap(sitemap, undefined, this.getCurrentProjectId());
		} catch (err) {
			console.error(err);
		} finally {
			this.showSitemapSelectorList();
		}
	}

	async confirmSaveChildSelectors(button) {
		await this.updateSelector(true);
		$('#confirm-action-modal').modal('hide');
	}

	async confirmDeleteChildSelectors(button) {
		await this.updateSelector(false);
		$('#confirm-action-modal').modal('hide');
	}

	/**
	 * Get selector from selector editing form
	 */
	getCurrentlyEditedSelector() {
		const id = $('#edit-selector [name=id]').val();
		const selectorsSelector = $('#edit-selector [name=selector]').val();
		const tableDataRowSelector = $('#edit-selector [name=tableDataRowSelector]').val();
		const tableHeaderRowSelector = $('#edit-selector [name=tableHeaderRowSelector]').val();
		const tableAddMissingColumns = $('#edit-selector [name=tableAddMissingColumns]').is(
			':checked'
		);
		const verticalTable = $('#edit-selector [name=verticalTable]').is(':checked');
		const scrollElementSelector = $('#edit-selector [name=scrollElementSelector]').val();
		const clickElementSelector = $('#edit-selector [name=clickElementSelector]').val();
		const type = $('#edit-selector [name=type]').val();
		const clickElementUniquenessType = $(
			'#edit-selector [name=clickElementUniquenessType]'
		).val();
		const clickType = $('#edit-selector [name=clickType]').val();
		const paginationLimit = $('#edit-selector [name=paginationLimit]').val();
		const discardInitialElements = $('#edit-selector [name=discardInitialElements]').is(
			':checked'
		);
		const multiple = $('#edit-selector [name=multiple]').is(':checked');
		const downloadFile = $('#edit-selector [name=downloadFile]').is(':checked');
		const clickPopup = $('#edit-selector [name=clickPopup]').is(':checked');
		const delay = $('#edit-selector [name=delay]').val();
		const outerHTML = $('#edit-selector [id=outerHTML]').is(':checked');
		const mergeIntoList = $('#edit-selector [name=mergeIntoList]').is(':checked');
		const extractAttribute = $('#edit-selector [name=extractAttribute]').val();
		const extractStyle = $('#edit-selector [name=extractStyle]').val();
		const value = $('#edit-selector [name=value]').val();
		const parentSelectors = $('#edit-selector [name=parentSelectors]').val();
		const columns = [];
		const $columnHeaders = $('#edit-selector .column-header');
		const $columnNames = $('#edit-selector .column-name');
		const $columnExtracts = $('#edit-selector .column-extract');
		const stringReplacement = {
			replaceString: $('#edit-selector [name=replaceString]').val(),
			replacementString: $('#edit-selector [name=replacementString]').val(),
		};
		const textmanipulation = {
			removeHtml: $('#edit-selector [name=removeHtml]').is(':checked'),
			trimText: $('#edit-selector [name=trimText]').is(':checked'),
			replaceText: $('#edit-selector [name=replaceText]').val(),
			replacementText: $('#edit-selector [name=replacementText]').val(),
			textPrefix: $('#edit-selector [name=textPrefix]').val(),
			textSuffix: $('#edit-selector [name=textSuffix]').val(),
			regex: $('#edit-selector [name=regex]').val(),
			regexgroup: $('#edit-selector [name=regexgroup]').val(),
		};
		const uuid = $('#edit-selector [name=uuid]').val();

		$columnHeaders.each(function (i) {
			const header = $($columnHeaders[i]).val();
			const name = $($columnNames[i]).val();
			const extract = $($columnExtracts[i]).is(':checked');
			columns.push({
				header,
				name,
				extract,
			});
		});

		const options = {
			id,
			selector: selectorsSelector,
			tableHeaderRowSelector,
			tableAddMissingColumns,
			verticalTable,
			tableDataRowSelector,
			scrollElementSelector,
			clickElementSelector,
			clickElementUniquenessType,
			clickType,
			paginationLimit,
			discardInitialElements,
			type,
			multiple,
			downloadFile,
			clickPopup,
			extractAttribute,
			extractStyle,
			value,
			parentSelectors,
			columns,
			delay,
			textmanipulation,
			stringReplacement,
			mergeIntoList,
			outerHTML,
			uuid,
		};

		return SelectorList.createSelector(options);
	}

	/**
	 * @returns {Sitemap|*} Cloned Sitemap with currently edited selector
	 */
	getCurrentlyEditedSelectorSitemap() {
		const sitemap = this.state.currentSitemap.clone();
		const selector = sitemap.getSelectorByUid(this.state.currentSelector.uuid);
		const newSelector = this.getCurrentlyEditedSelector();
		sitemap.updateSelector(selector, newSelector);
		return sitemap;
	}

	async cancelSelectorEditing() {
		// cancel possible element selection
		try {
			await this.contentScript.removeCurrentContentSelector();
		} catch (err) {
			console.error(err);
		} finally {
			this.showSitemapSelectorList();
		}
	}

	addSelector() {
		const parentSelectorId = this.state.currentParentSelectorId.uuid;

		const selector = SelectorList.createSelector({
			parentSelectors: [parentSelectorId],
			type: 'SelectorText',
			multiple: false,
			uuid: String(
				Math.max(0, ...this.state.currentSitemap.selectors.map(({ uuid }) => uuid)) + 1
			),
		});
		this._editSelector(selector);
	}

	initConfirmActionPanel(action) {
		$('#confirm-action-modal').remove(); // remove old panel
		$('#viewport').after(ich.ActionConfirm(action));
		$('#confirm-action-modal').modal('show');
		Translator.translatePage();
	}

	async copySitemap(button) {
		const sitemap = $(button).closest('tr').data('sitemap');
		this.initConfirmActionPanel({ action: 'copy_sitemap' });
		this.initCopySitemapValidation();
		$('#modal-message').show();
		$('#modal-sitemap-id').text(sitemap._id);
		this.state.currentSitemap = sitemap;
		$('#modal_confirm_action_input_copy_sitemap').show();
	}

	async confirmCopySitemap(button) {
		const id = $('#modal_confirm_action_input_copy_sitemap').val();
		let sitemap = this.state.currentSitemap;
		if (!this.isValidForm('#confirm-action-modal')) {
			return false;
		}
		const sitemapExist = await this.store.sitemapExists(id, this.getCurrentProjectId());
		if (sitemapExist) {
			const validator = $('#confirm-action-modal').data('bootstrapValidator');
			validator.updateStatus(
				'modal_confirm_action_input_copy_sitemap',
				'INVALID',
				'callback'
			);
			return false;
		}
		sitemap = new Sitemap(
			id,
			sitemap.startUrls,
			sitemap.urlPattern,
			sitemap.model,
			sitemap.selectors
		);
		sitemap = await this.store.createSitemap(sitemap, this.getCurrentProjectId());
		this._editSitemap(sitemap);
		$('#confirm-action-modal').modal('hide');
	}

	async deleteSelector(button) {
		const selector = $(button).closest('tr').data('selector');
		const sitemap = this.state.currentSitemap;
		const clearSelectorList = sitemap.createRemainingSelectorsList(selector);
		const filteredChildren = sitemap.selectors
			.filter(selector => !clearSelectorList.includes(selector))
			.map(selector => {
				return { uuid: selector.uuid, id: selector.id };
			});
		const childCount = filteredChildren.length;
		this.initConfirmActionPanel({ action: 'delete_selector' });
		$('#modal-selector-id').text(selector.id);
		if (childCount) {
			this.displayChildrenInModalWindow(filteredChildren);
			$('#modal-message').show();
		}
		this.state.currentSelector = selector;
		this.state.currentSitemap = sitemap;
	}

	async confirmDeleteSelector(button) {
		const selector = this.state.currentSelector;
		const sitemap = this.state.currentSitemap;
		sitemap.deleteSelector(selector);
		await this.store.saveSitemap(sitemap, undefined, this.getCurrentProjectId());
		this.showSitemapSelectorList();
		$('#confirm-action-modal').modal('hide');
	}

	async deleteSitemap(button) {
		const sitemap = $(button).closest('tr').data('sitemap');
		this.initConfirmActionPanel({ action: 'delete_sitemap' });
		$('#modal-sitemap-id').text(sitemap._id);
		this.state.currentSitemap = sitemap;
	}

	async confirmDeleteSitemap(button) {
		await this.store.deleteSitemap(this.state.currentSitemap, this.getCurrentProjectId());
		await this.showSitemaps();
		$('#confirm-action-modal').modal('hide');
	}

	initScrapeSitemapConfigValidation() {
		const sitemap = this.state.currentSitemap;
		$('#viewport form').bootstrapValidator({
			fields: {
				startUrl: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey(
								'partial_sitemap_scrape_start_url_empty_message'
							),
						},
						regexp: {
							regexp: new RegExp(sitemap.urlPattern),
							message: `${Translator.getTranslationByKey(
								'partial_sitemap_scrape_start_url_mismatch_message'
							)} <i>${sitemap.urlPattern}</i>`,
						},
						callback: {
							callback: value => Sitemap.isUrlValid(value),
							message: Translator.getTranslationByKey(
								'partial_sitemap_scrape_start_url_invalid_message'
							),
						},
					},
				},
				requestInterval: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey(
								'request_interval_empty_message'
							),
						},
						numeric: {
							message: Translator.getTranslationByKey(
								'request_interval_numeric_message'
							),
						},
						callback: {
							message: Translator.getTranslationByKey(
								'request_interval_short_message'
							),
							callback(value, validator) {
								return value >= 2000;
							},
						},
					},
				},
				requestIntervalRandomness: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey(
								'request_interval_randomness_empty_message'
							),
						},
						numeric: {
							message: Translator.getTranslationByKey(
								'request_interval_randomness_numeric_message'
							),
						},
					},
				},
				pageLoadDelay: {
					validators: {
						notEmpty: {
							message: Translator.getTranslationByKey(
								'page_load_delay_empty_message'
							),
						},
						numeric: {
							message: Translator.getTranslationByKey(
								'page_load_delay_numeric_message'
							),
						},
						callback: {
							message: Translator.getTranslationByKey(
								'page_load_delay_short_message'
							),
							callback(value, validator) {
								return value >= 500;
							},
						},
					},
				},
			},
		});
	}

	showScrapeSitemapConfigPanel() {
		this.setActiveNavigationButton('sitemap-scrape');
		const sitemap = this.state.currentSitemap;
		browser.tabs.query({ active: true, lastFocusedWindow: true }).then(tabs => {
			// Filter out extension pages to get the actual target tab
			const extensionUrl = browser.runtime.getURL('');
			const targetTab = tabs.find(tab => !tab.url.startsWith(extensionUrl)) || tabs[0];
			const url = targetTab ? targetTab.url : undefined;
			const scrapeConfigPanel = ich.SitemapScrapeConfig({ sitemap, url });
			$('#viewport').html(scrapeConfigPanel);
			this.initScrapeSitemapConfigValidation();
			Translator.translatePage();
		});
		return true;
	}

	scrapeSitemap() {
		if (!this.isValidForm()) {
			return false;
		}

		const requestInterval = $('input[name=requestInterval]').val();
		const pageLoadDelay = $('input[name=pageLoadDelay]').val();
		const intervalRandomness = $('input[name=requestIntervalRandomness]').val();
		const startUrl = $('input[name=startUrl]').val();

		const sitemap = this.state.currentSitemap;
		const request = {
			scrapeSitemap: true,
			sitemap: JSON.parse(JSON.stringify(sitemap)),
			startUrl,
			requestInterval,
			pageLoadDelay,
			requestIntervalRandomness: intervalRandomness,
		};

		// show sitemap scraping panel
		this.getFormValidator().destroy();
		$('.scraping-in-progress').removeClass('hide');
		$('#submit-scrape-sitemap').closest('.form-group').hide();
		$('#scrape-sitemap-config input').prop('disabled', true);

		browser.runtime.sendMessage(request).then(
			function (selectors) {
				// table selector can dynamically add columns
				// replace current selector (columns) with the dynamicly created once
				sitemap.selectors = new SelectorList(selectors);
				this.browseSitemapData();
			}.bind(this)
		);
		return false;
	}

	sitemapListBrowseSitemapData(button) {
		const sitemap = $(button).closest('tr').data('sitemap');
		this.setStateEditSitemap(sitemap);
		this.browseSitemapData();
	}

	browseSitemapData() {
		this.setActiveNavigationButton('sitemap-browse');
		const sitemap = this.state.currentSitemap;
		this.store.getSitemapData(sitemap).then(data => {
			const $dataPanel = ich.SitemapBrowseData();
			$('#viewport').html($dataPanel);
			Translator.translatePage();

			// display data
			// Doing this the long way so there aren't xss vulnerubilites
			// while working with data or with the selector titles

			const $accordion = $('#sitemap-data');
			for (let rowNum = 0; rowNum < data.length; rowNum++) {
				const $card = ich.ItemCard({
					id: rowNum,
					url: data[rowNum]._url || `Item${rowNum}`,
				});
				$accordion.append($card);
			}

			for (let rowNum = 0; rowNum < data.length; rowNum++) {
				const row = data[rowNum];
				if (row.hasOwnProperty('_id')) {
					delete row._id;
				}
				if (row.hasOwnProperty('_rev')) {
					delete row._rev;
				}
				$(`#json-${rowNum}`).html(this.jsonRenderer(row));
			}

			$accordion.searcher({
				itemSelector: '.panel', // jQuery selector for the data item element
				textSelector: '.panel-body', // jQuery selector for the element which contains the text
				inputSelector: '#search-input', // jQuery selector for the input element
				toggle: (item, containsText) => {
					$(item).unhighlight();
					$(item).toggle(containsText);
					$(item).highlight($('#search-input').val());
				},
			});

			$('.collapse').collapse('show');
		});

		return true;
	}

	initSitemapExportDataValidation() {
		$('#viewport form').bootstrapValidator({
			fields: {
				delimiter: {
					validators: {
						callback: {
							message: Translator.getTranslationByKey('data_export_empty_delimiter'),
							callback: value => $('#export-format').val() !== 'csv' || !!value,
						},
					},
				},
			},
		});
	}

	showSitemapExportDataPanel() {
		this.setActiveNavigationButton('sitemap-export-data');
		const sitemap = this.state.currentSitemap;
		const exportPanel = ich.SitemapExportData(sitemap);
		$('#viewport').html(exportPanel);
		this.initSitemapExportDataValidation();
		Translator.translatePage();
		return true;
	}

	sitemapExportDataFormChanged(element) {
		if (element.id === 'export-format') {
			if (element.value === 'csv') {
				$('#delimiter-option').show();
			} else {
				$('#delimiter-option').hide();
			}
		}
		$('#wait-message').hide();
		$('#data-export-download-file').hide();
		return true;
	}

	sitemapExportData() {
		if (!this.isValidForm()) {
			return false;
		}

		const downloadButton = $('#data-export-download-file');
		const waitMessage = $('#wait-message');
		downloadButton.hide();

		// displaying alert immediately looks annoying
		const waitMessageTimeout = setTimeout(() => waitMessage.show(), 100);

		const sitemap = this.state.currentSitemap;
		const format = $('#export-format').val();
		const options = {
			delimiter: $('#delimiter').val(),
			newline: $('#newline').prop('checked'),
			containBom: $('#utf-bom').prop('checked'),
		};

		const dataPromise =
			format === 'csv'
				? this.getDataExportCsvBlob(sitemap, options)
				: this.getDataExportJsonLinesBlob(sitemap, options);
		dataPromise.then(blob => {
			clearTimeout(waitMessageTimeout);
			waitMessage.hide();
			downloadButton.attr('href', window.URL.createObjectURL(blob));
			downloadButton.attr('download', `${sitemap._id}.${format}`);
			downloadButton.show();
		});

		return true;
	}

	async getDataExportCsvBlob(sitemap, options) {
		function mergeAttachments(obj, attachmentsSelectors) {
			const { _attachments, ...data } = obj;
			if (!_attachments) {
				return data;
			}
			const attachments = new Map(
				_attachments.map(attachment => {
					const { url, ...rest } = attachment;
					return [url, rest];
				})
			);
			const toAttachment = (selector, url) => {
				if (url && attachments.has(url)) {
					const attachment = { [selector.getUrlColumn()]: url };
					Object.entries(attachments.get(url)).forEach(([key, value]) => {
						attachment[`${selector.id}-${key}`] = value;
					});
					return attachment;
				}
				return url;
			};
			attachmentsSelectors.forEach(selector => {
				const urlKey = selector.getUrlColumn();
				if (urlKey in data) {
					const urlData = data[urlKey];
					if (Array.isArray(urlData)) {
						data[urlKey] = urlData.map(url => toAttachment(selector, url));
					} else {
						data[urlKey] = toAttachment(selector, urlData);
					}
				}
			});
			return data;
		}

		function splitProps(obj) {
			const commonProps = {};
			const listProps = {};
			Object.entries(obj).forEach(([key, value]) => {
				if (Array.isArray(value)) {
					listProps[key] = value;
				} else if (Object.isObject(value)) {
					const [valueCommonProps, valueListProps] = splitProps(value);
					Object.assign(commonProps, valueCommonProps);
					Object.assign(listProps, valueListProps);
				} else {
					commonProps[key] = value;
				}
			});
			return [commonProps, listProps];
		}

		function flatten(obj) {
			const [commonProps, listProps] = splitProps(obj);
			const results = Object.entries(listProps).flatMap(([key, values]) =>
				values.flatMap(value => flatten({ ...commonProps, [key]: value }))
			);
			return results.length ? results : commonProps;
		}

		function addMissingProps(obj, columns) {
			const objCopy = { ...obj };
			columns.forEach(column => {
				if (!(column in obj)) {
					objCopy[column] = '';
				}
			});
			return objCopy;
		}

		// default delimiter is comma
		const delimiter = options.delimiter || ',';
		// per default, utf8 BOM is included at the beginning
		const prepend = 'containBom' in options && !options.containBom ? '' : '\ufeff';
		// per default, new line is included at end of lines
		const append = 'newline' in options && !options.newline ? '' : '\r\n';

		const data = await this.store.getSitemapData(sitemap);
		const attachmentsSelectors = sitemap.selectors.filter(selector =>
			selector.downloadsAttachments()
		);
		const columns = sitemap.getDataColumns();
		const jsonData = data
			.map(dataObj => mergeAttachments(dataObj, attachmentsSelectors))
			.flatMap(flatten)
			.map(dataObj => addMissingProps(dataObj, columns));

		const csvConfig = {
			delimiter,
			quotes: false,
			quoteChar: '"',
			header: true,
			newline: '\r\n', // between value rows
		};
		const csvData = prepend + Papa.unparse(jsonData, csvConfig) + append;
		return new Blob([csvData], { type: 'text/csv' });
	}

	async getDataExportJsonLinesBlob(sitemap, options) {
		// per default, utf8 BOM is NOT included at the beginning
		const prepend = options.containBom ? '\ufeff' : '';
		// per default, new line is included at end of lines
		const append = 'newline' in options && !options.newline ? '' : '\r\n';

		const data = await this.store.getSitemapData(sitemap);
		const jsonlData = prepend + data.map(JSON.stringify).join('\r\n') + append;
		return new Blob([jsonlData], { type: 'application/x-jsonlines' });
	}

	async selectSelector(button) {
		const input = $(button).closest('.form-group').find('input.selector-value');
		const sitemap = this.getCurrentlyEditedSelectorSitemap();
		let selector = this.getCurrentlyEditedSelector();
		const currentStateParentSelectorIds = this.getCurrentStateParentSelectorIds();
		const parentCSSSelector = sitemap.selectors.getParentCSSSelectorWithinOnePage(
			currentStateParentSelectorIds
		);

		const result = await this.contentScript.selectSelector({
			parentCSSSelector,
			allowedElements: selector.getItemCSSSelector(),
		});

		// Auto-detect selector type if SelectorAutodetect is selected
		const currentType = $('#edit-selector [name=type]').val();
		if (currentType === 'SelectorAutodetect' && result.CSSSelector) {
			const detectedType = this.autodetectSelectorType(result.CSSSelector);
			if (detectedType) {
				$('#edit-selector [name=type]').val(detectedType);
				this.selectorTypeChanged(true);
			}
		}

		selector = this.getCurrentlyEditedSelector();
		await selector.afterSelect(result.CSSSelector, this, input.attr('id'));

		// update validation for selector field
		const validator = this.getFormValidator();
		validator.revalidateField(input);
	}

	/**
	 * Auto-detect the best selector type based on CSS selector
	 * @param cssSelector The CSS selector string
	 * @returns The detected selector type
	 */
	autodetectSelectorType(cssSelector) {
		if (!cssSelector) return 'SelectorText';

		const selectorLower = cssSelector.toLowerCase();

		// Check for specific element types
		if (
			selectorLower.match(/^a\b/) ||
			selectorLower.includes(' a') ||
			selectorLower.includes('>a')
		) {
			return 'SelectorLink';
		}
		if (
			selectorLower.match(/^img\b/) ||
			selectorLower.includes(' img') ||
			selectorLower.includes('>img')
		) {
			return 'SelectorImage';
		}
		if (
			selectorLower.match(/^(input|textarea|select)\b/) ||
			selectorLower.includes(' input') ||
			selectorLower.includes(' textarea') ||
			selectorLower.includes(' select')
		) {
			return 'SelectorInputValue';
		}
		if (selectorLower.match(/^table\b/) || selectorLower.includes(' table')) {
			return 'SelectorTable';
		}

		// Default to text
		return 'SelectorText';
	}

	getCurrentStateParentSelectorIds() {
		return this.state.editSitemapBreadcumbsSelectors.map(selector => selector.uuid);
	}

	async refreshTableColumns() {
		const selector = this.getCurrentlyEditedSelector();

		if (!(selector instanceof SelectorTable)) {
			// wrong selector triggered this event
			return false;
		}

		const html = await this.getSelectorHTML().promise();
		selector.getTableHeaderColumnsFromHTML(html);
		this.renderTableHeaderColumns(selector.headerColumns);
	}

	async selectTableHeaderRowSelector(button) {
		const sitemap = this.getCurrentlyEditedSelectorSitemap();
		const selector = this.getCurrentlyEditedSelector();

		if (!(selector instanceof SelectorTable)) {
			// wrong selector triggered this event
			return false;
		}

		const currentStateParentSelectorIds = this.getCurrentStateParentSelectorIds();
		const parentCSSSelector = sitemap.selectors.getCSSSelectorWithinOnePage(
			selector.uuid,
			currentStateParentSelectorIds
		);

		const result = await this.contentScript.selectSelector({
			parentCSSSelector,
			allowedElements: 'tr',
		});

		const tableHeaderRowSelector = result.CSSSelector;
		selector.tableHeaderRowSelector = tableHeaderRowSelector;

		const html = await this.getSelectorHTML().promise();
		selector.getTableHeaderColumnsFromHTML(html);
		this.renderTableHeaderColumns(selector.headerColumns);

		// update validation for selector field
		const input = $(button).closest('.form-group').find('input.selector-value');
		$(input).val(tableHeaderRowSelector);
		const validator = this.getFormValidator();
		validator.revalidateField(input);
	}

	async selectTableDataRowSelector(button) {
		const sitemap = this.getCurrentlyEditedSelectorSitemap();
		const selector = this.getCurrentlyEditedSelector();
		const currentStateParentSelectorIds = this.getCurrentStateParentSelectorIds();
		const parentCSSSelector = sitemap.selectors.getCSSSelectorWithinOnePage(
			selector.uuid,
			currentStateParentSelectorIds
		);

		const result = await this.contentScript.selectSelector({
			parentCSSSelector,
			allowedElements: 'tr',
		});

		// update validation for selector field
		const input = $(button).closest('.form-group').find('input.selector-value');
		$(input).val(result.CSSSelector);
		const validator = this.getFormValidator();
		validator.revalidateField(input);
	}

	/**
	 * update table selector column editing fields
	 */
	renderTableHeaderColumns(headerColumns) {
		// reset previous columns
		const $tbody = $('.feature-columns table tbody');
		$tbody.html('');
		headerColumns.forEach(function (column) {
			const $row = ich.SelectorEditTableColumn(column);
			$tbody.append($row);
		});
	}

	/**
	 * Returns HTML that the current selector would select
	 */
	getSelectorHTML() {
		const sitemap = this.getCurrentlyEditedSelectorSitemap();
		const selector = this.getCurrentlyEditedSelector();
		const currentStateParentSelectorIds = this.getCurrentStateParentSelectorIds();
		const CSSSelector = sitemap.selectors.getCSSSelectorWithinOnePage(
			selector.uuid,
			currentStateParentSelectorIds
		);
		return this.contentScript.getHTML({ CSSSelector }).promise();
	}

	async previewSelector(button) {
		if (!$(button).hasClass('preview')) {
			const sitemap = this.getCurrentlyEditedSelectorSitemap();
			const selector = this.getCurrentlyEditedSelector();
			const currentStateParentSelectorIds = this.getCurrentStateParentSelectorIds();
			const parentCSSSelector = sitemap.selectors.getParentCSSSelectorWithinOnePage(
				currentStateParentSelectorIds
			);
			const deferredSelectorPreview = this.contentScript.previewSelector({
				parentCSSSelector,
				elementCSSSelector: selector.selector,
			});

			deferredSelectorPreview.then(function () {
				$(button).addClass('preview');
			});
		} else {
			try {
				await this.contentScript.removeCurrentContentSelector();
			} catch (err) {
				console.error(err);
			} finally {
				$(button).removeClass('preview');
			}
		}
	}

	async previewClickOrScrollElementSelector(button) {
		if (!$(button).hasClass('preview')) {
			const sitemap = this.state.currentSitemap;
			const selector = this.getCurrentlyEditedSelector();
			const currentStateParentSelectorIds = this.getCurrentStateParentSelectorIds();
			const parentCSSSelector = sitemap.selectors.getParentCSSSelectorWithinOnePage(
				currentStateParentSelectorIds
			);
			const inputName = $(button).closest('.input-group').find('input').attr('name');

			const deferredSelectorPreview = this.contentScript.previewSelector({
				parentCSSSelector,
				elementCSSSelector: selector[inputName],
			});

			deferredSelectorPreview.then(function () {
				$(button).addClass('preview');
			});
		} else {
			try {
				await this.contentScript.removeCurrentContentSelector();
			} catch (err) {
				console.error(err);
			} finally {
				$(button).removeClass('preview');
			}
		}
	}

	async previewTableRowSelector(button) {
		if (!$(button).hasClass('preview')) {
			const sitemap = this.getCurrentlyEditedSelectorSitemap();
			const selector = this.getCurrentlyEditedSelector();
			const currentStateParentSelectorIds = this.getCurrentStateParentSelectorIds();
			const parentCSSSelector = sitemap.selectors.getCSSSelectorWithinOnePage(
				selector.uuid,
				currentStateParentSelectorIds
			);
			const rowSelector = $(button).closest('.form-group').find('input').val();

			const deferredSelectorPreview = this.contentScript.previewSelector({
				parentCSSSelector,
				elementCSSSelector: rowSelector,
			});

			deferredSelectorPreview.then(function () {
				$(button).addClass('preview');
			});
		} else {
			try {
				await this.contentScript.removeCurrentContentSelector();
			} catch (err) {
				console.error(err);
			} finally {
				$(button).removeClass('preview');
			}
		}
	}

	async previewSelectorFromSelectorTree(button) {
		if (!$(button).hasClass('preview')) {
			const sitemap = this.state.currentSitemap;
			const selector = $(button).closest('tr').data('selector');
			const currentStateParentSelectorIds = this.getCurrentStateParentSelectorIds();
			const parentCSSSelector = sitemap.selectors.getParentCSSSelectorWithinOnePage(
				currentStateParentSelectorIds
			);
			const deferredSelectorPreview = this.contentScript.previewSelector({
				parentCSSSelector,
				elementCSSSelector: selector.selector,
			});

			deferredSelectorPreview.then(function () {
				$(button).addClass('preview');
			});
		} else {
			try {
				await this.contentScript.removeCurrentContentSelector();
			} catch (err) {
				console.error(err);
			} finally {
				$(button).removeClass('preview');
			}
		}
	}

	previewSelectorDataFromSelectorTree(button) {
		const sitemap = this.state.currentSitemap;
		const selector = $(button).closest('tr').data('selector');
		this.previewSelectorData(sitemap, selector.uuid);
	}

	previewSelectorDataFromSelectorEditing() {
		const sitemap = this.state.currentSitemap.clone();
		const selector = sitemap.getSelectorByUid(this.state.currentSelector.uuid);
		const newSelector = this.getCurrentlyEditedSelector();
		sitemap.updateSelector(selector, newSelector);
		this.previewSelectorData(sitemap, newSelector.uuid);
	}

	/**
	 * Returns a list of selector ids that the user has opened
	 * @returns {Array}
	 */

	previewSelectorData(sitemap, selectorId) {
		// data preview will be base on how the selector tree is opened

		const parentSelectorIds = this.state.editSitemapBreadcumbsSelectors.map(sel => sel.uuid);

		const request = {
			previewSelectorData: true,
			sitemap: JSON.parse(JSON.stringify(sitemap)),
			parentSelectorIds,
			selectorId,
		};

		browser.runtime.sendMessage(request).then(response => {
			if (response.length === 0) {
				return;
			}

			const $dataPreviewPanel = ich.DataPreview();

			$('#viewport').append($dataPreviewPanel);
			$dataPreviewPanel.modal('show');
			Translator.translatePage();
			// display data
			// Doing this the long way so there aren't xss vulnerubilites
			// while working with data or with the selector titles
			const $accordion = $('#data-preview', $dataPreviewPanel);
			for (let rowNum = 0; rowNum < response.length; rowNum++) {
				const $card = ich.ItemCard({
					id: rowNum,
					url: response[rowNum]._url || `Item${rowNum}`,
				});
				$accordion.append($card);
			}

			const windowHeight = $(window).height();
			for (let rowNum = 0; rowNum < response.length; rowNum++) {
				$(`#json-${rowNum}`).html(this.jsonRenderer(response[rowNum]));
			}

			$('.collapse').collapse('show');
			$('.data-preview-modal .modal-body').height(windowHeight - 130);

			// remove modal from dom after it is closed
			$dataPreviewPanel.on('hidden.bs.modal', function () {
				$(this).remove();
			});
		});
	}

	// ============================================
	// Target Tab Indicator Functions
	// ============================================

	/**
	 * Initialize the target tab indicator
	 */
	async initTargetTabIndicator() {
		// Initial load of tabs and status
		await this.refreshAvailableTabs();
		await this.updateTargetTabStatus();

		// Auto-refresh status periodically
		setInterval(() => this.updateTargetTabStatus(), 5000);
	}

	/**
	 * Refresh the list of available tabs in the dropdown
	 */
	async refreshAvailableTabs() {
		try {
			const tabs = await browser.runtime.sendMessage({ getAvailableTabs: true });
			const $selector = $('#target-tab-selector');
			const currentValue = $selector.val();

			$selector.empty();
			$selector.append(
				$('<option>', {
					value: '',
					text: Translator.getTranslationByKey('target_tab_auto') || 'Auto-detect',
				})
			);

			tabs.forEach(tab => {
				const displayText = this.truncateUrl(tab.title || tab.url, 40);
				$selector.append(
					$('<option>', {
						value: tab.id,
						text: displayText,
						title: tab.url,
					})
				);
			});

			// Restore previous selection if still valid
			if (currentValue && tabs.some(t => t.id === parseInt(currentValue, 10))) {
				$selector.val(currentValue);
			}
		} catch (error) {
			console.warn('Failed to refresh available tabs:', error);
		}
	}

	/**
	 * Update the target tab status display
	 */
	async updateTargetTabStatus() {
		const $url = $('#target-tab-url');
		const $status = $('#connection-status');
		const $statusText = $status.find('.status-text');

		try {
			const tabInfo = await browser.runtime.sendMessage({ getTargetTabInfo: true });

			if (tabInfo.found) {
				const displayUrl = this.truncateUrl(tabInfo.url, 60);
				$url.text(displayUrl).attr('title', tabInfo.url);

				if (tabInfo.isManual) {
					$url.prepend(
						$('<span>', {
							class: 'glyphicon glyphicon-pushpin',
							style: 'margin-right: 5px; font-size: 11px;',
							title: Translator.getTranslationByKey('target_tab_pinned') || 'Pinned',
						})
					);
				}

				// Test connection
				const connectionResult = await browser.runtime.sendMessage({
					testTabConnection: true,
					tabId: tabInfo.id,
				});

				if (connectionResult.success) {
					$status.removeClass('disconnected checking').addClass('connected');
					$statusText.text(
						Translator.getTranslationByKey('target_tab_connected') || 'Connected'
					);
				} else {
					$status.removeClass('connected checking').addClass('disconnected');
					$statusText.text(
						Translator.getTranslationByKey('target_tab_disconnected') || 'Not connected'
					);
				}
			} else {
				$url.text(
					Translator.getTranslationByKey('target_tab_no_tab') ||
						'No suitable tab found. Open a webpage to scrape.'
				);
				$status.removeClass('connected checking').addClass('disconnected');
				$statusText.text(
					Translator.getTranslationByKey('target_tab_no_tab_short') || 'No tab'
				);
			}
		} catch (error) {
			$url.text(
				Translator.getTranslationByKey('target_tab_error') || 'Error checking target tab'
			);
			$status.removeClass('connected checking').addClass('disconnected');
			$statusText.text(Translator.getTranslationByKey('target_tab_error_short') || 'Error');
		}
	}

	/**
	 * Handle target tab selector change
	 */
	async onTargetTabSelectorChange() {
		const selectedValue = $('#target-tab-selector').val();
		const tabId = selectedValue === '' ? null : selectedValue;

		try {
			await browser.runtime.sendMessage({ setTargetTab: true, tabId });
			await this.updateTargetTabStatus();
		} catch (error) {
			console.warn('Failed to set target tab:', error);
		}
	}

	/**
	 * Test connection to current target tab
	 */
	async testTargetTabConnection() {
		const $btn = $('#test-connection-btn');
		const $status = $('#connection-status');
		const $statusText = $status.find('.status-text');

		$btn.prop('disabled', true);
		$status.removeClass('connected disconnected').addClass('checking');
		$statusText.text(Translator.getTranslationByKey('target_tab_testing') || 'Testing...');

		try {
			const result = await browser.runtime.sendMessage({ testTabConnection: true });

			if (result.success) {
				$status.removeClass('disconnected checking').addClass('connected');
				$statusText.text(
					Translator.getTranslationByKey('target_tab_connected') || 'Connected'
				);
			} else {
				$status.removeClass('connected checking').addClass('disconnected');
				$statusText.text(result.error || 'Connection failed');
			}
		} catch (error) {
			$status.removeClass('connected checking').addClass('disconnected');
			$statusText.text(Translator.getTranslationByKey('target_tab_error_short') || 'Error');
		} finally {
			$btn.prop('disabled', false);
		}
	}

	/**
	 * Truncate URL for display
	 */
	truncateUrl(url, maxLength) {
		if (!url) return '';
		if (url.length <= maxLength) return url;
		return url.substring(0, maxLength - 3) + '...';
	}
}

/**
 * Torch - A scraping process configuration for a sitemap
 *
 * A Torch defines:
 * - Pre-actions: Actions to perform before scraping (click, scroll, wait, etc.)
 * - Columns: Data columns to extract with their selectors
 */

// Pre-action types
export const PreActionTypes = {
	CLICK_ONE: 'click_one',
	CLICK_ALL: 'click_all',
	LOAD_MORE: 'load_more',
	SCROLL: 'scroll',
	WAIT: 'wait',
	HOVER: 'hover',
};

// Pre-action configuration
class PreAction {
	constructor(actionData = {}) {
		this.type = actionData.type || PreActionTypes.WAIT;
		this.selector = actionData.selector || '';
		this.value = actionData.value || ''; // e.g., wait time, scroll amount
		this.repeat = actionData.repeat || 1;
		this.delay = actionData.delay || 0; // delay between repeats
		this.enabled = actionData.enabled !== false;
	}

	static fromObj(obj) {
		return new PreAction(obj);
	}

	toJSON() {
		return {
			type: this.type,
			selector: this.selector,
			value: this.value,
			repeat: this.repeat,
			delay: this.delay,
			enabled: this.enabled,
		};
	}
}

// Column definition for data extraction
class TorchColumn {
	constructor(columnData = {}) {
		this.id = columnData.id || this.generateId();
		this.name = columnData.name || '';
		this.selector = columnData.selector || '';
		this.attribute = columnData.attribute || 'text'; // text, href, src, data-*, etc.
		this.multiple = columnData.multiple || false;
		this.regex = columnData.regex || '';
		this.regexGroup = columnData.regexGroup || 0;
		this.transform = columnData.transform || ''; // optional transformation
		this.order = columnData.order !== undefined ? columnData.order : 0;
		this.enabled = columnData.enabled !== false;
	}

	generateId() {
		return 'col_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
	}

	static fromObj(obj) {
		return new TorchColumn(obj);
	}

	toJSON() {
		return {
			id: this.id,
			name: this.name,
			selector: this.selector,
			attribute: this.attribute,
			multiple: this.multiple,
			regex: this.regex,
			regexGroup: this.regexGroup,
			transform: this.transform,
			order: this.order,
			enabled: this.enabled,
		};
	}
}

// Main Torch class
export default class Torch {
	constructor(torchData = {}) {
		this.id = torchData.id || this.generateId();
		this.name = torchData.name || '';
		this.description = torchData.description || '';
		this.createdAt = torchData.createdAt || new Date().toISOString();
		this.updatedAt = torchData.updatedAt || new Date().toISOString();
		this.enabled = torchData.enabled !== false;

		// Pre-actions (Step 1)
		this.preActions = (torchData.preActions || []).map(action => PreAction.fromObj(action));

		// Columns (Step 2)
		this.columns = (torchData.columns || []).map(col => TorchColumn.fromObj(col));

		// Pagination settings
		this.pagination = {
			enabled: torchData.pagination?.enabled || false,
			type: torchData.pagination?.type || 'next_button', // next_button, load_more, infinite_scroll
			selector: torchData.pagination?.selector || '',
			maxPages: torchData.pagination?.maxPages || 10,
			delay: torchData.pagination?.delay || 1000,
		};
	}

	generateId() {
		return 'torch_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
	}

	static fromObj(obj) {
		return new Torch(obj);
	}

	// Add a pre-action
	addPreAction(actionData) {
		const action = new PreAction(actionData);
		this.preActions.push(action);
		this.updatedAt = new Date().toISOString();
		return action;
	}

	// Remove a pre-action by index
	removePreAction(index) {
		if (index >= 0 && index < this.preActions.length) {
			this.preActions.splice(index, 1);
			this.updatedAt = new Date().toISOString();
		}
	}

	// Reorder pre-actions
	reorderPreActions(fromIndex, toIndex) {
		if (
			fromIndex >= 0 &&
			fromIndex < this.preActions.length &&
			toIndex >= 0 &&
			toIndex < this.preActions.length
		) {
			const [action] = this.preActions.splice(fromIndex, 1);
			this.preActions.splice(toIndex, 0, action);
			this.updatedAt = new Date().toISOString();
		}
	}

	// Add a column
	addColumn(columnData) {
		const column = new TorchColumn(columnData);
		column.order = this.columns.length;
		this.columns.push(column);
		this.updatedAt = new Date().toISOString();
		return column;
	}

	// Remove a column by id
	removeColumn(columnId) {
		const index = this.columns.findIndex(col => col.id === columnId);
		if (index !== -1) {
			this.columns.splice(index, 1);
			// Re-order remaining columns
			this.columns.forEach((col, i) => {
				col.order = i;
			});
			this.updatedAt = new Date().toISOString();
		}
	}

	// Update a column
	updateColumn(columnId, columnData) {
		const column = this.columns.find(col => col.id === columnId);
		if (column) {
			Object.assign(column, columnData);
			this.updatedAt = new Date().toISOString();
		}
		return column;
	}

	// Reorder columns
	reorderColumns(fromIndex, toIndex) {
		if (
			fromIndex >= 0 &&
			fromIndex < this.columns.length &&
			toIndex >= 0 &&
			toIndex < this.columns.length
		) {
			const [column] = this.columns.splice(fromIndex, 1);
			this.columns.splice(toIndex, 0, column);
			// Update order values
			this.columns.forEach((col, i) => {
				col.order = i;
			});
			this.updatedAt = new Date().toISOString();
		}
	}

	// Get columns sorted by order
	getSortedColumns() {
		return [...this.columns].sort((a, b) => a.order - b.order);
	}

	// Get enabled columns only
	getEnabledColumns() {
		return this.getSortedColumns().filter(col => col.enabled);
	}

	// Get enabled pre-actions only
	getEnabledPreActions() {
		return this.preActions.filter(action => action.enabled);
	}

	// Validate torch configuration
	validate() {
		const errors = [];

		if (!this.name || this.name.trim() === '') {
			errors.push({ field: 'name', message: 'Torch name is required' });
		}

		if (this.columns.length === 0) {
			errors.push({ field: 'columns', message: 'At least one column is required' });
		}

		this.columns.forEach((col, index) => {
			if (!col.name || col.name.trim() === '') {
				errors.push({
					field: `columns[${index}].name`,
					message: `Column ${index + 1} name is required`,
				});
			}
			if (!col.selector || col.selector.trim() === '') {
				errors.push({
					field: `columns[${index}].selector`,
					message: `Column ${index + 1} selector is required`,
				});
			}
		});

		this.preActions.forEach((action, index) => {
			if (
				action.type !== PreActionTypes.WAIT &&
				(!action.selector || action.selector.trim() === '')
			) {
				errors.push({
					field: `preActions[${index}].selector`,
					message: `Pre-action ${index + 1} selector is required`,
				});
			}
		});

		return {
			valid: errors.length === 0,
			errors,
		};
	}

	// Clone the torch
	clone() {
		const clonedObj = JSON.parse(JSON.stringify(this));
		const cloned = new Torch(clonedObj);
		cloned.id = this.generateId();
		cloned.name = `${this.name} (copy)`;
		cloned.createdAt = new Date().toISOString();
		cloned.updatedAt = new Date().toISOString();
		return cloned;
	}

	toJSON() {
		return {
			id: this.id,
			name: this.name,
			description: this.description,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			enabled: this.enabled,
			preActions: this.preActions.map(action => action.toJSON()),
			columns: this.columns.map(col => col.toJSON()),
			pagination: { ...this.pagination },
		};
	}
}

export { PreAction, TorchColumn };

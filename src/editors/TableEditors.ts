import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const tableEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
.set("Table", [
    {
        variable: "--table-border",
        label: "Table Border",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-border'),
        usage: new Map<string, string[]>().set(".rc-table", ["border: var(--table-border);"])
    },
    {
        variable: "--table-header-background",
        label: "Header Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-header-background'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item-group > *", ["background: var(--table-header-background);"])
        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th", ["background: var(--table-header-background);"])
    },
    {
        variable: "--table-header-border-color",
        label: "Header Border Color",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-header-border-color'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item-group > *", ["border-color: var(--table-header-border-color);"])
        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th", ["border-color: var(--table-header-border-color);"])
    },
    {
        variable: "--table-header-border-width",
        label: "Header Border Width",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-header-border-width'),
        usage: new Map<string, string[]>().set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th", ["border-width: var(--table-header-border-width);"])
    },
    {
        variable: "--table-header-hover-background",
        label: "Header Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-header-hover-background'),
        usage: new Map<string, string[]>()
        .set(".rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover", ["background: var(--table-header-hover-background);"])
    },
    {
        variable: "--table-header-color",
        label: "Header Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-header-color'),
        usage: new Map<string, string[]>()
        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th", ["color: var(--table-header-color);"])
    },
    {
        variable: "--table-header-hover-color",
        label: "Header Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-header-hover-color'),
        usage: new Map<string, string[]>()
        .set(".p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover", ["color: var(--table-header-hover-color);"])
    },
    {
        variable: "--table-header-padding",
        label: "Header Padding",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--table-header-padding'),
        usage: new Map<string, string[]>()
        .set(".basti .rc-table .p-datatable-thead > tr > th", ["padding: var(--table-header-padding);"])
    },
    {
        variable: "--table-row-border-color",
        label: "Row Border Color",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-row-border-color'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item > *", ["border-color: var(--table-row-border-color);"])
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item > *:not(:first-child)", ["border-color: var(--table-row-border-color);"])
        .set(".rc-table .p-datatable-tbody > tr > td", ["border-color: var(--table-row-border-color);"])
        .set(".error-dialog .p-listbox .p-listbox-list .p-listbox-item", ["border-color: var(--table-row-border-color);"])
    },
    {
        variable: "--table-row-border-width",
        label: "Row Border Width",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-row-border-width'),
        usage: new Map<string, string[]>()
        .set(".rc-table .p-datatable-tbody > tr > td", ["border-width: var(--table-row-border-width);"])
        .set(".error-dialog .p-listbox .p-listbox-list .p-listbox-item", ["border-width: var(--table-row-border-width);"])
    },
    {
        variable: "--table-text-color",
        label: "Table Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-text-color'),
        usage: new Map<string, string[]>()
        .set(".rc-table .p-datatable-tbody > tr", ["color: var(--table-text-color);"])
        .set(".rc-table .p-datatable-tbody > tr > td.p-highlight", ["color: var(--table-text-color);"])
        .set(".rc-table .p-datatable-tbody > tr.p-highlight", ["color: var(--table-text-color);"])
        .set(".rc-table .p-datatable-tbody > tr.p-highlight > td .open-cell-editor", ["color: var(--table-text-color);"])
        .set(".rc-table.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover", ["color: var(--table-text-color);"])
    },
    {
        variable: "--table-cell-hover-color",
        label: "Table Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-cell-hover-color'),
        usage: new Map<string, string[]>()
        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-row-odd > td.p-selectable-cell:not(.p-highlight):hover", ["color: var(--table-cell-hover-color);"])
        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-row-odd > td.p-selectable-cell:not(.p-highlight).cell-required:hover", ["color: var(--table-cell-hover-color);"])
        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-row-odd > td.p-selectable-cell:not(.p-highlight).cell-readonly:hover", ["color: var(--table-cell-hover-color);"])
        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight):hover", ["color: var(--table-cell-hover-color);"])
        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight).cell-required:hover", ["color: var(--table-cell-hover-color);"])
        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight).cell-readonly:hover", ["color: var(--table-cell-hover-color);"])
    },
    {
        variable: "--table-selected-row-background",
        label: "Selected Row Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-selected-row-background'),
        usage: new Map<string, string[]>()
        .set(".rc-table .p-datatable-tbody > tr.p-highlight", ["background: var(--table-selected-row-background) !important;"])
        .set(".error-dialog .p-listbox .p-listbox-list .p-listbox-item.p-highlight", ["background: var(--table-selected-row-background);"])
    },
    {
        variable: "--table-row-odd-background",
        label: "Odd Rows Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-row-odd-background'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even)", ["background: var(--table-row-odd-background);"])
        .set(".rc-table .p-datatable-tbody > tr.p-row-odd", ["background: var(--table-row-odd-background);"])
        .set(".error-dialog .p-listbox .p-listbox-list .p-listbox-item:nth-child(odd)", ["background: var(--table-row-odd-background);"])
    }, 
    {
        variable: "--table-row-even-background",
        label: "Even Rows Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-row-even-background'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd)", ["background: var(--table-row-even-background);"])
        .set(".rc-table .p-datatable-tbody > tr", ["background: var(--table-row-even-background);"])
        .set(".error-dialog .p-listbox .p-listbox-list .p-listbox-item:nth-child(even)", ["background: var(--table-row-even-background);"])
    },
    {
        variable: "--table-row-hover-background",
        label: "Rows Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-row-hover-background'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd):hover", ["background: var(--table-row-hover-background);"])
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd).p-highlight:hover", ["background: var(--table-row-hover-background);"])
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even):hover", ["background: var(--table-row-hover-background);"])
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even).p-highlight:hover", ["background: var(--table-row-hover-background);"])
        .set(".rc-table.p-datatable-selectable-cell .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover", ["background: var(--table-row-hover-background);"])
    },
    {
        variable: "--table-required-odd-background",
        label: "Rows Required Odd Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-required-odd-background'),
        usage: new Map<string, string[]>()
        .set(".rc-table .p-datatable-tbody > tr.p-row-odd > td.cell-required", ["background: var(--table-required-odd-background);"])
        .set(".rc-table .p-datatable-tbody > tr.p-row-odd.p-highlight td.cell-required", ["background: var(--table-required-odd-background);"])
        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-row-odd > td.p-selectable-cell:not(.p-highlight).cell-required:hover", ["background: var(--table-required-odd-background);"])
    },
    {
        variable: "--table-required-even-background",
        label: "Rows Required Even Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-required-even-background'),
        usage: new Map<string, string[]>()
        .set(".rc-table .p-datatable-tbody > tr > td.cell-required", ["background: var(--table-required-even-background);"])
        .set(".rc-table .p-datatable-tbody > tr.p-highlight > td.cell-required", ["background: var(--table-required-even-background);"])
        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight).cell-required:hover", ["background: var(--table-required-even-background);"])
    },
    {
        variable: "--table-required-color",
        label: "Required Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-required-color'),
        usage: new Map<string, string[]>()
        .set(".p-calendar.required-field .p-inputtext", ["color: var(--table-required-color);"])
        .set(".rc-editor-linked.required-field .p-inputtext", ["color: var(--table-required-color);"])
        .set(".rc-table .p-datatable-tbody > tr > td.cell-required", ["color: var(--table-required-color);"])
        .set(".rc-table .p-datatable-tbody > tr.p-row-odd > td.cell-required", ["color: var(--table-required-color);"])
    },
    {
        variable: "--table-readonly-odd-background",
        label: "Rows Readonly Odd Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-readonly-odd-background'),
        usage: new Map<string, string[]>()
        .set(".rc-table .p-datatable-tbody > tr.p-row-odd > td.cell-readonly", ["background: var(--table-readonly-odd-background);"])
        .set(".rc-table .p-datatable-tbody > tr.p-row-odd.p-highlight td.cell-readonly", ["background: var(--table-readonly-odd-background);"])
        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-row-odd > td.p-selectable-cell:not(.p-highlight).cell-readonly:hover", ["background: var(--table-readonly-odd-background);"])
    },
    {
        variable: "--table-readonly-even-background",
        label: "Rows Readonly Even Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-readonly-even-background'),
        usage: new Map<string, string[]>()
        .set(".rc-table .p-datatable-tbody > tr > td.cell-readonly", ["background: var(--table-readonly-even-background);"])
        .set(".rc-table .p-datatable-tbody > tr.p-highlight > td.cell-readonly", ["background: var(--table-readonly-even-background);"])
        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight).cell-readonly:hover", ["background: var(--table-readonly-even-background);"])
    },
    {
        variable: "--table-readonly-color",
        label: "Readonly Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-readonly-color'),
        usage: new Map<string, string[]>()
        .set(".rc-table .p-datatable-tbody > tr > td.cell-readonly", ["color: var(--table-readonly-color);"])
    },
    {
        variable: "--table-sort-color",
        label: "Sort Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-sort-color'),
        usage: new Map<string, string[]>()
        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th.sort-asc, .rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th.sort-des", ["color: var(--table-sort-color);"])
        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th .p-sortable-column-icon", ["color: var(--table-sort-color);"])
        .set(".rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover.sort-asc, .rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover.sort-des", ["color: var(--table-sort-color);"])
        .set(".rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover.sort-asc .p-sortable-column-icon, .rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover.sort-des .p-sortable-column-icon", ["color: var(--table-sort-color);"])
    },
    {
        variable: "--table-data-height",
        label: "Row Height",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--table-data-height'),
        usage: new Map<string, string[]>()
        .set(".basti .rc-table .p-datatable-tbody > tr > td", ["height: calc(8px + var(--table-data-height));"])
        .set(".error-dialog .error-dialog-listbox .p-listbox-item", ["height: calc(8px + var(--table-data-height));", "line-height: var(--table-data-height);"])
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item", ["height: calc(8px + var(--table-data-height));"])
    }
])
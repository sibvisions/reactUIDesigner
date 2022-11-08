import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const tableEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
.set("Table General", [
    {
        variable: "--table-border",
        label: "Table Border",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-border'),
        usage: new Map<string, string[]>().set(".rc-table", ["border: var(--table-border);"])
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
        .set(".rc-table.p-datatable-selectable-cell .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover", ["color: var(--table-text-color);"])
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
        variable: "--table-border-radius",
        label: "Border-Radius",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-border-radius'),
        usage: new Map<string, string[]>()
        .set(".rc-table.navtable-north", ["border-bottom-left-radius: var(--table-border-radius);", "border-bottom-right-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-west", ["border-top-right-radius: var(--table-border-radius);", "border-bottom-right-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-west:not(.p-datatable-scrollable) .p-datatable-thead > tr > th:last-child", ["border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-west:not(.p-datatable-scrollable) .p-datatable-thead > tr > th:only-child", ["border-top-left-radius: var(--table-border-radius);", "border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-west .p-datatable-scrollable-header", ["border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-east", ["border-top-left-radius: var(--table-border-radius);", "border-bottom-left-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-east:not(.p-datatable-scrollable) .p-datatable-thead > tr > th:first-child", ["border-top-left-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-east:not(.p-datatable-scrollable) .p-datatable-thead > tr > th:only-child", ["border-top-left-radius: var(--table-border-radius);", "border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-east .p-datatable-scrollable-header", ["border-top-left-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-south", ["border-top-left-radius: var(--table-border-radius);", "border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-south:not(.p-datatable-scrollable) .p-datatable-thead > tr > th:first-child", ["border-top-left-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-south:not(.p-datatable-scrollable) .p-datatable-thead > tr > th:last-child", ["border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-south:not(.p-datatable-scrollable) .p-datatable-thead > tr > th:only-child", ["border-top-left-radius: var(--table-border-radius);", "border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-table.navtable-south .p-datatable-scrollable-header", ["border-top-left-radius: var(--table-border-radius);", "border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-table:not(.navtable-north):not(.navtable-west):not(.navtable-east):not(.navtable-south)", ["border-radius: var(--table-border-radius);"])
        .set(".rc-table:not(.navtable-north):not(.navtable-west):not(.navtable-east):not(.navtable-south):not(.p-datatable-scrollable) .p-datatable-thead > tr > th:first-child", ["border-top-left-radius: var(--table-border-radius);"])
        .set(".rc-table:not(.navtable-north):not(.navtable-west):not(.navtable-east):not(.navtable-south):not(.p-datatable-scrollable) .p-datatable-thead > tr > th:last-child", ["border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-table:not(.navtable-north):not(.navtable-west):not(.navtable-east):not(.navtable-south):not(.p-datatable-scrollable) .p-datatable-thead > tr > th:only-child", ["border-top-left-radius: var(--table-border-radius);", "border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-toolbar.navbar-north", ["border-top-left-radius: var(--table-border-radius);", "border-top-right-radius: var(--table-border-radius);"])
        .set(".rc-toolbar.navbar-west", ["border-top-left-radius: var(--table-border-radius);", "border-bottom-left-radius: var(--table-border-radius);"])
        .set(".rc-toolbar.navbar-east", ["border-top-right-radius: var(--table-border-radius);", "border-bottom-right-radius: var(--table-border-radius);"])
        .set(".rc-toolbar.navbar-south", ["border-bottom-left-radius: var(--table-border-radius);", "border-bottom-right-radius: var(--table-border-radius);"])
        .set(".p-tree", ["border-radius: var(--table-border-radius);"])
    }
])
.set("Table Header", [
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
        variable: "--table-header-border",
        label: "Header Border Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-header-border'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item-group > *", ["border-bottom: var(--table-header-border);"])
        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th", ["border: var(--table-header-border);"])
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
        .set(".rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover", ["color: var(--table-header-hover-color);"])
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
])
.set("Table Rows", [
    {
        variable: "--table-row-border",
        label: "Row Border Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--table-row-border'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item > *", ["border-bottom: var(--table-row-border);"])
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item > *:not(:first-child)", ["border-left: var(--table-row-border);"])
        .set(".rc-table table", ["border-bottom: var(--table-row-border);"])
        .set(".rc-table .p-datatable-tbody > tr > td", ["border-bottom: var(--table-row-border);"])
        .set(".error-dialog .p-listbox .p-listbox-list .p-listbox-item", ["border-bottom: var(--table-row-border);"])
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
.set("Toolbar", [
    {
        variable: "--toolbar-background",
        label: "Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--toolbar-background'),
        usage: new Map<string, string[]>().set(".rc-toolbar", ["background: var(--toolbar-background);"])
    },
    {
        variable: "--toolbar-border-color",
        label: "Border Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--toolbar-border-color'),
        usage: new Map<string, string[]>().set(".rc-toolbar", ["border-color: var(--toolbar-border-color);"])
    },
    {
        variable: "--toolbar-color",
        label: "Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--toolbar-color'),
        usage: new Map<string, string[]>().set(".rc-toolbar .rc-button.mouse-border", ["color: var(--toolbar-color);"])
    },
    {
        variable: "--toolbar-separator",
        label: "Seperator",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--toolbar-separator'),
        usage: new Map<string, string[]>()
        .set(".rc-toolbar .rc-toolbar-border-right", ["border-right: var(--toolbar-separator);"])
        .set(".rc-toolbar .rc-toolbar-border-bottom", ["border-bottom: var(--toolbar-separator);"])
        .set(".mobile-launcher-menu .rc-frame-toolbar .rc-toolbar-border-right", ["border-right: var(--toolbar-separator);"])
        .set(".mobile-launcher-menu .rc-frame-toolbar .rc-toolbar-border-bottom", ["border-bottom: var(--toolbar-separator);"])
        .set(".rc-frame .rc-frame-toolbar .rc-toolbar-border-right", ["border-right: var(--toolbar-separator);"])
        .set(".rc-frame .rc-frame-toolbar .rc-toolbar-border-bottom", ["border-bottom: var(--toolbar-separator);"])
    },
    {
        variable: "--toolbar-border-radius",
        label: "Border-Radius",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--toolbar-border-radius'),
        usage: new Map<string, string[]>()
        .set(".rc-toolbar.toolbar-north", ["border-top-left-radius: var(--toolbar-border-radius);", "border-top-right-radius: var(--toolbar-border-radius);"])
        .set(".rc-toolbar.toolbar-west", ["border-top-left-radius: var(--toolbar-border-radius);", "border-bottom-left-radius: var(--toolbar-border-radius);"])
        .set(".rc-toolbar.toolbar-east", ["border-top-right-radius: var(--toolbar-border-radius);", "border-bottom-right-radius: var(--toolbar-border-radius);"])
        .set(".rc-toolbar.toolbar-south", ["border-bottom-left-radius: var(--toolbar-border-radius);", "border-bottom-right-radius: var(--toolbar-border-radius);"])
    }
])
.set("Tree", [
    {
        variable: "--tree-background",
        label: "Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tree-background'),
        usage: new Map<string, string[]>()
        .set(".p-tree", ["background: var(--tree-background);"])
    },
    {
        variable: "--tree-border",
        label: "Border",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tree-border'),
        usage: new Map<string, string[]>().set(".p-tree", ["border: var(--tree-border);"])
    },
    {
        variable: "--tree-color",
        label: "Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tree-color'),
        usage: new Map<string, string[]>()
        .set(".p-tree", ["color: var(--tree-color);"])
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler", ["color: var(--tree-color);"])
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled", ["color: var(--tree-color);"])
    },
    {
        variable: "--tree-item-hover-background",
        label: "Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tree-item-hover-background'),
        usage: new Map<string, string[]>()
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover", ["background: var(--tree-item-hover-background);"])
    },
    {
        variable: "--tree-item-hover-color",
        label: "Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tree-item-hover-color'),
        usage: new Map<string, string[]>()
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover", ["color: var(--tree-item-hover-color);"])
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-tree-toggler, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-tree-toggler:enabled, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-treenode-icon", ["color: var(--tree-item-hover-color);"])
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight:hover", ["color: var(--tree-item-hover-color);"])
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight:hover .p-tree-toggler, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight:hover .p-tree-toggler:enabled, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight:hover .p-treenode-icon", ["color: var(--tree-item-hover-color);"])
    },
    {
        variable: "--tree-selected-item-background",
        label: "Selected Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tree-selected-item-background'),
        usage: new Map<string, string[]>()
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight", ["background: var(--tree-selected-item-background);"])
    },
    {
        variable: "--tree-selected-item-color",
        label: "Selected Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tree-selected-item-color'),
        usage: new Map<string, string[]>()
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight", ["color: var(--tree-selected-item-color);"])
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:enabled, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon", ["color: var(--tree-selected-item-color);"])
    },
    {
        variable: "--tree-odd-background",
        label: "Odd Nodes Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tree-odd-background'),
        usage: new Map<string, string[]>()
        .set(".p-tree .p-tree-container > .p-treenode:nth-child(odd)", ["background: var(--tree-odd-background);"])
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-children .p-treenode:nth-child(odd)", ["background: var(--tree-odd-background);"])
    },
    {
        variable: "--tree-even-background",
        label: "Even Nodes Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tree-even-background'),
        usage: new Map<string, string[]>()
        .set(".p-tree .p-tree-container > .p-treenode:nth-child(even)", ["background: var(--tree-even-background);"])
        .set(".p-tree .p-tree-container .p-treenode .p-treenode-children .p-treenode:nth-child(even)", ["background: var(--tree-even-background);"])
    }
])

export const cellEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>().set("CellPadding", [
    {
        variable: "--table-cell-padding-top-bottom",
        label: "Cell Padding Top Bottom",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--table-cell-padding-top-bottom'),
        usage: new Map<string, string[]>()
        .set(".basti .rc-table .p-datatable-tbody > tr > td", ["padding: var(--table-cell-padding-top-bottom) var(--table-cell-padding-left-right) var(--table-cell-padding-top-bottom) var(--table-cell-padding-left-right);"])
        .set(".error-dialog .error-dialog-listbox .p-listbox-item", ["padding: var(--table-cell-padding-top-bottom) var(--table-cell-padding-left-right) var(--table-cell-padding-top-bottom) var(--table-cell-padding-left-right);"])
    },
    {
        variable: "--table-cell-padding-left-right",
        label: "Cell Padding Left Right",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--table-cell-padding-left-right'),
        usage: new Map<string, string[]>()
    }
])
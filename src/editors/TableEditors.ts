import { translation } from "../util/Translation";
import { EditorGroup } from "./management/EditorCreator";

/** The current style of the root element */
const docStyle = window.getComputedStyle(document.documentElement);

/** 
 * The EditorItems for all table variables.
 * @var variable - the name of the variable which is being edited
 * @var label - the label which is being displayed in the designer
 * @var type - the type of the editor, color is a colorpicker, color-text is a text input for colors, and text is just a text.
 * @var cssType - either scheme or theme to know in which css file the variable is saved
 * @var value - the current value of the variable
 * @var usage - a Map which contains the CSS selector as key and the styles as value, to generate the css file
 * @var usage960 - optional, same as usage but for media query 960px
 * @var usage530 - optional, same as usage but for media query 530px
 * @var tooltip - optional, displays a tooltip for the variable
 */
export const tableEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Table General",
        {
            name: "Table General",
            visible: true,
            items: [
                {
                    variable: "--table-border",
                    label: translation.get("Border"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-border'),
                    usage: new Map<string, string[]>().set(".rc-table", ["border: var(--table-border);"]),
                    tooltip: translation.get("The border of the table.")
                },
                {
                    variable: "--table-text-color",
                    label: translation.get("Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-text-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table .p-datatable-tbody > tr", ["color: var(--table-text-color);"])
                        .set(".rc-table .p-datatable-tbody > tr > td.p-highlight", ["color: var(--table-text-color);"])
                        .set(".rc-table .p-datatable-tbody > tr.p-highlight", ["color: var(--table-text-color);"])
                        .set(".rc-table .p-datatable-tbody > tr.p-highlight > td .open-cell-editor", ["color: var(--table-text-color);"])
                        .set(".rc-table.p-datatable-selectable-cell .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover", ["color: var(--table-text-color);"]),
                    tooltip: translation.get("The text-color of the table cells.")
                },
                {
                    variable: "--table-cell-hover-color",
                    label: translation.get("Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-cell-hover-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-row-odd > td.p-selectable-cell:not(.p-highlight):hover", ["color: var(--table-cell-hover-color);"])
                        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-row-odd > td.p-selectable-cell:not(.p-highlight).cell-required:hover", ["color: var(--table-cell-hover-color);"])
                        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-row-odd > td.p-selectable-cell:not(.p-highlight).cell-readonly:hover", ["color: var(--table-cell-hover-color);"])
                        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight):hover", ["color: var(--table-cell-hover-color);"])
                        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight).cell-required:hover", ["color: var(--table-cell-hover-color);"])
                        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight).cell-readonly:hover", ["color: var(--table-cell-hover-color);"]),
                    tooltip: translation.get("The hover text-color of the table cells.")
                },
                {
                    variable: "--table-sort-color",
                    label: translation.get("Sort Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-sort-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th.sort-asc, .rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th.sort-des", ["color: var(--table-sort-color);"])
                        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th .p-sortable-column-icon", ["color: var(--table-sort-color);"])
                        .set(".rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover.sort-asc, .rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover.sort-des", ["color: var(--table-sort-color);"])
                        .set(".rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover.sort-asc .p-sortable-column-icon, .rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover.sort-des .p-sortable-column-icon", ["color: var(--table-sort-color);"]),
                    tooltip: translation.get("The color of the sort indicator.")
                },
                {
                    variable: "--table-selectedcellborder-color",
                    label: translation.get("Selected Cell Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-selectedcellborder-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-highlight > td.p-selectable-cell.p-highlight, .rc-table.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:focus", ["outline: 2px solid var(--table-selectedcellborder-color);", "outline-offset: -2px;"]),
                    tooltip: translation.get("The color of the selected cell border.")
                },
                {
                    variable: "--table-border-radius",
                    label: translation.get("Border-Radius"),
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
                        .set(".p-tree", ["border-radius: var(--table-border-radius);"]),
                    tooltip: translation.get("The border-radius of the table (rounds corners).")
                }
            ]
        }
    )
    .set("Table Header",
        {
            name: "Table Header",
            visible: true,
            items: [
                {
                    variable: "--table-header-background",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-header-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item-group > *", ["background: var(--table-header-background);"])
                        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th", ["background: var(--table-header-background);"]),
                    tooltip: translation.get("The background-color of the table header.")
                },
                {
                    variable: "--table-header-border",
                    label: translation.get("Border Color"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-header-border'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item-group > *", ["border-bottom: var(--table-header-border);"])
                        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th", ["border: var(--table-header-border);"]),
                    tooltip: translation.get("The border of the table header.")
                },
                {
                    variable: "--table-header-hover-background",
                    label: translation.get("Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-header-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover", ["background: var(--table-header-hover-background);"]),
                    tooltip: translation.get("The hover background-color of the table header.")
                },
                {
                    variable: "--table-header-color",
                    label: translation.get("Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-header-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table.p-datatable-selectable-cell .p-datatable-thead > tr > th", ["color: var(--table-header-color);"]),
                    tooltip: translation.get("The text-color of the table header.")
                },
                {
                    variable: "--table-header-hover-color",
                    label: translation.get("Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-header-hover-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover", ["color: var(--table-header-hover-color);"]),
                    tooltip: translation.get("The hover text-color of the table header.")
                },
                {
                    variable: "--table-header-padding",
                    label: translation.get("Padding"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--table-header-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .rc-table .p-datatable-thead > tr > th", ["padding: var(--table-header-padding);"]),
                    tooltip: translation.get("The padding of the table header.")
                },
            ]
        }
    )
    .set("Table Rows",
        {
            name: "Table Rows",
            visible: true,
            items: [
                {
                    variable: "--table-row-border",
                    label: translation.get("Row Border"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-row-border'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item > *", ["border-bottom: var(--table-row-border);"])
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item > *:not(:first-child)", ["border-left: var(--table-row-border);"])
                        .set(".rc-table table", ["border-bottom: var(--table-row-border);"])
                        .set(".rc-table .p-datatable-tbody > tr > td", ["border-bottom: var(--table-row-border);"])
                        .set(".error-dialog .p-listbox .p-listbox-list .p-listbox-item", ["border-bottom: var(--table-row-border);"]),
                    tooltip: translation.get("The border of table rows.")
                },
                {
                    variable: "--table-selected-row-background",
                    label: translation.get("Selected Row Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-selected-row-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table .p-datatable-tbody > tr.p-highlight", ["background: var(--table-selected-row-background) !important;"])
                        .set(".error-dialog .p-listbox .p-listbox-list .p-listbox-item.p-highlight", ["background: var(--table-selected-row-background);"]),
                    tooltip: translation.get("The background-color of the selected row.")
                },
                {
                    variable: "--table-row-odd-background",
                    label: translation.get("Odd Rows Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-row-odd-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even)", ["background: var(--table-row-odd-background);"])
                        .set(".rc-table .p-datatable-tbody > tr.p-row-odd", ["background: var(--table-row-odd-background);"])
                        .set(".error-dialog .p-listbox .p-listbox-list .p-listbox-item:nth-child(odd)", ["background: var(--table-row-odd-background);"]),
                    tooltip: translation.get("The background-color of odd rows.")
                },
                {
                    variable: "--table-row-even-background",
                    label: translation.get("Even Rows Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-row-even-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd)", ["background: var(--table-row-even-background);"])
                        .set(".rc-table .p-datatable-tbody > tr", ["background: var(--table-row-even-background);"])
                        .set(".error-dialog .p-listbox .p-listbox-list .p-listbox-item:nth-child(even)", ["background: var(--table-row-even-background);"]),
                    tooltip: translation.get("The background-color of even rows.")
                },
                {
                    variable: "--table-row-hover-background",
                    label: translation.get("Rows Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-row-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd):hover", ["background: var(--table-row-hover-background);"])
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd).p-highlight:hover", ["background: var(--table-row-hover-background);"])
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even):hover", ["background: var(--table-row-hover-background);"])
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even).p-highlight:hover", ["background: var(--table-row-hover-background);"])
                        .set(".rc-table.p-datatable-selectable-cell .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover", ["background: var(--table-row-hover-background);"]),
                    tooltip: translation.get("The hover background-color for rows.")
                },
                {
                    variable: "--table-required-odd-background",
                    label: translation.get("Rows Required Odd Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-required-odd-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table .p-datatable-tbody > tr.p-row-odd > td.cell-required", ["background: var(--table-required-odd-background);"])
                        .set(".rc-table .p-datatable-tbody > tr.p-row-odd.p-highlight td.cell-required", ["background: var(--table-required-odd-background);"])
                        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-row-odd > td.p-selectable-cell:not(.p-highlight).cell-required:hover", ["background: var(--table-required-odd-background);"]),
                    tooltip: translation.get("The background-color for required/mandatory columns in odd rows.")
                },
                {
                    variable: "--table-required-even-background",
                    label: translation.get("Rows Required Even Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-required-even-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table .p-datatable-tbody > tr > td.cell-required", ["background: var(--table-required-even-background);"])
                        .set(".rc-table .p-datatable-tbody > tr.p-highlight > td.cell-required", ["background: var(--table-required-even-background);"])
                        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight).cell-required:hover", ["background: var(--table-required-even-background);"]),
                    tooltip: translation.get("The background-color for required/mandatory columns in even rows.")
                },
                {
                    variable: "--table-required-color",
                    label: translation.get("Required Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-required-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-calendar.required-field .p-inputtext", ["color: var(--table-required-color);"])
                        .set(".rc-editor-linked.required-field .p-inputtext", ["color: var(--table-required-color);"])
                        .set(".rc-table .p-datatable-tbody > tr > td.cell-required", ["color: var(--table-required-color);"])
                        .set(".rc-table .p-datatable-tbody > tr.p-row-odd > td.cell-required", ["color: var(--table-required-color);"]),
                    tooltip: translation.get("The text-color for required/mandatory columns.")
                },
                {
                    variable: "--table-readonly-odd-background",
                    label: translation.get("Rows Readonly Odd Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-readonly-odd-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table .p-datatable-tbody > tr.p-row-odd > td.cell-readonly", ["background: var(--table-readonly-odd-background);"])
                        .set(".rc-table .p-datatable-tbody > tr.p-row-odd.p-highlight td.cell-readonly", ["background: var(--table-readonly-odd-background);"])
                        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row.p-row-odd > td.p-selectable-cell:not(.p-highlight).cell-readonly:hover", ["background: var(--table-readonly-odd-background);"]),
                    tooltip: translation.get("The background-color for readonly columns in odd rows.")
                },
                {
                    variable: "--table-readonly-even-background",
                    label: translation.get("Rows Readonly Even Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-readonly-even-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table .p-datatable-tbody > tr > td.cell-readonly", ["background: var(--table-readonly-even-background);"])
                        .set(".rc-table .p-datatable-tbody > tr.p-highlight > td.cell-readonly", ["background: var(--table-readonly-even-background);"])
                        .set(".p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight).cell-readonly:hover", ["background: var(--table-readonly-even-background);"]),
                    tooltip: translation.get("The background-color for readonly columns in even rows.")
                },
                {
                    variable: "--table-readonly-color",
                    label: translation.get("Readonly Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--table-readonly-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-table .p-datatable-tbody > tr > td.cell-readonly", ["color: var(--table-readonly-color);"]),
                    tooltip: translation.get("The text-color for readonly columns.")
                },
                {
                    variable: "--table-data-height",
                    label: translation.get("Row Height"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--table-data-height'),
                    usage: new Map<string, string[]>()
                        .set(".basti .rc-table .p-datatable-tbody > tr > td", ["height: calc(8px + var(--table-data-height));"])
                        .set(".error-dialog .error-dialog-listbox .p-listbox-item", ["height: calc(8px + var(--table-data-height));", "line-height: var(--table-data-height);"])
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item", ["height: calc(8px + var(--table-data-height));"]),
                    tooltip: translation.get("The height of table rows. Note: minimum height is 16px!")
                }
            ]
        }
    )
    .set("Toolbar",
        {
            name: "Toolbar",
            visible: true,
            items: [
                {
                    variable: "--toolbar-background",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--toolbar-background'),
                    usage: new Map<string, string[]>().set(".rc-toolbar", ["background: var(--toolbar-background);"]),
                    tooltip: translation.get("The background-color of the toolbar")
                },
                {
                    variable: "--toolbar-border-color",
                    label: translation.get("Border Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--toolbar-border-color'),
                    usage: new Map<string, string[]>().set(".rc-toolbar", ["border-color: var(--toolbar-border-color);"]),
                    tooltip: translation.get("The border color of the toolbar")
                },
                {
                    variable: "--toolbar-color",
                    label: translation.get("Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--toolbar-color'),
                    usage: new Map<string, string[]>().set(".rc-toolbar .rc-button.mouse-border, .rc-toolbar .rc-togglebutton.mouse-border", ["color: var(--toolbar-color);"]),
                    tooltip: translation.get("The icon-color of the toolbar")
                },
                {
                    variable: "--toolbar-separator",
                    label: translation.get("Separator"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--toolbar-separator'),
                    usage: new Map<string, string[]>()
                        .set(".rc-toolbar .rc-toolbar-border-right", ["border-right: var(--toolbar-separator);"])
                        .set(".rc-toolbar .rc-toolbar-border-bottom", ["border-bottom: var(--toolbar-separator);"])
                        .set(".mobile-launcher-menu .rc-frame-toolbar .rc-toolbar-border-right", ["border-right: var(--toolbar-separator);"])
                        .set(".mobile-launcher-menu .rc-frame-toolbar .rc-toolbar-border-bottom", ["border-bottom: var(--toolbar-separator);"])
                        .set(".rc-frame .rc-frame-toolbar .rc-toolbar-border-right", ["border-right: var(--toolbar-separator);"])
                        .set(".rc-frame .rc-frame-toolbar .rc-toolbar-border-bottom", ["border-bottom: var(--toolbar-separator);"]),
                    tooltip: translation.get("The seperator between parts of the toolbar.")
                },
                {
                    variable: "--toolbar-border-radius",
                    label: translation.get("Border-Radius"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--toolbar-border-radius'),
                    usage: new Map<string, string[]>()
                        .set(".rc-toolbar.toolbar-north", ["border-top-left-radius: var(--toolbar-border-radius);", "border-top-right-radius: var(--toolbar-border-radius);"])
                        .set(".rc-toolbar.toolbar-west", ["border-top-left-radius: var(--toolbar-border-radius);", "border-bottom-left-radius: var(--toolbar-border-radius);"])
                        .set(".rc-toolbar.toolbar-east", ["border-top-right-radius: var(--toolbar-border-radius);", "border-bottom-right-radius: var(--toolbar-border-radius);"])
                        .set(".rc-toolbar.toolbar-south", ["border-bottom-left-radius: var(--toolbar-border-radius);", "border-bottom-right-radius: var(--toolbar-border-radius);"]),
                    tooltip: translation.get("The border-radius of the toolbar (rounds corners).")
                }
            ]
        }
    )
    .set("Tree",
        {
            name: "Tree",
            visible: true,
            items: [
                {
                    variable: "--tree-background",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tree-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-tree", ["background: var(--tree-background);"]),
                    tooltip: translation.get("The background-color of the tree.")
                },
                {
                    variable: "--tree-border",
                    label: translation.get("Border"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tree-border'),
                    usage: new Map<string, string[]>().set(".p-tree", ["border: var(--tree-border);"]),
                    tooltip: translation.get("The border of the tree.")
                },
                {
                    variable: "--tree-color",
                    label: translation.get("Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tree-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-tree", ["color: var(--tree-color);"])
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler", ["color: var(--tree-color);"])
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled", ["color: var(--tree-color);"]),
                    tooltip: translation.get("The text-color of the tree.")
                },
                {
                    variable: "--tree-item-hover-background",
                    label: translation.get("Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tree-item-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover", ["background: var(--tree-item-hover-background);"]),
                    tooltip: translation.get("The hover background of tree-nodes.")
                },
                {
                    variable: "--tree-item-hover-color",
                    label: translation.get("Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tree-item-hover-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover", ["color: var(--tree-item-hover-color);"])
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-tree-toggler, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-tree-toggler:enabled, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover .p-treenode-icon", ["color: var(--tree-item-hover-color);"])
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight:hover", ["color: var(--tree-item-hover-color);"])
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight:hover .p-tree-toggler, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight:hover .p-tree-toggler:enabled, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight:hover .p-treenode-icon", ["color: var(--tree-item-hover-color);"]),
                    tooltip: translation.get("The hover text-color of tree-nodes.")
                },
                {
                    variable: "--tree-selected-item-background",
                    label: translation.get("Selected Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tree-selected-item-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight", ["background: var(--tree-selected-item-background);"]),
                    tooltip: translation.get("The background-color of the selected tree-node.")
                },
                {
                    variable: "--tree-selected-item-color",
                    label: translation.get("Selected Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tree-selected-item-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight", ["color: var(--tree-selected-item-color);"])
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:enabled, .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon", ["color: var(--tree-selected-item-color);"]),
                    tooltip: translation.get("The text-color of the selected tree-node.")
                },
                {
                    variable: "--tree-odd-background",
                    label: translation.get("Odd Nodes Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tree-odd-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-tree .p-tree-container > .p-treenode:nth-child(odd)", ["background: var(--tree-odd-background);"])
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-children .p-treenode:nth-child(odd)", ["background: var(--tree-odd-background);"]),
                    tooltip: translation.get("The background-color of odd tree-nodes.")
                },
                {
                    variable: "--tree-even-background",
                    label: translation.get("Even Nodes Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--tree-even-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-tree .p-tree-container > .p-treenode:nth-child(even)", ["background: var(--tree-even-background);"])
                        .set(".p-tree .p-tree-container .p-treenode .p-treenode-children .p-treenode:nth-child(even)", ["background: var(--tree-even-background);"]),
                    tooltip: translation.get("The background-color of even tree-nodes.")
                }
            ]
        }
    )

    /** 
 * The EditorItems for all celleditors variables.
 * @var variable - the name of the variable which is being edited
 * @var label - the label which is being displayed in the designer
 * @var type - the type of the editor, color is a colorpicker, color-text is a text input for colors, and text is just a text.
 * @var cssType - either scheme or theme to know in which css file the variable is saved
 * @var value - the current value of the variable
 * @var usage - a Map which contains the CSS selector as key and the styles as value, to generate the css file
 * @var usage960 - optional, same as usage but for media query 960px
 * @var usage530 - optional, same as usage but for media query 530px
 * @var tooltip - optional, displays a tooltip for the variable
 */
export const cellEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>().set("CellPadding",
    {
        name: "Cell Padding",
        visible: false,
        items: [
            {
                variable: "--table-cell-padding-top-bottom",
                label: translation.get("Cell Padding Top Bottom"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--table-cell-padding-top-bottom'),
                usage: new Map<string, string[]>()
                    .set(".basti .rc-table .p-datatable-tbody > tr > td", ["padding: var(--table-cell-padding-top-bottom) var(--table-cell-padding-left-right) var(--table-cell-padding-top-bottom) var(--table-cell-padding-left-right);"])
                    .set(".error-dialog .error-dialog-listbox .p-listbox-item", ["padding: var(--table-cell-padding-top-bottom) var(--table-cell-padding-left-right) var(--table-cell-padding-top-bottom) var(--table-cell-padding-left-right);"]),
                tooltip: translation.get("The top, bottom padding for cells.")
            },
            {
                variable: "--table-cell-padding-left-right",
                label: translation.get("Cell Padding Left Right"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--table-cell-padding-left-right'),
                usage: new Map<string, string[]>(),
                tooltip: translation.get("The left, right padding for cells.")
            }
        ]
    }
)
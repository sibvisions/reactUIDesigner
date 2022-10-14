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
        .set(".rc-table .p-datatable-thead > tr > th", ["background: var(--table-header-background);"])
    },
])
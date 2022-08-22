import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const generalEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
    .set("General", [
        {
            variable: "--font-size",
            label: "Font Size",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--font-size'),
            usage: new Map<string, string[]>()
            .set("body", ["font-size: var(--font-size);"])
            .set(".basti .p-component", ["font-size: var(--font-size);"])
        },
        {
            variable: "--screen-background",
            label: "Screen Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--screen-background'),
            usage: new Map<string, string[]>().set("body", ["background: var(--screen-background);"])
        },
        {
            variable: "--text-color",
            label: "Color",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--text-color'),
            usage: new Map<string, string[]>()
            .set("body", ["color: var(--text-color);"])
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-icon, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-icon", ["color: var(--text-color);"])
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-icon", ["color: var(--text-color);"])
            .set(".reactUI.basti_mobile .rc-editor-linked .p-autocomplete-dropdown, .reactUI.basti_mobile .rc-editor-linked .p-datepicker-trigger, .reactUI.basti_mobile .rc-editor-date .p-autocomplete-dropdown, .reactUI.basti_mobile .rc-editor-date .p-datepicker-trigger", ["color: var(--text-color);"])
            .set(".rc-button.mouse-border", ["color: var(--text-color);"])
            .set(".border-notpainted:not(.p-button-link), .border-notpainted:enabled:hover:not(.p-button-link)", ["color: var(--text-color);"])
            .set(".p-menu .p-menuitem-link .p-menuitem-text", ["color: var(--text-color);"])
            .set(".p-menu .p-menuitem-text", ["color: var(--text-color);"])
            .set(".p-inputtext:not(.required-field)", ["color: var(--text-color);"])
            .set(".p-datepicker:not(.p-datepicker-inline), .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header", ["color: var(--text-color);"])
            .set(".p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month, .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year", ["color: var(--text-color);"])
            .set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item", ["color: var(--text-color);"])
            .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item-group > *", ["color: var(--text-color);"])
            .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button", ["color: var(--text-color);"])
            .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg polygon, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg line, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg rect, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg polyline, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg polygon, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg line, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg rect, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg polyline", ["stroke: var(--text-color);"])
            .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label.ql-source svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button.ql-source svg path", ["fill: var(--text-color);"])
            .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker.ql-expanded .ql-picker-options .ql-picker-item", ["color: var(--text-color);"])
            .set(".p-editor-container .p-editor-content .ql-editor", ["color: var(--text-color);"])
            .set(".rc-table .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover", ["color: var(--text-color);"])
            .set(".rc-table .p-datatable-tbody > tr", ["color: var(--text-color);"])
            .set(".rc-table .p-datatable-tbody > tr > td.p-highlight", ["color: var(--text-color);"])
            .set(".rc-table .p-datatable-tbody > tr.p-highlight", ["color: var(--text-color);"])
            .set(".rc-table .p-datatable-tbody > tr.p-highlight > td .open-cell-editor", ["color: var(--text-color);"])
            .set(".rc-table.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover", ["color: var(--text-color);"])
            .set(".rc-popup .p-dialog-content, .error-dialog .p-dialog-content", ["color: var(--text-color);"])
            .set(".error-dialog .p-dialog-footer", ["color: var(--text-color);"])
            .set(".rc-message-dialog .p-dialog-content, .rc-message-dialog .p-dialog-footer", ["color: var(--text-color);"])
            .set(".rc-error-bar", ["color: var(--text-color);"])
            .set(".p-tabview .p-tabview-nav", ["color: var(--text-color);"])
            .set(".p-tabview .p-tabview-nav li:not(.p-highlight) .p-tabview-nav-link", ["color: var(--text-color);"])
            .set(".p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link", ["color: var(--text-color);", "border-color: var(--text-color);"])
            .set(".p-tree", ["color: var(--text-color);"])
            .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover", ["color: var(--text-color);"])
            .set(".p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler", ["color: var(--text-color);"])
            .set(".p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled", ["color: var(--text-color);"])
            .set(".p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover", ["color: var(--text-color);"])
            .set(".p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight", ["color: var(--text-color);"])
            .set(".rc-frame .rc-frame-header .rc-frame-header-close-button", ["color: var(--text-color);"])
            .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-icon, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-icon", ["color: var(--text-color);"])
        }
    ])
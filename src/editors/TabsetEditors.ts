import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const tabsetEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
.set("Tabset", [
    {
        variable: "--tab-padding",
        label: "Padding",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--tab-padding'),
        usage: new Map<string, string[]>().set(".basti .p-tabview .p-tabview-nav li .p-tabview-nav-link", ["padding: var(--tab-padding);"])
    },
    {
        variable: "--tab-navbar-background",
        label: "Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tab-navbar-background'),
        usage: new Map<string, string[]>()
        .set(".p-tabview .p-tabview-nav", ["background: var(--tab-navbar-background);"])
        .set(".p-tabview .p-tabview-nav li .p-tabview-nav-link", ["background: var(--tab-navbar-background);"])
    },
    {
        variable: "--tab-border-color",
        label: "Border Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tab-border-color'),
        usage: new Map<string, string[]>().set(".p-tabview .p-tabview-nav li:not(.p-highlight) .p-tabview-nav-link", ["border-color: transparent transparent var(--tab-border-color) transparent;"])
    },
    {
        variable: "--tab-selected-color",
        label: "Selected Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tab-selected-color'),
        usage: new Map<string, string[]>().set(".p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link", ["color: var(--tab-selected-color);", "border-color: var(--tab-selected-color);"])
    },
    {
        variable: "--tab-hover-background",
        label: "Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tab-hover-background'),
        usage: new Map<string, string[]>().set(".p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link", ["background: var(--tab-hover-background);"])
    },
    {
        variable: "--tab-close-color",
        label: "Close Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tab-close-color'),
        usage: new Map<string, string[]>().set(".p-tabview-close ", ["color: var(--tab-close-color);"])
    },
    {
        variable: "--tab-close-hover-color",
        label: "Close Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tab-close-hover-color'),
        usage: new Map<string, string[]>().set(".p-tabview-close:hover", ["color: var(--tab-close-hover-color);"])
    },
    {
        variable: "--tab-border-radius",
        label: "Border-Radius",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--tab-border-radius'),
        usage: new Map<string, string[]>().set(".p-tabview .p-tabview-nav", ["border-radius: var(--tab-border-radius);", "padding: 0 var(--tab-border-radius);"])
    }
])
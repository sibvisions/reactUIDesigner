import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const fullEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
.set("Full-Topbar", [
    {
        variable: "--menubar-height",
        label: "Height",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--menubar-height'),
        usage: new Map<string, string[]>().set(".basti .p-menubar", ["height: var(--menubar-height);"])
    },
    {
        variable: "--menubar-background",
        label: "Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--menubar-background'),
        usage: new Map<string, string[]>()
    },
    {
        variable: "--menubar-hover-background",
        label: "Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--menubar-hover-background'),
        usage: new Map<string, string[]>()
    },
    {
        variable: "--menubar-text-color",
        label: "Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--menubar-text-color'),
        usage: new Map<string, string[]>()
    },
    {
        variable: "--menubar-submenu-background",
        label: "Sub-Menu Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--menubar-submenu-background'),
        usage: new Map<string, string[]>()
    },
    {
        variable: "--menubar-item-hover-background",
        label: "Sub-Menu Item Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--menubar-item-hover-background'),
        usage: new Map<string, string[]>()
    },
    {
        variable: "--menubar-item-hover-text-color",
        label: "Sub-Menu Item Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--menubar-item-hover-text-color'),
        usage: new Map<string, string[]>()
    },
    {
        variable: "--launcher-toolbar-background",
        label: "Toolbar Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--launcher-toolbar-background'),
        usage: new Map<string, string[]>().set(".mobile-launcher-menu .rc-frame-toolbar", ["background: var(--launcher-toolbar-background);"])
    },
    {
        variable: "--launcher-toolbar-border",
        label: "Toolbar Border",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--launcher-toolbar-border'),
        usage: new Map<string, string[]>().set(".mobile-launcher-menu .rc-frame-toolbar", ["border-color: var(--launcher-toolbar-border);"])
    },
    {
        variable: "--launcher-toolbar-button-text-color",
        label: "Button Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--launcher-toolbar-button-text-color'),
        usage: new Map<string, string[]>().set(".mobile-launcher-menu .rc-frame-toolbar .rc-button.mouse-border", ["color: var(--launcher-toolbar-button-text-color);"])
    },
    {
        variable: "--launcher-toolbar-button-hover-background",
        label: "Button Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--launcher-toolbar-button-hover-background'),
        usage: new Map<string, string[]>()
        .set(".mobile-launcher-menu .rc-frame-toolbar .rc-button.mouse-border:not(a):not(.p-disabled):not(.border-notpainted):hover", ["background: var(--launcher-toolbar-button-hover-background);", "border-color: var(--launcher-toolbar-button-hover-background);"])
    },
    {
        variable: "--launcher-toolbar-button-hover-text-color",
        label: "Button Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--launcher-toolbar-button-hover-text-color'),
        usage: new Map<string, string[]>().set(".mobile-launcher-menu .rc-frame-toolbar .rc-button.mouse-border:not(a):not(.p-disabled):not(.border-notpainted):hover", ["color: var(--launcher-toolbar-button-hover-text-color);"])
    }
])
.set("Workscreen Window", [
    {
        variable: "--frame-menubar-background",
        label: "Menubar Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-menubar-background'),
        usage: new Map<string, string[]>()
        .set(".rc-frame .p-menubar", ["background: var(--frame-menubar-background);"])
        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["background: var(--frame-menubar-background);"])
    },
    {
        variable: "--frame-menubar-hover-background",
        label: "Menubar Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-menubar-hover-background'),
        usage: new Map<string, string[]>().set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover", ["background: var(--frame-menubar-hover-background);"])
    },
    {
        variable: "--frame-menubar-text-color",
        label: "Menubar Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-menubar-text-color'),
        usage: new Map<string, string[]>()
        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["color: var(--frame-menubar-text-color);"])
        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-submenu-icon, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-submenu-icon", ["color: var(--frame-menubar-text-color);"])
        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover", ["color: var(--frame-menubar-text-color);"])
        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon", ["color: var(--frame-menubar-text-color);"])
    },
    {
        variable: "--frame-menubar-submenu-background",
        label: "Submenu Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-menubar-submenu-background'),
        usage: new Map<string, string[]>()
        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list", ["background: var(--frame-menubar-submenu-background);"])
        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link", ["background: var(--frame-menubar-submenu-background);"])
    },
    {
        variable: "--frame-menubar-item-hover-background",
        label: "Subitem Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-menubar-item-hover-background'),
        usage: new Map<string, string[]>()
        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover", ["background: var(--frame-menubar-item-hover-background);"])
    },
    {
        variable: "--frame-menubar-item-hover-text-color",
        label: "Subitem Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-menubar-item-hover-text-color'),
        usage: new Map<string, string[]>()
        .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon", ["color: var(--frame-menubar-item-hover-text-color);"])
    },
    {
        variable: "--frame-toolbar-background",
        label: "Toolbar Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-toolbar-background'),
        usage: new Map<string, string[]>().set(".rc-frame .rc-frame-toolbar", ["background: var(--frame-toolbar-background);"])
    },
    {
        variable: "--frame-toolbar-border",
        label: "Toolbar Border",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-toolbar-border'),
        usage: new Map<string, string[]>().set(".rc-frame .rc-frame-toolbar", ["border-color: var(--frame-toolbar-border);"])
    },
    {
        variable: "--frame-toolbar-button-text-color",
        label: "Button Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-toolbar-button-text-color'),
        usage: new Map<string, string[]>().set(".rc-frame .rc-frame-toolbar .rc-button.mouse-border", ["color: var(--frame-toolbar-button-text-color);"])
    },
    {
        variable: "--frame-toolbar-button-hover-background",
        label: "Button Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-toolbar-button-hover-background'),
        usage: new Map<string, string[]>()
        .set(".rc-frame .rc-frame-toolbar .rc-button.mouse-border:not(a):not(.p-disabled):not(.border-notpainted):hover", ["background: var(--frame-toolbar-button-hover-background);", "border-color: var(--frame-toolbar-button-hover-background);"])
    },
    {
        variable: "--frame-toolbar-button-hover-text-color",
        label: "Button Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-toolbar-button-hover-text-color'),
        usage: new Map<string, string[]>().set(".rc-frame .rc-frame-toolbar .rc-button.mouse-border:not(a):not(.p-disabled):not(.border-notpainted):hover", ["color: var(--frame-toolbar-button-hover-text-color);"])
    },
    {
        variable: "--frame-header-background",
        label: "Header Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-header-background'),
        usage: new Map<string, string[]>()
        .set(".rc-frame .rc-frame-header", ["background: var(--frame-header-background);"])
        .set(".rc-frame .rc-frame-content, .rc-frame .rc-frame-menu", ["border-color: var(--frame-header-background);"])
    },
    {
        variable: "--frame-header-color",
        label: "Header Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-header-color'),
        usage: new Map<string, string[]>().set(".rc-frame .rc-frame-header", ["color: var(--frame-header-color);"])
    },
    {
        variable: "--frame-header-button-hover-background",
        label: "Close Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-header-button-hover-background'),
        usage: new Map<string, string[]>().set(".rc-frame .rc-frame-header .rc-frame-header-close-button:hover", ["background: var(--frame-header-button-hover-background);"])
    },
    {
        variable: "--frame-header-button-hover-color",
        label: "Close Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-header-button-hover-color'),
        usage: new Map<string, string[]>().set(".rc-frame .rc-frame-header .rc-frame-header-close-button:hover", ["color: var(--frame-header-button-hover-color);"])
    },
    {
        variable: "--frame-header-border",
        label: "Header Border",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-header-border'),
        usage: new Map<string, string[]>().set(".rc-frame .rc-frame-header", ["border-bottom: var(--frame-header-border);"])
    },
    {
        variable: "--frame-border-radius",
        label: "Border-Radius",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-border-radius'),
        usage: new Map<string, string[]>().set(".rc-frame", ["border-radius: var(--frame-border-radius);"])
    },
    {
        variable: "--frame-border-width",
        label: "Border-Width",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-border-width'),
        usage: new Map<string, string[]>()
        .set(".rc-frame .rc-frame-menu", ["border-width: 0 var(--frame-border-width) 0 var(--frame-border-width);"])
        .set(".rc-frame .rc-frame-content", ["0 var(--frame-border-width) var(--frame-border-width) var(--frame-border-width);"])
    },
    {
        variable: "--frame-shadow",
        label: "Shadow",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--frame-shadow'),
        usage: new Map<string, string[]>().set(".rc-frame", ["box-shadow: var(--frame-shadow);"])
    }
])
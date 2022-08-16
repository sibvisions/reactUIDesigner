import { EditorItem } from "./EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const menuEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
    .set("Topbar", [
        {
            variable: "--std-header-height",
            label: "Height",
            type: "text",
            value: docStyle.getPropertyValue('--std-header-height'),
            cssType: "theme",
            usage: new Map<string, string[]>()
            .set(".basti .std-menu .menu-header", ["height:var(--std-header-height);"])
            .set(".basti .std-menu .menu-logo-wrapper", ["height:var(--std-header-height);"])
            .set(".basti .std-menu .menu-panelmenu-wrapper", ["padding-top:var(--std-header-height);"])
            .set(".basti .std-menu .fadeout", ["margin-top:var(--std-header-height);"]),
            usage530: new Map<string, string[]>().set(".basti .std-menu .fadeout", ["margin-top:calc(var(--std-header-height) + var(--std-logo-height));"])
        },
        {
            variable: "--topbar-logo-background",
            label: "Logo Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-logo-background'),
            usage: new Map<string, string[]>().set(".menu-logo-wrapper", ["background:var(--topbar-logo-background);"])
        },
        {
            variable: "--std-logo-width",
            label: "Logo Width",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-logo-width'),
            usage: new Map<string, string[]>()
            .set(".basti .std-menu .menu-logo-wrapper .menu-logo", ["width:var(--std-logo-width);"])
            .set(".basti .std-menu .menu-logo-mini", ["width:var(--std-logo-width);"]),
            usage530: new Map<string, string[]>().set(".basti .std-menu .menu-logo-mini-wrapper .menu-logo-mini", ["width:var(--std-logo-width);"])
        },
        {
            variable: "--topbar-background",
            label: "Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-background'),
            usage: new Map<string, string[]>()
            .set(".menu-header", ["background:var(--topbar-background);"])
            .set(".corp-menu-header", ["background:var(--topbar-background);"])
            .set(".corp-menubar", ["background:var(--topbar-background);"]),
            usage960: new Map<string, string[]>()
            .set(".p-menubar .p-menubar-root-list", ["background:var(--topbar-background);"])
            .set(".p-menubar .p-menubar-root-list > .p-menuitem", ["background:var(--topbar-background);"])
        },
        {
            variable: "--topbar-text-color",
            label: "Color",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-text-color'),
            usage: new Map<string, string[]>().set(".menu-screen-title", ["color:var(--topbar-text-color);"])
        },
        {
            variable: "--std-screen-title-size",
            label: "Screen Title Size",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-screen-title-size'),
            usage: new Map<string, string[]>().set(".basti .std-menu .menu-topbar .menu-screen-title", ["font-size:var(--std-screen-title-size);"])
        },
        {
            variable: "--std-screen-title-margin",
            label: "Screen Title Margin",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-screen-title-margin'),
            usage: new Map<string, string[]>().set(".basti .std-menu .menu-topbar .menu-screen-title", ["margin-left:var(--std-screen-title-margin);"])
        },
        {
            variable: "--topbar-button-size",
            label: "Button Size",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--topbar-button-size'),
            usage: new Map<string, string[]>()
            .set(".basti .std-menu .p-button.p-button-icon-only.menu-topbar-buttons", ["width:var(--topbar-button-size);", "height:var(--topbar-button-size);"])
        },
        {
            variable: "--topbar-button-size-small",
            label: "Button Size (Small)",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--topbar-button-size-small'),
            usage: new Map<string, string[]>(),
            usage530: new Map<string, string[]>()
            .set(".basti .std-menu .p-button.p-button-icon-only.menu-topbar-buttons", ["width:var(--topbar-button-size-small);", "height:var(--topbar-button-size-small);"])
        },
        {
            variable: "--topbar-button-background",
            label: "Button Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-button-background'),
            usage: new Map<string, string[]>().set(".p-button.p-button-icon-only.menu-topbar-buttons", ["background:var(--topbar-button-background);"])
        },
        {
            variable: "--topbar-button-text-color",
            label: "Button Color",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-button-text-color'),
            usage: new Map<string, string[]>().set(".p-button.p-button-icon-only.menu-topbar-buttons", ["color:var(--topbar-button-text-color);"])
        },
        {
            variable: "--topbar-button-hover-background",
            label: "Button Hover Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyPriority('--topbar-button-hover-background'),
            usage: new Map<string, string[]>().set(".p-button.p-button-icon-only.menu-topbar-buttons:hover", ["background:var(--topbar-button-hover-background);"])
        }
    ])
    .set("Profile-Menu", [
        {
            variable: "--std-profile-height",
            label: "Height",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-profile-height'),
            usage: new Map<string, string[]>()
            .set(".basti .profile-menu", ["height:var(--std-profile-height);"])
            .set(".basti .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link", ["height:var(--std-profile-height);"])
            .set(".basti .vl", ["height:var(--std-profile-height);"])
        },
        {
            variable: "--std-profile-width-small",
            label: "Width (Small)",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-profile-width-small'),
            usage: new Map<string, string[]>(),
            usage960: new Map<string, string[]>()
            .set(".basti .std-menu .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .basti .std-menu .profile-menu .p-menubar .p-menubar-root-list.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["width:var(--std-profile-width-small);"])
            .set(".basti .std-menu .profile-menu .p-menubar .p-menubar-root-list .p-submenu-list", ["left:calc(var(--std-profile-width-small) - var(--std-profile-submenu-width-small));"])
        },
        {
            variable: "--profile-background",
            label: "Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--profile-background'),
            usage: new Map<string, string[]>()
            .set(".profile-menu .p-menubar", ["background: var(--profile-background);"])
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["background:var(--profile-background);"])
        },
        {
            variable: "--profile-hover-background",
            label: "Hover Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--profile-hover-background'),
            usage: new Map<string, string[]>()
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover", ["background:var(--profile-hover-background);"])
        },
        {
            variable: "--profile-text-color",
            label: "Color",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--profile-text-color'),
            usage: new Map<string, string[]>()
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["color:var(--profile-text-color);"])
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-submenu-icon, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-submenu-icon", ["color:var(--profile-text-color);"])
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover", ["color:var(--profile-text-color);"])
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon", ["color:var(--profile-text-color);"])
        },
        {
            variable: "--std-profile-padding",
            label: "Padding",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-profile-padding'),
            usage: new Map<string, string[]>().set(".basti .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link", ["padding:var(--std-profile-padding);"])
        },
        {
            variable: "--std-profile-pic",
            label: "Picture Size",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-profile-pic'),
            usage: new Map<string, string[]>()
            .set(".basti .std-menu .profile-image, .basti .std-menu .profile-image-null", ["width:var(--std-profile-pic);", "height:var(--std-profile-pic);"])
            .set(".basti .std-menu .profile-image", ["background-size:var(--std-profile-pic) var(--std-profile-pic);"])
            .set(".basti .std-menu .profile-image-null::before", ["font-size:calc(var(--std-profile-pic) - 2px);"])
        },
        {
            variable: "--profile-separator",
            label: "Seperator",
            type: "text",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--profile-separator'),
            usage: new Map<string, string[]>()
            .set(".vl", ["border-left:var(--profile-separator);"])
        },
        {
            variable: "--std-profile-submenu-width-small",
            label: "Sub-Menu Width (Small)",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-profile-submenu-width-small'),
            usage: new Map<string, string[]>(),
            usage960: new Map<string, string[]>()
            .set(".basti .std-menu .profile-menu .p-menubar .p-menubar-root-list .p-submenu-list", ["width:var(--std-profile-submenu-width-small);"])
        },
        {
            variable: "--profile-submenu-background",
            label: "Sub-Menu Background",
            type: "text",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--profile-submenu-background'),
            usage: new Map<string, string[]>()
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list", ["background:var(--profile-submenu-background);"])
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link", ["background:var(--profile-submenu-background);"])
        },
        {
            variable: "--profile-item-hover-background",
            label: "Sub-Menu Item Hover Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--profile-item-hover-background'),
            usage: new Map<string, string[]>()
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover", ["background:var(--profile-item-hover-background);"])
        },
        {
            variable: "--profile-item-hover-text-color",
            label: "Sub-Menu Item Hover Color",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--profile-item-hover-text-color'),
            usage: new Map<string, string[]>()
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon", ["color:var(--profile-item-hover-text-color);"])
        },
    ])
    .set("Panel-Menu", [
        {
            variable: "--std-menu-width",
            label: "Menu Width",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-menu-width'),
            usage: new Map<string, string[]>()
            .set(".basti .std-menu .menu-topbar", ["margin-left:var(--std-menu-width);"])
            .set(".basti .std-menu .menu-logo-wrapper", ["width:var(--std-menu-width);"])
            .set(".basti .std-menu .menu-panelmenu-wrapper", ["width:var(--std-menu-width);"])
            .set(".basti .std-menu .p-panelmenu .p-panelmenu-icon", ["left:calc(var(--std-menu-width) - 30px);"])
        }
    ])
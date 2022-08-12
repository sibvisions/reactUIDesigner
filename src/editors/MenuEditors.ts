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
            usage530: new Map<string, string[]>().set(".basti .std-menu .fadeout", ["margin-top: calc(var(--std-header-height) + var(--std-logo-height));"])
        },
        {
            variable: "--topbar-logo-background",
            label: "Logo Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-logo-background'),
            usage: new Map<string, string[]>().set(".menu-logo-wrapper", ["background: var(--topbar-logo-background);"])
        },
        {
            variable: "--std-logo-width",
            label: "Logo Width",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-logo-width'),
            usage: new Map<string, string[]>()
            .set(".basti .std-menu .menu-logo-wrapper .menu-logo", ["width: var(--std-logo-width);"])
            .set(".basti .std-menu .menu-logo-mini", ["width: var(--std-logo-width);"]),
            usage530: new Map<string, string[]>().set(".basti .std-menu .menu-logo-mini-wrapper .menu-logo-mini", ["width: var(--std-logo-width);"])
        },
        {
            variable: "--topbar-background",
            label: "Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-background'),
            usage: new Map<string, string[]>()
            .set(".menu-header", ["background: var(--topbar-background);"])
            .set(".corp-menu-header", ["background: var(--topbar-background);"])
            .set(".corp-menubar", ["background: var(--topbar-background);"]),
            usage960: new Map<string, string[]>()
            .set(".p-menubar .p-menubar-root-list", ["background: var(--topbar-background);"])
            .set(".p-menubar .p-menubar-root-list > .p-menuitem", ["background: var(--topbar-background);"])
        },
        {
            variable: "--topbar-text-color",
            label: "Color",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-text-color'),
            usage: new Map<string, string[]>().set(".menu-screen-title", ["color: var(--topbar-text-color);"])
        },
        {
            variable: "--std-screen-title-size",
            label: "Screen Title Size",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-screen-title-size'),
            usage: new Map<string, string[]>().set(".basti .std-menu .menu-topbar .menu-screen-title", ["font-size: var(--std-screen-title-size);"])
        },
        {
            variable: "--std-screen-title-margin",
            label: "Screen Title Margin",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-screen-title-margin'),
            usage: new Map<string, string[]>().set(".basti .std-menu .menu-topbar .menu-screen-title", ["margin-left: var(--std-screen-title-margin);"])
        },
        {
            variable: "--topbar-button-size",
            label: "Button Size",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--topbar-button-size'),
            usage: new Map<string, string[]>()
            .set(".basti .std-menu .p-button.p-button-icon-only.menu-topbar-buttons", ["width: var(--topbar-button-size);", "height: var(--topbar-button-size);"])
        },
        {
            variable: "--topbar-button-size-small",
            label: "Button Size (Small)",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--topbar-button-size-small'),
            usage: new Map<string, string[]>(),
            usage530: new Map<string, string[]>()
            .set(".basti .std-menu .p-button.p-button-icon-only.menu-topbar-buttons", ["width: var(--topbar-button-size-small);", "height: var(--topbar-button-size-small);"])
        },
        {
            variable: "--topbar-button-background",
            label: "Button Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-button-background'),
            usage: new Map<string, string[]>().set(".p-button.p-button-icon-only.menu-topbar-buttons", ["background: var(--topbar-button-background);"])
        },
        {
            variable: "--topbar-button-text-color",
            label: "Button Color",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-button-text-color'),
            usage: new Map<string, string[]>().set(".p-button.p-button-icon-only.menu-topbar-buttons", ["color: var(--topbar-button-text-color);"])
        },
        {
            variable: "--topbar-button-hover-background",
            label: "Button Hover Bgd",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyPriority('--topbar-button-hover-background'),
            usage: new Map<string, string[]>().set(".p-button.p-button-icon-only.menu-topbar-buttons:hover", ["background: var(--topbar-button-hover-background);"])
        }
    ])
    .set("Profile-Menu", [
        {
            variable: "--profile-background",
            label: "Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--profile-background'),
            usage: new Map<string, string[]>()
            .set(".profile-menu .p-menubar", ["background: var(--profile-background);"])
            .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), " + 
            ".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", 
            ["background: var(--profile-background);"])
        },
        {
            variable: "--std-profile-padding",
            label: "Profile Menu Padding",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--std-profile-padding'),
            usage: new Map<string, string[]>().set(".basti .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link", ["padding: var(--std-profile-padding);"])
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
            .set(".basti .std-menu .menu-topbar", ["margin-left: var(--std-menu-width);"])
            .set(".basti .std-menu .menu-logo-wrapper", ["width: var(--std-menu-width);"])
            .set(".basti .std-menu .menu-panelmenu-wrapper", ["width: var(--std-menu-width);"])
            .set(".basti .std-menu .p-panelmenu .p-panelmenu-icon", ["left: calc(var(--std-menu-width) - 30px);"])
        }
    ])
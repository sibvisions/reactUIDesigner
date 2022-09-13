/* Copyright 2022 SIB Visions GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import { EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const corporateEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
    .set("Corporate-Topbar", [
        {
            variable: "--corp-header-height",
            label: "Height",
            type: "text",
            value: docStyle.getPropertyValue('--corp-header-height'),
            cssType: "theme",
            usage: new Map<string, string[]>()
            .set(".basti .corp-menu .corp-menu-header", ["height: var(--corp-header-height);"])
        },
        {
            variable: "--corp-logo-width",
            label: "Logo Width",
            type: "text",
            value: docStyle.getPropertyValue('--corp-logo-width'),
            cssType: "theme",
            usage: new Map<string, string[]>()
            .set(".basti .corp-menu .corp-menu-logo-wrapper", ["max-width: var(--corp-logo-width);"])
        },
        {
            variable: "--topbar-background",
            label: "Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--topbar-background'),
            usage: new Map<string, string[]>()
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
            variable: "--corp-screen-title-size",
            label: "Screen Title Size",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-screen-title-size'),
            usage: new Map<string, string[]>().set(".basti .corp-menu .corp-menu-header .menu-screen-title", ["font-size: var(--corp-screen-title-size);"])
        },
        {
            variable: "--corp-topbar-button-size",
            label: "Button Size",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-topbar-button-size'),
            usage: new Map<string, string[]>()
            .set(".basti .corp-menu .p-button.p-button-icon-only.menu-topbar-buttons", ["width:var(--corp-topbar-button-size);", "height:var(--corp-topbar-button-size);"])
        },
        {
            variable: "--corp-topbar-button-size-small",
            label: "Button Size (Small)",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-topbar-button-size-small'),
            usage: new Map<string, string[]>(),
            usage530: new Map<string, string[]>()
            .set(".basti .corp-menu .p-button.p-button-icon-only.menu-topbar-buttons", ["width:var(--corp-topbar-button-size-small);", "height:var(--corp-topbar-button-size-small);"])
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
            variable: "--corp-profile-height",
            label: "Height",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-profile-height'),
            usage: new Map<string, string[]>()
            .set(".basti .corp-menu .profile-menu", ["height:var(--corp-profile-height);"])
            .set(".basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link", ["height:var(--corp-profile-height);"])
            .set(".basti .corp-menu .vl", ["height:var(--corp-profile-height);"])
        },
        {
            variable: "--corp-profile-width-small",
            label: "Width (Small)",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-profile-width-small'),
            usage: new Map<string, string[]>(),
            usage960: new Map<string, string[]>()
            .set(".basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["width:var(--corp-profile-width-small);"])
            .set(".basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list .p-submenu-list", ["left:calc(var(--corp-profile-width-small) - var(--corp-profile-submenu-width-small));"])
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
            variable: "--corp-profile-padding",
            label: "Padding",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-profile-padding'),
            usage: new Map<string, string[]>().set(".basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link", ["padding:var(--corp-profile-padding);"])
        },
        {
            variable: "--corp-profile-pic",
            label: "Picture Size",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-profile-pic'),
            usage: new Map<string, string[]>()
            .set(".basti .corp-menu .profile-image, .basti .corp-menu .profile-image-null", ["width:var(--corp-profile-pic);", "height:var(--corp-profile-pic);"])
            .set(".basti .corp-menu .profile-image", ["background-size:var(--corp-profile-pic) var(--corp-profile-pic);"])
            .set(".basti .corp-menu .profile-image-null::before", ["font-size:calc(var(--corp-profile-pic) - 2px);"])
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
            variable: "--corp-profile-submenu-width-small",
            label: "Sub-Menu Width (Small)",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-profile-submenu-width-small'),
            usage: new Map<string, string[]>(),
            usage960: new Map<string, string[]>()
            .set(".basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list .p-submenu-list", ["width:var(--corp-profile-submenu-width-small);"])
        },
        {
            variable: "--profile-submenu-background",
            label: "Sub-Menu Background",
            type: "color",
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
        }
    ])
    .set("Menubar", [
        {
            variable: "--corp-menubar-height",
            label: "Height",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-menubar-height'),
            usage: new Map<string, string[]>()
            .set(".basti .corp-menu .corp-menu-menubar .p-menubar", ["height: var(--corp-menubar-height);"])
        },
        {
            variable: "--menubar-background",
            label: "Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--menubar-background'),
            usage: new Map<string, string[]>()
            .set(".corp-menu-menubar", ["background: var(--menubar-background);"])
            .set(".p-menubar", ["background: var(--menubar-background);"])
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["background: var(--menubar-background);"])
        },
        {
            variable: "--menubar-hover-background",
            label: "Hover Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--menubar-hover-background'),
            usage: new Map<string, string[]>()
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover", ["background: var(--menubar-hover-background);"])
        },
        {
            variable: "--menubar-text-color",
            label: "Color",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--menubar-text-color'),
            usage: new Map<string, string[]>()
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["color: var(--menubar-text-color);"])
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-submenu-icon, .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-menuitem-icon, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-submenu-icon, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-menuitem-icon", ["color: var(--menubar-text-color);"])
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover", ["color: var(--menubar-text-color);"]) /** changed soon */
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon, .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon", ["color: var(--menubar-text-color);"]) /** changed soon */
        },
        {
            variable: "--menubar-submenu-background",
            label: "Sub-Menu Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--menubar-submenu-background'),
            usage: new Map<string, string[]>()
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list", ["background: var(--menubar-submenu-background);"])
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link", ["background: var(--menubar-submenu-background);"])
        },
        {
            variable: "--menubar-item-hover-background",
            label: "Sub-Menu Item Hover Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--menubar-item-hover-background'),
            usage: new Map<string, string[]>()
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover", ["background: var(--menubar-item-hover-background);"])
        },
        {
            variable: "--menubar-item-hover-text-color",
            label: "Sub-Menu Item Hover Color",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--menubar-item-hover-text-color'),
            usage: new Map<string, string[]>()
            .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon", ["color: var(--menubar-item-hover-text-color);"])
        },
        {
            variable: "--corp-menu-header-padding",
            label: "Header-Item Padding",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-menu-header-padding'),
            usage: new Map<string, string[]>()
            .set(".basti .corp-menu .corp-menu-menubar .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled)", ["padding: var(--corp-menu-header-padding);"])
        },
        {
            variable: "--corp-menu-item-padding",
            label: "Sub-Item Padding",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-menu-item-padding'),
            usage: new Map<string, string[]>()
            .set(".basti .corp-menu .corp-menu-menubar .p-menubar .p-menuitem-link", ["padding: var(--corp-menu-item-padding);"])
        },
        {
            variable: "--corp-speeddial-size",
            label: "Toolbar-Button Size",
            type: "text",
            cssType: "theme",
            value: docStyle.getPropertyValue('--corp-speeddial-size'),
            usage: new Map<string, string[]>()
            .set(".basti .corp-menu .p-speeddial .p-speeddial-button.p-button.p-button-icon-only", ["height: var(--corp-speeddial-size);", "width: var(--corp-speeddial-size);", "top: calc((32px - var(--corp-speeddial-size)) / 2);"])
            .set(".basti .corp-menu .p-speeddial .p-speeddial-button.p-button.p-button-icon-only .p-button-icon", ["font-size: calc(var(--corp-speeddial-size) / 2);"])
            .set(".basti .corp-menu .p-speeddial .p-speeddial-action", ["height: var(--corp-speeddial-size);", "width: var(--corp-speeddial-size);", "font-size: calc(var(--corp-speeddial-size) / 2);"])
        },
        {
            variable: "--corp-menu-speeddial-background",
            label: "Toolbar-Button Background",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--corp-menu-speeddial-background'),
            usage: new Map<string, string[]>()
            .set(".p-speeddial .p-speeddial-button.p-button.p-button-icon-only", ["background: var(--corp-menu-speeddial-background);", "border-color: var(--corp-menu-speeddial-background);"])
        },
        {
            variable: "--corp-menu-speeddial-color",
            label: "Toolbar-Button Color",
            type: "color",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--corp-menu-speeddial-color'),
            usage: new Map<string, string[]>()
            .set(".p-speeddial .p-speeddial-button.p-button.p-button-icon-only", ["color: var(--corp-menu-speeddial-color);"])
        },
        {
            variable: "--corp-menu-speeddial-shadow",
            label: "Toolbar-Button Shadow",
            type: "text",
            cssType: "scheme",
            value: docStyle.getPropertyValue('--corp-menu-speeddial-shadow'),
            usage: new Map<string, string[]>()
            .set(".p-speeddial .p-speeddial-button.p-button.p-button-icon-only", ["box-shadow: var(--corp-menu-speeddial-shadow);"])
        }
    ])
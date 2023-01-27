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

import { EditorGroup } from "./management/EditorCreator";

/** The current style of the root element */
const docStyle = window.getComputedStyle(document.documentElement);

/** 
 * The EditorItems for all corporate-menu variables.
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
export const corporateEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Corporation-Topbar",
        {
            name: "Topbar",
            visible: true,
            items: [
                {
                    variable: "--corp-header-height",
                    label: "Height",
                    type: "text",
                    value: docStyle.getPropertyValue('--corp-header-height'),
                    cssType: "theme",
                    usage: new Map<string, string[]>()
                        .set(".basti .corp-menu .corp-menu-header", ["height: var(--corp-header-height);"])
                        .set(".basti .corp-menu .corp-menu-menubar .p-menubar .p-menubar .p-menubar-root-list::-webkit-scrollbar-button:start:decrement", ["height: var(--corp-header-height);"])
                        .set(".basti .corp-menu .corp-menu-logo-wrapper", ["max-height: var(--corp-header-height);"])
                        .set(".basti .corp-menu .corp-menu-logo-wrapper .menu-logo", ["max-height: var(--corp-header-height);"]),
                    tooltip: "The height of the topbar."
                },
                {
                    variable: "--corp-logo-width",
                    label: "Logo Width",
                    type: "text",
                    value: docStyle.getPropertyValue('--corp-logo-width'),
                    cssType: "theme",
                    usage: new Map<string, string[]>()
                        .set(".basti .corp-menu .corp-menu-logo-wrapper", ["width: var(--corp-logo-width);"]),
                    tooltip: "The width of the logo in the topbar."
                },
                {
                    variable: "--topbar-background",
                    label: "Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-background'),
                    usage: new Map<string, string[]>()
                        .set(".corp-menu-header", ["background:var(--topbar-background);"]),
                    tooltip: "The background-color of the topbar."
                },
                {
                    variable: "--topbar-text-color",
                    label: "Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-text-color'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The text-color of the topbar."
                },
                {
                    variable: "--corp-screen-title-size",
                    label: "Screen Title Size",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--corp-screen-title-size'),
                    usage: new Map<string, string[]>().set(".basti .corp-menu .corp-menu-header .menu-screen-title", ["font-size: var(--corp-screen-title-size);"]),
                    tooltip: "The font-size of the screen title in the topbar."
                },
                {
                    variable: "--topbar-button-background",
                    label: "Button Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-button-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The background-color of the topbar's buttons."
                },
                {
                    variable: "--topbar-button-text-color",
                    label: "Button Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-button-text-color'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The text-color of the topbar's buttons."
                },
                {
                    variable: "--topbar-button-hover-background",
                    label: "Button Hover Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-button-hover-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The hover background-color of the topbar's buttons."
                },
                {
                    variable: "--corp-scrollbar-background",
                    label: "Scrollbar Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--corp-scrollbar-background'),
                    usage: new Map<string, string[]>().set(".corp-menu-menubar .p-menubar .p-menubar-root-list::-webkit-scrollbar-track, .mobile-launcher-menu .p-menubar .p-menubar-root-list::-webkit-scrollbar-track", ["background: var(--corp-scrollbar-background);"]),
                    tooltip: "The color of the background of the scrollbar in the menubar."
                },
                {
                    variable: "--menu-scrollbar-color",
                    label: "Scrollbar Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menu-scrollbar-color'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The color of the scrollbar in the menubar."
                },
                {
                    variable: "--menu-scrollbar-hover-color",
                    label: "Scrollbar Hover Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menu-scrollbar-hover-color'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The hover color of the scrollbar in the menubar."
                }
            ]
        }
    )
    .set("Profile-Menu",
        {
            name: "Profile Menu",
            visible: true,
            items: [
                {
                    variable: "--corp-profile-width-small",
                    label: "Width (Small)",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--corp-profile-width-small'),
                    usage: new Map<string, string[]>(),
                    usage960: new Map<string, string[]>()
                        .set(".basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["width:var(--corp-profile-width-small);"])
                        .set(".basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list .p-submenu-list", ["left:calc(var(--corp-profile-width-small) - var(--corp-profile-submenu-width-small));"]),
                    tooltip: "The width of the profile-menu when the application is small."
                },
                {
                    variable: "--profile-background",
                    label: "Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The background-color of the profile-menu."
                },
                {
                    variable: "--profile-hover-background",
                    label: "Hover Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-hover-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The hover background-color of the profile-menu."
                },
                {
                    variable: "--profile-text-color",
                    label: "Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-text-color'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The text-color of the profile-menu."
                },
                {
                    variable: "--corp-profile-padding",
                    label: "Padding",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--corp-profile-padding'),
                    usage: new Map<string, string[]>().set(".basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link", ["padding:var(--corp-profile-padding);"]),
                    tooltip: "The padding of the profile-menu."
                },
                {
                    variable: "--profile-separator",
                    label: "Separator",
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-separator'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The seperator between profile-menu and topbar buttons."
                },
                {
                    variable: "--corp-profile-submenu-width-small",
                    label: "Sub-Menu Width (Small)",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--corp-profile-submenu-width-small'),
                    usage: new Map<string, string[]>(),
                    usage960: new Map<string, string[]>()
                        .set(".basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list .p-submenu-list", ["width:var(--corp-profile-submenu-width-small);"]),
                        tooltip: "The width of the profile-menu's sub-menu when the application is small."
                },
                {
                    variable: "--profile-submenu-background",
                    label: "Sub-Menu Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-submenu-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The background-color of the profile-menu's sub-menu."
                },
                {
                    variable: "--profile-item-hover-background",
                    label: "Sub-Menu Item Hover Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-item-hover-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The item hover background-color of the profile-menu's sub-menu."
                },
                {
                    variable: "--profile-item-hover-text-color",
                    label: "Sub-Menu Item Hover Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-item-hover-text-color'),
                    usage: new Map<string, string[]>(),
                    tooltip: "The item hover text-color of the profile-menu's sub-menu."
                }
            ]
        }
    )
    .set("Menubar",
        {
            name: "Menubar",
            visible: true,
            items: [
                {
                    variable: "--corp-menubar-height",
                    label: "Height",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--corp-menubar-height'),
                    usage: new Map<string, string[]>()
                        .set(".basti .corp-menu .corp-menu-menubar .p-menubar", ["height: var(--corp-menubar-height);"]),
                    tooltip: "The height of the menubar."
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
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["background: var(--menubar-background);"]),
                    tooltip: "The background-color of the menubar."
                },
                {
                    variable: "--menubar-hover-background",
                    label: "Hover Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover", ["background: var(--menubar-hover-background);"]),
                    tooltip: "The hover background-color of the menubar."
                },
                {
                    variable: "--menubar-text-color",
                    label: "Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-text-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled), .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled)", ["color: var(--menubar-text-color);"])
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-submenu-icon, .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled) .p-menuitem-icon:not(.profile-image-null), .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-submenu-icon, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled) .p-menuitem-icon:not(.profile-image-null)", ["color: var(--menubar-text-color);"])
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover", ["color: var(--menubar-text-color);"])
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon, .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon:not(.profile-image-null), .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon:not(.profile-image-null)", ["color: var(--menubar-text-color);"]),
                    tooltip: "The text-color of the menubar."
                },
                {
                    variable: "--menubar-submenu-background",
                    label: "Sub-Menu Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-submenu-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list", ["background: var(--menubar-submenu-background);"])
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link", ["background: var(--menubar-submenu-background);"]),
                    tooltip: "The submenu background-color of the menubar."
                },
                {
                    variable: "--menubar-item-hover-background",
                    label: "Sub-Menu Item Hover Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-item-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover", ["background: var(--menubar-item-hover-background);"]),
                    tooltip: "The submenu item hover background-color of the menubar."
                },
                {
                    variable: "--menubar-item-hover-text-color",
                    label: "Sub-Menu Item Hover Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menubar-item-hover-text-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon", ["color: var(--menubar-item-hover-text-color);"]),
                    tooltip: "The submenu item hover text-color of the menubar."
                },
                {
                    variable: "--corp-menu-header-padding",
                    label: "Header-Item Padding",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--corp-menu-header-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .corp-menu .corp-menu-menubar .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled)", ["padding: var(--corp-menu-header-padding);"]),
                    tooltip: "The menu-group padding of the menubar"
                },
                {
                    variable: "--corp-menu-item-padding",
                    label: "Sub-Item Padding",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--corp-menu-item-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .corp-menu .corp-menu-menubar .p-menubar .p-menuitem-link", ["padding: var(--corp-menu-item-padding);"]),
                    tooltip: "The menu-item padding of the menubar."
                },
                {
                    variable: "--corp-menu-speeddial-background",
                    label: "Toolbar-Button Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--corp-menu-speeddial-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-speeddial .p-speeddial-button.p-button.p-button-icon-only", ["background: var(--corp-menu-speeddial-background);", "border-color: var(--corp-menu-speeddial-background);"]),
                    tooltip: "The background-color of the speeddial component in the menubar."
                },
                {
                    variable: "--corp-menu-speeddial-color",
                    label: "Toolbar-Button Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--corp-menu-speeddial-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-speeddial .p-speeddial-button.p-button.p-button-icon-only", ["color: var(--corp-menu-speeddial-color);"]),
                    tooltip: "The text-color of the speeddial component in the menubar."
                },
                {
                    variable: "--corp-menu-speeddial-shadow",
                    label: "Toolbar-Button Shadow",
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--corp-menu-speeddial-shadow'),
                    usage: new Map<string, string[]>()
                        .set(".p-speeddial .p-speeddial-button.p-button.p-button-icon-only", ["box-shadow: var(--corp-menu-speeddial-shadow);"]),
                    tooltip: "The shadow of the speeddial component in the menubar."
                }
            ]
        }
    )
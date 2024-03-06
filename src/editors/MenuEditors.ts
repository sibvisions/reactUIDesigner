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

import { translation } from "../util/Translation";
import { EditorGroup } from "./management/EditorCreator";

/** The current style of the root element */
const docStyle = window.getComputedStyle(document.documentElement);

/** 
 * The EditorItems for all standard-menu variables.
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
export const menuEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Standard-Topbar",
        {
            name: "Topbar",
            visible: true,
            items: [
                {
                    variable: "--std-header-height",
                    label: translation.get("Height"),
                    type: "text",
                    value: docStyle.getPropertyValue('--std-header-height'),
                    cssType: "theme",
                    usage: new Map<string, string[]>()
                        .set(".basti .std-menu .menu-header", ["height: var(--std-header-height);"])
                        .set(".basti .std-menu .menu-logo-wrapper", ["height: var(--std-header-height);"])
                        .set(".basti .std-menu:not(.design-std-menu) .menu-panelmenu-wrapper", ["padding-top: var(--std-header-height);"])
                        .set(".basti .std-menu .fadeout", ["margin-top: var(--std-header-height);"])
                        .set(".basti .std-menu.menu-collapsed .menu-panelmenu-wrapper::-webkit-scrollbar-button:start:decrement", ["height: var(--std-header-height);"])
                        .set(".basti .std-menu.menu-collapsed .menu-panelmenu-wrapper::-webkit-scrollbar-button:start:decrement", ["height: var(--std-header-height);"]),
                    usage530: new Map<string, string[]>().set(".basti .std-menu .fadeout", ["margin-top: calc(var(--std-header-height) + var(--std-logo-height));"]),
                    tooltip: translation.get("The height of the topbar.")
                },
                {
                    variable: "--topbar-logo-background",
                    label: translation.get("Logo Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-logo-background'),
                    usage: new Map<string, string[]>().set(".menu-logo-wrapper", ["background: var(--topbar-logo-background);"]),
                    tooltip: translation.get("The background-color of the logo in the topbar.")
                },

                {
                    variable: "--topbar-background",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-background'),
                    usage: new Map<string, string[]>()
                        .set(".menu-header", ["background: var(--topbar-background);"]),
                    usage960: new Map<string, string[]>()
                        .set(".p-menubar .p-menubar-root-list", ["background: var(--topbar-background);"])
                        .set(".p-menubar .p-menubar-root-list > .p-menuitem", ["background: var(--topbar-background);"]),
                    tooltip: translation.get("The background-color of the topbar.")
                },
                {
                    variable: "--topbar-text-color",
                    label: translation.get("Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-text-color'),
                    usage: new Map<string, string[]>().set(".menu-screen-title", ["color: var(--topbar-text-color);"]),
                    tooltip: translation.get("The text-color of the toolbar.")
                },
                {
                    variable: "--std-screen-title-size",
                    label: translation.get("Screen Title Size"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--std-screen-title-size'),
                    usage: new Map<string, string[]>().set(".basti .std-menu .menu-topbar .menu-screen-title", ["font-size: var(--std-screen-title-size);"]),
                    tooltip: translation.get("The font-size of the screen title in the topbar.")
                },
                {
                    variable: "--std-screen-title-margin",
                    label: translation.get("Screen Title Margin"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--std-screen-title-margin'),
                    usage: new Map<string, string[]>().set(".basti .std-menu .menu-topbar .menu-screen-title", ["margin-left: var(--std-screen-title-margin);"]),
                    tooltip: translation.get("The left margin of the title to the collapse button.")
                },
                {
                    variable: "--topbar-button-background",
                    label: translation.get("Button Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-button-background'),
                    usage: new Map<string, string[]>().set(".p-button.p-button-icon-only.menu-topbar-buttons", ["background: var(--topbar-button-background);"]),
                    tooltip: translation.get("The background-color of the topbar's buttons.")
                },
                {
                    variable: "--topbar-button-text-color",
                    label: translation.get("Button Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-button-text-color'),
                    usage: new Map<string, string[]>().set(".p-button.p-button-icon-only.menu-topbar-buttons", ["color: var(--topbar-button-text-color);"]),
                    tooltip: translation.get("The text-color of the topbar's buttons.")
                },
                {
                    variable: "--topbar-button-hover-background",
                    label: translation.get("Button Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--topbar-button-hover-background'),
                    usage: new Map<string, string[]>().set(".p-button.p-button-icon-only.menu-topbar-buttons:hover", ["background: var(--topbar-button-hover-background);"]),
                    tooltip: translation.get("The hover background-color of the topbar's buttons.")
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
                    variable: "--std-profile-width-small",
                    label: translation.get("Width (Small)"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--std-profile-width-small'),
                    usage: new Map<string, string[]>(),
                    usage960: new Map<string, string[]>()
                        .set(".basti .std-menu .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link:not(.p-disabled), .basti .std-menu .profile-menu .p-menubar .p-menubar-root-list.p-menuitem-active > .p-menuitem-content > .p-menuitem-link:not(.p-disabled)", ["width: var(--std-profile-width-small);"])
                        .set(".basti .std-menu .profile-menu .p-menubar .p-menubar-root-list .p-submenu-list", ["left: calc(var(--std-profile-width-small) - var(--std-profile-submenu-width-small));"]),
                    tooltip: translation.get("The width of the profile-menu when the application is small.")
                },
                {
                    variable: "--profile-background",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-background'),
                    usage: new Map<string, string[]>()
                        .set(".profile-menu .p-menubar", ["background: var(--profile-background);"])
                        .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content", ["background: var(--profile-background);"]),
                    tooltip: translation.get("The background-color of the profile-menu.")
                },
                {
                    variable: "--profile-hover-background",
                    label: translation.get("Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content:hover, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content:hover", ["background: var(--profile-hover-background);"]),
                    tooltip: translation.get("The hover background-color of the profile-menu.")
                },
                {
                    variable: "--profile-text-color",
                    label: translation.get("Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-text-color'),
                    usage: new Map<string, string[]>()
                        .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content", ["color: var(--profile-text-color);"])
                        .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content:hover, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content:hover", ["color: var(--profile-text-color);"])
                        .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content:hover .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content:hover .p-submenu-icon, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content:hover .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content:hover .p-submenu-icon", ["color: var(--profile-text-color);"])
                        .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link:not(.p-disabled) .p-submenu-icon, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content > .p-menuitem-link:not(.p-disabled) .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content > .p-menuitem-link:not(.p-disabled) .p-submenu-icon", ["color: var(--profile-text-color);"]),
                    tooltip: translation.get("The text-color of the profile-menu.")
                },
                {
                    variable: "--std-profile-padding",
                    label: translation.get("Padding"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--std-profile-padding'),
                    usage: new Map<string, string[]>().set(".basti .std-menu .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link", ["padding: var(--std-profile-padding);"]),
                    tooltip: translation.get("The padding of the profile-menu (changes size).")
                },
                {
                    variable: "--profile-separator",
                    label: translation.get("Separator"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-separator'),
                    usage: new Map<string, string[]>()
                        .set(".vl", ["border-left: var(--profile-separator);"]),
                    tooltip: translation.get("The seperator between profile-menu and topbar buttons.")
                },
                {
                    variable: "--std-profile-submenu-width-small",
                    label: translation.get("Sub-Menu Width (Small)"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--std-profile-submenu-width-small'),
                    usage: new Map<string, string[]>(),
                    usage960: new Map<string, string[]>()
                        .set(".basti .std-menu .profile-menu .p-menubar .p-menubar-root-list .p-submenu-list", ["width: var(--std-profile-submenu-width-small);"]),
                    tooltip: translation.get("The width of the profile-menu's sub-menu when the application is small.")
                },
                {
                    variable: "--profile-submenu-background",
                    label: translation.get("Sub-Menu Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-submenu-background'),
                    usage: new Map<string, string[]>()
                        .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list", ["background: var(--profile-submenu-background);"])
                        .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link", ["background: var(--profile-submenu-background);"]),
                    tooltip: translation.get("The background-color of the profile-menu's sub-menu.")
                },
                {
                    variable: "--profile-item-hover-background",
                    label: translation.get("Sub-Menu Item Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-item-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover", ["background: var(--profile-item-hover-background);"]),
                    tooltip: translation.get("The item hover background-color of the profile-menu's sub-menu.")
                },
                {
                    variable: "--profile-item-hover-text-color",
                    label: translation.get("Sub-Menu Item Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--profile-item-hover-text-color'),
                    usage: new Map<string, string[]>()
                        .set(".profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-text, .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link:hover .p-menuitem-icon", ["color: var(--profile-item-hover-text-color);"]),
                    tooltip: translation.get("The item hover text-color of the profile-menu's sub-menu.")
                }
            ]
        }
    )
    .set("Sidebar-Menu",
        {
            name: "Sidebar Menu",
            visible: true,
            items: [
                {
                    variable: "--std-menu-width",
                    label: translation.get("Width"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--std-menu-width'),
                    usage: new Map<string, string[]>()
                        .set(".basti .std-menu:not(.design-std-menu) .menu-topbar", ["margin-left: var(--std-menu-width);"])
                        .set(".basti .std-menu .menu-logo-wrapper", ["width: var(--std-menu-width);"])
                        .set(".basti .std-menu .menu-panelmenu-wrapper", ["width: var(--std-menu-width);"])
                        .set(".basti .std-menu .p-panelmenu .p-panelmenu-icon", ["left: calc(var(--std-menu-width) - 30px);"]),
                    tooltip: translation.get("The sidebar menu's width.")
                },
                {
                    variable: "--std-menu-collapsed-width",
                    label: translation.get("Collapsed Width"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--std-menu-collapsed-width'),
                    usage: new Map<string, string[]>()
                        .set(".basti .std-menu.menu-collapsed .menu-logo-wrapper", ["width: var(--std-menu-collapsed-width);"])
                        .set(".basti .std-menu.menu-collapsed .menu-panelmenu-wrapper", ["width: var(--std-menu-collapsed-width);"])
                        .set(".basti .std-menu.menu-collapsed:not(.design-std-menu) .menu-topbar", ["margin-left: var(--std-menu-collapsed-width);"]),
                    tooltip: translation.get("The sidebar menu's collapsed width.")
                },
                {
                    variable: "--std-menu-background",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--std-menu-background'),
                    usage: new Map<string, string[]>()
                        .set(".menu-panelmenu-wrapper", ["background: var(--std-menu-background);"])
                        .set(".p-panelmenu .p-panelmenu-header a", ["background: var(--std-menu-background);", "border-color: var(--std-menu-background);"])
                        .set(".p-panelmenu .p-panelmenu-content", ["background: var(--std-menu-background);"])
                        .set(".p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link", ["background: var(--std-menu-background);"]),
                    tooltip: translation.get("The background-color of the sidebar menu.")
                },
                {
                    variable: "--std-menu-item-hover-background",
                    label: translation.get("Item Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--std-menu-item-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled) a:hover", ["background: var(--std-menu-item-hover-background);", "border-color: var(--std-menu-item-hover-background);"])
                        .set(".p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover", ["background: var(--std-menu-item-hover-background);"])
                        .set(".p-panelmenu .p-panelmenu-header.p-highlight:not(.p-disabled) a:hover", ["background: var(--std-menu-item-hover-background);", "border-color: var(--std-menu-item-hover-background);"]),
                    tooltip: translation.get("The item hover background-color of the sidebar menu.")
                },
                {
                    variable: "--std-menu-text-color",
                    label: translation.get("Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--std-menu-text-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-panelmenu .p-panelmenu-header a", ["color: var(--std-menu-text-color);"])
                        .set(".p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-icon, .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-text", ["color: var(--std-menu-text-color);"]),
                    tooltip: translation.get("The text-color of the sidebar menu.")
                },
                {
                    variable: "--std-menu-item-hover-text-color",
                    label: translation.get("Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--std-menu-item-hover-text-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled) a:hover", ["color: var(--std-menu-item-hover-text-color);"])
                        .set(".p-panelmenu .p-panelmenu-header.p-highlight:not(.p-disabled) a:hover", ["color: var(--std-menu-item-hover-text-color);"])
                        .set(".p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon, .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text", ["color: var(--std-menu-item-hover-text-color);"]),
                    tooltip: translation.get("The item hover text-color of the sidebar menu.")
                },
                {
                    variable: "--std-menu-activeitem-color",
                    label: translation.get("Active Item Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--std-menu-activeitem-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-panelmenu .p-panelmenu-content .p-menuitem.p-menuitem--active .p-menuitem-link .p-menuitem-text, .p-panelmenu .p-panelmenu-content .p-menuitem.p-menuitem--active .p-menuitem-link .p-menuitem-icon, .p-panelmenu .p-panelmenu-content .p-menuitem.p-menuitem--active .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .p-panelmenu .p-panelmenu-content .p-menuitem.p-menuitem--active .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon", ["color: var(--std-menu-activeitem-color);"]),
                    tooltip: translation.get("The text-color of a selected menu-item in the sidebar menu.")
                },
                {
                    variable: "--std-menu-header-padding",
                    label: translation.get("Header-Item Padding"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--std-menu-header-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .std-menu .p-panelmenu .p-panelmenu-header a", ["padding: var(--std-menu-header-padding);"]),
                    tooltip: translation.get("The padding of a menu-group in the sidebar menu.")
                },
                {
                    variable: "--std-menu-item-padding",
                    label: translation.get("Sub-Item Padding"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--std-menu-item-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .std-menu .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled)", ["padding: var(--std-menu-item-padding);"]),
                    tooltip: translation.get("The padding of a menu-item in the sidebar menu.")
                },
                {
                    variable: "--std-menu-border",
                    label: translation.get("Border"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--std-menu-border'),
                    usage: new Map<string, string[]>()
                        .set(".menu-logo-wrapper", ["border-bottom: var(--std-menu-border);"])
                        .set(".menu-panelmenu-wrapper", ["border-right: var(--std-menu-border);"]),
                    tooltip: translation.get("The border of the sidebar menu.")
                },
                {
                    variable: "--menuicon-size",
                    label: translation.get("Menuicon Size"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--menuicon-size'),
                    usage: new Map<string, string[]>().set(".basti .std-menu .p-menuitem-icon:not(.profile-image):not(.profile-image-null)", ["min-width: var(--menuicon-size);", "max-width: var(--menuicon-size);", "font-size: var(--menuicon-size);"]),
                    tooltip: translation.get("The size of the menu-icons in the sidebar menu.")
                },
                {
                    variable: "--menu-scrollbar-background",
                    label: translation.get("Scrollbar Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menu-scrollbar-background'),
                    usage: new Map<string, string[]>().set(".menu-panelmenu-wrapper::-webkit-scrollbar-track", ["background: var(--menu-scrollbar-background);"]),
                    tooltip: translation.get("The color in the background of the scrollbar in the sidebar menu.")
                },
                {
                    variable: "--menu-scrollbar-color",
                    label: translation.get("Scrollbar Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menu-scrollbar-color'),
                    usage: new Map<string, string[]>()
                        .set(".menu-panelmenu-wrapper::-webkit-scrollbar-thumb", ["background: var(--menu-scrollbar-color);"])
                        .set(".corp-menu-menubar .p-menubar .p-menubar-root-list::-webkit-scrollbar-thumb, .mobile-launcher-menu .p-menubar .p-menubar-root-list::-webkit-scrollbar-thumb", ["background: var(--menu-scrollbar-color);"]),
                    tooltip: translation.get("The color of the scrollbar in the sidebar menu.")
                },
                {
                    variable: "--menu-scrollbar-hover-color",
                    label: translation.get("Scrollbar Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--menu-scrollbar-hover-color'),
                    usage: new Map<string, string[]>()
                        .set(".menu-panelmenu-wrapper::-webkit-scrollbar-thumb:hover", ["background: var(--menu-scrollbar-hover-color);"])
                        .set(".corp-menu-menubar .p-menubar .p-menubar-root-list::-webkit-scrollbar-thumb:hover, .mobile-launcher-menu .p-menubar .p-menubar-root-list::-webkit-scrollbar-thumb:hover", ["background: var(--menu-scrollbar-hover-color);"]),
                    tooltip: translation.get("The hover color of the scrollbar in the sidebar menu.")
                }
            ]
        }
    )

/** 
 * The EditorItems for extra menu variables which should not be visible.
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
export const menuExtras: Map<string, EditorGroup> = new Map<string, EditorGroup>().set("MenuExtras",
    {
        name: "Menu Extras",
        visible: false,
        items: [
            {
                variable: "--std-profile-height",
                label: translation.get("Height"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--std-profile-height'),
                usage: new Map<string, string[]>()
                    .set(".basti .std-menu .profile-menu", ["height: var(--std-profile-height);"])
                    .set(".basti .std-menu .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link", ["height: var(--std-profile-height);"])
                    .set(".basti .std-menu .vl", ["height: var(--std-profile-height);"]),
                tooltip: translation.get("The height of the profile-menu.")
            },
            {
                variable: "--std-logo-width",
                label: translation.get("Logo Width"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--std-logo-width'),
                usage: new Map<string, string[]>()
                    .set(".basti .std-menu .menu-logo-wrapper .menu-logo", ["width: var(--std-logo-width);"])
                    .set(".basti .std-menu .menu-logo-mini", ["width: var(--std-logo-width);"]),
                usage530: new Map<string, string[]>().set(".basti .std-menu .menu-logo-mini-wrapper .menu-logo-mini", ["width: var(--std-logo-width);"]),
                tooltip: translation.get("The width of the logo in the topbar.")
            },
            {
                variable: "--std-logo-collapsed-width",
                label: translation.get("Logo Collapsed Width"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--std-logo-collapsed-width'),
                usage: new Map<string, string[]>()
                    .set(".basti .std-menu.menu-collapsed .menu-logo-wrapper .menu-logo", ["width: var(--std-logo-collapsed-width);"])
                    .set(".basti .std-menu.menu-collapsed .menu-logo-mini", ["width: var(--std-logo-collapsed-width);"]),
                tooltip: translation.get("The width of the logo in the topbar when the sidebar menu is collapsed.")
            },
            {
                variable: "--std-logo-height",
                label: translation.get("Logo Max Height"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--std-logo-height'),
                usage: new Map<string, string[]>()
                    .set(".basti .std-menu .menu-logo-wrapper .menu-logo", ["max-height: var(--std-logo-height);"]),
                usage530: new Map<string, string[]>()
                    .set(".basti .std-menu .menu-logo-mini-wrapper", ["height: var(--std-logo-height);"])
                    .set(".basti .std-menu .menu-logo-mini-wrapper .menu-logo-mini", ["max-height: var(--std-logo-height);"]),
                tooltip: translation.get("The height of the logo.")
            },
            {
                variable: "--std-profile-pic",
                label: translation.get("Picture Size"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--std-profile-pic'),
                usage: new Map<string, string[]>()
                    .set(".basti .std-menu .profile-image, .basti .std-menu .profile-image-null", ["width: var(--std-profile-pic);", "height: var(--std-profile-pic);"])
                    .set(".basti .std-menu .profile-image", ["background-size: var(--std-profile-pic) var(--std-profile-pic);"])
                    .set(".basti .std-menu .profile-image-null::before", ["font-size: calc(var(--std-profile-pic) - 2px);"]),
                tooltip: translation.get("The size of the profile-picture in the profile menu.")
            },
            {
                variable: "--std-topbar-button-size",
                label: translation.get("Button Size"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--std-topbar-button-size'),
                usage: new Map<string, string[]>()
                    .set(".basti .std-menu .p-button.p-button-icon-only.menu-topbar-buttons", ["min-width: var(--std-topbar-button-size);", "height: var(--std-topbar-button-size);"]),
                tooltip: translation.get("The size of the topbar's buttons.")
            },
            {
                variable: "--std-topbar-button-size-small",
                label: translation.get("Button Size (Small)"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--std-topbar-button-size-small'),
                usage: new Map<string, string[]>(),
                usage530: new Map<string, string[]>()
                    .set(".basti .std-menu .p-button.p-button-icon-only.menu-topbar-buttons", ["min-width: var(--std-topbar-button-size-small);", "height: var(--std-topbar-button-size-small);"]),
                tooltip: translation.get("The size of the topbar's buttons when the application is small.")
            },
            {
                variable: "--corp-profile-height",
                label: translation.get("Height"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--corp-profile-height'),
                usage: new Map<string, string[]>()
                    .set(".basti .corp-menu .profile-menu", ["height: var(--corp-profile-height);"])
                    .set(".basti .corp-menu .profile-menu .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link", ["height: var(--corp-profile-height);"])
                    .set(".basti .corp-menu .vl", ["height: var(--corp-profile-height);"]),
                tooltip: translation.get("The height of the profile-menu in corporation menu mode.")
            },
            {
                variable: "--corp-profile-pic",
                label: translation.get("Picture Size"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--corp-profile-pic'),
                usage: new Map<string, string[]>()
                    .set(".basti .corp-menu .profile-image, .basti .corp-menu .profile-image-null", ["width: var(--corp-profile-pic);", "height: var(--corp-profile-pic);"])
                    .set(".basti .corp-menu .profile-image", ["background-size: var(--corp-profile-pic) var(--corp-profile-pic);"])
                    .set(".basti .corp-menu .profile-image-null::before", ["font-size: calc(var(--corp-profile-pic) - 2px);"]),
                tooltip: translation.get("The size of the profile-picture in corporation menu mode.")
            },
            {
                variable: "--corp-topbar-button-size",
                label: translation.get("Button Size"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--corp-topbar-button-size'),
                usage: new Map<string, string[]>()
                    .set(".basti .corp-menu .p-button.p-button-icon-only.menu-topbar-buttons", ["min-width: var(--corp-topbar-button-size);", "height: var(--corp-topbar-button-size);"]),
                tooltip: translation.get("The size of the topbar's buttons in corporation menu mode.")
            },
            {
                variable: "--corp-topbar-button-size-small",
                label: translation.get("Button Size (Small)"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--corp-topbar-button-size-small'),
                usage: new Map<string, string[]>(),
                usage530: new Map<string, string[]>()
                    .set(".basti .corp-menu .p-button.p-button-icon-only.menu-topbar-buttons", ["min-width: var(--corp-topbar-button-size-small);", "height: var(--corp-topbar-button-size-small);"]),
                tooltip: translation.get("The size of the topbar's buttons when the application is small in corporation menu mode.")
            },
            {
                variable: "--corp-speeddial-size",
                label: translation.get("Toolbar-Button Size"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--corp-speeddial-size'),
                usage: new Map<string, string[]>()
                    .set(".basti .corp-menu .p-speeddial .p-speeddial-button.p-button.p-button-icon-only", ["height: var(--corp-speeddial-size);", "width: var(--corp-speeddial-size);", "top: calc((32px - var(--corp-speeddial-size)) / 2);"])
                    .set(".basti .corp-menu .p-speeddial .p-speeddial-button.p-button.p-button-icon-only .p-button-icon", ["font-size: calc(var(--corp-speeddial-size) / 2);"])
                    .set(".basti .corp-menu .p-speeddial .p-speeddial-action", ["height: var(--corp-speeddial-size);", "width: var(--corp-speeddial-size);"])
                    .set(".basti .corp-menu .p-speeddial .p-speeddial-action .p-speeddial-action-icon", ["font-size: calc(var(--corp-speeddial-size) / 2);"]),
                tooltip: translation.get("The size of the speeddial component in corporation menu mode.")
            },
            {
                variable: "--std-fadeout-width",
                label: translation.get("Fadeout Width"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--std-fadeout-width'),
                usage: new Map<string, string[]>()
                    .set(".basti .std-menu .fadeout", ["width: var(--std-fadeout-width);"]),
                tooltip: translation.get("The width of the menu fadeout div.")
            },
            {
                variable: "--std-menu-fadeout-background",
                label: translation.get("Fadeout Background"),
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--std-menu-fadeout-background'),
                usage: new Map<string, string[]>().set(".fadeout", ["background-image: var(--std-menu-fadeout-background);"]),
                tooltip: translation.get("The background color of the fadeout div.")
            },
            {
                variable: "--std-fadeout-left",
                label: translation.get("Fadeout Left"),
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--std-fadeout-left'),
                usage: new Map<string, string[]>().set(".basti .std-menu .fadeout", ["left: var(--std-fadeout-left);"]),
                tooltip: translation.get("The 'left' positioning property for the fadeout div.")
            }
        ]
    }
)
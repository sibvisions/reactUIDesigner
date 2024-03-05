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
 * The EditorItems for general variables.
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
export const generalEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("General", {
        name: "General",
        visible: true,
        items: [
            {
                variable: "--font-family",
                label: "Font Family",
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--font-family'),
                usage: new Map<string, string[]>(),
                tooltip: "The font-family used for the application"
            },
            {
                variable: "--font-size",
                label: "Font Size",
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--font-size'),
                usage: new Map<string, string[]>()
                    .set("body", ["font-size: var(--font-size);"])
                    .set(".basti .p-component, .basti .rc-label", ["font-size: var(--font-size);"])
                    .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items", ["font-size: var(--font-size);"]),
                tooltip: "The font-size used for components and labels."
            },
            {
                variable: "--screen-background",
                label: "Screen Background",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--screen-background'),
                usage: new Map<string, string[]>().set("body", ["background: var(--screen-background);"]).set(".reactUI:not(.designer-content)", ["background: var(--screen-background);"]),
                tooltip: "The background for workscreens."
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
                    .set(".p-menu .p-menuitem-text", ["color: var(--text-color);"])
                    .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):not(.express-scheme-editor):not(.designer-search-editor):not(.p-dropdown-label):not(.required-field)", ["color: var(--text-color);"])
                    .set(".p-editor-container .p-editor-content .ql-editor", ["color: var(--text-color);"])
                    .set(".rc-popup .p-dialog-content, .error-dialog .p-dialog-content", ["color: var(--text-color);"])
                    .set(".error-dialog .p-dialog-footer", ["color: var(--text-color);"])
                    .set(".rc-message-dialog .p-dialog-content, .rc-message-dialog .p-dialog-footer", ["color: var(--text-color);"])
                    .set(".p-tabview:not(.designer-tab-view) .p-tabview-nav", ["color: var(--text-color);"])
                    .set(".p-tabview:not(.designer-tab-view) .p-tabview-nav li:not(.p-highlight) .p-tabview-nav-link", ["color: var(--text-color);"])
                    .set(".p-tabview:not(.designer-tab-view) .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link", ["color: var(--text-color);", "border-color: var(--text-color);"])
                    .set(".rc-frame .rc-frame-header .rc-frame-header-close-button", ["color: var(--text-color);"]),
                usage960: new Map<string, string[]>().set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-icon, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-icon", ["color: var(--text-color);"]),
                tooltip: "The text-color used for most of the application."
            },
            {
                variable: "--focus-box-shadow",
                label: "Focus Border",
                type: "text",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--focus-box-shadow'),
                usage: new Map<string, string[]>()
                    .set(".rc-button:focus", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".p-radiobutton .p-radiobutton-box:not(.p-disabled) .p-focus", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".rc-popupmenubutton:focus-within", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".rc-togglebutton:focus", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".rc-editor-choice:focus img", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):not(.express-scheme-editor):not(.designer-search-editor):not(.p-dropdown-label):enabled:focus", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".p-calendar:focus-within", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".p-datepicker .p-datepicker-header .p-datepicker-title select:focus", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".rc-editor-image:focus img, .rc-icon:focus img, .rc-validator:focus img", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".rc-editor-linked:focus-within", ["box-shadow: var(--focus-box-shadow);"]),
                tooltip: "The focus-box highlights a focused component."
            }
        ]
    });

/** 
 * The EditorItems for images.
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
export const imageEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Images", {
        name: "Images",
        visible: true,
        items: [
            {
                variable: "",
                label: "Login",
                type: "image",
                cssType: "image",
                value: "",
                usage: new Map<string, string[]>(),
                tooltip: "This image will be displayed during login."
            },
            {
                variable: "",
                label: "Menu",
                type: "image",
                cssType: "image",
                value: "",
                usage: new Map<string, string[]>(),
                tooltip: "This image will be displayed in the menu."
            },
            {
                variable: "",
                label: "Collapsed Menu",
                type: "image",
                cssType: "image",
                value: "",
                usage: new Map<string, string[]>(),
                tooltip: "This image will be displayed in the collapsed menu."
            },
        ]
    })

/** 
 * The EditorItems for express variables.
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
export const expressEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Express", {
        name: "Express",
        visible: true,
        items: [
            {
                variable: "--primary-color",
                label: "Primary Color",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--primary-color'),
                usage: new Map<string, string[]>(),
                tooltip: "The primary color of the application."
            },
            {
                variable: "--frame-hover-backgrounds",
                label: "Topbar Hover Backgrounds",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--frame-hover-backgrounds'),
                usage: new Map<string, string[]>(),
                tooltip: "The hover background-color of elements in the topbar."
            },
            {
                variable: "--checkbox-radio-selected-hover-background",
                label: "Checkbox-Radiobutton Hover Background",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--checkbox-radio-selected-hover-background'),
                usage: new Map<string, string[]>(),
                tooltip: "The hover background-color of checkboxes and radiobuttons."
            },
            {
                variable: "--frame-text-color",
                label: "Topbar Text Color",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--frame-text-color'),
                usage: new Map<string, string[]>(),
                tooltip: "The text-color of elements in the topbar."
            },
            {
                variable: "--backgrounds",
                label: "Backgrounds",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--backgrounds'),
                usage: new Map<string, string[]>(),
                tooltip: "The background-color of multiple components."

            },
            {
                variable: "--hover-backgrounds",
                label: "Hover Backgrounds",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--hover-backgrounds'),
                usage: new Map<string, string[]>(),
                tooltip: "The hover background-color of multiple components."
            },
            {
                variable: "--border-colors",
                label: "Borders Color",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--border-colors'),
                usage: new Map<string, string[]>(),
                tooltip: "The border-color of multiple components."
            },
            {
                variable: "--text-color",
                label: "Text Color",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--text-color'),
                usage: new Map<string, string[]>(),
                tooltip: "The text-color used in the application."
            },
            {
                variable: "--hover-text-color",
                label: "Hover Text Color",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--hover-text-color'),
                usage: new Map<string, string[]>(),
                tooltip: "The hover text-color used in the application."
            },
            {
                variable: "--selected-background",
                label: "Selected Background",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--selected-background'),
                usage: new Map<string, string[]>(),
                tooltip: "The background-color for components where items can be selected."
            },
            {
                variable: "--frame-toolbar-borders",
                label: "Toolbar Border Color (V2)",
                type: "color",
                cssType: "scheme",
                value: docStyle.getPropertyValue('--frame-toolbar-borders'),
                usage: new Map<string, string[]>(),
                tooltip: "The toolbar border-color for V2 frames."
            }
        ]
    })

/** 
 * The EditorItems for all crash message variables.
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
export const crashEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("CrashView", {
        name: "Crash View",
        visible: false,
        items: [
            {
                variable: "--crash-message-size",
                label: "Message Size",
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--crash-message-size'),
                usage: new Map<string, string[]>().set(".crash-message-icon", ["font-size: var(--crash-message-size);"]).set(".crash-message-text", ["font-size: var(--crash-message-size);"]),
                tooltip: "The font-size of the crash message."
            },
            {
                variable: "--crash-stack-height",
                label: "Stack Height",
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--crash-stack-height'),
                usage: new Map<string, string[]>().set(".crash-input-stack.show-crash-details", ["max-height: var(--crash-stack-height);"]).set(".crash-input-stack-textarea", ["height: var(--crash-stack-height);"]),
                tooltip: "The maximum-stack height of the crash message."
            }
        ]
    })
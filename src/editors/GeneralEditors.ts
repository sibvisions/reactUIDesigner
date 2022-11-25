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

import { EditorGroup, EditorItem } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const generalEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("General", {
        name: "General",
        visible: true,
        items: [
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
                usage: new Map<string, string[]>().set("body", ["background: var(--screen-background);"]).set(".reactUI", ["background: var(--screen-background);"])
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
                    .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):not(.required-field)", ["color: var(--text-color);"])
                    .set(".p-editor-container .p-editor-content .ql-editor", ["color: var(--text-color);"])
                    .set(".rc-table.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover", ["color: var(--text-color);"])
                    .set(".rc-popup .p-dialog-content, .error-dialog .p-dialog-content", ["color: var(--text-color);"])
                    .set(".error-dialog .p-dialog-footer", ["color: var(--text-color);"])
                    .set(".rc-message-dialog .p-dialog-content, .rc-message-dialog .p-dialog-footer", ["color: var(--text-color);"])
                    .set(".p-tabview .p-tabview-nav", ["color: var(--text-color);"])
                    .set(".p-tabview .p-tabview-nav li:not(.p-highlight) .p-tabview-nav-link", ["color: var(--text-color);"])
                    .set(".p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link", ["color: var(--text-color);", "border-color: var(--text-color);"])
                    .set(".rc-frame .rc-frame-header .rc-frame-header-close-button", ["color: var(--text-color);"])
                    .set(".rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-icon, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-text, .rc-frame .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-submenu-list .p-menuitem .p-menuitem-link .p-menuitem-icon", ["color: var(--text-color);"])
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
                    .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):enabled:focus", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".p-calendar:focus-within", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".p-datepicker .p-datepicker-header .p-datepicker-title select:focus", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".rc-editor-image:focus img, .rc-icon:focus img, .rc-validator:focus img", ["box-shadow: var(--focus-box-shadow);"])
                    .set(".rc-editor-linked:focus-within", ["box-shadow: var(--focus-box-shadow);"])
            }
        ]
    })

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
                usage: new Map<string, string[]>().set(".crash-message-icon", ["font-size: var(--crash-message-size);"]).set(".crash-message-text", ["font-size: var(--crash-message-size);"])
            },
            {
                variable: "--crash-stack-height",
                label: "Stack Height",
                type: "text",
                cssType: "theme",
                value: docStyle.getPropertyValue('--crash-stack-height'),
                usage: new Map<string, string[]>().set(".crash-input-stack.show-crash-details", ["max-height: var(--crash-stack-height);"]).set(".crash-input-stack-textarea", ["height: var(--crash-stack-height);"])
            }
        ]
    })
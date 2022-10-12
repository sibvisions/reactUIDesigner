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

export const inputEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
.set("Texteditor", [
    {
        variable: "--input-background",
        label: "Textfield Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--input-background'),
        usage: new Map<string, string[]>()
        .set(".p-inputtext", ["background: var(--input-background);"])
        .set(".p-editor-container .p-editor-content .ql-editor", ["background: var(--input-background);"])
    },
    {
        variable: "--input-border",
        label: "Textfield Border",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--input-border'),
        usage: new Map<string, string[]>()
        .set(".p-inputtext", ["border: var(--input-border);"])
        .set(".p-editor-container .p-editor-toolbar.ql-snow", ["border: var(--input-border);"])
        .set(".p-editor-container .p-editor-content", ["border: var(--input-border);"])
        .set(".p-editor-container .p-editor-content.ql-snow", ["border: var(--input-border);"])
        .set(".rc-editor-html textarea.p-inputtext", ["border: var(--input-border) !important;"])
        .set(".rc-panel-group-caption", ["border: var(--input-border)"])
    },
    {
        variable: "--input-placeholder-color",
        label: "Placeholder Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--input-placeholder-color'),
        usage: new Map<string, string[]>()
        .set(".p-inputtext::placeholder", ["color: var(--input-placeholder-color);"])
        .set(".p-float-label > label", ["color: var(--input-placeholder-color);"])
    },
    {
        variable: "--input-padding",
        label: "Textfield Padding",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--input-padding'),
        usage: new Map<string, string[]>()
        .set(".basti .p-inputtext", ["var(--input-padding);"])
    },
])
.set("Dateeditor/Linkededitor", [
    {
        variable: "--input-button-padding",
        label: "Button Padding",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--input-button-padding'),
        usage: new Map<string, string[]>()
        .set(".basti .p-button.p-button-icon-only.p-autocomplete-dropdown, .basti .p-button.p-button-icon-only.p-datepicker-trigger", ["padding: var(--input-button-padding);"])
    },
    {
        variable: "--input-button-icon-size",
        label: "Button Icon Size",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--input-button-icon-size'),
        usage: new Map<string, string[]>()
        .set(".basti .p-button.p-button-icon-only.p-autocomplete-dropdown > .p-button-icon, .basti .p-button.p-button-icon-only.p-datepicker-trigger > .p-button-icon", ["font-size: var(--input-button-icon-size);"])
    },
    {
        variable: "--linked-panel-background",
        label: "Linked Panel Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--linked-panel-background'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel", ["background: var(--linked-panel-background);"])
        .set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item", ["background: var(--linked-panel-background);"])
    },
    {
        variable: "--linked-item-color",
        label: "Linked Item Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--linked-item-color'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item", ["color: var(--linked-item-color);"])
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd).p-highlight", ["color: var(--linked-item-color);"])
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even).p-highlight", ["color: var(--linked-item-color);"])
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item-group > *", ["color: var(--linked-item-color);"])
    },
    {
        variable: "--linked-item-hover-background",
        label: "Linked Item Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--linked-item-hover-background'),
        usage: new Map<string, string[]>().set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover", ["background: var(--linked-item-hover-background);"])
    },
    {
        variable: "--linked-item-hover-text-color",
        label: "Linked Item Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--linked-item-hover-text-color'),
        usage: new Map<string, string[]>().set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover", ["color: var(--linked-item-hover-text-color);"])
    },
    {
        variable: "--linked-highlighted-color",
        label: "Linked Selected Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--linked-highlighted-color'),
        usage: new Map<string, string[]>()
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd).p-highlight", ["background: var(--linked-highlighted-color);"])
        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even).p-highlight", ["background: var(--linked-highlighted-color);"])
    },
    {
        variable: "--date-panel-background",
        label: "Date Panel Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--date-panel-background'),
        usage: new Map<string, string[]>()
        .set(".p-datepicker:not(.p-datepicker-inline), .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header", ["background: var(--date-panel-background);"])
        .set(".p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month, .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year", ["background-color: var(--date-panel-background);"])
    },
    {
        variable: "--date-panel-color",
        label: "Date Panel Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--date-panel-color'),
        usage: new Map<string, string[]>()
        .set(".p-datepicker:not(.p-datepicker-inline), .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header", ["color: var(--date-panel-color);"])
        .set(".p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month, .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,", ["color: var(--date-panel-color);"])
    },
    {
        variable: "--date-panel-header-border",
        label: "Date Header Border",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--date-panel-header-border'),
        usage: new Map<string, string[]>().set(".p-datepicker .p-datepicker-header", ["border-bottom: var(--date-panel-header-border);"])
    },
    {
        variable: "--date-panel-hover-color",
        label: "Date Panel Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--date-panel-hover-color'),
        usage: new Map<string, string[]>()
        .set(".p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover", ["color: var(--date-panel-hover-color);"])
    },
    {
        variable: "--date-selected-background",
        label: "Selected Date Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--date-selected-background'),
        usage: new Map<string, string[]>().set(".p-datepicker table td > span.p-highlight", ["background: var(--date-selected-background);"])
    }
])
.set("HTMLeditor", [
    {
        variable: "--html-toolbar-background",
        label: "Toolbar Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--html-toolbar-background'),
        usage: new Map<string, string[]>().set(".p-editor-container .p-editor-toolbar", ["background: var(--html-toolbar-background);"])
    },
    {
        variable: "--html-toolbar-border",
        label: "Toolbar Border",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--html-toolbar-border'),
        usage: new Map<string, string[]>().set(".p-editor-container .p-editor-toolbar", ["border: var(--html-toolbar-border);"])
    },
    {
        variable: "--html-toolbar-button-background",
        label: "Toolbar Button Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--html-toolbar-button-background'),
        usage: new Map<string, string[]>()
        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button", ["color: var(--html-toolbar-button-background);"])
        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg polygon, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg line, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg rect, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg polyline, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg polygon, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg line, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg rect, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg polyline", ["stroke: var(--html-toolbar-button-background);"])
        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label.ql-source svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button.ql-source svg path", ["fill: var(--html-toolbar-button-background);"])
    },
    {
        variable: "--html-toolbar-button-hover-background",
        label: "Toolbar Button Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--html-toolbar-button-hover-background'),
        usage: new Map<string, string[]>()
        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover", ["color: var(--html-toolbar-button-hover-background);"])
        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover svg polygon, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover svg line, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover svg rect, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover svg polyline, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover svg polygon, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover svg line, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover svg rect, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover svg polyline", ["stroke: var(--html-toolbar-button-hover-background);"])
        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label.ql-source:hover svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button.ql-source:hover svg path", ["fill: var(--html-toolbar-button-hover-background);"])
    },
    {
        variable: "--html-picker-expanded-background",
        label: "Expanded Picker Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--html-picker-expanded-background'),
        usage: new Map<string, string[]>()
        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker.ql-expanded .ql-picker-options", ["background: var(--html-picker-expanded-background);"])
    },
    {
        variable: "--html-picker-item-hover-background",
        label: "Picker Item Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--html-picker-item-hover-background'),
        usage: new Map<string, string[]>()
        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover", ["background: var(--html-picker-item-hover-background);"])
    }
])
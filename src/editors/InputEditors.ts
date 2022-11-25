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

export const inputEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Text-Editor",
        {
            name: "Text Editor",
            visible: true,
            items: [
                {
                    variable: "--input-background",
                    label: "Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--input-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput)", ["background: var(--input-background);"])
                        .set(".p-editor-container .p-editor-content .ql-editor", ["background: var(--input-background);"])
                },
                {
                    variable: "--input-border-width",
                    label: "Border Width",
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--input-border-width'),
                    usage: new Map<string, string[]>()
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput)", ["border: var(--input-border-width) solid var(--input-border-color);"])
                        .set(".p-editor-container .p-editor-content", ["border: var(--input-border-width) solid var(--input-border-color);"])
                        .set(".p-editor-container .p-editor-content.ql-snow", ["border: var(--input-border-width) solid var(--input-border-color);"])
                        .set(".rc-editor-html textarea.p-inputtext", ["border: var(--input-border-width) solid var(--input-border-color) !important;"])
                        .set(".rc-panel-group-caption", ["border-bottom: var(--input-border-width) solid var(--input-border-color);"])
                },
                {
                    variable: "--input-border-color",
                    label: "Border Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--input-border-color'),
                    usage: new Map<string, string[]>()
                },
                {
                    variable: "--input-border-hover-color",
                    label: "Border Hover Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--input-border-hover-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):enabled:focus", ["border-color: var(--input-border-hover-color);"])
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):enabled:hover", ["border-color: var(--input-border-hover-color);"])
                        .set(".p-datepicker .p-datepicker-header .p-datepicker-title select:focus", ["border-color: var(--input-border-hover-color);"])
                },
                {
                    variable: "--input-placeholder-color",
                    label: "Placeholder Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--input-placeholder-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput)::placeholder", ["color: var(--input-placeholder-color);"])
                        .set(".p-float-label > label", ["color: var(--input-placeholder-color);"])
                },
                {
                    variable: "--input-padding-tb",
                    label: "Padding Top Bottom",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--input-padding-tb'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-inputtext", ["padding: var(--input-padding-tb) var(--input-padding-lr);"])
                },
                {
                    variable: "--input-padding-lr",
                    label: "Padding Left Right",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--input-padding-lr'),
                    usage: new Map<string, string[]>()
                },
                {
                    variable: "--editor-border-radius",
                    label: "Border-Radius",
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--editor-border-radius'),
                    usage: new Map<string, string[]>()
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput)", ["border-radius: var(--editor-border-radius);"])
                        .set(".p-calendar:focus-within", ["border-radius: var(--editor-border-radius);"])
                        .set(".p-editor-container .p-editor-toolbar", ["border-top-left-radius: var(--editor-border-radius);", "border-top-right-radius: var(--editor-border-radius);"])
                        .set(".p-editor-container .p-editor-content", ["border-bottom-left-radius: var(--editor-border-radius);", "border-bottom-right-radius: var(--editor-border-radius);"])
                        .set(".p-editor-container .p-editor-content .ql-editor", ["border-bottom-left-radius: var(--editor-border-radius);", "border-bottom-right-radius: var(--editor-border-radius);"])
                }
            ]
        }
    )
    .set("Date-Editor",
        {
            name: "Date Editor",
            visible: true,
            items: [
                {
                    variable: "--input-button-padding",
                    label: "Button Padding",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--input-button-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-button.p-button-icon-only:not(.rc-toolbar-button):not(.p-speeddial-button):not(.p-splitbutton-menubutton).p-autocomplete-dropdown, .basti .p-button.p-button-icon-only:not(.rc-toolbar-button):not(.p-speeddial-button):not(.p-splitbutton-menubutton).p-datepicker-trigger", ["padding: var(--input-button-padding);"])
                },
                {
                    variable: "--input-button-icon-size",
                    label: "Button Icon Size",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--input-button-icon-size'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-button.p-button-icon-only:not(.rc-toolbar-button):not(.p-speeddial-button):not(.p-splitbutton-menubutton).p-autocomplete-dropdown > .p-button-icon, .basti .p-button.p-button-icon-only:not(.rc-toolbar-button):not(.p-speeddial-button):not(.p-splitbutton-menubutton).p-datepicker-trigger > .p-button-icon", ["font-size: var(--input-button-icon-size);"])
                },
                {
                    variable: "--date-panel-background",
                    label: "Panel Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-panel-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-datepicker:not(.p-datepicker-inline), .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header", ["background: var(--date-panel-background);"])
                        .set(".p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month, .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year", ["background-color: var(--date-panel-background);"])
                },
                {
                    variable: "--date-panel-color",
                    label: "Panel Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-panel-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-datepicker:not(.p-datepicker-inline), .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header", ["color: var(--date-panel-color);"])
                        .set(".p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month, .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year", ["color: var(--date-panel-color);"])
                },
                {
                    variable: "--date-panel-header-border",
                    label: "Header Border",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-panel-header-border'),
                    usage: new Map<string, string[]>().set(".p-datepicker .p-datepicker-header", ["border-bottom: var(--date-panel-header-border);"])
                },
                {
                    variable: "--date-panel-hover-color",
                    label: "Panel Hover Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-panel-hover-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover", ["color: var(--date-panel-hover-color);"])
                },
                {
                    variable: "--date-selected-background",
                    label: "Selected Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-selected-background'),
                    usage: new Map<string, string[]>().set(".p-datepicker table td > span.p-highlight", ["background: var(--date-selected-background);"])
                },
                {
                    variable: "--date-border-radius",
                    label: "Border-Radius",
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-border-radius'),
                    usage: new Map<string, string[]>().set(".p-datepicker", ["border-radius: var(--date-border-radius);"])
                }
            ]
        }
    )
    .set("Combobox",
        {
            name: "Combobox Editor",
            visible: true,
            items: [
                {
                    variable: "--linked-panel-background",
                    label: "Panel Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-panel-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel", ["background: var(--linked-panel-background);"])
                        .set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item", ["background: var(--linked-panel-background);"])
                },
                {
                    variable: "--linked-item-color",
                    label: "Item Color",
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
                    label: "Item Hover Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-item-hover-background'),
                    usage: new Map<string, string[]>().set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover", ["background: var(--linked-item-hover-background);"])
                },
                {
                    variable: "--linked-item-hover-text-color",
                    label: "Item Hover Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-item-hover-text-color'),
                    usage: new Map<string, string[]>().set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover", ["color: var(--linked-item-hover-text-color);"])
                },
                {
                    variable: "--linked-highlighted-color",
                    label: "Selected Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-highlighted-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd).p-highlight", ["background: var(--linked-highlighted-color);"])
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even).p-highlight", ["background: var(--linked-highlighted-color);"])
                },
                {
                    variable: "--linked-border-radius",
                    label: "Border-Radius",
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-border-radius'),
                    usage: new Map<string, string[]>().set(".p-autocomplete-panel", ["border-radius: var(--linked-border-radius);"])
                },
            ]
        }
    )
    .set("HTML-Editor",
        {
            name: "HTML Editor",
            visible: true,
            items: [
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
                    usage: new Map<string, string[]>()
                        .set(".p-editor-container .p-editor-toolbar", ["border: var(--html-toolbar-border);"])
                        .set(".p-editor-container .p-editor-toolbar.ql-snow", ["border: var(--html-toolbar-border);"])
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
                    label: "Picker Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-picker-expanded-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker.ql-expanded .ql-picker-options", ["background: var(--html-picker-expanded-background);"])
                },
                {
                    variable: "--html-picker-item-color",
                    label: "Picker Item Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-picker-item-color'),
                    usage: new Map<string, string[]>().set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker.ql-expanded .ql-picker-options .ql-picker-item", ["color: var(--html-picker-item-color);"])
                },
                {
                    variable: "--html-picker-item-hover-color",
                    label: "Picker Item Hover Color",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-picker-item-hover-color'),
                    usage: new Map<string, string[]>().set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover", ["color: var(--html-picker-item-hover-color);"])
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
            ]
        }
    )

export const labelEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Label",
        {
            name: "Label",
            visible: false,
            items: [
                {
                    variable: "--label-padding",
                    label: "Label Padding",
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--label-padding'),
                    usage: new Map<string, string[]>().set(".basti .rc-label > span", ["padding: var(--label-padding) 0px;"])
                }
            ]
        }
    )

export const sysEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("System Colors",
        {
            name: "System Colors",
            visible: true,
            items: [
                {
                    variable: "--mandatory-background",
                    label: "Mandatory Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--mandatory-background'),
                    usage: new Map<string, string[]>()
                },
                {
                    variable: "--readonly-background",
                    label: "Readonly Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--readonly-background'),
                    usage: new Map<string, string[]>()
                },
                {
                    variable: "--invalid-background",
                    label: "Invalid Background",
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--invalid-background'),
                    usage: new Map<string, string[]>()
                },
            ]
        }
    )
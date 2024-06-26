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
 * The EditorItems for all inputfield variables.
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
export const inputEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Text-Editor",
        {
            name: "Text Editor",
            visible: true,
            items: [
                {
                    variable: "--input-background",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--input-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):not(.express-scheme-editor):not(.designer-search-editor):not(.p-dropdown-label)", ["background: var(--input-background);"])
                        .set(".p-editor-container .p-editor-content .ql-editor", ["background: var(--input-background);"]),
                    tooltip: translation.get("The background-color for editors.")
                },
                {
                    variable: "--input-border-width",
                    label: translation.get("Border Width"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--input-border-width'),
                    usage: new Map<string, string[]>()
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):not(.express-scheme-editor):not(.designer-search-editor):not(.p-dropdown-label)", ["border: var(--input-border-width) solid var(--input-border-color);"])
                        .set(".p-editor-container .p-editor-content", ["border: var(--input-border-width) solid var(--input-border-color);"])
                        .set(".p-editor-container .p-editor-content.ql-snow", ["border: var(--input-border-width) solid var(--input-border-color);"])
                        .set(".rc-editor-html textarea.p-inputtext", ["border: var(--input-border-width) solid var(--input-border-color) !important;"])
                        .set(".rc-panel-group-caption", ["border-bottom: var(--input-border-width) solid var(--input-border-color);"]),
                    tooltip: translation.get("The border width for editors.")
                },
                {
                    variable: "--input-border-color",
                    label: translation.get("Border Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--input-border-color'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The border color for editors.")
                },
                {
                    variable: "--input-border-hover-color",
                    label: translation.get("Border Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--input-border-hover-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):not(.express-scheme-editor):not(.designer-search-editor):not(.p-dropdown-label):enabled:focus", ["border-color: var(--input-border-hover-color);"])
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):not(.express-scheme-editor):not(.designer-search-editor):not(.p-dropdown-label):enabled:hover", ["border-color: var(--input-border-hover-color);"])
                        .set(".p-datepicker .p-datepicker-header .p-datepicker-title select:focus", ["border-color: var(--input-border-hover-color);"]),
                    tooltip: translation.get("The hover border color for editors.")
                },
                {
                    variable: "--input-placeholder-color",
                    label: translation.get("Placeholder Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--input-placeholder-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):not(.express-scheme-editor):not(.designer-search-editor):not(.p-dropdown-label)::placeholder", ["color: var(--input-placeholder-color);"])
                        .set(".p-float-label > label", ["color: var(--input-placeholder-color);"]),
                    tooltip: translation.get("The text-color of placeholders for editors.")
                },
                {
                    variable: "--input-padding-tb",
                    label: translation.get("Padding Top Bottom"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--input-padding-tb'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-inputtext:not(.login-inputtext)", ["padding: var(--input-padding-tb) var(--input-padding-lr);"]),
                    tooltip: translation.get("The top and bottom padding for editors.")
                },
                {
                    variable: "--input-padding-lr",
                    label: translation.get("Padding Left Right"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--input-padding-lr'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-inputtext:not(.login-inputtext)", ["padding: var(--input-padding-tb) var(--input-padding-lr);"]),
                    tooltip: translation.get("The left and right padding for editors.")
                },
                {
                    variable: "--editor-border-radius",
                    label: translation.get("Border-Radius"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--editor-border-radius'),
                    usage: new Map<string, string[]>()
                        .set(".p-inputtext:not(.designer-panel-inputtext):not(.style-editor-textinput):not(.express-scheme-editor):not(.designer-search-editor):not(.p-dropdown-label)", ["border-radius: var(--editor-border-radius);"])
                        .set(".p-calendar:focus-within", ["border-radius: var(--editor-border-radius);"])
                        .set(".p-editor-container .p-editor-toolbar", ["border-top-left-radius: var(--editor-border-radius);", "border-top-right-radius: var(--editor-border-radius);"])
                        .set(".p-editor-container .p-editor-content", ["border-bottom-left-radius: var(--editor-border-radius);", "border-bottom-right-radius: var(--editor-border-radius);"])
                        .set(".p-editor-container .p-editor-content .ql-editor", ["border-bottom-left-radius: var(--editor-border-radius);", "border-bottom-right-radius: var(--editor-border-radius);"]),
                    tooltip: translation.get("The border-radius for editors (rounds corners).")
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
                    label: translation.get("Button Padding"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--input-button-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-button.p-button-icon-only:not(.rc-toolbar-button):not(.p-speeddial-button):not(.p-splitbutton-menubutton):not(.p-splitbutton-defaultbutton).p-autocomplete-dropdown, .basti .p-button.p-button-icon-only:not(.rc-toolbar-button):not(.p-speeddial-button):not(.p-splitbutton-menubutton):not(.p-splitbutton-defaultbutton).p-datepicker-trigger", ["padding: var(--input-button-padding);"]),
                    tooltip: translation.get("The padding for the button which opens the datepicker.")
                },
                {
                    variable: "--input-button-icon-size",
                    label: translation.get("Button Icon Size"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--input-button-icon-size'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-button.p-button-icon-only:not(.rc-toolbar-button):not(.p-speeddial-button):not(.p-splitbutton-menubutton):not(.p-splitbutton-defaultbutton).p-autocomplete-dropdown > .p-button-icon, .basti .p-button.p-button-icon-only:not(.rc-toolbar-button):not(.p-speeddial-button):not(.p-splitbutton-menubutton):not(.p-splitbutton-defaultbutton).p-datepicker-trigger > .p-button-icon", ["font-size: var(--input-button-icon-size);"]),
                    tooltip: translation.get("The icon size for the button which opens the datepicker.")
                },
                {
                    variable: "--date-panel-background",
                    label: translation.get("Panel Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-panel-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-datepicker:not(.p-datepicker-inline), .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header", ["background: var(--date-panel-background);"])
                        .set(".p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month, .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year", ["background-color: var(--date-panel-background);"]),
                    tooltip: translation.get("The background-color of the datepicker panel.")
                },
                {
                    variable: "--date-panel-color",
                    label: translation.get("Panel Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-panel-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-datepicker:not(.p-datepicker-inline), .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header", ["color: var(--date-panel-color);"])
                        .set(".p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month, .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year", ["color: var(--date-panel-color);"]),
                    tooltip: translation.get("The text-color of the datepicker panel.")
                },
                {
                    variable: "--date-panel-header-border",
                    label: translation.get("Header Border"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-panel-header-border'),
                    usage: new Map<string, string[]>().set(".p-datepicker .p-datepicker-header", ["border-bottom: var(--date-panel-header-border);"]),
                    tooltip: translation.get("The border in the datepicker which seperates the year/month picker from the day picker.")
                },
                {
                    variable: "--date-panel-hover-color",
                    label: translation.get("Panel Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-panel-hover-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover", ["color: var(--date-panel-hover-color);"]),
                    tooltip: translation.get("The hover text-color of the days in the datepicker.")
                },
                {
                    variable: "--date-selected-background",
                    label: translation.get("Selected Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-selected-background'),
                    usage: new Map<string, string[]>().set(".p-datepicker table td > span.p-highlight", ["background: var(--date-selected-background);"]),
                    tooltip: translation.get("The background-color of the selected day.")
                },
                {
                    variable: "--date-border-radius",
                    label: translation.get("Border-Radius"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--date-border-radius'),
                    usage: new Map<string, string[]>().set(".p-datepicker", ["border-radius: var(--date-border-radius);"]),
                    tooltip: translation.get("The border-radius for the datepicker (rounds corners).")
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
                    label: translation.get("Panel Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-panel-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel", ["background: var(--linked-panel-background);"])
                        .set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item", ["background: var(--linked-panel-background);"]),
                    tooltip: translation.get("The background-color for the dropdown panel.")
                },
                {
                    variable: "--linked-item-color",
                    label: translation.get("Item Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-item-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item", ["color: var(--linked-item-color);"])
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd).p-highlight", ["color: var(--linked-item-color);"])
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even).p-highlight", ["color: var(--linked-item-color);"])
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-item-group > *", ["color: var(--linked-item-color);"]),
                    tooltip: translation.get("The text-color for the items in the dropdown panel.")
                },
                {
                    variable: "--linked-item-hover-background",
                    label: translation.get("Item Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-item-hover-background'),
                    usage: new Map<string, string[]>().set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover", ["background: var(--linked-item-hover-background);"]),
                    tooltip: translation.get("The hover background-color for items in the dropdown panel.")
                },
                {
                    variable: "--linked-item-hover-text-color",
                    label: translation.get("Item Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-item-hover-text-color'),
                    usage: new Map<string, string[]>().set(".p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover", ["color: var(--linked-item-hover-text-color);"]),
                    tooltip: translation.get("The hover text-color for items in the dropdown panel.")
                },
                {
                    variable: "--linked-highlighted-color",
                    label: translation.get("Selected Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-highlighted-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(odd).p-highlight", ["background: var(--linked-highlighted-color);"])
                        .set(".p-autocomplete-panel.dropdown-table .p-autocomplete-items li:nth-child(even).p-highlight", ["background: var(--linked-highlighted-color);"]),
                    tooltip: translation.get("The selected background-color for items in the dropdown panel when the dropdown is displayed as table.")
                },
                {
                    variable: "--linked-border-radius",
                    label: translation.get("Border-Radius"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--linked-border-radius'),
                    usage: new Map<string, string[]>().set(".p-autocomplete-panel", ["border-radius: var(--linked-border-radius);"]),
                    tooltip: translation.get("The border-radius of the dropdown panel (rounds corners).")
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
                    label: translation.get("Toolbar Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-toolbar-background'),
                    usage: new Map<string, string[]>().set(".p-editor-container .p-editor-toolbar", ["background: var(--html-toolbar-background);"]),
                    tooltip: translation.get("The background-color of the toolbar.")
                },
                {
                    variable: "--html-toolbar-border",
                    label: translation.get("Toolbar Border"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-toolbar-border'),
                    usage: new Map<string, string[]>()
                        .set(".p-editor-container .p-editor-toolbar", ["border: var(--html-toolbar-border);"])
                        .set(".p-editor-container .p-editor-toolbar.ql-snow", ["border: var(--html-toolbar-border);"]),
                    tooltip: translation.get("The border of the toolbar")
                },
                {
                    variable: "--html-toolbar-button-background",
                    label: translation.get("Toolbar Button Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-toolbar-button-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button", ["color: var(--html-toolbar-button-background);"])
                        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg polygon, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg line, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg rect, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label svg polyline, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg polygon, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg line, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg rect, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button svg polyline", ["stroke: var(--html-toolbar-button-background);"])
                        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label.ql-source svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button.ql-source svg path", ["fill: var(--html-toolbar-button-background);"]),
                    tooltip: translation.get("The background-color of buttons in the toolbar.")
                },
                {
                    variable: "--html-toolbar-button-hover-background",
                    label: translation.get("Toolbar Button Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-toolbar-button-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover", ["color: var(--html-toolbar-button-hover-background);"])
                        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover svg polygon, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover svg line, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover svg rect, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label:hover svg polyline, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover svg polygon, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover svg line, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover svg rect, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button:hover svg polyline", ["stroke: var(--html-toolbar-button-hover-background);"])
                        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker .ql-picker-label.ql-source:hover svg path, .p-editor-container .p-editor-toolbar.ql-snow .ql-formats button.ql-source:hover svg path", ["fill: var(--html-toolbar-button-hover-background);"]),
                    tooltip: translation.get("The hover background-color of buttons in the toolbar.")
                },
                {
                    variable: "--html-picker-expanded-background",
                    label: translation.get("Picker Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-picker-expanded-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker.ql-expanded .ql-picker-options", ["background: var(--html-picker-expanded-background);"]),
                    tooltip: translation.get("The background-color of a picker panel.")
                },
                {
                    variable: "--html-picker-item-color",
                    label: translation.get("Picker Item Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-picker-item-color'),
                    usage: new Map<string, string[]>().set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker.ql-expanded .ql-picker-options .ql-picker-item", ["color: var(--html-picker-item-color);"]),
                    tooltip: translation.get("The text-color of an item in the picker panel.")
                },
                {
                    variable: "--html-picker-item-hover-color",
                    label: translation.get("Picker Item Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-picker-item-hover-color'),
                    usage: new Map<string, string[]>().set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover", ["color: var(--html-picker-item-hover-color);"]),
                    tooltip: translation.get("The hover text-color of an item in the picker panel.")
                },
                {
                    variable: "--html-picker-item-hover-background",
                    label: translation.get("Picker Item Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--html-picker-item-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-editor-container .p-editor-toolbar.ql-snow .ql-formats .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover", ["background: var(--html-picker-item-hover-background);"]),
                    tooltip: translation.get("The hover background-color for items in the picker panel.")
                }
            ]
        }
    )

    /** 
 * The EditorItems for all label variables.
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
export const labelEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Label",
        {
            name: "Label",
            visible: false,
            items: [
                {
                    variable: "--label-padding",
                    label: translation.get("Label Padding"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--label-padding'),
                    usage: new Map<string, string[]>().set(".basti .rc-label > span", ["padding: var(--label-padding) 0px;"]),
                    tooltip: translation.get("The padding for labels.")
                }
            ]
        }
    )

/** 
 * The EditorItems for all system color variables.
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
export const sysEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("System Colors",
        {
            name: "System Colors",
            visible: true,
            items: [
                {
                    variable: "--mandatory-background",
                    label: translation.get("Mandatory Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--mandatory-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The system color for mandatory fields.")
                },
                {
                    variable: "--readonly-background",
                    label: translation.get("Readonly Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--readonly-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The system color for readonly fields.")
                },
                {
                    variable: "--invalid-background",
                    label: translation.get("Invalid Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--invalid-background'),
                    usage: new Map<string, string[]>(),
                    tooltip: translation.get("The system color for invalid fields.")
                },
            ]
        }
    )
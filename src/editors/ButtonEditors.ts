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
 * The EditorItems for all button variables.
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
export const buttonEditors: Map<string, EditorGroup> = new Map<string, EditorGroup>()
    .set("Button",
        {
            name: "Button",
            visible: true,
            items: [
                {
                    variable: "--primary-color",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--primary-color'),
                    usage: new Map<string, string[]>()
                        .set(".reactUI.basti_mobile .p-inputtext:enabled:focus + .p-autocomplete-dropdown, .reactUI.basti_mobile .p-inputtext:enabled:focus + .p-datepicker-trigger", ["border-color: var(--primary-color);", "color: var(--primary-color);"])
                        .set(".reactUI.basti_mobile .rc-editor-linked:hover .p-button.p-button-icon-only.p-autocomplete-dropdown, .reactUI.basti_mobile .rc-editor-linked:hover .p-button.p-button-icon-only.p-datepicker-trigger, .reactUI.basti_mobile .rc-editor-date:hover .p-button.p-button-icon-only.p-autocomplete-dropdown, .reactUI.basti_mobile .rc-editor-date:hover .p-button.p-button-icon-only.p-datepicker-trigger", ["border-color: var(--primary-color);", "color: var(--primary-color);"])
                        .set(".reactUI.basti_mobile .rc-editor-linked:hover .p-inputtext, .reactUI.basti_mobile .rc-editor-date:hover .p-inputtext", ["border-color: var(--primary-color);"])
                        .set(".rc-popupmenubutton", ["border-color: var(--primary-color);", "color: var(--primary-color);"]),
                    tooltip: translation.get("The primary color of the application.")
                },
                {
                    variable: "--button-padding",
                    label: translation.get("Padding"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--button-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .rc-button", ["padding: var(--btnPadding, var(--button-padding, 0.5rem 1rem));"])
                        .set(".basti .rc-togglebutton", ["padding: var(--btnPadding, var(--button-padding, 0.5rem 1rem));"]),
                    tooltip: translation.get("The padding of the buttons.")
                },
                {
                    variable: "--button-icon-only-padding",
                    label: translation.get("Icon Only Padding"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--button-icon-only-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-button.p-button-icon-only:not(.rc-toolbar-button):not(.p-speeddial-button):not(.p-splitbutton-menubutton)", ["padding: var(--btnPadding, var(--button-icon-only-padding, 0.5rem 0.5rem));"]),
                    tooltip: translation.get("The padding for buttons which only have an icon.")
                },
                {
                    variable: "--button-border-radius",
                    label: translation.get("Border-Radius"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--button-border-radius'),
                    usage: new Map<string, string[]>()
                        .set(".p-button.p-button-icon-only.menu-topbar-buttons", ["border-radius: var(--button-border-radius);"])
                        .set(".p-button:not(.p-speeddial-button)", ["border-radius: var(--button-border-radius);"])
                        .set(".rc-popupmenubutton", ["border-radius: var(--button-border-radius);"]),
                    tooltip: translation.get("The border-radius for button components (rounds borders).")
                }
            ]
        }
    )
    .set("Menubutton",
        {
            name: "Menu Button",
            visible: true,
            items: [
                {
                    variable: "--menubtn-leftbtn-padding",
                    label: translation.get("Left Button-Padding"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--menubtn-leftbtn-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-splitbutton-defaultbutton", ["padding: var(--menuBtnPadding, var(--menubtn-leftbtn-padding, 0.5rem 0rem 0.5rem 1rem));"]),
                    tooltip: translation.get("The padding for the left part of the menu button.")
                },
                {
                    variable: "--menubtn-rightbtn-padding",
                    label: translation.get("Right Button-Padding"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--menubtn-rightbtn-padding'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-button.p-splitbutton-menubutton", ["padding: var(--menubtn-rightbtn-padding);"]),
                    tooltip: translation.get("The padding for the right part of the menu button.")
                },
                {
                    variable: "--popupmenubutton-panel-background",
                    label: translation.get("Panel Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--popupmenubutton-panel-background'),
                    usage: new Map<string, string[]>().set(".p-menu.p-menu-overlay", ["background: var(--popupmenubutton-panel-background);"]),
                    tooltip: translation.get("The background-color for the menu button's sub panel.")
                },
                {
                    variable: "--popupmenubutton-item-color",
                    label: translation.get("Item Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue("--popupmenubutton-item-color"),
                    usage: new Map<string, string[]>().set(".p-menu .p-menuitem-link .p-menuitem-text, .p-menu .p-menuitem-link .p-menuitem-icon", ["color: var(--popupmenubutton-item-color);"]),
                    tooltip: translation.get("The text color for a menu button's menu-item.")
                },
                {
                    variable: "--popupmenubutton-item-hover-background",
                    label: translation.get("Item Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--popupmenubutton-item-hover-background'),
                    usage: new Map<string, string[]>().set(".p-menu .p-menuitem-link:not(.p-disabled):hover", ["background: var(--popupmenubutton-item-hover-background);"]),
                    tooltip: translation.get("The hover background-color for a menu button's menu-item.")
                },
                {
                    variable: "--popupmenubutton-item-hover-text-color",
                    label: translation.get("Item Hover Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--popupmenubutton-item-hover-text-color'),
                    usage: new Map<string, string[]>().set(".p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text, .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon", ["color: var(--popupmenubutton-item-hover-text-color);"]),
                    tooltip: translation.get("The hover text-color for a menu button's menu-item.")
                }
            ]
        }
    )
    .set("Checkbox",
        {
            name: "Checkbox",
            visible: true,
            items: [
                {
                    variable: "--checkbox-background",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--checkbox-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-editor-checkbox .p-checkbox .p-checkbox-box, .rc-checkbox .p-checkbox .p-checkbox-box", ["background: var(--checkbox-background);"]),
                    tooltip: translation.get("The unselected background-color of a checkbox.")
                },
                {
                    variable: "--checkbox-border",
                    label: translation.get("Border"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--checkbox-border'),
                    usage: new Map<string, string[]>()
                        .set(".rc-editor-checkbox .p-checkbox .p-checkbox-box, .rc-checkbox .p-checkbox .p-checkbox-box", ["border: var(--checkbox-border);"]),
                    tooltip: translation.get("The border of the checkbox.")
                },
                {
                    variable: "--checkbox-border-hover-color",
                    label: translation.get("Border Hovor Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--checkbox-border-hover-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-editor-checkbox .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover, .rc-checkbox .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover", ["border-color: var(--checkbox-border-hover-color);"]),
                    tooltip: translation.get("The hover border color of the checkbox.")
                },
                {
                    variable: "--checkbox-selected-background",
                    label: translation.get("Selected Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--checkbox-selected-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-editor-checkbox .p-checkbox .p-checkbox-box.p-highlight, .rc-checkbox .p-checkbox .p-checkbox-box.p-highlight", ["background: var(--checkbox-selected-background);", "border-color: var(--checkbox-selected-background);"]),
                    tooltip: translation.get("The selected background-color of the checkbox.")
                },
                {
                    variable: "--checkbox-selected-hover-background",
                    label: translation.get("Selected Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--checkbox-selected-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".rc-editor-checkbox .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover, .rc-checkbox .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover", ["background: var(--checkbox-selected-hover-background);", "border-color: var(--checkbox-selected-hover-background);"]),
                    tooltip: translation.get("The selected hover background-color of the checkbox.")
                },
                {
                    variable: "--checkbox-color",
                    label: translation.get("Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--checkbox-color'),
                    usage: new Map<string, string[]>()
                        .set(".rc-editor-checkbox .p-checkbox-box.p-highlight .p-checkbox-icon, .rc-checkbox .p-checkbox-box.p-highlight .p-checkbox-icon", ["color: var(--checkbox-color);"]),
                    tooltip: translation.get("The color of the checkmark in the checkbox.")
                },
                {
                    variable: "--checkbox-size",
                    label: translation.get("Size"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue('--checkbox-size'),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-checkbox", ["min-width: var(--checkbox-size);", "min-height: var(--checkbox-size);", "max-width: var(--checkbox-size);", "max-heigth: var(--checkbox-size);"])
                        .set(".basti .p-checkbox .p-checkbox-box", ["min-width: var(--checkbox-size);", "min-height: var(--checkbox-size);", "max-width: var(--checkbox-size);", "max-heigth: var(--checkbox-size);"])
                        .set(".basti .p-checkbox .p-checkbox-box .p-checkbox-icon", ["font-size: calc(var(--checkbox-size) * 0.7);"]),
                    tooltip: translation.get("The size of checkboxes.")
                },
                {
                    variable: "--checkbox-border-radius",
                    label: translation.get("Border-Radius"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--checkbox-border-radius'),
                    usage: new Map<string, string[]>().set(".rc-editor-checkbox .p-checkbox .p-checkbox-box, .rc-checkbox .p-checkbox .p-checkbox-box", ["border-radius: var(--checkbox-border-radius);"]),
                    tooltip: translation.get("The border-radius of the checkbox (rounds corners).")
                }
            ]
        }
    )
    .set("Radiobutton",
        {
            name: "Radiobutton",
            visible: true,
            items: [
                {
                    variable: "--radiobutton-background",
                    label: translation.get("Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--radiobutton-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-radiobutton .p-radiobutton-box", ["background: var(--radiobutton-background);"]),
                    tooltip: translation.get("The background-color of the radiobutton.")
                },
                {
                    variable: "--radiobutton-border",
                    label: translation.get("Border"),
                    type: "text",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--radiobutton-border'),
                    usage: new Map<string, string[]>()
                        .set(".p-radiobutton .p-radiobutton-box", ["border: var(--radiobutton-border);"]),
                    tooltip: translation.get("The border of the radiobutton.")
                },
                {
                    variable: "--radiobutton-border-hover-color",
                    label: translation.get("Border Hovor Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--radiobutton-border-hover-color'),
                    usage: new Map<string, string[]>()
                        .set(".p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover", ["border-color: var(--radiobutton-border-hover-color);"]),
                    tooltip: translation.get("The hover border color for radiobuttons.")
                },
                {
                    variable: "--radiobutton-selected-outer-background",
                    label: translation.get("Selected Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--radiobutton-selected-outer-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-radiobutton .p-radiobutton-box.p-highlight", ["background: var(--radiobutton-selected-outer-background);", "border-color: var(--radiobutton-selected-outer-background);"]),
                    tooltip: translation.get("The background-color of the outer ring for radiobuttons.")
                },
                {
                    variable: "--radiobutton-selected-outer-hover-background",
                    label: translation.get("Selected Hover Background"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue('--radiobutton-selected-outer-hover-background'),
                    usage: new Map<string, string[]>()
                        .set(".p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover", ["background: var(--radiobutton-selected-outer-hover-background);", "border-color: var(--radiobutton-selected-outer-hover-background);"]),
                    tooltip: translation.get("The hover background-color of the outer ring for radiobuttons.")
                },
                {
                    variable: "--radiobutton-inner-color",
                    label: translation.get("Selected Color"),
                    type: "color",
                    cssType: "scheme",
                    value: docStyle.getPropertyValue("--radiobutton-inner-color"),
                    usage: new Map<string, string[]>()
                        .set(".p-radiobutton-box.p-highlight .p-radiobutton-icon", ["background: var(--radiobutton-inner-color);"]),
                    tooltip: translation.get("The background-color for the inner part of the radiobutton.")
                },
                {
                    variable: "--radiobutton-size",
                    label: translation.get("Size"),
                    type: "text",
                    cssType: "theme",
                    value: docStyle.getPropertyValue("--radiobutton-size"),
                    usage: new Map<string, string[]>()
                        .set(".basti .p-radiobutton .p-radiobutton-box", ["width: var(--radiobutton-size);", "height: var(--radiobutton-size);"])
                        .set(".basti .p-radiobutton .p-radiobutton-box .p-radiobutton-icon", ["height: calc(var(--radiobutton-size) * 0.6);", "width: calc(var(--radiobutton-size) * 0.6);"]),
                    tooltip: translation.get("The size of the radiobutton.")
                }
            ]
        }
    )
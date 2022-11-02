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

export const buttonEditors: Map<string, EditorItem[]> = new Map<string, EditorItem[]>()
.set("Buttons", [
    {
        variable: "--primary-color",
        label: "Primary Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--primary-color'),
        usage: new Map<string, string[]>()
        .set(".reactUI.basti_mobile .p-inputtext:enabled:focus + .p-autocomplete-dropdown, .reactUI.basti_mobile .p-inputtext:enabled:focus + .p-datepicker-trigger", ["border-color: var(--primary-color);", "color: var(--primary-color);"])
        .set(".reactUI.basti_mobile .rc-editor-linked:hover .p-button.p-button-icon-only.p-autocomplete-dropdown, .reactUI.basti_mobile .rc-editor-linked:hover .p-button.p-button-icon-only.p-datepicker-trigger, .reactUI.basti_mobile .rc-editor-date:hover .p-button.p-button-icon-only.p-autocomplete-dropdown, .reactUI.basti_mobile .rc-editor-date:hover .p-button.p-button-icon-only.p-datepicker-trigger", ["border-color: var(--primary-color);", "color: var(--primary-color);"])
        .set(".reactUI.basti_mobile .rc-editor-linked:hover .p-inputtext, .reactUI.basti_mobile .rc-editor-date:hover .p-inputtext", ["border-color: var(--primary-color);"])
        .set(".rc-popupmenubutton", ["border-color: var(--primary-color);", "color: var(--primary-color);"])
    },
    {
        variable: "--button-padding",
        label: "Padding",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--button-padding'),
        usage: new Map<string, string[]>()
        .set(".basti .rc-button", ["padding: var(--btnPadding, var(--button-padding, 0.5rem 1rem));"])
        .set(".basti .rc-togglebutton", ["padding: var(--btnPadding, var(--button-padding, 0.5rem 1rem));"])
    },
    {
        variable: "--button-icon-only-padding",
        label: "Icon Only Padding",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--button-icon-only-padding'),
        usage: new Map<string, string[]>()
        .set(".basti .p-button.p-button-icon-only:not(.rc-toolbar-button):not(.p-speeddial-button):not(.p-splitbutton-menubutton)", ["padding: var(--btnPadding, var(--button-icon-only-padding, 0.5rem 0.5rem));"])
    },
    {
        variable: "--menubtn-leftbtn-padding",
        label: "MenuButton Leftbutton-Padding",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--menubtn-leftbtn-padding'),
        usage: new Map<string, string[]>()
        .set(".basti .p-splitbutton-defaultbutton", ["padding: var(--menuBtnPadding, var(--menubtn-leftbtn-padding, 0.5rem 0rem 0.5rem 1rem));"])
    },
    {
        variable: "--menubtn-rightbtn-padding",
        label: "MenuButton Rightbutton-Padding",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--menubtn-rightbtn-padding'),
        usage: new Map<string, string[]>()
        .set(".basti .p-button.p-splitbutton-menubutton", ["padding: var(--menubtn-rightbtn-padding);"])
    },
    {
        variable: "--popupmenubutton-panel-background",
        label: "MenuButton Panel Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--popupmenubutton-panel-background'),
        usage: new Map<string, string[]>().set(".p-menu.p-menu-overlay", ["background: var(--popupmenubutton-panel-background);"])
    },
    {
        variable: "--popupmenubutton-item-color",
        label: "MenuButton Item Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue("--popupmenubutton-item-color"),
        usage: new Map<string, string[]>().set(".p-menu .p-menuitem-link .p-menuitem-text", ["color: var(--popupmenubutton-item-color);"])
    },
    {
        variable: "--popupmenubutton-item-hover-background",
        label: "MenuButton Item Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--popupmenubutton-item-hover-background'),
        usage: new Map<string, string[]>().set(".p-menu .p-menuitem-link:not(.p-disabled):hover", ["background: var(--popupmenubutton-item-hover-background);"])
    },
    {
        variable: "--popupmenubutton-item-hover-text-color",
        label: "MenuButton Item Hover Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--popupmenubutton-item-hover-text-color'),
        usage: new Map<string, string[]>().set(".p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text", ["color: var(--popupmenubutton-item-hover-text-color);"])
    },
    {
        variable: "--button-border-radius",
        label: "Border-Radius",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--button-border-radius'),
        usage: new Map<string, string[]>()
        .set(".p-button.p-button-icon-only.menu-topbar-buttons", ["border-radius: var(--button-border-radius);"])
        .set(".p-button", ["border-radius: var(--button-border-radius);"])
        .set(".rc-popupmenubutton", ["border-radius: var(--button-border-radius);"])
    }
])
.set("Checkbox/Radiobutton", [
    {
        variable: "--checkbox-background",
        label: "Checkbox Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--checkbox-background'),
        usage: new Map<string, string[]>()
        .set(".p-checkbox .p-checkbox-box", ["background: var(--checkbox-background);"])
    },
    {
        variable: "--checkbox-border",
        label: "Checkbox Border",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--checkbox-border'),
        usage: new Map<string, string[]>()
        .set(".p-checkbox .p-checkbox-box", ["border: var(--checkbox-border);"])
    },
    {
        variable: "--checkbox-border-hover-color",
        label: "Checkbox Border Hovor Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--checkbox-border-hover-color'),
        usage: new Map<string, string[]>()
        .set(".p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover", ["border-color: var(--checkbox-border-hover-color);"])
    },
    {
        variable: "--checkbox-selected-background",
        label: "Checkbox Selected Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--checkbox-selected-background'),
        usage: new Map<string, string[]>()
        .set(".p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus", ["border-color: var(--checkbox-selected-background);"])
        .set(".p-checkbox .p-checkbox-box.p-highlight", ["background: var(--checkbox-selected-background);", "border-color: var(--checkbox-selected-background);"])
    },
    {
        variable: "--checkbox-selected-hover-background",
        label: "Checkbox Selected Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--checkbox-selected-hover-background'),
        usage: new Map<string, string[]>()
        .set(".p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover", ["background: var(--checkbox-selected-hover-background);"])
    },
    {
        variable: "--checkbox-color",
        label: "Checkbox Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--checkbox-color'),
        usage: new Map<string, string[]>()
        .set(".p-checkbox-box.p-highlight .p-checkbox-icon", ["color: var(--checkbox-color);"])
    },
    {
        variable: "--checkbox-size",
        label: "Checkbox Size",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue('--checkbox-size'),
        usage: new Map<string, string[]>()
        .set(".basti .p-checkbox", ["width: var(--checkbox-size);", "height: var(--checkbox-size);"])
        .set(".basti .p-checkbox .p-checkbox-box", ["width: var(--checkbox-size);", "height: var(--checkbox-size);"])
        .set(".basti .p-checkbox .p-checkbox-box .p-checkbox-icon", ["font-size: calc(var(--checkbox-size) * 0.7);"])
    },
    {
        variable: "--checkbox-border-radius",
        label: "Checkbox Border-Radius",
        type: "text",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--checkbox-border-radius'),
        usage: new Map<string, string[]>().set(".p-checkbox .p-checkbox-box", ["border-radius: var(--checkbox-border-radius);"])
    },
    {
        variable: "--radiobutton-background",
        label: "Radiobutton Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--radiobutton-background'),
        usage: new Map<string, string[]>()
        .set(".p-radiobutton .p-radiobutton-box", ["background: var(--radiobutton-background);"])
    },
    {
        variable: "--radiobutton-border",
        label: "Radiobutton Border",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--radiobutton-border'),
        usage: new Map<string, string[]>()
        .set(".p-radiobutton .p-radiobutton-box", ["border: var(--radiobutton-border);"])
    },
    {
        variable: "--radiobutton-border-hover-color",
        label: "Radiobutton Border Hovor Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--radiobutton-border-hover-color'),
        usage: new Map<string, string[]>()
        .set(".p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover", ["border-color: var(--radiobutton-border-hover-color);"])
    },
    {
        variable: "--radiobutton-selected-outer-background",
        label: "Radiobutton Outer Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--radiobutton-selected-outer-background'),
        usage: new Map<string, string[]>()
        .set(".p-radiobutton .p-radiobutton-box.p-highlight", ["background: var(--radiobutton-selected-outer-background);", "border-color: var(--radiobutton-selected-outer-background);"])
    },
    {
        variable: "--radiobutton-selected-outer-hover-background",
        label: "Radiobutton Outer Hover Background",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue('--radiobutton-selected-outer-hover-background'),
        usage: new Map<string, string[]>()
        .set(".p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover", ["background: var(--radiobutton-selected-outer-hover-background);", "border-color: var(--radiobutton-selected-outer-hover-background);"])
    },
    {
        variable: "--radiobutton-inner-color",
        label: "Radiobutton Color",
        type: "color",
        cssType: "scheme",
        value: docStyle.getPropertyValue("--radiobutton-inner-color"),
        usage: new Map<string, string[]>()
        .set(".p-radiobutton-box.p-highlight .p-radiobutton-icon", ["background: var(--radiobutton-inner-color);"])
    },
    {
        variable: "--radiobutton-size",
        label: "Radiobutton Size",
        type: "text",
        cssType: "theme",
        value: docStyle.getPropertyValue("--radiobutton-size"),
        usage: new Map<string, string[]>()
        .set(".basti .p-radiobutton .p-radiobutton-box", ["width: var(--radiobutton-size);", "height: var(--radiobutton-size);"])
        .set(".basti .p-radiobutton .p-radiobutton-box .p-radiobutton-icon", ["height: calc(var(--radiobutton-size) * 0.6);", "width: calc(var(--radiobutton-size) * 0.6);"])
    }
])
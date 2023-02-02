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

import { EditorGroup, EditorItem } from "../editors/management/EditorCreator";
import { VariableContextType } from "../VariableProvider";

/** 
 * A Map of variables which use other variables in their css and are dependent on them
 * eg.: --std-profile-height:calc(var(--std-header-height) - 10px);
 */
const varsUsingVarsMap: Map<string, string> = new Map<string, string>()
.set("--std-logo-width", "calc(var(--std-menu-width) - 50px)")
.set("--std-logo-collapsed-width", "calc(var(--std-menu-collapsed-width) - 20px)")
.set("--std-logo-height", "calc(var(--std-header-height) - 10px)")
.set("--std-profile-height", "calc(var(--std-header-height) - 10px)")
.set("--std-profile-pic", "calc(var(--std-profile-height) - 20px)")
.set("--std-topbar-button-size", "var(--std-profile-height)")
.set("--std-topbar-button-size-small", "calc(var(--std-profile-height) - 20px")
.set("--std-fadeout-left", "calc(var(--std-menu-collapsed-width) - var(--std-fadeout-width))")
.set("--corp-profile-height", "calc(var(--corp-header-height) - 10px)")
.set("--corp-profile-pic", "calc(var(--corp-profile-height) - 20px)")
.set("--corp-topbar-button-size", "var(--corp-profile-height)")
.set("--corp-topbar-button-size-small", "calc(var(--corp-profile-height) - 20px)")
.set("--corp-speeddial-size", "calc(var(--corp-menubar-height) - calc(var(--corp-menubar-height) / 10) * 2)")
.set("--label-padding", "calc(var(--input-padding-tb) + var(--input-border-width))")
 
/**
 * Returns the whole css file for scheme and theme as string and is used for up-and download
 * @param type - either scheme or theme
 * @param context - the variable-context
 */
export function generateCSS(type: "scheme" | "theme", context: VariableContextType) {
    /** A map of all selectors for full width */
    const selectorMapFull: Map<string, string[]> = new Map<string, string[]>();

    /** A map of all selectors for 960px max-width */
    const selectorMap960: Map<string, string[]> = new Map<string, string[]>();

    /** A map of all selectors for 530px max-width */
    const selectorMap530: Map<string, string[]> = new Map<string, string[]>();

    /**
     * Fills the selectormaps with every selector of all groups. selector as and styles as values
     * @param editorItem - the EditorItem to get the usage map from
     * @param size - the size of the chosen usage map
     */
    const fillSelectorMap = (editorItem: EditorItem, size: "full" | "960" | "530") => {
        let selectorMap = new Map();
        let usageMap: Map<string, string[]> | undefined = {} = new Map();

        switch (size) {
            case "960":
                selectorMap = selectorMap960;
                usageMap = editorItem.usage960;
                break;
            case "530":
                selectorMap = selectorMap530;
                usageMap = editorItem.usage530;
                break;
            case "full":
            default:
                selectorMap = selectorMapFull;
                usageMap = editorItem.usage;
        }

        if (usageMap) {
            usageMap.forEach((value, selector) => {
                if (selectorMap.has(selector)) {
                    selectorMap.set(selector, [...(selectorMap.get(selector) as string[]), ...value]);
                }
                else {
                    selectorMap.set(selector, value);
                }
            })
        }
    }

    // Start of the css file
    let cssString = ":root {\n";
    let alreadyAdded:string[] = []

    /**
     * Prints the variables into the root part of the css
     * @param map - the map which needs to be added
     */
    const printVariables = (map: Map<string, EditorGroup>) => {
        map.forEach(editorItems => {
            editorItems.items.forEach(editorItem => {      
                if (editorItem.cssType === type) {
                    if (!alreadyAdded.includes(editorItem.variable)) {
                        cssString += "\t" + editorItem.variable + ":" + (varsUsingVarsMap.has(editorItem.variable) ? varsUsingVarsMap.get(editorItem.variable) : editorItem.value) + ";\n";
                        alreadyAdded.push(editorItem.variable);
                    }
                    
                    fillSelectorMap(editorItem, "full");
                    fillSelectorMap(editorItem, "960");
                    fillSelectorMap(editorItem, "530");
                }
            })
        })
    }

    // if (isPreviewMode) {
    //     printRules(getPreviewVariableMap(context, isCorporation))
    // }
    // else {
    context.variables.forEach((tabGroup) => {
        printVariables(tabGroup);
    });
    //}

    // end of root
    cssString += "}\n\n"

    /** Generates the css rules and adds to the cssString */
    const generateCSSRules = (size: "full" | "960" | "530") => {
        let selectorMap = size === "full" ? selectorMapFull : size === "960" ? selectorMap960 : selectorMap530;
        selectorMap.forEach((values, selector) => {
            cssString += (size !== "full" ? "\t" : "") + selector + " {\n";
            values.forEach(value => {
                cssString += (size !== "full" ? "\t\t" : "\t") + value + "\n";
            })
            cssString += (size !== "full" ? "\t" : "") + "}\n\n";
        });

        if (size !== "full") {
            cssString += "}\n\n";
        }
    }

    // First add full then 960 then 530
    generateCSSRules("full");

    cssString += "@media screen and (max-width: 960px) {\n";

    generateCSSRules("960");

    cssString += "@media screen and (max-width: 530px) {\n";

    generateCSSRules("530");

    return cssString
}
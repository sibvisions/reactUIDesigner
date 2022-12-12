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
import { getPreviewVariableMap } from "./GetPreviewVariableMap";

export function generateCSS(type: "scheme" | "theme", isPreviewMode: boolean, isCorporation: boolean, context: VariableContextType) {
    const selectorMapFull: Map<string, string[]> = new Map<string, string[]>();
    const selectorMap960: Map<string, string[]> = new Map<string, string[]>();
    const selectorMap530: Map<string, string[]> = new Map<string, string[]>();

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

    let cssString = ":root {\n";
    let alreadyAdded:string[] = []

    const printRules = (map: Map<string, EditorGroup>) => {
        map.forEach(editorItems => {
            editorItems.items.forEach(editorItem => {
                if (editorItem.cssType === type) {
                    if (!alreadyAdded.includes(editorItem.variable)) {
                        cssString += "\t" + editorItem.variable + ":" + editorItem.value + ";\n";
                        alreadyAdded.push(editorItem.variable);
                    }
                    
                    fillSelectorMap(editorItem, "full");
                    fillSelectorMap(editorItem, "960");
                    fillSelectorMap(editorItem, "530");
                }
            })
        })
    }

    if (isPreviewMode) {
        printRules(getPreviewVariableMap(context, isCorporation))
    }
    else {
        context.variables.forEach((tabGroup) => {
            printRules(tabGroup);
        });
    }

    cssString += "}\n\n"

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

    generateCSSRules("full");

    cssString += "@media screen and (max-width: 960px) {\n";

    generateCSSRules("960");

    cssString += "@media screen and (max-width: 530px) {\n";

    generateCSSRules("530");

    return cssString
}
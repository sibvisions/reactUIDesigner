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

import { EditorGroup } from "../editors/management/EditorCreator";
import { EDITOR_INDICES } from "../editors/management/EditorManager";
import { VariableContextType } from "../VariableProvider";

/**
 * Returns the variable map for when the designer is in preview mode. Doesn't show the other editors of transferType and doesn't show editors of the other menu.
 * @param context - the variable context
 * @param isCorporation - true, if the menu mode is corporation
 * @param transferType - the transferType
 */
export function getPreviewVariableMap(context: VariableContextType, isCorporation: boolean, transferType:"full"|"partial"|"all") {
    let newVariableMap = new Map<string, EditorGroup>();
    const variableEntries = context.variables.entries();
    let entry = variableEntries.next();
    while (!entry.done) {
        if (((isCorporation && entry.value[0] !== EDITOR_INDICES.MENU_EDITORS) || (!isCorporation && entry.value[0] !== EDITOR_INDICES.COPORATE_EDITORS))
            && ((transferType !== "full" && entry.value[0] !== EDITOR_INDICES.FULLTRANSFER_EDITORS)
            || (transferType !== "partial" && entry.value[0] !== EDITOR_INDICES.MENU_EDITORS && entry.value[0] !== EDITOR_INDICES.COPORATE_EDITORS && entry.value[0] !== EDITOR_INDICES.LOGIN_EDITORS)
            || transferType === "all")) {
            newVariableMap = new Map<string, EditorGroup>([...newVariableMap, ...entry.value[1]]);
        }
        entry = variableEntries.next();
    }
    return newVariableMap;
}
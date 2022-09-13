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

import { EditorItem } from "../editors/management/EditorCreator";
import { EDITOR_INDICES } from "../editors/management/EditorManager";
import { VariableContextType } from "../VariableProvider";

export function getPreviewVariableMap(context: VariableContextType, isCorporation: boolean) {
    let newVariableMap = new Map<string, EditorItem[]>();
    const variableEntries = context.variables.entries();
    let entry = variableEntries.next();
    while (!entry.done) {
        if ((isCorporation && entry.value[0] !== EDITOR_INDICES.MENU_EDITORS) || (!isCorporation && entry.value[0] !== EDITOR_INDICES.COPORATE_EDITORS)) {
            newVariableMap = new Map<string, EditorItem[]>([...newVariableMap, ...entry.value[1]]);
        }
        entry = variableEntries.next();
    }
    return newVariableMap;
}
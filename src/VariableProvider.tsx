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

import React, { createContext, FC, useState } from "react"
import { EditorItem } from "./editors/management/EditorCreator"
import { generalEditors } from "./editors/GeneralEditors";
import { loginEditors } from "./editors/LoginEditors";
import { menuEditors } from "./editors/MenuEditors";
import { corporateEditors } from "./editors/CorporateEditors";
import { buttonEditors } from "./editors/ButtonEditor";

export type VariableContextType = {
    schemeName: string,
    themeName: string,
    isPreviewMode: boolean,
    variables: Map<string, Map<string, EditorItem[]>>,
    defaultValues: Map<string, string>,
    updateButtonBackground: () => void
}

function getDefaultValues() {
    const docStyle = window.getComputedStyle(document.documentElement);

    const mergedMap = new Map([...generalEditors, ...loginEditors, ...menuEditors, ...corporateEditors, ...buttonEditors]);
    const componentEntries = mergedMap.entries();
    const defaultValues = new Map<string, string>();
    let entry = componentEntries.next();

    while (!entry.done) {
        const editorItems = entry.value[1];
        editorItems.forEach(editorItem => {
            defaultValues.set(editorItem.variable, docStyle.getPropertyValue(editorItem.variable))
        })

        entry = componentEntries.next();
    }
    return defaultValues;
}

const initValue: VariableContextType = {
    schemeName: "default",
    themeName: "basti",
    variables: new Map<string, Map<string, EditorItem[]>>()
    .set("-1", new Map<string, EditorItem[]>(generalEditors))
    .set("0", new Map<string, EditorItem[]>(loginEditors))
    .set("1", new Map<string, EditorItem[]>(menuEditors))
    .set("2", new Map<string, EditorItem[]>(corporateEditors))
    .set("3", new Map<string, EditorItem[]>(buttonEditors)),
    defaultValues: getDefaultValues(),
    isPreviewMode: false,
    updateButtonBackground: () => {}
}

export const variableContext = createContext<VariableContextType>(initValue);

const VariableProvider: FC<any> = (props) => {
    const [contextState, setContextState] = useState<VariableContextType>(initValue);

    return (
        <variableContext.Provider value={contextState}>
            {props.children}
        </variableContext.Provider>
    )
}
export default VariableProvider
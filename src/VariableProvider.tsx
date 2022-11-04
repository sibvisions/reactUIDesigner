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
import { crashEditors, generalEditors } from "./editors/GeneralEditors";
import { loginEditors } from "./editors/LoginEditors";
import { fadeoutCalc, menuEditors } from "./editors/MenuEditors";
import { corporateEditors } from "./editors/CorporateEditors";
import { buttonEditors } from "./editors/ButtonEditors";
import { inputEditors, labelEditors, sysEditors } from "./editors/InputEditors";
import { cellEditors, tableEditors } from "./editors/TableEditors";
import { tabsetEditors } from "./editors/TabsetEditors";
import { popupEditors } from "./editors/PopupEditors";
import { messagesEditors } from "./editors/MessagesEditors";
import { loadingEditors } from "./editors/LoadingEditors";
import { errorbarEditors } from "./editors/ErrorBarEditors";
import { topbarEditors } from "./editors/TopbarEditors";
import { fullEditors } from "./editors/FullEditors";

export type VariableContextType = {
    schemeName: string,
    themeName: string,
    isPreviewMode: boolean,
    variables: Map<string, Map<string, EditorItem[]>>,
    defaultValues: Map<string, string>,
    updateButtonBackground: () => void,
    updateTopbarColors: () => void
}

const editorArray = [
    generalEditors, 
    loginEditors, 
    menuEditors,
    fadeoutCalc,
    corporateEditors, 
    buttonEditors, 
    inputEditors, 
    tableEditors, 
    cellEditors,
    tabsetEditors, 
    popupEditors,
    messagesEditors,
    loadingEditors,
    errorbarEditors,
    fullEditors,
    topbarEditors,
    labelEditors,
    sysEditors,
    crashEditors
];

function getDefaultValues() {
    const docStyle = window.getComputedStyle(document.documentElement);
    const mergedMap = new Map<string, EditorItem[]>();
    editorArray.forEach(map => map.forEach((val, key) => mergedMap.set(key, val)))
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

function getVariables() {
    const variableMap = new Map<string, Map<string, EditorItem[]>>();
    editorArray.forEach((map, i) => variableMap.set((i - 1).toString(), map));
    return variableMap;
}

getVariables()

const initValue: VariableContextType = {
    schemeName: "default",
    themeName: "basti",
    variables: getVariables(),
    defaultValues: getDefaultValues(),
    isPreviewMode: false,
    updateButtonBackground: () => {},
    updateTopbarColors: () => {}
}

export const variableContext = createContext<VariableContextType>(initValue);

const VariableProvider: FC<any> = (props) => {
    const [contextState] = useState<VariableContextType>(initValue);

    return (
        <variableContext.Provider value={contextState}>
            {props.children}
        </variableContext.Provider>
    )
}
export default VariableProvider
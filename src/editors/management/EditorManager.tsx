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

import React, { FC, useContext, useMemo } from "react";
import { variableContext } from "../../VariableProvider";
import EditorCreator, { EditorGroup } from "./EditorCreator";
import { getPreviewVariableMap } from "../../util/GetPreviewVariableMap";
import { DesignerSubscriptionManager } from "../../ReactUIDesigner";

interface IEditorManager {
    isPreviewMode: boolean
    isCorporation: boolean
    activeIndex: number
    designerSubscription: DesignerSubscriptionManager|undefined
    uploadImage: Function
    logoLogin: string
    logoBig:string
    logoSmall: string
    variablesReady: boolean
    transferType: "full"|"partial"|"all"
}

export enum EDITOR_INDICES {
    LOGIN_EDITORS = "0",
    MENU_EDITORS = "1",
    COPORATE_EDITORS = "2",
    BUTTON_EDITORS = "3",
    INPUT_EDITORS = "4",
    TABLE_EDITORS = "5",
    TABSET_EDITORS = "6",
    POPUP_EDITORS = "7",
    MESSAGES_EDITORS = "8",
    LOADING_EDITORS = "9",
    ERRORBAR_EDITORS = "10",
    FULLTRANSFER_EDITORS = "11",
    TOPBAR_EDITORS = "12"
}

const EditorManager: FC<IEditorManager> = (props) => {
    const context = useContext(variableContext)

    const editors = useMemo(() => {
        if (props.isPreviewMode) {
            return getPreviewVariableMap(context, props.isCorporation, props.transferType);
        }
        else {
            const generalMap: Map<string, EditorGroup> = new Map<string, EditorGroup>([...context.variables.get("-3") as Map<string, EditorGroup>, ...context.variables.get("-2") as Map<string, EditorGroup>, ...context.variables.get("-1") as Map<string, EditorGroup>]);
            switch (props.activeIndex) {
                case parseInt(EDITOR_INDICES.LOGIN_EDITORS): default:
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.LOGIN_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.MENU_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.MENU_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.COPORATE_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.COPORATE_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.BUTTON_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.BUTTON_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.INPUT_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.INPUT_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.TABLE_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.TABLE_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.TABSET_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.TABSET_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.POPUP_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.POPUP_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.MESSAGES_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.MESSAGES_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.LOADING_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.LOADING_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.ERRORBAR_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.ERRORBAR_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.FULLTRANSFER_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.FULLTRANSFER_EDITORS) as Map<string, EditorGroup>]);
                case parseInt(EDITOR_INDICES.TOPBAR_EDITORS):
                    return new Map<string, EditorGroup>([...generalMap, ...context.variables.get(EDITOR_INDICES.TOPBAR_EDITORS) as Map<string, EditorGroup>]);
            }
        }
    }, [props.activeIndex, props.isPreviewMode, props.isCorporation, context, props.variablesReady])

    return (
        <EditorCreator 
            index={props.activeIndex} 
            isPreviewMode={props.isPreviewMode} 
            editors={editors}
            designerSubscription={props.designerSubscription}
            uploadImage={(type:"login"|"small"|"menu") => props.uploadImage(type)}
            logoLogin={props.logoLogin}
            logoBig={props.logoBig}
            logoSmall={props.logoSmall} />
    )
}
export default EditorManager
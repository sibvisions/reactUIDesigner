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
import EditorCreator, { EditorItem } from "./EditorCreator";
import { generalEditors } from "../GeneralEditors";
import { getPreviewVariableMap } from "../../util/GetPreviewVariableMap";

interface IEditorManager {
    isPreviewMode: boolean
    isCorporation: boolean
    activeIndex: number
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
    ERRORBAR_EDITORS = "10"
}

const EditorManager: FC<IEditorManager> = (props) => {
    const context = useContext(variableContext)

    const editors = useMemo(() => {
        if (props.isPreviewMode) {
            return getPreviewVariableMap(context, props.isCorporation);
        }
        else {
            switch (props.activeIndex) {
                case parseInt(EDITOR_INDICES.LOGIN_EDITORS):
                    return context.variables.get(EDITOR_INDICES.LOGIN_EDITORS) as Map<string, EditorItem[]>;
                case parseInt(EDITOR_INDICES.MENU_EDITORS):
                    return context.variables.get(EDITOR_INDICES.MENU_EDITORS) as Map<string, EditorItem[]>;
                case parseInt(EDITOR_INDICES.COPORATE_EDITORS):
                    return context.variables.get(EDITOR_INDICES.COPORATE_EDITORS) as Map<string, EditorItem[]>;
                case parseInt(EDITOR_INDICES.BUTTON_EDITORS):
                    return context.variables.get(EDITOR_INDICES.BUTTON_EDITORS) as Map<string, EditorItem[]>;
                case parseInt(EDITOR_INDICES.INPUT_EDITORS):
                    return context.variables.get(EDITOR_INDICES.INPUT_EDITORS) as Map<string, EditorItem[]>;
                case parseInt(EDITOR_INDICES.TABLE_EDITORS):
                    return context.variables.get(EDITOR_INDICES.TABLE_EDITORS) as Map<string, EditorItem[]>;
                case parseInt(EDITOR_INDICES.TABSET_EDITORS):
                    return context.variables.get(EDITOR_INDICES.TABSET_EDITORS) as Map<string, EditorItem[]>;
                case parseInt(EDITOR_INDICES.POPUP_EDITORS):
                    return context.variables.get(EDITOR_INDICES.POPUP_EDITORS) as Map<string, EditorItem[]>;
                case parseInt(EDITOR_INDICES.MESSAGES_EDITORS):
                    return context.variables.get(EDITOR_INDICES.MESSAGES_EDITORS) as Map<string, EditorItem[]>;
                case parseInt(EDITOR_INDICES.LOADING_EDITORS):
                    return context.variables.get(EDITOR_INDICES.LOADING_EDITORS) as Map<string, EditorItem[]>;
                case parseInt(EDITOR_INDICES.ERRORBAR_EDITORS):
                    return context.variables.get(EDITOR_INDICES.ERRORBAR_EDITORS) as Map<string, EditorItem[]>;
                default:
                    return context.variables.get(EDITOR_INDICES.LOGIN_EDITORS) as Map<string, EditorItem[]>;
            }
        }
    }, [props.activeIndex, props.isPreviewMode, props.isCorporation, context])

    return (
        <>
            {!props.isPreviewMode && <EditorCreator index={props.activeIndex} isPreviewMode={props.isPreviewMode} editors={generalEditors} />}
            <EditorCreator index={props.activeIndex} isPreviewMode={props.isPreviewMode} editors={editors} />
        </>
    )
}
export default EditorManager
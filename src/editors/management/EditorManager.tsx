import React, { FC, useContext, useMemo } from "react";
import { variableContext, VariableContextType } from "../../VariableProvider";
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
    BUTTON_EDITORS = "3"
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
                default:
                    return context.variables.get(EDITOR_INDICES.LOGIN_EDITORS) as Map<string, EditorItem[]>;
            }
        }
    }, [props.activeIndex, props.isPreviewMode])

    return (
        <>
            {!props.isPreviewMode && <EditorCreator index={props.activeIndex} isPreviewMode={props.isPreviewMode} editors={generalEditors} />}
            <EditorCreator index={props.activeIndex} isPreviewMode={props.isPreviewMode} editors={editors} />
        </>
    )
}
export default EditorManager
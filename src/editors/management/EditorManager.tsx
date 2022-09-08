import React, { FC, useContext, useMemo } from "react";
import { variableContext, VariableContextType } from "../../VariableProvider";
import EditorCreator, { EditorItem } from "./EditorCreator";
import { generalEditors } from "../GeneralEditors";

interface IEditorManager {
    isPreviewMode: boolean
    isCorporation: boolean
    activeIndex: number
}

enum EDITOR_INDICES {
    LOGIN_EDITORS = "0",
    MENU_EDITORS = "1",
    COPORATE_EDITORS = "2"
}

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
            <EditorCreator index={props.activeIndex} isPreviewMode={props.isPreviewMode} editors={generalEditors} />
            <EditorCreator index={props.activeIndex} isPreviewMode={props.isPreviewMode} editors={editors} />
        </>
    )
}
export default EditorManager
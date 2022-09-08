import React, { FC, useContext, useMemo } from "react";
import { variableContext } from "../../VariableProvider";
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

const EditorManager: FC<IEditorManager> = (props) => {
    const context = useContext(variableContext)

    const editors = useMemo(() => {
        if (props.isPreviewMode) {
            let newVariableMap = new Map<string, EditorItem[]>();
            const variableEntries = context.variables.entries();
            let entry = variableEntries.next();
            while (!entry.done) {
                if ((props.isCorporation && entry.value[0] !== EDITOR_INDICES.MENU_EDITORS) || (!props.isCorporation && entry.value[0] !== EDITOR_INDICES.COPORATE_EDITORS)) {
                    newVariableMap = new Map<string, EditorItem[]>([...newVariableMap, ...entry.value[1]]);
                }
                entry = variableEntries.next();
            }
            return newVariableMap;
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
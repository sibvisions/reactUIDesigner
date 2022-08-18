import React, { FC, useContext, useMemo } from "react";
import { variableContext } from "../VariableProvider";
import EditorCreator, { EditorItem } from "./EditorCreator";
import { generalEditors } from "./GeneralEditors";

interface IEditorManager {
    isPreviewMode: boolean
    activeIndex: number
}

enum EDITOR_INDICES {
    LOGIN_EDITORS = 0,
    MENU_EDITORS = 1
}

const EditorManager: FC<IEditorManager> = (props) => {
    const context = useContext(variableContext)

    const editors = useMemo(() => {
        if (props.isPreviewMode) {
            let newVariableMap = new Map<string, EditorItem[]>();
            context.variables.forEach((variableMap) => {
                newVariableMap = new Map<string, EditorItem[]>([...newVariableMap, ...variableMap]);
            });
            return newVariableMap;
        }
        else {
            switch (props.activeIndex) {
                case EDITOR_INDICES.LOGIN_EDITORS:
                    return context.variables.get(EDITOR_INDICES.LOGIN_EDITORS.toString()) as Map<string, EditorItem[]>;
                case EDITOR_INDICES.MENU_EDITORS:
                    return context.variables.get(EDITOR_INDICES.MENU_EDITORS.toString()) as Map<string, EditorItem[]>;
                default:
                    return context.variables.get(EDITOR_INDICES.LOGIN_EDITORS.toString()) as Map<string, EditorItem[]>;
            }
        }
    }, [props.activeIndex, props.isPreviewMode])

    return (
        <>
            <EditorCreator editors={generalEditors} />
            <EditorCreator editors={editors} />
        </>
    )
}
export default EditorManager
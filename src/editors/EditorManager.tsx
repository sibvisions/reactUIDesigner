import { FC, useContext, useMemo } from "react";
import { variableContext } from "../VariableProvider";
import EditorCreator, { EditorItem } from "./EditorCreator";

interface IEditorManager {
    activeIndex: number
}

enum EDITOR_INDICES {
    LOGIN_EDITORS = 0,
    MENU_EDITORS = 1
}

const EditorManager: FC<IEditorManager> = (props) => {
    const context = useContext(variableContext)

    const editors = useMemo(() => {
        switch (props.activeIndex) {
            case EDITOR_INDICES.LOGIN_EDITORS:
                return context.variables.get(EDITOR_INDICES.LOGIN_EDITORS.toString()) as Map<string, EditorItem[]>;
            case EDITOR_INDICES.MENU_EDITORS:
                return context.variables.get(EDITOR_INDICES.MENU_EDITORS.toString()) as Map<string, EditorItem[]>;
            default:
                return context.variables.get(EDITOR_INDICES.LOGIN_EDITORS.toString()) as Map<string, EditorItem[]>;
        }
    }, [props.activeIndex])

    return (
        <>
            <EditorCreator editors={editors} />
        </>
    )
}
export default EditorManager
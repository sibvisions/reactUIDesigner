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
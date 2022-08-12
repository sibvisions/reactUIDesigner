import { createContext, FC, useState } from "react"
import { EditorItem } from "./editors/EditorCreator"
import { loginEditors } from "./editors/LoginEditors";
import { menuEditors } from "./editors/MenuEditors";

export type VariableContextType = {
    schemeName: string,
    themeName: string,
    variables: Map<string, Map<string, EditorItem[]>>,
    defaultValues: Map<string, string>,
}

function getDefaultValues() {
    const docStyle = window.getComputedStyle(document.documentElement);

    const mergedMap = new Map([...loginEditors, ...menuEditors]);
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
    .set("0", new Map<string, EditorItem[]>(loginEditors))
    .set("1", new Map<string, EditorItem[]>(menuEditors)),
    defaultValues: getDefaultValues(),
}

export const variableContext = createContext<VariableContextType>(initValue);

const VariableProvider: FC = (props) => {
    const [contextState, setContextState] = useState<VariableContextType>(initValue);

    return (
        <variableContext.Provider value={contextState}>
            {props.children}
        </variableContext.Provider>
    )
}
export default VariableProvider
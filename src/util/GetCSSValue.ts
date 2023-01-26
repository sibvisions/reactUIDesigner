import { EditorItem } from "../editors/management/EditorCreator";

export function getCSSValue(editorItem: EditorItem, appName:string, lastPreTheme:string, lastPreScheme:string) {
    const docStyle = window.getComputedStyle(document.documentElement);
    const variableName = editorItem.variable.replace("--", "");
    const sessionItem = sessionStorage.getItem("reactui-designer-" + variableName + "-" + appName);

    if (sessionItem && ((lastPreTheme !== "notSet" && lastPreScheme === "notSet") || (lastPreTheme === "notSet" && lastPreScheme !== "notSet"))) {
        document.documentElement.style.setProperty(editorItem.variable, sessionItem)
        return sessionItem;
    }
    return docStyle.getPropertyValue(editorItem.variable);
}
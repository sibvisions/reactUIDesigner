import { EditorItem } from "../editors/management/EditorCreator";

/** Returns either the CSS value of the SessionStorage or the set style on the root element */
export function getCSSValue(editorItem: EditorItem, appName:string, lastPreTheme:string, lastPreScheme:string, isPreviewMode:boolean, variablesReady:boolean|undefined) {
    /** The current style of the root element */
    const docStyle = window.getComputedStyle(document.documentElement);

    /** The variable name without '--' */
    const variableName = editorItem.variable.replace("--", "");

    /** The item out of the SessionStorage */
    const sessionItem = sessionStorage.getItem("reactui-designer-" + variableName + "-" + appName);

    /** If there is a sessionItem and the scheme and theme have initally loaded return the sessionItem */
    if (sessionItem && ((lastPreTheme !== "notSet" && lastPreScheme === "notSet") || (lastPreTheme === "notSet" && lastPreScheme !== "notSet") || (isPreviewMode && variablesReady === undefined))) {
        document.documentElement.style.setProperty(editorItem.variable, sessionItem)
        return sessionItem;
    }
    return docStyle.getPropertyValue(editorItem.variable);
}
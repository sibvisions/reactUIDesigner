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

import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Tooltip } from "primereact/tooltip";
import { variableContext, VariableContextType } from "../../VariableProvider";
import { DesignerSubscriptionManager } from "../../ReactUIDesigner";
import ColorPicker from "../colorpicker/ColorPicker";
import { translation } from "../../util/Translation";

/** Type for EditorItems */
export type EditorItem = {
    variable: string,
    label: string,
    type: "color" | "text" | "color-text" | "image",
    value: string,
    cssType: "theme" | "scheme" | "image",
    usage: Map<string, string[]>,
    usage960?: Map<string, string[]>,
    usage530?: Map<string, string[]>,
    tooltip?: string
}

/** Type for EditorGroups */
export type EditorGroup = {
    name: string,
    visible: boolean
    items: EditorItem[]
}

/** Interface for the EditorCreator */
interface IEditorCreator {
    index: number,
    isPreviewMode: boolean,
    editors: Map<string, EditorGroup>
    designerSubscription: DesignerSubscriptionManager | undefined
    uploadImage: Function
    logoLogin: string
    logoBig: string
    logoSmall: string
}

/**
 * Stores the value in the session storage
 * @param variable - the variable to save
 * @param value - the value to save
 * @param appName - the name of the application
 */
export function storeValue(variable: string, value: string, appName: string) {
    const variableName = variable.replace("--", "")
    const sessionItem = "reactui-designer-" + variableName + "-" + appName;
    sessionStorage.setItem(sessionItem, value);
}

/**
 * Returns the reference of the item to change
 * @param map - the map of editorgroups
 * @param key - the editorgroup name
 * @param pItem - the editoritem to find
 */
function getEditorItem(map: Map<string, EditorGroup>, key: string, pItem: EditorItem) {
    return map.get(key)!.items.find(item => item.variable === pItem.variable);
}

/**
 * Returns the elements of the editors
 * @param editors - the editors which need to be rendered
 * @param setCallback - a callback to trigger a rerender
 * @param defaultValues - the default values of the editors to restore default
 * @param context - the context for various values which need to be changed
 * @param props - the props of the editorcreator (IEditorCreator)
 */
function createEditors(editors: Map<string, EditorGroup>,
    setCallback: React.Dispatch<React.SetStateAction<boolean>>,
    defaultValues: Map<string, string>,
    context: VariableContextType,
    props: IEditorCreator
) {
    /** 
     * A Map to call functions to tell the components to update their size. 
     * The key are the CSS-variables and the values are the function which need to be called to tell the components to remeasure themselves
     */
    const subFunctionMap: Map<string, Function> = props.designerSubscription ? new Map<string, Function>()
        .set("--font-size", () => props.designerSubscription!.notifyFontSizeChanged())
        .set("--std-header-height", () => props.designerSubscription!.notifyStdHeaderChanged())
        .set("--std-menu-width", () => props.designerSubscription!.notifyStdMenuWidthChanged())
        .set("--std-menu-collapsed-width", () => props.designerSubscription!.notifyStdMenuCollapsedWidthChanged())
        .set("--corp-header-height", () => props.designerSubscription!.notifyCorpHeaderChanged())
        .set("--corp-menubar-height", () => props.designerSubscription!.notifyCorpMenubarChanged())
        .set("--button-padding", () => props.designerSubscription!.notifyButtonPaddingChanged())
        .set("--primary-color", () => props.designerSubscription!.notifyButtonBackgroundChanged())
        .set("--topbar-colors", () => props.designerSubscription!.notifyTopbarColorChanged())
        .set("--checkbox-size", () => props.designerSubscription!.notifyCheckboxSizeChanged())
        .set("--radiobutton-size", () => props.designerSubscription!.notifyRadiobuttonSizeChanged())
        .set("--button-icon-only-padding", () => props.designerSubscription!.notifyIconOnlyPaddingChanged())
        .set("--input-button-padding", () => props.designerSubscription!.notifyInputButtonPaddingChanged())
        .set("--menubtn-leftbtn-padding", () => props.designerSubscription!.notifyMenuButtonPaddingChanged())
        .set("--menubtn-rightbtn-padding", () => props.designerSubscription!.notifyMenuButtonPaddingChanged())
        .set("--input-padding-lr", () => props.designerSubscription!.notifyInputLRPaddingChanged())
        .set("--input-padding-tb", () => props.designerSubscription!.notifyInputTBPaddingChanged())
        .set("--tab-padding", () => props.designerSubscription!.notifyTabPaddingChanged())
        .set("--table-header-padding", props.designerSubscription!.notifyTableHeaderPaddingChanged())
        .set("--table-data-height", props.designerSubscription!.notifyTableDataHeightChanged())
        .set("--menubar-height", props.designerSubscription!.notifyMenuBarHeightChanged())
        : new Map<string, Function>()

    /**
     * Sets the value of a variable
     * @param key - the name of the EditorGroup
     * @param pItem - the EditorItem to update
     * @param value - the value which gets set
     */
    const setVariableState = (key: string, pItem: EditorItem, value: string) => {
        setCallback(prevState => {
            pItem.value = value;
            if (!props.isPreviewMode) {
                if (props.index === 1) {
                    const foundItem = getEditorItem(context.variables.get("1")!, key, pItem);
                    if (foundItem) {
                        foundItem.value = value
                    }
                }
                else if (props.index === 2) {
                    const foundItem = getEditorItem(context.variables.get("2")!, key, pItem);
                    if (foundItem) {
                        foundItem.value = value
                    }
                }
            }
            return !prevState;
        });
    }

    /**
     * Updating the variables similar to what props.designerSubscription does but when the designer is used without the reactui
     * @param editorItem - the EditorItem which needs to be updated
     */
    const updateVariables = (editorItem: EditorItem) => {
        if (subFunctionMap.has(editorItem.variable)) {
            (subFunctionMap.get(editorItem.variable) as Function)()
        }
        // Need to update the buttons seperately because the way they set the color is different
        if (editorItem.variable === "--primary-color") {
            context.updateButtonBackground();
        }
        else if (editorItem.variable === "--topbar-colors") {
            document.documentElement.style.setProperty('--topbar-colors', editorItem.value);
            context.updateTopbarColors();
        }
    }

    /**
     * Swaps the editor mode between color and color-text
     * @param pItem - the item which needs to be updated
     */
    const swapColorType = (pItem: EditorItem) => {
        setCallback(prevState => {
            if (pItem.type === "color") {
                pItem.type = "color-text";
            }
            else {
                pItem.type = "color";
            }
            return !prevState;
        });
    }

    /**
     * Returns the editor elements for each variable according to their type
     * @param editorItem - the EditorItem to render
     * @param key - the key of the EditorGroup
     */
    const getInputElements = (editorItem: EditorItem, key: string) => {
        /**
         * Stores the value changes in the session-storage so when the user refreshes the progress won't be lost.
         * @param variable - the variable which is being changed
         * @param value - the value which is set
         */


        switch (editorItem.type) {
            case "color":
                return (
                    <>
                        <ColorPicker color={editorItem.value} handleOnChange={(color:string) => {
                            setVariableState(key, editorItem, color);
                            document.documentElement.style.setProperty(editorItem.variable, color);
                            storeValue(editorItem.variable, color, context.appName);
                            updateVariables(editorItem);
                        }} />
                        <Button
                            className="style-editor-button"
                            icon="fas fa-exchange-alt"
                            tooltip={translation.get("Show Text")}
                            onClick={() => swapColorType(editorItem)} />
                        <Button
                            className="style-editor-button"
                            icon="fas fa-chess-board"
                            tooltip={translation.get("Transparent")}
                            onClick={() => {
                                setVariableState(key, editorItem, "transparent");
                                document.documentElement.style.setProperty(editorItem.variable, "transparent");
                                storeValue(editorItem.variable, "transparent", context.appName);
                                updateVariables(editorItem);
                            }} />
                    </>
                )
            case "color-text":
                return (
                    <>
                        <InputText
                            className="style-editor-color-textinput"
                            value={editorItem.value}
                            onChange={(event) => setVariableState(key, editorItem, event.target.value)}
                            onBlur={() => {
                                document.documentElement.style.setProperty(editorItem.variable, editorItem.value);
                                storeValue(editorItem.variable, editorItem.value, context.appName);
                                updateVariables(editorItem);
                            }} />
                        <Button
                            className="style-editor-button"
                            icon="fas fa-exchange-alt"
                            tooltip={translation.get("Show Color")}
                            onClick={() => swapColorType(editorItem)} />
                    </>
                )
            case "text":
            default:
                return (
                    <InputText
                        className="style-editor-textinput"
                        value={editorItem.value}
                        onChange={(event) => setVariableState(key, editorItem, event.target.value)}
                        onBlur={() => {
                            /**
                             * Returns a value (rem or em) converted to px
                             * @param value - the value to convert
                             */
                            const convertToPixels = (value: number) => {    
                                return value * parseFloat(getComputedStyle(document.documentElement).fontSize);
                            }

                            /**
                             * Converts px to rem
                             */
                            const convertToRem = () => {
                                return 16 / parseFloat(getComputedStyle(document.documentElement).fontSize);
                            }

                            // table data height cant go lower than 16px, 1rem or 1em. So don't allow anything below that and set it to that minimum if lower
                            if (editorItem.variable === "--table-data-height") {
                                if (editorItem.value.includes("px") && parseFloat(editorItem.value) < 16) {
                                    setVariableState(key, editorItem, "16px");
                                    document.documentElement.style.setProperty(editorItem.variable, "16px");
                                }
                                else if (convertToPixels(parseFloat(editorItem.value)) < 16) {
                                    if (editorItem.value.includes("rem")) {
                                        setVariableState(key, editorItem, "1rem");
                                        document.documentElement.style.setProperty(editorItem.variable, convertToRem() + "rem");
                                    }
                                    else {
                                        setVariableState(key, editorItem, "1em");
                                        document.documentElement.style.setProperty(editorItem.variable, convertToRem() + "em");
                                    }
                                }
                                else {
                                    document.documentElement.style.setProperty(editorItem.variable, editorItem.value);
                                }
                            }
                            else {
                                document.documentElement.style.setProperty(editorItem.variable, editorItem.value);
                            }
                            storeValue(editorItem.variable, editorItem.value, context.appName);
                            updateVariables(editorItem);
                        }} />
                )
        }
    }

    // Adds every group to an accordion.
    let groupElements: JSX.Element[] = []
    if (editors.size) {
        editors.forEach((editorGroup, key) => {
            if (editorGroup.visible) {
                let editorElements = editorGroup.items.map(editorItem => {
                    const tooltipId = editorItem.label?.toLowerCase().replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "") + "-tooltip";
                    if (editorItem.type === "image") {
                        return (
                            <div key={editorItem.label} className='designer-panel-row designer-panel-image-upload'>
                                <div className="style-editor-label-wrapper">
                                    <span className="style-editor-label">{editorItem.label}</span>
                                </div>
                                <img alt={editorItem.label} id={editorItem.label !== "Collapsed Menu" ? editorItem.label.toLowerCase() + '-image' : 'small-image'} className='designer-panel-image' src={editorItem.label === "Login" ? props.logoLogin : editorItem.label === "Menu" ? props.logoBig : props.logoSmall} />
                                <Button className='designer-panel-image-button' icon='fas fa-file-upload' onClick={() => props.uploadImage(editorItem.label === "Login" ? "login" : editorItem.label === "Menu" ? "menu" : "small")} />
                                <i className="tooltip-icon pi pi-info-circle" />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={editorItem.label} className="style-editor-wrapper">
                                <div className="style-editor-label-wrapper">
                                    <span className="style-editor-label">{editorItem.label}</span>
                                </div>
                                <div className="style-editor">
                                    {getInputElements(editorItem, key)}
                                    <Button
                                        className="style-editor-button"
                                        icon="fas fa-undo"
                                        tooltip={translation.get("Reset to Default")}
                                        onClick={() => {
                                            setVariableState(key, editorItem, defaultValues.get(editorItem.variable) as string);
                                            document.documentElement.style.setProperty(editorItem.variable, defaultValues.get(editorItem.variable) as string);
                                            const variableName = editorItem.variable.replace("--", "");
                                            sessionStorage.removeItem("reactui-designer-" + variableName + "-" + context.appName);
                                            updateVariables(editorItem);
                                        }} />
                                    <Tooltip target={"#" + tooltipId} position="right" />
                                    <i id={tooltipId} className="tooltip-icon pi pi-info-circle" data-pr-tooltip={editorItem.tooltip ? editorItem.tooltip : ""} />
                                </div>
                            </div>
                        )
                    }
                })
                let groupElement = (<AccordionTab key={"accordion-tab-" + key} header={editorGroup.name}>
                                       <div key={key} className={editorGroup.name === "Images" ? "designer-panel-options" : "style-editor-group"}>{editorElements}</div>
                                    </AccordionTab>);
                groupElements.push(groupElement)
            }
        });
    }

    return groupElements
}

/** Renders the Editors in an Accordion */
const EditorCreator: FC<IEditorCreator> = (props) => {
    /** The context to gain access to the variables, defaultValues and more. */
    const context = useContext(variableContext);

    const editorTest = useRef<Map<string, EditorGroup>>(props.editors);

    const [renderFlag, setRenderFlag] = useState<boolean>(true);

    /** The search string to search for specific variables */
    const [search, setSearch] = useState<string>("");

    // If there is a search string, search for the editors which fit the search
    useEffect(() => {
        if (search) {
            const searchResultMap:Map<string, EditorGroup> = new Map<string, EditorGroup>();
            props.editors.forEach(editorGroup => {
                if (editorGroup.visible) {
                    const foundEditors:EditorGroup = {
                        name: editorGroup.name,
                        visible: true,
                        items: []
                    }
                    editorGroup.items.forEach(item => {
                        if (item.label.toLowerCase().includes(search.toLowerCase())) {
                            foundEditors.items.push(item);
                        }
                    });
                    if (editorGroup.name.toLowerCase().startsWith(search.toLowerCase())) {
                        searchResultMap.set(editorGroup.name, editorGroup)
                    }
                    else if (foundEditors.items.length) {
                        searchResultMap.set(foundEditors.name, foundEditors)
                    }
                }
            });
            editorTest.current = searchResultMap;
        }
        else {
            editorTest.current = props.editors
        }
        setRenderFlag(prevState => !prevState);
    }, [props.editors, search]);

    return (
        <>
            <div className="p-field p-icon-field-left designer-panel-row">
                <i className="pi pi-search" />
                <InputText
                    value={search}
                    className="designer-search-editor"
                    id="search"
                    autoComplete="search"
                    placeholder={translation.get("Search")}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} />
            </div>
            <Accordion className="designer-accordion">
                {createEditors(editorTest.current, setRenderFlag, context.defaultValues, context, props)}
            </Accordion>
        </>
    )
}
export default EditorCreator
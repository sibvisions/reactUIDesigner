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

import React, { FC, useContext, useEffect, useState } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Tooltip } from "primereact/tooltip";
import { variableContext, VariableContextType } from "../../VariableProvider";
import { DesignerSubscriptionManager } from "../../ReactUIDesigner";
import ColorPicker from "../ColorPicker";

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

export type EditorGroup = {
    name: string,
    visible: boolean
    items: EditorItem[]
}

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

function createEditors(editors: Map<string, EditorGroup>,
    setCallback: React.Dispatch<React.SetStateAction<Map<string, EditorGroup>>>,
    defaultValues: Map<string, string>,
    context: VariableContextType,
    props: IEditorCreator
) {
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

    const setVariableState = (key: string, pItem: EditorItem, value: string) => {
        setCallback(prevState => {
            const mapCopy = new Map(prevState);
            if (mapCopy.has(key)) {
                const foundEditor = mapCopy.get(key)!.items.find(item => item.variable === pItem.variable);
                if (foundEditor) {
                    foundEditor.value = value;

                    // Check for duplicates between standard menu and corporate menu
                    if (!props.isPreviewMode) {
                        if (props.index === 1) {
                            const foundItem = context.variables.get("2")!.get(key)?.items.find(item => item.variable === pItem.variable);
                            if (foundItem) {
                                foundItem.value = value
                            }
                        }
                        else if (props.index === 2) {
                            const foundItem = context.variables.get("1")!.get(key)?.items.find(item => item.variable === pItem.variable);
                            if (foundItem) {
                                foundItem.value = value
                            }
                        }

                    }
                }
            }
            return new Map(mapCopy);
        });
    }

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

    const swapColorType = (key: string, pItem: EditorItem) => {
        setCallback(prevState => {
            const mapCopy = new Map(prevState);
            if (mapCopy.has(key)) {
                const foundItem = mapCopy.get(key)!.items.find(item => item.variable === pItem.variable);
                if (foundItem) {
                    if (foundItem.type === "color") {
                        foundItem.type = "color-text";
                    }
                    else {
                        foundItem.type = "color";
                    }
                }
            }
            return new Map(mapCopy);
        });
    }

    const getInputElements = (editorItem: EditorItem, key: string) => {
        switch (editorItem.type) {
            case "color":
                return (
                    <>
                        <ColorPicker color={editorItem.value} handleOnChange={(color:string) => {
                            setVariableState(key, editorItem, color);
                            document.documentElement.style.setProperty(editorItem.variable, color);
                            updateVariables(editorItem);
                        }} />
                        <Button
                            className="style-editor-button"
                            icon="fas fa-exchange-alt"
                            tooltip="Show Text"
                            onClick={() => swapColorType(key, editorItem)} />
                        <Button
                            className="style-editor-button"
                            icon="fas fa-chess-board"
                            tooltip="Transparent"
                            onClick={() => {
                                setVariableState(key, editorItem, "transparent");
                                document.documentElement.style.setProperty(editorItem.variable, "transparent")
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
                                updateVariables(editorItem);
                            }} />
                        <Button
                            className="style-editor-button"
                            icon="fas fa-exchange-alt"
                            tooltip="Show Color"
                            onClick={() => swapColorType(key, editorItem)} />
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
                            document.documentElement.style.setProperty(editorItem.variable, editorItem.value);
                            updateVariables(editorItem);
                        }} />
                )
        }
    }

    let groupElements: JSX.Element[] = []
    if (editors.size) {
        editors.forEach((editorGroup, key) => {
            if (editorGroup.visible) {
                let editorElements = editorGroup.items.map(editorItem => {
                    const tooltipId = editorItem.label.toLowerCase().replaceAll(" ", "") + "-tooltip";
                    if (editorItem.type === "image") {
                        return (
                            <div className='designer-panel-row designer-panel-image-upload'>
                                <div className="style-editor-label-wrapper">
                                    <i className="style-editor-tooltip-icon pi pi-info-circle" />
                                    <span className="style-editor-label">{editorItem.label}</span>
                                </div>
                                <img alt={editorItem.label} id={editorItem.label.toLowerCase() + '-image'} className='designer-panel-image' src={editorItem.label === "Login" ? props.logoLogin : editorItem.label === "Menu" ? props.logoBig : props.logoSmall} />
                                <Button className='designer-panel-image-button' icon='fas fa-file-upload' onClick={() => props.uploadImage(editorItem.label === "Login" ? "login" : editorItem.label === "Menu" ? "menu" : "small")} />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={editorItem.label} className="style-editor-wrapper">
                                <div className="style-editor-label-wrapper">
                                    <Tooltip target={"#" + tooltipId} position="right" />
                                    <i id={tooltipId} className="style-editor-tooltip-icon pi pi-info-circle" data-pr-tooltip={editorItem.tooltip ? editorItem.tooltip : ""} />
                                    <span className="style-editor-label">{editorItem.label}</span>
                                </div>
                                <div className="style-editor">
                                    {getInputElements(editorItem, key)}
                                    <Button
                                        className="style-editor-button"
                                        icon="fas fa-undo"
                                        tooltip="Reset to Default"
                                        onClick={() => {
                                            setVariableState(key, editorItem, defaultValues.get(editorItem.variable) as string);
                                            document.documentElement.style.setProperty(editorItem.variable, defaultValues.get(editorItem.variable) as string);
                                            updateVariables(editorItem);
                                        }} />
                                </div>
                            </div>
                        )
                    }
                })
                let groupElement = (<AccordionTab key={"accordion-tab-" + key} header={editorGroup.name}><div key={key} className={editorGroup.name === "Images" ? "designer-panel-options" : "style-editor-group"}>{editorElements}</div></AccordionTab>);
                groupElements.push(groupElement)
            }
        });
    }

    return groupElements
}

const EditorCreator: FC<IEditorCreator> = (props) => {
    const context = useContext(variableContext)

    const [editors, setEditors] = useState(props.editors);

    const [search, setSearch] = useState<string>("");

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
                        if (item.label.toLowerCase().includes(search.toLowerCase()) || item.variable.toLowerCase().includes(search.toLowerCase())) {
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
            setEditors(searchResultMap);
        }
        else {
            setEditors(props.editors);
        }
    }, [props.editors, search]);

    return (
        <>
            <div className="p-field p-input-icon-left designer-panel-row">
                <i className="pi pi-search" />
                <InputText
                    value={search}
                    className="designer-search-editor"
                    id="search"
                    autoComplete="search"
                    placeholder="Search"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} />
            </div>
            <Accordion className="designer-accordion">
                {createEditors(editors, setEditors, context.defaultValues, context, props)}
            </Accordion>
        </>
    )
}
export default EditorCreator
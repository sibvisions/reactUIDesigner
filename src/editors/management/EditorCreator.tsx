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
import { variableContext, VariableContextType } from "../../VariableProvider";
import { DesignerSubscriptionManager } from "../../ReactUIDesigner";

export type EditorItem = {
    variable: string,
    label: string,
    type: "color"|"text"|"color-text",
    value: string,
    cssType: "theme"|"scheme",
    usage: Map<string, string[]>
    usage960?: Map<string, string[]>
    usage530?: Map<string, string[]>
}

interface IEditorCreator {
    index: number,
    isPreviewMode: boolean,
    editors: Map<string, EditorItem[]>
    designerSubscription: DesignerSubscriptionManager|undefined
    uploadImage: Function
    logoLogin: string
    logoBig:string
    logoSmall: string
}

function createEditors(editors: Map<string, EditorItem[]>, 
    setCallback: React.Dispatch<React.SetStateAction<Map<string, EditorItem[]>>>, 
    defaultValues: Map<string, string>, 
    context: VariableContextType,
    index: number,
    isPreviewMode: boolean,
    designerSub: DesignerSubscriptionManager|undefined
    ) {
    const subFunctionMap:Map<string, Function> = designerSub ? new Map<string, Function>()
    .set("--font-size", () => designerSub.notifyFontSizeChanged())
    .set("--button-padding", () => designerSub.notifyButtonPaddingChanged())
    .set("--primary-color", () => designerSub.notifyButtonBackgroundChanged())
    .set("--topbar-colors", () => designerSub.notifyTopbarColorChanged())
    .set("--checkbox-size", () => designerSub.notifyCheckboxSizeChanged())
    .set("--radiobutton-size", () => designerSub.notifyRadiobuttonSizeChanged())
    .set("--button-icon-only-padding", () => designerSub.notifyIconOnlyPaddingChanged())
    .set("--input-button-padding", () => designerSub.notifyInputButtonPaddingChanged())
    .set("--menubtn-leftbtn-padding", () => designerSub.notifyMenuButtonPaddingChanged())
    .set("--menubtn-rightbtn-padding", () => designerSub.notifyMenuButtonPaddingChanged())
    : new Map<string, Function>()

    const setVariableState = (key: string , pItem: EditorItem, value: string) => {
        setCallback(prevState => {
            const mapCopy = new Map(prevState);
            if (mapCopy.has(key)) {
                const foundEditor = mapCopy.get(key)!.find(item => item.variable === pItem.variable);
                if (foundEditor) {
                    foundEditor.value = value;

                    // Check for duplicates between standard menu and corporate menu
                    if (!isPreviewMode) {
                        if (index === 1) {
                            const foundItem = context.variables.get("2")!.get(key)?.find(item => item.variable === pItem.variable);
                            if (foundItem) {
                                foundItem.value = value
                            }
                        }
                        else if (index === 2) {
                            const foundItem = context.variables.get("1")!.get(key)?.find(item => item.variable === pItem.variable);
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

    const updateVariables = (editorItem:EditorItem) => {
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
                const foundItem = mapCopy.get(key)!.find(item => item.variable === pItem.variable);
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

    const getInputElements = (editorItem:EditorItem, key: string) => {
        switch (editorItem.type) {
            case "color":
                return (
                    <>
                        <input 
                            className="style-editor-colorpicker" 
                            type={editorItem.type} 
                            value={editorItem.value}
                            onChange={event => {
                                setVariableState(key, editorItem, event.target.value);
                                document.documentElement.style.setProperty(editorItem.variable, event.target.value);
                                updateVariables(editorItem);
                            }} />
                        <Button
                            className="style-editor-button"
                            icon="fas fa-exchange-alt"
                            tooltip="swap to text"
                            onClick={() => swapColorType(key, editorItem)} />
                        <Button 
                            className="style-editor-button" 
                            icon="fas fa-chess-board" 
                            tooltip="transparent"
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
                            tooltip="swap to color"
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

    let groupElements:JSX.Element[] = []
    if (editors.size) {
        editors.forEach((editorArray, key) => {
            let editorElements = editorArray.map(editorItem => {
                return (
                    <div key={editorItem.label} className="style-editor-wrapper">
                        <span className="style-editor-label">{editorItem.label}</span>
                        <div className="style-editor">
                            {getInputElements(editorItem, key)}
                            <Button 
                                className="style-editor-button" 
                                icon="fas fa-undo"
                                tooltip="reset to default"
                                onClick={() => {
                                    setVariableState(key, editorItem, defaultValues.get(editorItem.variable) as string);
                                    document.documentElement.style.setProperty(editorItem.variable, defaultValues.get(editorItem.variable) as string);
                                    updateVariables(editorItem);
                                }} />
                        </div>
                    </div>
                )
            })
            let groupElement = (<AccordionTab key={"accordion-tab-" + key} header={key}><div key={key} className="style-editor-group">{editorElements}</div></AccordionTab>);
            groupElements.push(groupElement)
        });
    }

    return groupElements
}

const EditorCreator:FC<IEditorCreator> = (props) => {
    const context = useContext(variableContext)

    const [editors, setEditors] = useState(props.editors);

    useEffect(() => {
        setEditors(props.editors);
    }, [props.editors])

    return (
        <Accordion>
            <AccordionTab key={"accordion-tab-upanddownload"} header="Images">
                <div className='designer-panel-options'>
                <div>
                    <div className='designer-panel-row designer-panel-image-upload'>
                    <span className='designer-panel-header'>Login:</span>
                    <img alt='login' id='login-image' className='designer-panel-image' src={props.logoLogin} />
                    <Button className='designer-panel-image-button' icon='fas fa-cloud-upload-alt' onClick={() => props.uploadImage("login")} />
                    </div>
                    <div className='designer-panel-row designer-panel-image-upload'>
                    <span className='designer-panel-header'>Menu:</span>
                    <img alt='menu' id='menu-image' className='designer-panel-image' src={props.logoBig} />
                    <Button className='designer-panel-image-button' icon='fas fa-cloud-upload-alt' onClick={() => props.uploadImage("menu")} />
                    </div>
                    <div className='designer-panel-row designer-panel-image-upload'>
                    <span className='designer-panel-header'>Collapsed Menu:</span>
                    <img alt='collapsed' id='small-image' className='designer-panel-image' src={props.logoSmall} />
                    <Button className='designer-panel-image-button' icon='fas fa-cloud-upload-alt' onClick={() => props.uploadImage("small")} />
                    </div>
                </div>
                </div>
            </AccordionTab>
            {createEditors(editors, setEditors, context.defaultValues, context, props.index, props.isPreviewMode, props.designerSubscription)}
        </Accordion> 
    )
}
export default EditorCreator
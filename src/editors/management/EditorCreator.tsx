import React, { FC, useContext, useEffect, useState } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { variableContext, VariableContextType } from "../../VariableProvider";
import '../Editor.scss'

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
}

function createEditors(editors: Map<string, EditorItem[]>, 
    setCallback: React.Dispatch<React.SetStateAction<Map<string, EditorItem[]>>>, 
    defaultValues: Map<string, string>, 
    context: VariableContextType,
    index: number,
    isPreviewMode: boolean
    ) {
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
                            }} />
                        <Button
                            className="style-editor-button"
                            icon="fas fa-exchange-alt"
                            onClick={() => swapColorType(key, editorItem)} />
                        <Button 
                            className="style-editor-button" 
                            icon="fas fa-chess-board" 
                            onClick={() => {
                                setVariableState(key, editorItem, "transparent");
                                document.documentElement.style.setProperty(editorItem.variable, "transparent")
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
                            onBlur={() => document.documentElement.style.setProperty(editorItem.variable, editorItem.value)} />
                        <Button
                            className="style-editor-button"
                            icon="fas fa-exchange-alt"
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
                        onBlur={() => document.documentElement.style.setProperty(editorItem.variable, editorItem.value)} />
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
                                onClick={() => {
                                    setVariableState(key, editorItem, defaultValues.get(editorItem.variable) as string);
                                    document.documentElement.style.setProperty(editorItem.variable, defaultValues.get(editorItem.variable) as string)
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
            {createEditors(editors, setEditors, context.defaultValues, context, props.index, props.isPreviewMode)}
        </Accordion> 
    )
}
export default EditorCreator
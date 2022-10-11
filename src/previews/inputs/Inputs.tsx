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

import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { AutoComplete } from 'primereact/autocomplete';
import { Editor } from 'primereact/editor';
import Quill from "quill";
import React, { FC, useState } from 'react';
import tinycolor from 'tinycolor2';

/** custom divider blot to insert <hr> intro quill editor */
let BlockEmbed = Quill.import('blots/block/embed');
class DividerBlot extends BlockEmbed { }
DividerBlot.blotName = 'divider';
DividerBlot.tagName = 'hr';
Quill.register(DividerBlot);

const Module = Quill.import('core/module')
class DividerToolbar extends Module {
    constructor (quill: Quill, options: any) {
        super(quill, options)
        this.options = options
        this.quill = quill
        this.toolbar = quill.getModule('toolbar')
        this.toolbar.addHandler('divider', this.dividerHandler.bind(this))
    }

    dividerHandler () {
        const getSelection = this.quill.getSelection() || {}
        let selection = getSelection.index || this.quill.getLength()
        const [leaf] = this.quill.getLeaf(selection - 1)
        if (leaf instanceof DividerBlot) {
            this.quill.insertText(selection, '\n', "user")
            selection++
        }
        this.quill.insertEmbed(selection, 'divider', this.options, "user")
        if (getSelection.index === 0) {
            selection++
            this.quill.insertText(selection, '\n', "user")
        }
    }
}
Quill.register('modules/divider', DividerToolbar)

const Inputs: FC = () => {
    const [text, setText] = useState<string>("Some Text");
    const [htmlText, setHtmlText] = useState<string|null>("<b>Some HTML Text</b>")

    const [dateValue, setDateValue] = useState<Date|undefined>(new Date());
    const btnBgd = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

    const [selectedItem, setSelectedItem] = useState<{ label: string, value: number } | null>(null);
    const [filteredItems, setFilteredItems] = useState<{ label: string, value: number }[] | undefined>(undefined);
    const items = Array.from({ length: 10 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    const searchItems = (event:any) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    }

    const itemTemplate = (d:any, i:number) => {
        return <div key={i}>{d.label}</div>
    }

    const headerTemplate = (
        <>
            <span className="ql-formats">
                <select className="ql-size" defaultValue="">
                    <option value="small"></option>
                    <option ></option>
                    <option value="large"></option>
                    <option value="huge"></option>
                </select>
            </span>
            <span className="ql-formats">
                <select className="ql-font">
                    <option ></option>
                    <option value="serif"></option>
                    <option value="monospace"></option>
                </select>
            </span>
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
            <span className="ql-formats">
                <button className="ql-script" value="sub"></button>
                <button className="ql-script" value="super"></button>
            </span>
            <span className="ql-formats">
                <select className="ql-color"></select>
                <select className="ql-background"></select>
            </span>
            <span className="ql-formats">
                <button type="button" className="ql-list" value="ordered" aria-label="Ordered List"></button>
                <button type="button" className="ql-list" value="bullet" aria-label="Unordered List"></button>
                <select className="ql-align">
                    <option ></option>
                    <option value="center"></option>
                    <option value="right"></option>
                    <option value="justify"></option>
                </select>
            </span>
            <span className="ql-formats">
                <button className="ql-strike" aria-label="Strike"></button>
            </span>
            <span className="ql-formats">
                <button className="ql-divider" aria-label="Divider">
                    <svg width="18" height="18" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect className="ql-fill" x="0" y="45" width="100" height="10" />
                    </svg>
                </button>
            </span>
            <span className="ql-formats">
                <button type="button" className="ql-clean" aria-label="Remove Styles"></button>
            </span>
            <span className="ql-formats">
                <button type="button" className="ql-source" aria-label="Source" onClick={() => {}}>
                    <svg width="18" height="18" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path className="ql-fill" d="M58.059,14.795C55.938,14.23 53.676,15.502 53.11,17.764L36.71,80.254C36.145,82.375 37.417,84.637 39.679,85.202C39.962,85.344 40.386,85.344 40.669,85.344C42.507,85.344 44.203,84.071 44.628,82.233L61.028,19.602C61.593,17.482 60.321,15.361 58.059,14.795ZM30.49,26.247C28.934,24.692 26.248,24.692 24.693,26.247L3.91,47.171C2.355,48.726 2.355,51.413 3.91,52.968L24.552,73.892C25.4,74.74 26.39,75.164 27.521,75.164C28.51,75.164 29.641,74.74 30.348,74.033C31.903,72.478 31.903,69.792 30.348,68.237L12.676,49.999L30.49,32.044C32.045,30.347 32.045,27.802 30.49,26.247ZM96.09,47.171L75.307,26.247C73.752,24.692 71.066,24.692 69.51,26.247C67.955,27.802 67.955,30.488 69.51,32.044L87.324,49.999L69.51,67.954C67.955,69.509 67.955,72.196 69.51,73.751C70.359,74.599 71.348,74.882 72.338,74.882C73.328,74.882 74.459,74.458 75.307,73.609L96.09,52.826C97.645,51.271 97.645,48.726 96.09,47.171Z" />
                    </svg>
                </button>
            </span>
        </>
    )

    return (
        <div className="preview-container">
            <span className="input-container comp-container">
                <InputText 
                    value={text} 
                    className="rc-editor-text"
                    onChange={(event) => setText(event.currentTarget.value)} />
            </span>
            <span className="input-container comp-container">
                <Calendar 
                    value={dateValue}
                    className="rc-editor-text rc-editor-date"
                    panelClassName="rc-editor-date-panel"
                    style={{
                        '--background': btnBgd,
                        '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                    }}
                    dateFormat="dd.mm.yy"
                    monthNavigator
                    yearNavigator
                    yearRange="1900:2030"
                    showIcon
                    showOnFocus={false}
                    inputStyle={{ borderRight: "none" }}
                    appendTo={document.body}
                    onChange={event => setDateValue(event.value ? (event.value as Date) : undefined)} />
            </span>
            <span className="input-container comp-container">
                <AutoComplete
                    className='rc-editor-linked'
                    style={{
                        '--background': btnBgd,
                        '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                    }}
                    value={selectedItem} 
                    suggestions={filteredItems} 
                    completeMethod={searchItems} 
                    field="label" 
                    dropdown 
                    onChange={(e) => setSelectedItem(e.value)}
                    appendTo={document.body}
                    panelClassName="rc-editor-linked-dropdown"
                    scrollHeight='200px'
                    inputStyle={{ borderRight: "none" }}
                    itemTemplate={itemTemplate} />
            </span>
            <span className="input-container-html comp-container">
                <div className="rc-editor-html">
                    <Editor 
                        onTextChange={(value) => setHtmlText(value.htmlValue)}
                        value={htmlText as string}
                        formats={["bold", "color", "font", "background", "italic", "underline", "size", "strike", "align", "list", "script", "divider"]}
                        modules={{
                            divider: true,
                            clipboard: true,
                            keyboard: true,
                            history: true,
                        }}
                        headerTemplate={headerTemplate} />
                </div>
            </span>
        </div>
    )
}
export default Inputs
import { Button } from "primereact/button"
import { Checkbox } from "primereact/checkbox"
import { Dialog } from "primereact/dialog"
import { Dropdown } from "primereact/dropdown"
import { InputText } from "primereact/inputtext"
import React, { FC, useState } from "react"
import { addCSSDynamically } from "./util/AddCSSDynamically"

interface IExpressDialog {
    visible: boolean
    handleClose: () => void
}

const ExpressDialog:FC<IExpressDialog> = (props) => {
    const themes = [
        {label: "basti", value: "basti"},
        {label: "basti (small)", value: "basti_small"},
        {label: "basti (mobile)", value: "basti_mobile"}
    ];

    const schemes = [
        {label: "default", value: "default"},
        {label: "dark", value: "dark"},
        {label: "blue", value: "blue"},
        {label: "orange", value: "orange"}
    ]

    const [selectedTheme, setSelectedTheme] = useState<string>(themes[0].label);
    const [selectedScheme, setSelectedScheme] = useState<string>(schemes[0].label);

    const [schemeColor, setSchemeColor] = useState<string>("");
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const handleConfirm = () => {
        addCSSDynamically('color-schemes/' + selectedScheme + '.css', "schemeCSS", () => {});
        addCSSDynamically('themes/' + selectedTheme + '.css', "themeCSS", () => {});
    }

    const footer = 
    <div className="express-button-wrapper">
        <Button className="express-button" label="Cancel" icon="pi pi-times" onClick={props.handleClose} />
        <Button className="express-button" label="Confirm" icon="pi pi-check" onClick={handleConfirm} />
    </div>

    return (
        <Dialog className="express-dialog" header="Express Mode" visible={props.visible} modal={false} onHide={props.handleClose} footer={footer}>
            <div className="express-group-wrapper">
                <div className="express-group">
                    <span className="express-group-header">Select a Preset</span>
                    <Dropdown className="express-preset-dropdown" value={selectedTheme} options={themes} onChange={(e) => { console.log(e); setSelectedTheme(e.value)}} optionLabel="label" optionValue="value" />
                    <Dropdown className="express-preset-dropdown" value={selectedScheme} options={schemes} onChange={(e) => setSelectedScheme(e.value)} />
                </div>
                <hr style={{ borderRight: "1px solid #bbb" }} />
                <div className="express-group">
                    <span className="express-group-header">Express Scheme</span>
                    <div className="express-scheme-editor-wrapper">
                        <span className="express-scheme-text">Primary Color</span>
                        <InputText className="express-scheme-editor" value={schemeColor} onChange={(event) => setSchemeColor(event.target.value)} />
                        <input
                            className="style-editor-colorpicker"
                            type="color"
                            value={schemeColor}
                            onChange={event => setSchemeColor(event.target.value)} />
                    </div>
                    <div className="express-dark-wrapper">
                        <label htmlFor="dark-mode-cb">Dark Mode</label>
                        <Checkbox className="express-dark-checkbox" inputId="dark-mode-cb" checked={isDarkMode} onChange={(e) => setIsDarkMode(e.checked)} />
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
export default ExpressDialog
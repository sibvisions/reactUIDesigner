import { Button } from "primereact/button"
import { Checkbox } from "primereact/checkbox"
import { Dialog } from "primereact/dialog"
import { Dropdown } from "primereact/dropdown"
import { InputText } from "primereact/inputtext"
import { Tooltip } from "primereact/tooltip"
import React, { FC, useContext, useEffect, useRef, useState } from "react"
import tinycolor from "tinycolor2"
import ColorPicker from "./editors/ColorPicker"
import { addCSSDynamically } from "./util/AddCSSDynamically"
import { variableContext } from "./VariableProvider"

interface IExpressDialog {
    visible: boolean,
    handleClose: () => void,
    setPresetScheme: (value:string) => void,
    setPresetTheme: (value:string) => void,
    handleConfirm: (scheme:string, theme:string) => void,
    showToast: () => void,
    changeTheme: (value: string) => void,
    isPreviewMode: boolean
}

const ExpressDialog:FC<IExpressDialog> = (props) => {
    const context = useContext(variableContext);

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

    const [schemeName, setSchemeName] = useState<string>("");
    const [schemeColor, setSchemeColor] = useState<string>("");
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const themeReady = useRef<boolean>(false);
    const schemeReady = useRef<boolean>(false);

    useEffect(() => {
        if (!schemeName && schemeColor) {
            setSchemeColor("");
        }
    }, [schemeName]);

    const setStyle = (primaryColor:string) => {
        const docStyle = document.documentElement.style;
        docStyle.setProperty("--primary-color", primaryColor);
        docStyle.setProperty("--frame-hover-backgrounds", tinycolor(primaryColor).darken(10).toString());
        docStyle.setProperty("--checkbox-radio-selected-hover-background", tinycolor(primaryColor).darken(5).toString());
        docStyle.setProperty("--frame-toolbar-borders", "1px solid " + tinycolor(primaryColor).darken(1).toString());
        docStyle.setProperty("--frame-header-background", tinycolor(primaryColor).brighten(40).toString());
        docStyle.setProperty("--table-selected-row-background", "linear-gradient(to bottom, " + tinycolor(primaryColor).darken(1).setAlpha(0.5).toRgbString() + " 2%, " + tinycolor(primaryColor).darken(2).setAlpha(0.5).toRgbString() + "98%)");
        docStyle.setProperty("--focus-box-shadow", "0 0 0 0.2rem " + tinycolor(primaryColor).brighten(22).toString());
        docStyle.setProperty("--topbar-background", primaryColor);
        docStyle.setProperty("--menubar-background", primaryColor);
        docStyle.setProperty("--backgrounds", isDarkMode ? "#20262e" : "#ffffff");
        docStyle.setProperty("--hover-backgrounds", isDarkMode ? "#303a48" : "#e9ecef");
        docStyle.setProperty("--border-colors", isDarkMode ? "#3f4b5b" : "#ced4da");
        docStyle.setProperty("--text-color", isDarkMode ? "rgba(255, 255, 255, 0.87)" : "#495057");
        docStyle.setProperty("--hover-text-color", isDarkMode ? "#ffffff" : "#000000");
        docStyle.setProperty("--selected-background", "#E3F2FD");
        docStyle.setProperty("--login-mask-background", isDarkMode ? "rgba(18, 18, 19, 0.93)" : "rgb(245, 245, 245, 0.93)");
        docStyle.setProperty("--std-menu-background", isDarkMode ? "#2a323d" : "#fafafa");
        docStyle.setProperty("--table-row-odd-background", isDarkMode ? "#2a323d" : "#fafafa");
        docStyle.setProperty("--table-row-even-background", isDarkMode ? "#20262e" : "ffffff");
        docStyle.setProperty("--topbar-logo-background", isDarkMode ? "linear-gradient(270deg, #4f5966 0%, #3f4b5b 100%)" : "linear-gradient(270deg, rgba(232,232,232,1) 0%, rgba(255,255,255,1) 100%)")
        docStyle.setProperty("--std-menu-fadeout-background", isDarkMode ? "linear-gradient(90deg, #2a323d00 0%, #2a323d 100%)" : "linear-gradient(90deg, #fafafa00 0%, #fafafa 100%)")
        docStyle.setProperty("--menu-scrollbar-color", isDarkMode ? "#363e44" : "#e6e6e6");
        docStyle.setProperty("--menu-scrollbar-hover-color", isDarkMode ? "#475057" : "#cacaca");
        docStyle.setProperty("--input-placeholder-color", isDarkMode ? "rgba(255, 255, 255, 0.6)" : "#6c757d");
        docStyle.setProperty("--error-bar-background", isDarkMode ? "rgba(66, 73, 82, 0.8)" : "rgba(255, 255, 255, 0.8)");
        docStyle.setProperty("--loading-screen-left-background", isDarkMode ? "#20262e" : "#ffffff");
        docStyle.setProperty("--loading-screen-right-background", isDarkMode ? "#3f4b5b" : "#f1f1f1");
        docStyle.setProperty("--tab-close-color", isDarkMode ? "#cdcfd1" : "#cdcfd1");
        docStyle.setProperty("--tab-close-hover-color", isDarkMode ? "#6f757a" : "#6f757a");
        docStyle.setProperty("--message-info-header-background", isDarkMode ? "#205e8f" : "#2196F3");
        docStyle.setProperty("--message-info-header-close-hover", isDarkMode ? "#276b96" : "#276b96");
        docStyle.setProperty("--message-info-header-color", "#ffffff");
        docStyle.setProperty("--message-warning-header-background", isDarkMode ? "#b69425" : "#ffcf40");
        docStyle.setProperty("--message-warning-header-close-hover", isDarkMode ? "#978138" : "#ebbd35");
        docStyle.setProperty("--message-warning-header-color", "#ffffff");
        docStyle.setProperty("--message-error-header-background", isDarkMode ? "#CC0C39" : "#CC0C39");
        docStyle.setProperty("--message-error-header-close-hover", isDarkMode ? "#a92230" : "#a92230");
        docStyle.setProperty("--message-error-header-color", "#ffffff");
        docStyle.setProperty("--message-question-header-background", isDarkMode ? "#018786" : "#17c0eb");
        docStyle.setProperty("--message-question-header-close-hover", isDarkMode ? "#017372" : "#13aacf");
        docStyle.setProperty("--message-question-header-color", "#ffffff");
        docStyle.setProperty("--html-toolbar-background", isDarkMode ? "#3f4b5b" : "#e9ecef");
    }

    const readyCheck = () => {
        if (schemeReady.current && themeReady.current) {
            schemeReady.current = false;
            themeReady.current = false;
            if (tinycolor(schemeColor).isValid()) {
                setStyle(schemeColor);
            }
            else if (schemeName) {
                props.showToast()
            }
            else {
                context.variables.forEach(map => {
                    map.forEach(group => {
                        group.items.forEach(item => document.documentElement.style.removeProperty(item.variable));
                    })
                })
            }
            props.handleConfirm(selectedScheme, selectedTheme);
        }
    }

    const handleConfirm = () => {
        if (props.isPreviewMode) {
            props.setPresetScheme(schemeName ? schemeName : selectedScheme); 
            schemeReady.current = true;
            props.setPresetTheme(selectedTheme);
            props.changeTheme(selectedTheme);
            themeReady.current = true;
            readyCheck();
        }
        else {
            addCSSDynamically('color-schemes/' + selectedScheme + '.css', "schemeCSS", () => {
                props.setPresetScheme(schemeName ? schemeName : selectedScheme); 
                schemeReady.current = true;
                readyCheck();
            });
            addCSSDynamically('themes/' + selectedTheme + '.css', "themeCSS", () => {
                props.setPresetTheme(selectedTheme);
                props.changeTheme(selectedTheme);
                themeReady.current = true;
                readyCheck();
            });
        }
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
                    <div className="express-group-header-wrapper">
                        <Tooltip target={"#express-preset-info"} />
                        <span className="express-group-header">Select a Preset</span>
                        <i id="express-preset-info" className="tooltip-icon pi pi-info-circle" data-pr-tooltip="Select a color-scheme and theme to use as a base." />
                    </div>
                    <Dropdown className="express-preset-dropdown" value={selectedTheme} options={themes} onChange={(e) => setSelectedTheme(e.value)} optionLabel="label" optionValue="value" />
                    <Dropdown className="express-preset-dropdown" value={selectedScheme} options={schemes} onChange={(e) => setSelectedScheme(e.value)} />
                </div>
                <hr style={{ borderRight: "1px solid #bbb" }} />
                <div className="express-group">
                    <div className="express-group-header-wrapper">
                        <Tooltip target={"#express-scheme-info"} />
                        <span className="express-group-header">Express Scheme</span>
                        <i id="express-scheme-info" className="tooltip-icon pi pi-info-circle" data-pr-tooltip="First choose a name then a primary color which will be the base of your scheme, lastly select the checkbox to enable darkmode." />
                    </div>
                    <div className="express-scheme-editor-wrapper">
                        <span className="express-scheme-text">Name</span>
                        <InputText className="express-scheme-editor" value={schemeName} onChange={(event) => setSchemeName(event.target.value)} />
                    </div>
                    <div className="express-scheme-editor-wrapper">
                        <span className="express-scheme-text">Primary Color</span>
                        <InputText className="express-scheme-editor" value={schemeColor} onChange={(event) => setSchemeColor(event.target.value)} disabled={!schemeName} />
                        <ColorPicker className={!schemeName ? "colorpicker-disabled" : ""} color={schemeColor} handleOnChange={(color:string) => setSchemeColor(color)} />
                    </div>
                    <div className="express-dark-wrapper">
                        <label htmlFor="dark-mode-cb">Dark Mode</label>
                        <Checkbox className="express-dark-checkbox" inputId="dark-mode-cb" checked={isDarkMode} disabled={!schemeName} onChange={(e) => setIsDarkMode(e.checked)} />
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
export default ExpressDialog
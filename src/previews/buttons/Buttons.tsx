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

import React, { FC, useState, CSSProperties, useRef, useMemo, useEffect, useContext } from "react";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { ToggleButton } from "primereact/togglebutton";
import tinycolor from "tinycolor2";
import { concatClassnames } from "../../util/ConcatClassNames";
import { variableContext } from "../../VariableProvider";

/** A preview for all button components to see changes live */
const Buttons: FC = () => {
    /** Reference for the button element */
    const menuButtonRef = useRef<SplitButton>(null);

    /** The context to gain access to the variables, defaultValues and more. */
    const context = useContext(variableContext);

    /** True, if the checkbox is checked */
    const [cbChecked, setCbChecked] = useState<boolean>(false);

    /** True, if the radiobutton is checked */
    const [rbChecked, setRbChecked] = useState<boolean>(false);

    /** True, if the togglebutton is checked */
    const [tbChecked, setTbChecked] = useState<boolean>(false);

    /** Flag which updates the state of the button background */
    const [buttonUpdate, setButtonUpdate] = useState<boolean>(false);

    /** The background-color of the button */
    const btnBgd = useMemo(() => window.getComputedStyle(document.documentElement).getPropertyValue("--primary-color"), [buttonUpdate]);

    // Updates the button background
    useEffect(() => {
        context.updateButtonBackground = () => setButtonUpdate(prevState => !prevState);

        return () => {
            context.updateButtonBackground = () => { }
        }
    }, [])

    /** Model for the menubutton */
    const menuButtonModel = [
        {
            label: "Sub-Item #1",
            icon: "fas fa-plus",
        },
        {
            label: "Sub-Item #2",
            icon: "fas fa-minus"
        }
    ]

    return (
        <div className="preview-container">
            <span className="comp-container">
                <Button
                    label="Preview Button"
                    icon={concatClassnames("fas fa-check", "rc-button-icon")}
                    className={concatClassnames(
                        "rc-button",
                        tinycolor(btnBgd.toString()).isDark() ? "bright-button" : "dark-button",
                        'gap-right'
                    )}
                    style={{ "--background": btnBgd, "--hoverBackground": tinycolor(btnBgd.toString()).darken(5).toString(), '--iconTextGap': '4px' } as CSSProperties} />
            </span>
            <span className="comp-container">
                <Button
                    icon={concatClassnames("fas fa-upload", "rc-button-icon")}
                    className={concatClassnames(
                        "rc-button",
                        tinycolor(btnBgd.toString()).isDark() ? "bright-button" : "dark-button",
                        'gap-right'
                    )}
                    style={{ "--background": btnBgd, "--hoverBackground": tinycolor(btnBgd.toString()).darken(5).toString(), '--iconTextGap': '4px' } as CSSProperties} />
            </span>
            <span className="rc-popupmenubutton-wrapper comp-container">
                <SplitButton 
                    ref={menuButtonRef}
                    label="Preview MenuButton"
                    model={menuButtonModel}
                    className={concatClassnames("rc-popupmenubutton", tinycolor(btnBgd.toString()).isDark() ? "bright-button" : "dark-button")}
                    style={{ "--background": btnBgd, "--hoverBackground": tinycolor(btnBgd.toString()).darken(5).toString() } as CSSProperties}
                    onClick={() => menuButtonRef.current?.show()} />
            </span>
            <span className={concatClassnames("rc-checkbox", "gap-right", "comp-container")} style={{ '--iconTextGap': '4px' } as CSSProperties}>
                <Checkbox
                    inputId="preview-checkbox"
                    checked={cbChecked}
                    onChange={e => setCbChecked(e.checked)} />
                <label className="p-radiobutton-label" htmlFor="preview-checkbox">Preview Checkbox</label>
            </span>
            <span className={concatClassnames("rc-radiobutton", "gap-right", "comp-container")} style={{ '--iconTextGap': '4px' } as CSSProperties} >
                <RadioButton 
                    inputId="preview-radiobutton"
                    checked={rbChecked}
                    onChange={e => setRbChecked(e.checked)} />
                <label className="p-radiobutton-label" htmlFor="preview-radiobutton">Preview Radiobutton</label>
            </span>
            <span className="comp-container">
                <ToggleButton
                    offLabel="Preview ToggleButton"
                    onLabel="Preview ToggleButton"
                    checked={tbChecked}
                    onChange={e => setTbChecked(e.value)}
                    className={concatClassnames("rc-togglebutton", tinycolor(btnBgd.toString()).isDark() ? "bright-button" : "dark-button")}
                    style={{ 
                        "--background": btnBgd,
                        '--selectedBackground': tinycolor(btnBgd.toString()).darken(10).toString(),
                        '--hoverBackground': tinycolor(btnBgd.toString()).darken(5).toString(),
                    } as CSSProperties} />
            </span>
        </div>
    )
}
export default Buttons
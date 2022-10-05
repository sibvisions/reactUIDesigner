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

import React, { FC, useState, CSSProperties, useRef } from "react";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { ToggleButton } from "primereact/togglebutton";
import './Buttons.scss';
import './UIMenuButton.scss';
import './UICheckBox.scss';
import './UIRadioButton.scss';
import './UIToggleButton.scss';
import tinycolor from "tinycolor2";
import { concatClassnames } from "../../util/ConcatClassNames";

const Buttons: FC = () => {
    /** Reference for the button element */
    const menuButtonRef = useRef<SplitButton>(null);

    const [cbChecked, setCbChecked] = useState<boolean>(false);
    const [rbChecked, setRbChecked] = useState<boolean>(false);
    const [tbChecked, setTbChecked] = useState<boolean>(false);

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

    const btnBgd = window.getComputedStyle(document.documentElement).getPropertyValue("--primary-color");

    return (
        <div className="preview-buttons-container">
            <span style={{ marginBottom: "0.5rem" }}>
                <Button
                    label="Preview Button"
                    icon="fas fa-check"
                    className={concatClassnames(
                        "rc-button",
                        tinycolor(btnBgd.toString()).isDark() ? "bright-button" : "dark-button"
                    )}
                    style={{ "--background": btnBgd, "--hoverBackground": tinycolor(btnBgd.toString()).darken(5).toString() } as CSSProperties} />
            </span>
            <span className="rc-popupmenubutton-wrapper" style={{ marginBottom: "0.5rem" }}>
                <SplitButton 
                    ref={menuButtonRef}
                    label="Preview MenuButton"
                    model={menuButtonModel}
                    className={concatClassnames("rc-popupmenubutton", tinycolor(btnBgd.toString()).isDark() ? "bright-button" : "dark-button")}
                    style={{ "--background": btnBgd, "--hoverBackground": tinycolor(btnBgd.toString()).darken(5).toString() } as CSSProperties}
                    onClick={() => menuButtonRef.current?.show()} />
            </span>
            <span className={concatClassnames("rc-checkbox", "gap-right")} style={{ '--iconTextGap': '4px', marginBottom: "0.5rem" } as CSSProperties}>
                <Checkbox
                    inputId="preview-checkbox"
                    checked={cbChecked}
                    onChange={e => setCbChecked(e.checked)} />
                <label className="p-radiobutton-label" htmlFor="preview-checkbox">Preview Checkbox</label>
            </span>
            <span className={concatClassnames("rc-radiobutton", "gap-right")} style={{ '--iconTextGap': '4px', marginBottom: "0.5rem" } as CSSProperties} >
                <RadioButton 
                    inputId="preview-radiobutton"
                    checked={rbChecked}
                    onChange={e => setRbChecked(e.checked)} />
                <label className="p-radiobutton-label" htmlFor="preview-radiobutton">Preview Radiobutton</label>
            </span>
            <span>
                <ToggleButton
                    offLabel="Preview ToggleButton"
                    onLabel="Preview ToggleButton"
                    checked={tbChecked}
                    onChange={e => setTbChecked(e.value)}
                    className={concatClassnames("rc-togglebutton", tinycolor(btnBgd.toString()).isDark() ? "bright-button" : "dark-button")}
                    style={{ 
                        "--background": btnBgd,
                        '--selectedBackground': tinycolor(btnBgd.toString()).darken(10).toString(),
                        "--hoverBackground": tinycolor(btnBgd.toString()).darken(5).toString() 
                    } as CSSProperties} />
            </span>
        </div>
    )
}
export default Buttons
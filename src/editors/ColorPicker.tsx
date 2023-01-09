/* Copyright 2023 SIB Visions GmbH
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

import React, { FC, useCallback, useMemo, useState } from "react";
import { ChromePicker, HSLColor, RGBColor } from "react-color";

interface IColorPicker {
    color: string,
    handleOnChange: (color:string) => void
}

const ColorPicker: FC<IColorPicker> = (props) => {
    const [pickerVisible, setPickerVisible] = useState<boolean>(false);

    const pickerColor = useMemo<string|RGBColor|HSLColor>(() => {
        if (props.color.includes("rgb")) {
            const firstSubstring = props.color.substring(props.color.indexOf("rgb("));
            const splitString = firstSubstring.substring(4, firstSubstring.indexOf(")")).split(",");
            return { 
                r: !Number.isNaN(parseInt(splitString[0])) ? parseInt(splitString[0]) : 0, 
                g: !Number.isNaN(parseInt(splitString[1])) ? parseInt(splitString[1]) : 0, 
                b: !Number.isNaN(parseInt(splitString[2])) ? parseInt(splitString[2]) : 0, 
                a: splitString.length === 4 ? !Number.isNaN(parseFloat(splitString[3])) ? parseFloat(splitString[3]) : 1 : 1
            };
        }
        else if (props.color.includes("hsl")) {
            const firstSubstring = props.color.substring(props.color.indexOf("hsl(")).replaceAll("%", "").replaceAll("/", "").replaceAll("  ", " ");
            const splitString = firstSubstring.substring(4, firstSubstring.indexOf(")")).split(" ");
            return {
                h: !Number.isNaN(parseInt(splitString[0])) ? parseInt(splitString[0]) : 0,
                s: !Number.isNaN(parseInt(splitString[1])) ? parseInt(splitString[1]) : 0,
                l: !Number.isNaN(parseInt(splitString[2])) ? parseInt(splitString[2]) : 0,
                a: splitString.length === 4 ? !Number.isNaN(parseFloat(splitString[3])) ? parseFloat(splitString[3]) : 1 : 1
            }
        }
        return props.color ? props.color : "#000000";
    }, [props.color]);

    const getPreviewBackground = useCallback(() => {
        if (typeof pickerColor === "string") {
            return pickerColor
        }
        else if ((pickerColor as RGBColor).r !== undefined) {
            const castedColor = pickerColor as RGBColor;
            return `rgb(${castedColor.r}, ${ castedColor.g }, ${ castedColor.b }, ${ castedColor.a })`
        }
        else {
            const castedColor = pickerColor as HSLColor;
            let adjustedAlpha:number|string|undefined = castedColor.a;
            if (adjustedAlpha !== undefined && adjustedAlpha > 1) {
                adjustedAlpha = `${adjustedAlpha}%`;
            }
            return `hsl(${castedColor.h} ${ castedColor.s }% ${ castedColor.l }% / ${ adjustedAlpha })`
        }
    }, [pickerColor]);

    return (
        <div className="color-picker-preview-wrapper">
            <div className="color-picker-preview" onClick={() => setPickerVisible(prevState => !prevState)}>
                <div className="color-picker-preview-color" style={{ background: getPreviewBackground() }} />
            </div>
            {pickerVisible ?
                <div className="color-picker-popover">
                    <div className="color-picker-cover" onClick={() => setPickerVisible(false)} />
                    <ChromePicker color={pickerColor} onChange={(color) => {
                        if (document.getElementsByClassName("chrome-picker").length && document.getElementsByClassName("chrome-picker")[0].querySelector("label")) {
                            const identifier = (document.getElementsByClassName("chrome-picker")[0].querySelector("label") as HTMLElement).innerHTML
                            if (identifier === "hex") {
                                if (color.rgb.a !== 1) {
                                    props.handleOnChange(`rgb(${color.rgb.r}, ${ color.rgb.g }, ${ color.rgb.b }, ${ color.rgb.a })`)
                                }
                                else {
                                    props.handleOnChange(color.hex)
                                }   
                            }
                            else if (identifier === "r") {
                                props.handleOnChange(`rgb(${color.rgb.r}, ${ color.rgb.g }, ${ color.rgb.b }, ${ color.rgb.a })`)
                            }
                            else {
                                props.handleOnChange(`hsl(${color.hsl.h} ${ Math.floor(color.hsl.s * 100) }% ${ Math.floor(color.hsl.l * 100) }% / ${ color.hsl.a })`)
                            }
                        }
                        
                    }} />
                </div> 
                : 
                null}
        </div>
    )
}
export default ColorPicker;

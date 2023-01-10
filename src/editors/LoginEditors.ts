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

import { EditorGroup } from "./management/EditorCreator";

const docStyle = window.getComputedStyle(document.documentElement);

export const loginEditors: Map<string, EditorGroup> =
    new Map<string, EditorGroup>()
        .set("Login",
            {
                name: "Login",
                visible: true,
                items: [
                    {
                        variable: "--login-logo-background",
                        label: "Logo Background",
                        type: "color",
                        cssType: "scheme",
                        value: docStyle.getPropertyValue('--login-logo-background'),
                        usage: new Map<string, string[]>().set(".login-logo-wrapper", ["background: var(--login-logo-background);"]),
                        tooltip: "The background-color of the login view where the logo is displayed."
                    },
                    {
                        variable: "--login-mask-background",
                        label: "Background",
                        type: "color",
                        cssType: "scheme",
                        value: docStyle.getPropertyValue('--login-mask-background'),
                        usage: new Map<string, string[]>().set(".login-form", ["background: var(--login-mask-background);"]),
                        tooltip: "The background-color of the login view where the fields are displayed."
                    },
                    {
                        variable: "--login-shadow",
                        label: "Shadow",
                        type: "text",
                        cssType: "scheme",
                        value: docStyle.getPropertyValue('--login-shadow'),
                        usage: new Map<string, string[]>()
                            .set(".login-form", ["box-shadow: var(--login-shadow);"])
                            .set(".login-form-position-wrapper", ["box-shadow: var(--login-shadow);"]),
                        tooltip: "The shadow of the login view."
                    },
                    {
                        variable: "--login-form-top-bottom-padding",
                        label: "Top Bottom Padding",
                        type: "text",
                        cssType: "theme",
                        value: docStyle.getPropertyValue('--login-form-top-bottom-padding'),
                        usage: new Map<string, string[]>()
                            .set(".login-form .p-fluid", ["padding: calc(var(--login-form-top-bottom-padding) / 2) var(--login-form-left-right-padding) var(--login-form-top-bottom-padding);"])
                            .set(".login-form .login-logo-wrapper", ["padding: var(--login-form-top-bottom-padding) var(--login-form-left-right-padding) calc(var(--login-form-top-bottom-padding) / 2);"]),
                        tooltip: "The top and bottom padding of the login view (changes size)."
                    },
                    {
                        variable: "--login-form-left-right-padding",
                        label: "Left Right Padding",
                        type: "text",
                        cssType: "theme",
                        value: docStyle.getPropertyValue('--login-form-left-right-padding'),
                        usage: new Map<string, string[]>(),
                        tooltip: "The left and right padding of the login view (changes size)."
                    },
                    {
                        variable: "--login-form-field-margin",
                        label: "Field Margin",
                        type: "text",
                        cssType: "theme",
                        value: docStyle.getPropertyValue('--login-form-field-margin'),
                        usage: new Map<string, string[]>().set(".login-form .p-fluid .p-field", ["margin-bottom: var(--login-form-field-margin);"]),
                        tooltip: "The margin between fields in the login view."
                    },
                    {
                        variable: "--login-border-radius",
                        label: "Border Radius",
                        type: "text",
                        cssType: "scheme",
                        value: docStyle.getPropertyValue('--login-border-radius'),
                        usage: new Map<string, string[]>()
                            .set(".login-form", ["border-radius: var(--login-border-radius);"])
                            .set(".login-form-position-wrapper", ["border-radius: var(--login-border-radius);"]),
                        tooltip: "The border-radius of the login-view."
                    }
                ]
            }
        );
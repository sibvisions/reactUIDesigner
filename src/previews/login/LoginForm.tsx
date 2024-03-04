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

import React, { CSSProperties, FC, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import tinycolor from "tinycolor2";

/** A preview for the login component to see changes live */
const LoginForm:FC<any> = () => {
    /** The username in the login view */
    const [username, setUsername] = useState<string>();

    /** The password in the login view */
    const [password, setPassword] = useState<string>();

    /** True, if autologin should be on */
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    /** The background-color of the button */
    const btnBgd = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

    return (
        <div className="login-container">
            <form className="login-form">
                <div className="login-logo-wrapper">
                    <img className="login-logo" src={process.env.PUBLIC_URL + '/assets/basti/logo_login.png'} alt="logo" />
                </div>
                <div className="p-fluid">
                        <div className="p-field p-float-label p-input-icon-left">
                            <i className="pi pi-user" />
                            <InputText
                                value={username}
                                id="username"
                                type="text"
                                autoComplete="username"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="p-field p-float-label p-input-icon-left">
                            <i className="pi pi-key" />
                            <InputText
                                value={password}
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="login-extra-options lost-password-enabled">
                            <div className="login-cbx-container rc-checkbox">
                                <Checkbox
                                    inputId="rememberMe" 
                                    className="remember-me-cbx" 
                                    checked={rememberMe} 
                                    onChange={(event) => setRememberMe(event.checked === undefined ? false : event.checked)} />
                                <label htmlFor="rememberMe" className="p-checkbox-label">Remember me?</label>
                            </div>
                            <Button
                                type="button"
                                className="lost-password-button rc-button mouse-border"
                                style={{
                                    '--background': btnBgd,
                                    '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                                } as CSSProperties}
                                label="Lost password"
                                icon="pi pi-question-circle" />
                        </div>
                        <Button 
                            type="submit" 
                            className="login-button rc-button"
                            style={{
                                '--background': btnBgd,
                                '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                            } as CSSProperties} 
                            label="Login"
                            icon="pi pi-lock-open" />
                    </div>
            </form>
        </div>
    )
}
export default LoginForm
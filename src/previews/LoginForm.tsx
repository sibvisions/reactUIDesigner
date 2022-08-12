import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import tinycolor from "tinycolor2";
import { CSSProperties, FC, useState } from "react";
import './Login.scss';
import './UIButton.scss';

const LoginForm:FC = () => {
    const [username, setUsername] = useState<string>();

    const [password, setPassword] = useState<string>();

    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const btnBgd = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

    return (
        <div className="login-container">
            <form className="login-form">
                <div className="login-logo-wrapper">
                    <img className="login-logo" src={process.env.PUBLIC_URL + '/assets/sib-logo.png'} alt="logo" />
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
                            <div className="login-cbx-container">
                                <Checkbox
                                    inputId="rememberMe" 
                                    className="remember-me-cbx" 
                                    checked={rememberMe} 
                                    onChange={(event) => setRememberMe(prevState => event.checked)} />
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
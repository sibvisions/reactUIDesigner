import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ListBox } from 'primereact/listbox'
import { InputTextarea } from 'primereact/inputtextarea';
import React, { FC, useState, CSSProperties, useCallback, useEffect } from 'react';
import tinycolor from 'tinycolor2';
import { concatClassnames } from '../../util/ConcatClassNames';

const Popup: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [errorVisible, setErrorVisible] = useState<boolean>(false);
    const [showDetails, setShowDetails] = useState<boolean>(false);

    const errorItems = [{
        label: "Cause(s) of failure",
        items: [{ label: "This is an Exception!", exception: "These are the Details of the Example Exception!" }]
    }]

    const [selectedError, setSelectedError] = useState<{label: string, exception: string} | null>(errorItems[0].items[0])

    const btnBgd = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

    useEffect(() => {
        const elem = document.getElementById("error-dialog");
        if (!showDetails && elem) {
            elem.style.removeProperty("width");
            elem.style.removeProperty("height");
        }
    }, [showDetails]);

    const errorFooter = useCallback(() => {
        return (
            <div className="error-dialog-footer">
                <div className="error-dialog-footer-buttons">
                    <Button
                        type="button"
                        className="rc-button error-dialog-footer-button"
                        style={{
                            '--background': btnBgd,
                            '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                        } as CSSProperties}
                        label="Details"
                        onClick={() => {
                            setSelectedError(errorItems.length ? errorItems[0].items[0] : null);
                            setShowDetails(prevState => !prevState)
                        }} />
                    <Button
                        type="button"
                        className="rc-button error-dialog-footer-button"
                        style={{
                            '--background': btnBgd,
                            '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                        } as CSSProperties}
                        label="OK"
                        onClick={() => {
                            setErrorVisible(false);
                            setShowDetails(false);
                        }} />
                </div>
                {showDetails &&
                    <div className="error-dialog-footer-details">
                        <div
                            className="rc-panel-group-caption error-dialog-details-caption"
                            style={{ marginTop: "1rem", textAlign: "left" }}>
                            <span>Details</span>
                        </div>
                        <ListBox
                            className="error-dialog-listbox"
                            value={selectedError}
                            optionGroupLabel="label"
                            optionGroupChildren="items"
                            optionLabel="label"
                            options={errorItems}
                            onChange={(e) => {
                                if (e.value !== null) {
                                    setSelectedError(e.value)
                                }
                            }} />
                        <InputTextarea
                            className={concatClassnames("rc-input", "error-dialog-textarea")}
                            value={selectedError?.exception}
                            style={{ resize: 'none' }}
                            readOnly />
                    </div>
                }
            </div>
        )
    }, [showDetails, selectedError])

    return (
        <>
            <Dialog
                className='rc-popup basti'
                header='Popup Example Header'
                visible={visible}
                onHide={() => setVisible(false)}
                modal={false}
                baseZIndex={1010}>
                <div style={{ padding: "2rem" }}>
                    This is an example for Popups!
                </div>
            </Dialog>
            <Dialog
                className={concatClassnames("error-dialog", showDetails ? "error-details-enabled" : "")}
                header="Error"
                footer={errorFooter}
                visible={errorVisible}
                onHide={() => {
                    setErrorVisible(false);
                    setShowDetails(false);
                }}
                modal={false}
                baseZIndex={1020} >
                <i className="error-dialog-icon pi pi-times-circle" />
                <span style={{paddingTop: "4px"}}>This is an Example Exception</span>
            </Dialog>
            <div className='preview-container'>
                <div className='comp-container'>
                    <Button 
                        label='Open Popup' 
                        onClick={() => !visible ? setVisible(true) : undefined}
                        style={{
                            '--background': btnBgd,
                            '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                        } as CSSProperties} />
                </div>
                <div className='comp-container'>
                    <Button
                        label='Open Exception'
                        onClick={() => !errorVisible ? setErrorVisible(true) : undefined}
                        style={{
                            '--background': btnBgd,
                            '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                        } as CSSProperties} />
                </div>
            </div>
        </>
    )
}
export default Popup
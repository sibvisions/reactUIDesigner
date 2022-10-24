import { Button } from 'primereact/button';
import React, { FC, CSSProperties } from 'react';
import tinycolor from 'tinycolor2';
import { concatClassnames } from '../../util/ConcatClassNames';

const Messages: FC = () => {
    const btnBgd = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

    const buildMessage = (type: "info" | "warning" | "error" | "question") => {
        const buildMessageObject = () => {
            switch(type) {
                case "info":
                    return {icon: 'pi-info-circle', headerText: "Information", text: "An Information!"};
                case "warning":
                    return {icon: 'pi-exclamation-circle', headerText: "Warning", text: "A Warning!"};
                case "error":
                    return {icon: 'pi-times-circle', headerText: "Error", text: "An Error!"};
                case "question":
                    return {icon: 'pi-question-circle', headerText: "Question", text: "A Question!"};
                default:
                    return {icon: 'pi-info-circle', headerText: "Information", text: "An Information!"};
            }
        }

        const messageObject = buildMessageObject()

        return (
            <div className={concatClassnames('p-dialog', 'p-component', 'p-confirm-dialog', 'rc-message-dialog', 'p-dialog-enter-done', type)}>
                <div className='p-dialog-header'>
                    <div className='p-dialog-title'>
                        <div className={concatClassnames('message-dialog-header', type)}>
                            <div className='message-dialog-header-left'>
                                <i className={concatClassnames('message-dialog-header-icon', 'pi', messageObject.icon)} />
                                <span className='message-dialog-header-text'>{messageObject.headerText}</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-dialog-header-icons'>
                        <button className='p-dialog-header-icon p-dialog-header-close p-link'>
                            <span className='p-dialog-header-close-icon pi pi-times' />
                        </button>
                    </div>
                </div>
                <div className='p-dialog-content'>
                    <span className='p-confirm-dialog-message'>
                        <div className='message-dialog-content'>
                            <span>{messageObject.text}</span>
                        </div>
                    </span>
                </div>
                <div className='p-dialog-footer'>
                    <div className='message-dialog-footer single-button'>
                        <Button
                            className='p-button p-component rc-button'
                            label='OK'
                            style={{
                                '--background': btnBgd,
                                '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                            } as CSSProperties} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='preview-container'>
                <div className='comp-container message-container'>
                    <div style={{ marginRight: '0.5rem' }}>
                        {buildMessage("info")}
                    </div>
                    <div>
                        {buildMessage("warning")}
                    </div>
                </div>
                <div className='comp-container message-container'>
                    <div style={{ marginRight: '0.5rem' }}>
                        {buildMessage("error")}
                    </div>
                    <div>
                        {buildMessage("question")}
                    </div>
                </div>
            </div>        
        </>

    )
}
export default Messages
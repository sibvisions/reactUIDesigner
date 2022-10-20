import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import React, { FC, useState, CSSProperties } from 'react';
import tinycolor from 'tinycolor2';

const Messages: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const btnBgd = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

    const handleVisible = () => {
        if (!visible) {
            setVisible(true)
        }
    }

    return (
        <>
            <ConfirmDialog />
            <div className='preview-container'>
                <div className='comp-container'>
                    <Button
                        label='Open Info Message'
                        onClick={handleVisible}
                        style={{
                            '--background': btnBgd,
                            '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                        } as CSSProperties} />
                </div>
                <div className='comp-container'>
                    <Button
                        label='Open Warning Message'
                        onClick={handleVisible}
                        style={{
                            '--background': btnBgd,
                            '--hoverBackground': tinycolor(btnBgd).darken(5).toString()
                        } as CSSProperties} />
                </div>
            </div>        
        </>

    )
}
export default Messages
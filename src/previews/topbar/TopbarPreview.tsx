import { Button } from 'primereact/button';
import React, { FC, useContext, CSSProperties } from 'react';
import tinycolor from 'tinycolor2';
import { concatClassnames } from '../../util/ConcatClassNames';
import { showTopBar, TopBarContext } from './TopBar';

const MiscPreview: FC = () => {
    const topbar = useContext(TopBarContext);
    const btnBgd = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

    return (
        <div className='preview-container'>
            <div className='comp-container'>
                <Button
                    label="Show Topbar"
                    icon={concatClassnames("fas fa-check", "rc-button-icon")}
                    className={concatClassnames(
                        "rc-button",
                        tinycolor(btnBgd.toString()).isDark() ? "bright-button" : "dark-button",
                        'gap-right'
                    )}
                    style={{ "--background": btnBgd, "--hoverBackground": tinycolor(btnBgd.toString()).darken(5).toString(), '--iconTextGap': '4px' } as CSSProperties}
                    onClick={() => {
                        showTopBar(new Promise((resolve) => {
                            setTimeout(() => resolve({}), 1000)
                        }), topbar)
                    }} />
            </div>
        </div>
    )
}
export default MiscPreview
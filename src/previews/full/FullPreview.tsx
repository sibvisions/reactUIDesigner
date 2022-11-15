import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import React, { FC, CSSProperties, useRef, useLayoutEffect } from 'react';
import { Rnd } from 'react-rnd';
import { concatClassnames } from '../../util/ConcatClassNames';

const FullPreview: FC = () => {
    const rndRef = useRef<Rnd>(null)

    const menuItems: MenuItem[] = [
        {
            label: "File",
            items: [
                {
                    label: "Logout"
                },
                {
                    label: "Exit"
                }
            ]
        },
        {
            label: "Edit",
            items: [
                {
                    label: "Save"
                },
                {
                    label: "Reload"
                }
            ]
        },
        {
            label: "Example",
            items: [
                {
                    label: "Example 1"
                },
                {
                    label: "Example 2"
                }
            ]
        },
        {
            label: "Window",
            items: [
                {
                    label: "Close all Windows"
                }
            ]
        },
        {
            label: "Help",
            items: [
                {
                    label: "About"
                }
            ]
        }
    ]

    const rndStyle = {
        background: window.getComputedStyle(document.documentElement).getPropertyValue("--screen-background"),
        overflow: "hidden",
        zIndex: 1,
    };

    useLayoutEffect(() => {
        if (rndRef.current && document.getElementById("full-content")) {
            const elemSize = document.getElementById("full-content")!.getBoundingClientRect();
            rndRef.current.updatePosition({ x: elemSize.width / 2 - (rndRef.current.props.default!.width as number / 2), y: elemSize.height / 2 })
        }
    }, [])

    const toolbar =
        <div className='rc-frame-toolbar' style={{ display: "flex" }}>
            <div className='rc-panel rc-toolbar-border-right panel-hide-overflow preview-toolbar'>
                <Button
                    className={concatClassnames(
                        "rc-button",
                        "mouse-border",
                        "gap-bottom",
                        "icon-center-right",
                        "rc-toolbar-button",
                        "no-center-gap",
                        "no-focus-rect"
                    )}
                    label="Exit"
                    icon="pi pi-power-off rc-button-icon"
                    style={{
                        flexDirection: "column",
                        marginLeft: "5px",
                        marginRight: "5px",
                        '--btnJustify': "center",
                        '--btnAlign': "center",
                        '--iconWidth': "20px",
                        '--iconHeight': "20px",
                        //'--iconColor': "#ffffff",
                        '--iconTextGap': "2px",
                    } as CSSProperties} />
                <Button
                    className={concatClassnames(
                        "rc-button",
                        "mouse-border",
                        "gap-bottom",
                        "icon-center-right",
                        "rc-toolbar-button",
                        "no-center-gap",
                        "no-focus-rect"
                    )}
                    label="Logout"
                    icon="pi pi-lock rc-button-icon"
                    style={{
                        flexDirection: "column",
                        marginRight: "5px",
                        '--btnJustify': "center",
                        '--btnAlign': "center",
                        '--iconWidth': "20px",
                        '--iconHeight': "20px",
                        //'--iconColor': "#ffffff",
                        '--iconTextGap': "2px",
                    } as CSSProperties} />
            </div>
            <div className='rc-panel rc-toolbar-border-right panel-hide-overflow preview-toolbar'>
                <Button
                    className={concatClassnames(
                        "rc-button",
                        "mouse-border",
                        "gap-bottom",
                        "icon-center-right",
                        "rc-toolbar-button",
                        "no-center-gap",
                        "no-focus-rect"
                    )}
                    label="Save"
                    icon="pi pi-save rc-button-icon"
                    style={{
                        flexDirection: "column",
                        marginLeft: "5px",
                        marginRight: "5px",
                        '--btnJustify': "center",
                        '--btnAlign': "center",
                        '--iconWidth': "20px",
                        '--iconHeight': "20px",
                        //'--iconColor': "#ffffff",
                        '--iconTextGap': "2px",
                    } as CSSProperties} />
                <Button
                    className={concatClassnames(
                        "rc-button",
                        "mouse-border",
                        "gap-bottom",
                        "icon-center-right",
                        "rc-toolbar-button",
                        "no-center-gap",
                        "no-focus-rect"
                    )}
                    label="Reload"
                    icon="pi pi-sync rc-button-icon"
                    style={{
                        flexDirection: "column",
                        marginRight: "5px",
                        '--btnJustify': "center",
                        '--btnAlign': "center",
                        '--iconWidth': "20px",
                        '--iconHeight': "20px",
                        //'--iconColor': "#ffffff",
                        '--iconTextGap': "2px",
                    } as CSSProperties} />
            </div>
        </div>

    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div className='rc-frame-menu mobile-launcher-menu'>
                <div className='rootappmenubar'>
                    <Menubar model={menuItems} />
                </div>
                {toolbar}
            </div>
            <div id='full-content' style={{ flex: "1" }}>
                <Rnd
                    ref={rndRef}
                    style={rndStyle as CSSProperties}
                    bounds="parent"
                    default={{
                        x: 0,
                        y: 0,
                        width: 500,
                        height: 400
                    }}
                    dragHandleClassName="rc-frame-header"
                    className='rc-frame'
                    enableResizing >
                    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <div className="rc-frame-header">
                            <span className="rc-frame-header-title">Workscreen Title</span>
                            <button className="rc-frame-header-close-button pi pi-times" />
                        </div>
                        <div className="rc-frame-menu">
                            <Menubar model={menuItems} />
                            {toolbar}
                        </div>
                        <div className="rc-frame-content" style={{ flex: "1" }}>
                            <div>
                                This is a Workscreen Window
                            </div>
                        </div>
                    </div>
                </Rnd>
            </div>
        </div>

    )
}
export default FullPreview
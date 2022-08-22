import React, { FC } from "react";
import { Menubar } from 'primereact/menubar';
import { SpeedDial } from "primereact/speeddial";
import { menuModel, profileModel } from "./Menu";
import { MenuItem } from "primereact/menuitem";
import './CorporateMenu.scss';

const CorporateMenu: FC = () => {
    const toolbarItems:MenuItem[] = [
        {
            label: "Toolbar Item 1",
            icon: "fas fa-address-book",
        },
        {
            label: "Toolbar Item 2",
            icon: "fas fa-search"
        }
    ]

    return (
        <div className="corp-menu">
            <div className="corp-menu-topbar">
                <div className="corp-menu-header">
                    <div className="corp-menu-logo-wrapper">
                        <img
                            className="menu-logo"
                            draggable="false"
                            src={process.env.PUBLIC_URL + '/assets/logo_big.png'} alt="logo" />
                    </div>
                    <span className="menu-screen-title">Designer-Menu-Mock</span>
                    <div className="corp-menu-profile">
                        <Menubar className="profile-menubar" model={profileModel}/>
                    </div>
                </div>
                <div className="corp-menu-menubar">
                    <div style={{ maxHeight: "32px", minWidth: "32px" }}>
                        <SpeedDial model={toolbarItems} direction="down" />
                    </div>
                    <Menubar model={menuModel} />
                </div>
            </div>
        </div>
    )
}
export default CorporateMenu
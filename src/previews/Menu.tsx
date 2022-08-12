import { FC } from "react";
import { PanelMenu } from 'primereact/panelmenu';
import { Menubar } from 'primereact/menubar';
import { Button } from "primereact/button";
import { MenuItem } from "primereact/menuitem";
import "./Menu.scss";

const Menu: FC = () => {
    const profileModel:MenuItem [] = [
        {
            label: "John Doe",
            icon: "profile-image-null fas fa-user",
            items: [
                {
                    label: "Change password",
                    icon: "pi pi-lock-open"
                },
                {
                    label: "Logout",
                    icon: "pi pi-power-off"
                },
                {
                    label: "Info",
                    icon: "pi pi-info-circle"
                }
            ] 
        }
    ];

    const panelModel: MenuItem[] = [
        {
            label: "Example #1",
            icon: "fas fa-cloud",
            items: [
                {
                    label: "Sub-Item #1",
                    icon: "fas fa-plus"
                },
                {
                    label: "Sub-Item #2",
                    icon: "fas fa-minus"
                }
            ]
        },
        {
            label: "Example #2",
            icon: "fas fa-arrow-right",
            items: [
                {
                    label: "Sub-Item #3",
                    icon: "fas fa-table",
                },
                {
                    label: "Sub-Item #4",
                    icon: "fas fa-coffee"
                }
            ]
        }
    ]

    return (
        <div className="std-menu">
            <div className="menu-header">
                <div className="menu-logo-wrapper">
                    <img alt="logo" draggable="false" className="menu-logo" src={process.env.PUBLIC_URL + '/assets/sib-logo.png'}/>
                </div>
                <div className="menu-topbar">
                    <div className="menu-topbar-left">
                        <Button
                            icon="pi pi-chevron-left"
                            className="menu-topbar-buttons menu-toggler"
                            style={{ marginRight: "4px", marginLeft: "10px" }} />
                        <span className="menu-screen-title">Designer-Menu-Mock</span>
                    </div>
                    <div className="menu-topbar-right">
                        <Button icon="fas fa-home" className="menu-topbar-buttons" />
                        <Button icon="fas fa-save" className="menu-topbar-buttons" />
                        <Button icon="fas fa-sync" className="menu-topbar-buttons" />
                        <div className="profile-menu">
                            <Menubar className="profile-menubar" model={profileModel}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-panelmenu-wrapper">
                <PanelMenu model={panelModel}/>
            </div>
        </div>
    )
}
export default Menu
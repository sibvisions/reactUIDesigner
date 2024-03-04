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

import React, { FC } from "react";
import { PanelMenu } from 'primereact/panelmenu';
import { Menubar } from 'primereact/menubar';
import { Button } from "primereact/button";
import { MenuItem } from "primereact/menuitem";

/** A preview for the profile-menu to see changes live */
export const profileModel:MenuItem [] = [
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

/** Menu model */
export const menuModel: MenuItem[] = [
    {
        label: "Example #1",
        icon: "fas fa-cloud",
        //expanded: true,
        items: [
            {
                label: "Sub-Item #1",
                icon: "fas fa-plus",
                className: "p-menuitem--active"
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

/** A preview for the standard menu to see changes live */
const Menu: FC = () => {
    return (
        <div className="design-std-menu std-menu">
            <div className="menu-header">
                <div className="menu-logo-wrapper">
                    <img alt="logo" draggable="false" className="menu-logo" src={process.env.PUBLIC_URL + '/assets/basti/logo_big.png'}/>
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
                        <div className="vl" />
                        <div className="profile-menu">
                            <Menubar className="profile-menubar" model={profileModel}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-panelmenu-wrapper">
                <PanelMenu model={menuModel}/>
            </div>
        </div>
    )
}
export default Menu
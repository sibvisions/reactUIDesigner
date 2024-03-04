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
import { Menubar } from 'primereact/menubar';
import { SpeedDial } from "primereact/speeddial";
import { menuModel, profileModel } from "./Menu";
import { MenuItem } from "primereact/menuitem";
import { Button } from "primereact/button";

/** A preview the corporation menu to see changes live */
const CorporateMenu: FC = () => {
    /** Toolbar menu model */
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
                            src={process.env.PUBLIC_URL + '/assets/basti/logo_big.png'} alt="logo" />
                    </div>
                    <span className="menu-screen-title">Designer-Menu-Mock</span>
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
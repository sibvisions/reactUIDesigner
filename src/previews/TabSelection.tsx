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

import React, { FC, useState } from "react"
import { TabView, TabPanel } from 'primereact/tabview';
import Menu from "./menu/Menu";
import LoginForm from "./login/LoginForm";
import CorporateMenu from "./menu/CorporateMenu";
import Buttons from "./buttons/Buttons";
import Inputs from "./inputs/Inputs";
import TableTree from "./tabletree/TableTree";
import Tabset from "./tabset/Tabset";
import Popup from "./popup/Popup";
import Messages from "./messages/Messages";
import LoadingPreview from "./loading/LoadingPreview";
import ErrorBar from "./error-bar/ErrorBar";
import FullPreview from "./full/FullPreview";
import TopbarPreview from "./topbar/TopbarPreview";

interface ITabSelection {
    tabChangedCallback: Function
}

const TabSelection: FC<ITabSelection> = (props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <TabView
            className="designer-tab-view"
            activeIndex={activeIndex} 
            onTabChange={event => {
                setActiveIndex(event.index);
                props.tabChangedCallback(event.index);
            }}>
            <TabPanel header="Login">
                <LoginForm />
            </TabPanel>
            <TabPanel header="Menu">
                <Menu />
            </TabPanel>
            <TabPanel header="Corporation Menu">
                <CorporateMenu />
            </TabPanel>
            <TabPanel header="Buttons">
                <Buttons />
            </TabPanel>
            <TabPanel header="Inputs">
                <Inputs />
            </TabPanel>
            <TabPanel header="Table/Tree">
                <TableTree />
            </TabPanel>
            <TabPanel header="Tabset">
                <Tabset />
            </TabPanel>
            <TabPanel header="Popup">
                <Popup />
            </TabPanel>
            <TabPanel header="Messages">
                <Messages />
            </TabPanel>
            <TabPanel header="Loading Screen">
                <LoadingPreview />
            </TabPanel>
            <TabPanel header="Error Bar">
                <ErrorBar />
            </TabPanel>
            <TabPanel header="Full Transfer">
                <FullPreview />
            </TabPanel>
            <TabPanel header="Topbar">
                <TopbarPreview />
            </TabPanel>
        </TabView>
    )
}
export default TabSelection
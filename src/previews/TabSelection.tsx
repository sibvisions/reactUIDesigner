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
import './TabSelection.scss'
import LoginForm from "./login/LoginForm";
import CorporateMenu from "./menu/CorporateMenu";
import Buttons from "./buttons/Buttons";

interface ITabSelection {
    tabChangedCallback: Function
}

const TabSelection: FC<ITabSelection> = (props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <TabView 
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
        </TabView>
    )
}
export default TabSelection
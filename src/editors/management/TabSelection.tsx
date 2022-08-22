import React, { FC, useState } from "react"
import { TabView, TabPanel } from 'primereact/tabview';
import Menu from "../../previews/menu/Menu";
import './TabSelection.scss'
import LoginForm from "../../previews/login/LoginForm";
import CorporateMenu from "../../previews/menu/CorporateMenu";

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
        </TabView>
    )
}
export default TabSelection
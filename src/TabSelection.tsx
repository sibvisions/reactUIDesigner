import React, { FC, useState } from "react"
import { TabView, TabPanel } from 'primereact/tabview';
import Menu from "./previews/Menu";
import './TabSelection.scss'
import LoginForm from "./previews/LoginForm";

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
        </TabView>
    )
}
export default TabSelection
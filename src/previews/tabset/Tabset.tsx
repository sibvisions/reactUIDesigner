import { TabPanel, TabView } from 'primereact/tabview';
import React, { FC } from 'react';

/** A preview for the tabset component to see changes live */
const Tabset: FC = () => {
    return(
        <div className='preview-container rc-tabset'>
            <TabView>
                <TabPanel closable header="Tab-Example 1" contentStyle={{ height: "0px" }} />
                <TabPanel closable header= "Tab-Example 2" contentStyle={{ height: "0px" }} />
                <TabPanel closable header="Tab-Example 3" contentStyle={{ height: "0px" }} />
            </TabView>
        </div>
    )
}
export default Tabset
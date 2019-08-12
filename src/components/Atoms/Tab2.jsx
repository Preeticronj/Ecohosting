
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Content1 from './content1'
import "react-tabs/style/react-tabs.css";

class Tab2 extends React.Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Simple</Tab>
                        <Tab>Preconfigured</Tab>
                        <Tab>Advanced</Tab>
                    </TabList>
                    <TabPanel>
                        <Content1 />
                    </TabPanel>
                    <TabPanel>
                    </TabPanel>
                    <TabPanel>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
export default Tab2;
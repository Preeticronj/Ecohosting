import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Content1 from './content1'
import "react-tabs/style/react-tabs.css";

class Tab3 extends React.Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>To</Tab>
                        <Tab>Action</Tab>
                        <Tab>From</Tab>
                    </TabList>
                    <TabPanel>
                        
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
export default Tab3;
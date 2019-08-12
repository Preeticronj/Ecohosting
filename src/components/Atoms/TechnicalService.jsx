import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Content4 from './content4'
import { Link } from 'react-router-dom'
import "react-tabs/style/react-tabs.css";

class Tab3 extends React.Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div>
                <Tabs style={{width: '920px',
                  backgroundColor:'lightgrey',
                  height:'230px',
                   marginLeft: '43px'}}>
                    <TabList style={{width: '920px',
                      marginTop: '31px',
                      backgroundColor: 'skyblue',
                       marginLeft: '0px'}}>
                        <Tab>System Configuration</Tab>
                        <Tab>Web InterFace</Tab>
                        <Tab>Software Update</Tab>
                        <Tab>Data Encryption</Tab>
                    </TabList>
                    <TabPanel>
                        
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                    <TabPanel>
                       
                    </TabPanel>
                    <TabPanel>
                     <Content4/>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
export default Tab3;
import  React from "react";
import MainContainer from '../src/container/MainContainer';
import ServiceCenter from '../src/components/Molecules/ServiceCenter'
import DataAnalytics from '../src/components/Molecules/DataAnalytics'
import DataProtection from '../src/components/Molecules/DataProtection'
import FireWall from '../src/components/Atoms/FireWall'
//import DataEncrypt from '../src/components/Atoms/DataEncrypt'
import DataEncryption from '../src/components/Molecules/DataEncryption'
import TechnicalService from '../src/components/Atoms/TechnicalService'
import FullScreen1 from '../src/components/Atoms/fullscreen'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export const Routes = ( props) => (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={MainContainer}/>
                <Route path ="/firewall"component={FullScreen1}/>
                <Route path ="/dasboard" component={DataAnalytics}/>
                <Route path="/dataEncrypt" component={DataEncryption}/>
                <Route path="/dataProtection" component={DataProtection}/>
                <Route path="/TechnicalService" component={TechnicalService }/>
               
                <Route Path="/supportcenter" component={ServiceCenter}/> 
            
            </Switch>
        </Router>
    </div>
);
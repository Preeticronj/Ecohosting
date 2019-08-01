import  React from "react";
//import {  } from "react-router-dom";
import MainContainer from '../src/container/MainContainer';
import Service from '../src/components/Atoms/Service'
import ServiceCenter from '../src/components/Molecules/ServiceCenter'
import DataAnalytics from '../src/components/Molecules/DataAnalytics'
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
// import { BrowserRouter , Router, Route, Switch } from "react-router-dom";
//import{browserHistory } from 'react-router';
import history from './history'

export const Routes = ( props) => (
    //  <Router history={history} >
    <Router>
    <Switch>
         <Route exact path="/" component={MainContainer}/>
         <Route exact Path="/supportcenter" component={ServiceCenter}/>
         <Route exact path ="/dasboard" component={DataAnalytics}/> 

    </Switch>
    </Router>
);
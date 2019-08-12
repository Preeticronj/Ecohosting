import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import MainContainer from '../src/container/MainContainer'
import {Routes} from './Routes'
import {
  BrowserRouter  
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    {/* <MainContainer/>   */}
    <BrowserRouter>
    
        <Routes/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

import React from 'react'
import './main.css'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class MenuBar extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    handleChange = (event, index, value) => {
        this.setState({
            value: value
        })
    }
    render() {
        return (
            <div className="MenuBar">
                <div class="dropdown">
               <button class="dropbtn">Home<i class='fas fa-caret-down'></i></button>
     {/* <i class='fas fa-caret-down'></i> */}
                <div class="dropdown-content">
               <a href="#">Link 1</a>
                <a href="#">Link 2</a>
              <a href="#">Link 3</a>
        </div>
           </div>
               
                <div class="dropdown">
               <button class="dropbtn">Hosting<i class='fas fa-caret-down'></i></button>
                <div class="dropdown-content">
               <a href="#">Link 1</a>
                <a href="#">Link 2</a>
              <a href="#">Link 3</a>
        </div>
           </div>
           <div class="dropdown">
               <button class="dropbtn">Domains<i class='fas fa-caret-down'></i></button>
                <div class="dropdown-content">
               <a href="#">Link 1</a>
                <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              </div>
           </div>
           <div class="dropdown">
               <button class="dropbtn">pages<i class='fas fa-caret-down'></i></button>
                <div class="dropdown-content">
               <a href="#">Link 1</a>
                <a href="#">Link 2</a>
              <a href="#">Link 3</a>
        </div>
           </div>
           <div class="dropdown">
               <button class="dropbtn">Blog<i class='fas fa-caret-down'></i></button>
                <div class="dropdown-content">
               <a href="#">Link 1</a>
                <a href="#">Link 2</a>
              <a href="#">Link 3</a>
        </div>
           </div>
           <div class="dropdown">
               <button class="dropbtn">pages<i class='fas fa-caret-down'></i></button>
                <div class="dropdown-content">
               <a href="#">Link 1</a>
                <a href="#">Link 2</a>
              <a href="#">Link 3</a>
        </div>
           </div>
                <div className="client">
                    <span>ClientArea</span>
                </div>
            </div>
        )
    }
}
export default MenuBar;
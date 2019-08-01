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
                <div className="home">
                    <span>Home</span>
                    <i class='fas fa-caret-down'></i>
                </div>
                <div className="hosting">
                    <span>Hosting</span>
                    <i class='fas fa-caret-down'></i>
                </div>
                <div className="domain">
                    <span>Domains</span>
                    <i class='fas fa-caret-down'></i>
                </div>
                <div className="pages">
                    <span>Pages</span>
                    <i class='fas fa-caret-down'></i>
                </div>
                <div className="blog">
                    <span>Blog</span>
                    <i class='fas fa-caret-down'></i>
                </div>
                <div className="contact">
                    <span>contact</span>
                    <i class='fas fa-caret-down'></i>
                </div>
                <div className="client">
                    <span>ClientArea</span>
                </div>
            </div>
        )
    }
}
export default MenuBar;
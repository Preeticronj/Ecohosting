import React from 'react'
import './main.css'
class TopBar extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="topbar" >
                <div className="left-topbar" >
                    <i class='fas fa-phone-volume' ><span className="number">+877833545</span></i>
                    <i class='fas fa-envelope' ><span style={{ color: 'white', paddingLeft: '10px' }}>example@gmail.com</span></i>
                </div>
                <div className="right-topbar">
                    <i class='fab fa-facebook-f'></i>
                    <i class='fab fa-twitter'></i>
                    <i class='fab fa-google'></i>

                </div>

            </div>
        )
    }
}
export default TopBar
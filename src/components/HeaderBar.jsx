import React from 'react'
import './main.css'
import TreeImage from '../components/Images/images_christ.jpg'
import SupportImage from '../components/Images/images.jpg'
import GuaranteeImage from '../components/Images/guarantee.jpg'
import UptimeImage from '../components/Images/uptime_image.jpg'

class HeaderBar extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="headerbar" style={{backgroundColor:'white'}}>
                <div className="left-headerbar">
                <div className="image">
                    <img className="icon" src={TreeImage} alt="images_christ.jpg" ></img>
                </div>
                <div className="Ecohosting">
                    <span className="eco">Eco</span>
                    <span className="host1">Hosting</span>
                </div>
                </div>
                <div className="right-headerbar">
                    <div>
                        <img className="icon" src={SupportImage} alt="images.jpg" ></img>
                    </div>
                    <div className="right-headerbar1">
                        <span className="support">24/7 support</span><br/>
                        <span className="ipsum" >Loreum ipsum dolor</span>
                    </div>
                    <div>
                        <img className="icon" src={GuaranteeImage} alt="guarantee.jpg" ></img>
                    </div>
                    <div className="right-headerbar1">
                        <span className="support" >45 days Guarantee </span><br/>
                        <span className="ipsum" >Loreum ipsum dolor</span>
                    </div>
                    <div>
                        <img className="icon" src={UptimeImage} alt="uptime_image.jpg"></img>
                    </div>
                    <div className="right-headerbar1">
                        <span className="support">99% Uptime</span><br/>
                        <span className="ipsum" >Loreum ipsum dolor</span>
                    </div>
                </div>


            </div>
        )
    }
}
export default HeaderBar
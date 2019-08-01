import React from 'react'
import UserImage from '../components/Images/internetUser.png'
import FireWallImage from '../components/Images/firewall.png'
import DataEncrypt from '../components/Images/dataEncrypt.jpg'
import DataAnalysis from '../components/Images/data_analysis.jpg'
import DataProtection from '../components/Images/data-privacy-policy.jpg'
import SupportCenter from '../components/Images/support-center.jpg'
import TechnicalService from '../components/Images/Technicalservice.jpg'
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom'

class FooterBar extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    // handleClick=()=>{
    //     console.log("hidd---->",this.props)
    //     this.props.history.push("/supportcenter")
    // }
    render() {
        return (
            <div className="main-footer">
                <h1 className="main-header">Why choose us</h1>
                <div className="sub-footer">
                    <div className="left-footer">
                        <img className="icon1" src={UserImage} alt="internetUser.png" height="369px" width="295px"></img>
                    </div>
                    <div className="right-footer">
                        <div className="rightUpper-footer">
                            <div className="right-footer1">
                                <img className="icon" src={FireWallImage} alt="internetUser.png" height="55px" width="55px"></img>
                                <h3 style={{paddingLeft:'23px'}}>FireWall</h3>
                                <span>Loreum ipsum  dolor sit amet consecutetur adipiscing</span>
                            </div>
                            <div className="right-footer1">
                                <img className="icon" src={DataEncrypt} alt="dataEncrypt.jpg" height="55px" width="55px"></img>
                                <h3>DataEncryption</h3>
                                <span>Loreum ipsum  dolor sit amet consecutetur adipiscing</span>
                            </div>
                            <div className="right-footer1">
                                <img className="icon" src={DataAnalysis} alt="data_analysis.jpg" height="55px" width="55px"></img>
                             <Link to ="/dasboard"> <h3>DataAnalysis</h3></Link>
                                <span>Loreum ipsum  dolor sit amet consecutetur adipiscing</span>
                            </div>
                        </div>
                        <div className="rightDown-footer">
                        <div className="rightdown-footer">
                                <img className="icon" src={DataProtection} alt="data-privacy-policy.jpg" height="55px" width="55px"></img>
                                <h3>DataProtection</h3>
                                <span>Loreum ipsum  dolor sit amet consecutetur adipiscing</span>
                            </div>
                            <div className="rightdown-footer">
                                <img className="icon" src={SupportCenter} alt="support-center.jpg" height="55px" width="55px"></img>
                           <Link to  ="/supportcenter"  > 
                           <h3 onClick={this.handleClick}>SupportCenter</h3>
                           </Link>
                                <span>Loreum ipsum  dolor sit amet consecutetur adipiscing</span>
                            </div>
                            <div className="rightdown-footer">
                                <img className="icon" src={TechnicalService} alt="Technicalservice.jpg" height="55px" width="55px"></img>
                                <h3>TechnicalService</h3>
                                <span>Loreum ipsum  dolor sit amet consecutetur adipiscing</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default FooterBar;
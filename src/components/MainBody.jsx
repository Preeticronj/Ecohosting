import React from 'react'
import WindImage from '../components/Images/wind1.jpg'
class MainBody extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <img className="bodyImage" src={WindImage} alt="wind1.jpg" ></img>
                    <div className="box">
                        {/* <h1>Reseller Hosting</h1> */}
                        <div className="box1">
                            <p className="reseller">Reseller Hosting</p>
                            <p style={{ color: 'white',width:'175px' }}>Lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
                            <div style={{ display: 'flex' }}>
                                <i class='fa fa-check-circle'><span style={{ color: 'white', paddingLeft: '10px' }}>Lorem ipsum dolor sit amet </span></i>
                                <i class='fa fa-check-circle'><span style={{ color: 'white', paddingLeft: '10px' }}>Lorem ipsum dolor sit amet </span></i>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <i class='fa fa-check-circle'><span style={{ color: 'white', paddingLeft: '10px' }}>Lorem ipsum dolor sit amet </span></i>
                                <i class='fa fa-check-circle'><span style={{ color: 'white', paddingLeft: '10px' }}>Lorem ipsum dolor sit amet </span></i>
                            </div>
                            <div>
                                <p className="view-detail">ViewDetail</p>
                            </div>

                        </div>

                    </div>

                    <div className="dot">
                        <span style={{ color: 'white' }}>Upto</span><br />
                        <span style={{ color: 'white' }}>10%</span><br />
                        <span style={{ color: 'white' }}>OFF</span>

                    </div>
                    <div className="dot1" >
                        <span>starting at</span>
                        <span>$99</span><br />
                        <span>/year</span>

                    </div>
                    <div className="box2" >
                        <div className="laptop-icon"> <i class='fas fa-laptop'></i></div>
                        <div className="car-icon" ><i class='fas fa-car-alt'></i></div>
                        <div className="text1"><span>Reseller Hosting</span></div>
                        <div className="cloud-icon"><i class='fas fa-cloud'></i></div>
                        <div className="bar-icon" ><i class='fas fa-bars'></i></div>
                    </div>
                </div>
                <div className="sub-container">
                    <div className="subcontainer-box">
                        <span style={{ fontSize: 'medium', color: 'white' }}>Looking Premimum quality</span><br />
                        <span style={{ fontSize: 'medium', color: 'white' }}>Domain</span><br />
                        <span style={{ fontSize: 'medium', color: 'white' }}>Name?</span><br />

                    </div>
                    <div className="search-box">
                        <div className="search">
                            <input type="text" placeholder="Enter your domain"></input>
                        </div>
                        <div className="com">
                            <input type="text2" placeholder=".com"></input>
                        </div>
                        <div>
                            <input type="text3" placeholder="search"></input>
                        </div>
                        <div className="left-subcontainer">
                            <div className="com1">
                                <span>.com</span><br />
                                <span>$399/y</span>
                            </div>

                            <div className="com1">
                                <span>.net</span><br />
                                <span>$399/y</span>
                            </div>
                            <div className="com1">
                                <span>.org</span><br />
                                <span>$399/y</span>
                            </div>

                        </div>

                    </div>
                    {/* <div className="left-subcontainer">
               <div className="com1">
                <span>.com</span><br/>
                <span>$399/y</span>   
               </div>
             </div> */}
                </div>
            </div>
        )
    }
}
export default MainBody
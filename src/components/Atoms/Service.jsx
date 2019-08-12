import React from 'react'
import '../main.css'
let AseImage=require("../Images/ase.png")
class Service extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            information: "INFORMATION"
        }

    }
   
    render() {
        console.log("props--->", this.props)
        return (
            <div>
                {this.props.service.map((item, index) => {
                    return (
                        <div>
                            <div className="service-header">
                                <div className="service-bulletin">{item.header}</div>
                                <div className="service-right">
                                    <span style={{ fontSize: '20px' }}>Filesection:<span >{item.FileInSection}</span></span>
                                    <div className="Bulletin"> Bulletin:{item.BulletinNo}</div>
                                    <div className="date">Date:{item.Date}</div>
                                </div>
                            </div>
                            <div className="border-line"></div>
                        </div>
                    )
                }
                )

                }
                {this.props.Images.map((item, index) => {
                    
                    return (
                        <div className="images">
                            <div className="chev_img"><img src={item.chev_img.ChevroletImage} style={{
                                height: '71px',
                                width: '86px'
                            }}></img></div>
                            <div className="pontaic_img"><img src={item.pontaic_img.PontaicImage} style={{ height: '71px', width: '97px' ,paddingLeft:'51px'}}></img></div>
                            <div className="saturn_img"><img src={item.saturn_img.SaturnImage} style={{height:'71px',width:'100px',paddingLeft:'10px'}}></img></div>
                        </div>
                    )
                }
                )}
                <div className="inform">
                    <p className="inform-bar"> {this.state.information}</p>
                </div>
                <div className="infomBorder-line"></div>
                {this.props.information.map((item, index) => {
                    return (
                        <div className="information">
                            <div className="subjects"> subject:{item.subjects}</div>
                            <div className="models">Models:{item.Models1}</div>
                            <div className="models2">{item.Models2}</div>
                            <div className="models3">{item.Models3}</div>
                            <div className="models4">{item.Models4}</div>
                            <div className="models5">{item.Models5}</div>
                            <div className="paragraph">
                                <div>
                                <div className="para">{item.para}</div>
                                <div className="para1">{item.para1}</div>
                                </div>
                                <div className="para2">{item.para}</div>
                            </div>
                        </div>
                    )
                }
                )}
                <div className="border-line"></div>
                {this.props.Footer.map((item, index) => {
                    return (
                        <div className="footer">
                            <div>{item.para}</div>
                            <div className="footer-image"><img src={AseImage} style={{height:'50px',paddingLeft:'15px'}}></img>
                            <div className="right-footer">
                            <p style={{width:'174px'}}>We support Voluntary</p>
                            <p>TECHNICIAN</p>
                            <p>CERTIFICATION</p>
                            </div>
                            </div>
                        </div>
                    )

                }
                )}
            </div>)
    }
}
export default Service;
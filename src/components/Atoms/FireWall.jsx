import React from 'react'
import './atom.css'
import SecurityImage from '../Images/security.jpg'
import Modal from 'react-modal';
import Tab from './Tab'
//import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'




class FireWall extends React.Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    console.log("preeteeuej------>", this.props.closeModal)
    return (
      <div>
        <div className="card" style={{ backgroundColor: 'blue' }}>
          <div className="card-top">
            <span style={{ textAlign: 'center', color: 'white' }}>Gufw</span>
            <div style={{ paddingLeft: '381px' }}>
              <button class="btn8" onClick={this.handleClose}><i class="fa fa-close" style={{ color: 'white' }}  ></i></button>
              <button class="btn9" style={{ fontSize: '10px' }}><i class="material-icons" style={{ fontSize: '12px', color: 'white' }}>check_box_outline_blank</i></button>
            </div>
          </div>
          <div className="menu-container">
            <div className="top-menu">
              <div style={{}}>
                <span style={{ marginRight: '10px' }}>File</span>
                <span style={{ marginRight: '10px' }}>Edit</span>
                <span style={{ marginRight: '10px' }}>Help</span>
              </div>
            </div>
            <div className="config-box">
              <div className="leftConfig-box" style={{ display: 'block' }}>
                <div className="current-config">Current Configuration</div>
                <input type="radio" value="Allow incoming traffic"
                  value="Allow incoming traffic"
                  checked={this.state.value === "Allow incoming traffic"}
                  onChange={this.handleChange}
                /> Allow Incoming Traffic<br></br>
                <input type="radio"
                  value="Deny incoming traffic"
                  checked={this.state.value === "Deny incoming traffic"}
                  onChange={this.handleChange}
                /> Deny Incoming Traffic<br></br>

              </div>
              <div className="rightConfig-box">
                <div className="right-img">
                  <img className="icon1_img" src={SecurityImage} alt="security.png"></img>
                </div>
                <div className="enabled">
                  <div className="enable-content">Enabled</div>
                  <input type="checkbox" name="vehicle1" />FireWall enabled<br></br>
                </div>

              </div>

            </div><br />
            <div className="tab">
              <Tab2 />
            </div><br /><br /><br />
            <div><span style={{
              fontSize: '20px',
              paddingLeft: '18px'
            }}>Currently enabled rules</span></div>

            <Tab3 />
            <div className="empty-card">
            </div>
            <div style={{ display: 'flex' }}>
              <button class="btn5">Remove</button>
              <button class="btn6">selectAll <i class='far fa-file-alt'></i></button>
              <button className="btn7">close<i class='fas fa-window-close'></i></button>

            </div>
            <hr />
          </div>

        </div>

      </div>
    )
  }
}
export default FireWall;
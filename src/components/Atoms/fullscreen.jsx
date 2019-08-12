import React from 'react'
import Fullscreen from "react-full-screen";
// import Tab2 from './Tab2'
import FireWall from './FireWall'
 


class FullScreen1 extends React.Component{
    constructor(){
        super()
        this.state = {
            isFull: false,
          };

    }

    goFull = () => {
        this.setState({ isFull: true });
      }
    render(){

        return(
            <div>
          <button onClick={this.goFull}>
          Go Fullscreen
        </button>
 
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
          {/* <div className="full-screenable-node">
            Hi! This may cover the entire monitor.
          </div> */}
          {/* <Tab2/> */}
          <FireWall/>
        </Fullscreen>
            </div>
        )
    }
}
export default FullScreen1;
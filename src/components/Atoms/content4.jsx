import React from 'react'
import { Link } from 'react-router-dom'

class Content4 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="data">
             <p style={{paddingLeft:'58px',color:'blue'}}>Data Encryption</p>
             <div style={{display:'flex'}}>
             <span style={{paddingLeft: '58px',
             fontSize: '17px'}}>Enable Encryption to ensure that kerio control will encrypt all data prior writing it to the disk </span>
             <Link to ="/dataEncrypt">
            <span>DataEncryption</span>
            </Link>
            </div>
            <p style={{paddingLeft:'59px'}}>Enabled.Data is Encrypted</p>
              <button class="disable_btn"><i class='fas fa-caret-down'></i>Disable...</button>  
            </div>
        )
    }
}
export default Content4;